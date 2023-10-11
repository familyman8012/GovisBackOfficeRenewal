import React, { useEffect, useState } from 'react';
import { runInAction } from 'mobx';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import {
  fetchProductFormModify,
  fetchProductFormSave,
  fetchProductFormView,
} from '@ApiFarm/product';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import ProductForm from '@ComponentFarm/template/product/manage/Form';
import { confirmModalStore } from '@MobxFarm/store';
import { uploadToS3 } from '@UtilFarm/uploads3';

const ProductDetail = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const [pageMode, setPageMode] = useState('');
  const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);

  // view 일때, 데이터 불러오기
  const { data: viewData } = useQuery(
    ['productFormView', id && id[1]],
    () => fetchProductFormView(String(id && id[1])),
    {
      enabled: pageMode === 'view' || pageMode === 'modify',
    }
  );

  const channelModal = (product_info_idx: number) => {
    runInAction(() => {
      confirmModalStore.openModal({
        title: '제품 정보 등록 완료',
        content: (
          <p>
            채널별 이미지를 등록하시겠습니까?
            <br />
            (채널별 이미지는 추후 등록 가능합니다.)
          </p>
        ),
        onFormSubmit: () => {
          // eslint-disable-next-line no-unused-vars
          const { id: routerId, ...newObj } = router.query;
          router.push({
            pathname: `/product/channelimg`,
            query: { id: product_info_idx, ...newObj },
          });
          confirmModalStore.isOpen = false;
        },
        onCancel: () => {
          confirmModalStore.isOpen = false;
          router.back();
        },
        submitButtonText: '다음',
      });
    });
  };

  // 등록일때, 데이터 저장
  const saveSubmit = useMutation(fetchProductFormSave, {
    onSuccess: data => {
      console.log('성공!', data);
      queryClient.invalidateQueries(['productList']);
      queryClient.invalidateQueries(['productFormView']);
      channelModal(data.product_info_idx);
    },
  });

  const modifySubmit = useMutation(fetchProductFormModify, {
    onSuccess: () => {
      console.log('성공!');
      queryClient.invalidateQueries(['productList']);
      queryClient.invalidateQueries(['productFormView']);
      router.push('/product/');
    },
  });

  const submitFunc = async (data: any) => {
    if (pageMode === 'add' && selectedImgFile) {
      const imgData = await uploadToS3(selectedImgFile);
      data.product_image = imgData;
      // eslint-disable-next-line no-unused-vars
      const { sale_end_date, ...sendData } = data;
      saveSubmit.mutate(sendData);
    } else if (pageMode === 'modify') {
      if (selectedImgFile) {
        const imgData = await uploadToS3(selectedImgFile);
        data.product_image = imgData;
      } else {
        data.product_image = viewData.product_image;
      }
      // eslint-disable-next-line no-unused-vars
      const { evi_product_group, ...sendData } = data;
      modifySubmit.mutate({
        params: viewData.product_info_idx,
        data: {
          ...sendData,
          is_recipe_registration: viewData?.is_recipe_registration,
        },
      });
    }
  };

  // Form 상태 변화.
  useEffect(() => {
    setPageMode(
      id?.includes('view')
        ? 'view'
        : id?.includes('add')
        ? 'add'
        : id?.includes('modify')
        ? 'modify'
        : ''
    );
  }, [id]);

  return (
    <>
      {(pageMode === 'add' ||
        (pageMode === 'view' && viewData) ||
        (pageMode === 'modify' && viewData)) && (
        <ProductForm
          initialData={pageMode !== 'add' ? viewData : undefined}
          isSubmitLoading={
            pageMode === 'add'
              ? saveSubmit.isLoading
              : pageMode === 'modify'
              ? modifySubmit.isLoading
              : false
          }
          pageMode={pageMode}
          environment={environment}
          setSelectedImgFile={setSelectedImgFile}
          submitFunc={submitFunc}
        />
      )}
    </>
  );
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${60 * 60 * 24}, stale-while-revalidate=59`
  );

  const environment = await fetchEnvironment({
    name: 'product_status,product_group,product_category,sale_type',
  });

  return {
    props: {
      environment,
      // cacheTime: 3600,
    },
  };
};
