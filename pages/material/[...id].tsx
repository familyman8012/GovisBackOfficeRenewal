import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import {
  fetchMaterialCategory,
  fetchMaterialFormModify,
  fetchMaterialFormSave,
  fetchMaterialFormView,
  fetchPartnerList,
} from '@ApiFarm/ material';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { IMaterial } from '@InterfaceFarm/material';
import MaterialForm from '@ComponentFarm/template/product/material/Form';
import useImageUploader from '@HookFarm/useImageUploader';

const ProductDetail = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const [pageMode, setPageMode] = useState('');
  const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);
  const [sendData, setSendData] = useState<any | null>(null);
  const [imgData, status, errorMessage, handler] = useImageUploader();
  const materialPatnerParams = useMemo(
    () => environment.list.find(el => el.value === '제조사'),
    [environment.list]
  );

  // view 일때, 데이터 불러오기
  const { data: viewData } = useQuery(
    ['materialFormView', router.asPath],
    () => fetchMaterialFormView(String(id && id[1])),
    {
      enabled: pageMode === 'view' || pageMode === 'modify',
      cacheTime: 0,
    }
  );

  console.log('viewData', viewData);

  // 분류선택 데이터
  const { data: materialCategory } = useQuery(
    ['materialCategory', router.asPath],
    () => fetchMaterialCategory()
  );

  // 제조사 데이터
  const { data: materialPatner } = useQuery(
    ['partnerList', router.asPath],
    () =>
      fetchPartnerList(String(materialPatnerParams?.environment_variable_idx)),
    { enabled: !!materialPatnerParams }
  );

  console.log('materialPatner', materialPatner);

  // 등록일때, 데이터 저장
  const saveSubmit = useMutation(fetchMaterialFormSave, {
    onSuccess: data => {
      console.log('성공!', data);
      queryClient.invalidateQueries(['materialList']);
      router.push(`/material/shipping/add/${data.material_info_idx}`);
    },
  });

  const modifySubmit = useMutation(fetchMaterialFormModify, {
    onSuccess: () => {
      console.log('성공!');
      queryClient.invalidateQueries(['materialList']);
      router.push('/material/');
    },
  });

  const saveFunc = async (submitData: IMaterial) => {
    if (selectedImgFile) {
      const event = { target: { files: [selectedImgFile] } };
      await handler(event as any);
      setSendData(submitData);
    } else if (
      pageMode === 'modify' &&
      !imgData &&
      !!submitData.material_image
    ) {
      setSendData(submitData);
    } else {
      toast.error('대표 이미지를 등록하셔야 합니다.234');
    }
  };

  useEffect(() => {
    if (pageMode === 'add' && status === 'success' && imgData) {
      sendData.material_image = imgData;
      saveSubmit.mutate({
        ...sendData,
        evi_country: sendData.evi_country.value,
        pci_manufacturer: sendData.pci_manufacturer.value,
      });
    }
    if (pageMode === 'modify') {
      if (status === 'success' && imgData) {
        sendData.material_image = imgData;
      }
      delete sendData.material_code;
      modifySubmit.mutate({
        params: sendData.material_info_idx,
        data: {
          ...sendData,
          evi_country: sendData.evi_country.value,
          pci_manufacturer: sendData.pci_manufacturer.value,
        },
      });
    }
    if (status === 'error') {
      toast.error(errorMessage);
    }
  }, [sendData]);

  // onFormSubmit 에 전달할 함수.
  const submitFunc = (data: any) => {
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

  const isDataChk = !!materialCategory && !!materialPatner;

  return (
    <>
      {((pageMode === 'add' && isDataChk) ||
        (pageMode === 'view' && viewData && isDataChk) ||
        (pageMode === 'modify' && viewData && isDataChk)) && (
        <MaterialForm
          initialData={pageMode !== 'add' ? viewData : undefined}
          pageMode={pageMode}
          environment={environment}
          materialCategory={materialCategory}
          materialPatner={materialPatner}
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
    name: 'material_status,material_product_type,material_storage_type,material_trade_unit,material_spec_unit,taxable,vat,country,material_sale_brand,partner_company_type',
  });

  return {
    props: {
      environment,
    },
    revalidate: 10,
  };
};
