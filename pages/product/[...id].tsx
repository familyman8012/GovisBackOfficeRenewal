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
  const [sendData, setSendData] = useState<any | null>(null);
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
          const { routerId, ...newObj } = router.query;
          router.push({
            pathname: `/product/channelimg/${product_info_idx}`,
            query: { ...newObj },
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

  const saveFunc = async (submitData: IProductForm) => {
    if (selectedImgFile) {
      const event = { target: { files: [selectedImgFile] } };
      await handler(event as any);
      setSendData(submitData);
    } else if (
      pageMode === 'modify' &&
      !imgData &&
      !!submitData.product_image
    ) {
      setSendData(submitData);
    } else {
      toast.error('대표 이미지를 등록하셔야 합니다.234');
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (pageMode === 'add' && status === 'success' && imgData) {
      delete sendData.product_code;
      delete sendData.sale_end_date;
      sendData.product_image = imgData;
      saveSubmit.mutate(sendData);
    }
    if (pageMode === 'modify') {
      if (status === 'success' && imgData) {
        sendData.product_image = imgData;
      }
      delete sendData.product_code;
      modifySubmit.mutate({
        params: sendData.product_info_idx,
        data: sendData,
      });
    }
    if (status === 'error') {
      toast.error(errorMessage);
    }
  }, [sendData]);

  // onFormSubmit 에 전달할 함수.
  const submitFunc = (data: IProductForm) => {
    saveFunc(data);
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

  console.log('');

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

export async function getStaticPaths() {
  // 기본 경로들
  const basePaths = [
    { params: { id: ['add'] } },
    { params: { id: ['modify'] } },
    { params: { id: ['view'] } },
  ];

  return {
    paths: basePaths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'product_status,product_group,product_category,sale_type',
  });

  return {
    props: {
      environment,
    },
    revalidate: 10,
  };
};
