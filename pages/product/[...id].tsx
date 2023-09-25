import React, { useEffect, useState } from 'react';
import { runInAction } from 'mobx';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchEnvironment } from '@ApiFarm/environment';
import {
  fetchProductFormModify,
  fetchProductFormSave,
  fetchProductFormView,
} from '@ApiFarm/product';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { IProductForm } from '@InterfaceFarm/product';
import ProductForm from '@ComponentFarm/template/product/manage/Form';
import useImageUploader from '@HookFarm/useImageUploader';
import { confirmModalStore } from '@MobxFarm/store';

const ProductDetail = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const [pageMode, setPageMode] = useState('');
  const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);
  const [submitData, setSubmitData] = useState<any | null>(null);
  const [imgData, status, errorMessage, handler] = useImageUploader();

  // view 일때, 데이터 불러오기
  const { data: viewData } = useQuery(
    ['productFormView', router.asPath],
    () => fetchProductFormView(String(id && id[1])),
    {
      enabled: pageMode === 'view' || pageMode === 'modify',
      cacheTime: 0,
    }
  );

  console.log('router', router);

  const channelModal = (product_info_idx: number) => {
    console.log('product_info_idx', product_info_idx);

    runInAction(() => {
      confirmModalStore.openModal({
        title: '제품 정보 등록 완료',
        content: (
          <p>
            채널별 이미지를 등록하시겠습니까?
            <br />
            (채널별 이미지는 추후 등록 가능합니다1.)
          </p>
        ),
        onFormSubmit: () => {
          // eslint-disable-next-line no-unused-vars
          const { id: routerId, ...newObj } = router.query;
          console.log('newObj', newObj);
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
      channelModal(data.product_info_idx);
    },
  });

  const modifySubmit = useMutation(fetchProductFormModify, {
    onSuccess: () => {
      console.log('성공!');
      queryClient.invalidateQueries(['productList']);
      router.push('/product/');
    },
  });

  const submitFunc = async (data: IProductForm) => {
    if (selectedImgFile) {
      const event = { target: { files: [selectedImgFile] } };
      await handler(event as any);
      setSubmitData(data);
    } else if (pageMode === 'modify' && !imgData && !!viewData.product_image) {
      setSubmitData(data);
    } else {
      toast.error('대표 이미지를 등록하셔야 합니다.234');
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (pageMode === 'add' && status === 'success' && imgData) {
      submitData.product_image = imgData;
      // eslint-disable-next-line no-unused-vars
      const { sale_end_date, ...sendData } = submitData;
      saveSubmit.mutate(sendData);
    }
    if (pageMode === 'modify') {
      if (status === 'success' && imgData) {
        submitData.product_image = imgData;
      } else {
        submitData.product_image = viewData.product_image;
      }

      // eslint-disable-next-line no-unused-vars
      const { evi_product_group, ...sendData } = submitData;
      modifySubmit.mutate({
        params: viewData.product_info_idx,
        data: {
          ...sendData,
          is_recipe_registration: viewData?.is_recipe_registration,
        },
      });
    }
    if (status === 'error') {
      toast.error(errorMessage);
    }
  }, [submitData]);

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

// export async function getStaticPaths() {
//   // 기본 경로들
//   const basePaths = [
//     { params: { id: ['add'] } },
//     { params: { id: ['modify'] } },
//     { params: { id: ['view'] } },
//   ];

//   return {
//     paths: basePaths,
//     fallback: 'blocking',
//   };
// }

export const getServerSideProps = async () => {
  const environment = await fetchEnvironment({
    name: 'product_status,product_group,product_category,sale_type',
  });

  return {
    props: {
      environment,
    },
    // revalidate: 10,
  };
};
