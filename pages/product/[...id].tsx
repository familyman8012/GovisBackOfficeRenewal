import React, { useEffect, useState } from 'react';
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
      enabled: pageMode === 'view',
      cacheTime: 0,
    }
  );

  // 등록일때, 데이터 저장
  const saveSubmit = useMutation(fetchProductFormSave, {
    onSuccess: () => {
      console.log('성공!');
      queryClient.invalidateQueries(['productList']);
    },
  });

  const modifySubmit = useMutation(fetchProductFormModify, {
    onSuccess: () => {
      console.log('성공!');
      queryClient.invalidateQueries(['productList']);
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

  // 이 부분을 useImageUploader 훅 바깥에 추가합니다.
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (pageMode === 'add' && status === 'success' && imgData) {
      delete sendData.product_code;
      delete sendData.sale_end_date;
      sendData.product_image = imgData;
      saveSubmit.mutate(sendData);
      router.push('/product/');
    }
    if (pageMode === 'modify' && status === 'success' && imgData) {
      sendData.product_image = imgData;
      delete sendData.product_code;
      modifySubmit.mutate({
        params: sendData.product_info_idx,
        data: sendData,
      });
      router.push('/product/');
    }
    if (pageMode === 'modify' && !imgData && !!sendData.product_image) {
      modifySubmit.mutate({
        params: sendData.product_info_idx,
        data: sendData,
      });
      router.push('/product/');
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
