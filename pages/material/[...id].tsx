import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  fetchMaterialCategory,
  fetchMaterialFormModify,
  fetchMaterialFormSave,
  fetchMaterialFormView,
  fetchPartnerList,
} from '@ApiFarm/ material';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import MaterialForm from '@ComponentFarm/template/product/material/Form';
import { uploadToS3 } from '@UtilFarm/uploads3';

const ProductDetail = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const [pageMode, setPageMode] = useState('');
  const [selectedImgFile, setSelectedImgFile] = useState<File | null>(null);
  const materialPatnerParams = useMemo(
    () => environment.list.find(el => el.value === '제조사'),
    [environment.list]
  );

  // view 일때, 데이터 불러오기
  const { data: viewData } = useQuery(
    ['materialFormView', id && id[1]],
    () => fetchMaterialFormView(String(id && id[1])),
    {
      enabled: pageMode === 'view' || pageMode === 'modify',
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
      queryClient.invalidateQueries(['materialFormView']);
      router.push(`/material/shipping/add/${data.material_info_idx}`);
    },
  });

  const modifySubmit = useMutation(fetchMaterialFormModify, {
    onSuccess: () => {
      console.log('성공!');
      queryClient.invalidateQueries(['materialList']);
      queryClient.invalidateQueries(['materialFormView']);
      router.push('/material/');
    },
  });

  const submitFunc = async (data: any) => {
    if (pageMode === 'add') {
      if (selectedImgFile) {
        const imgData = await uploadToS3(selectedImgFile);
        data.material_image = imgData;
      }
      saveSubmit.mutate({
        ...data,
        pci_manufacturer: data?.pci_manufacturer?.value ?? 0,
      });
    } else if (pageMode === 'modify') {
      if (selectedImgFile) {
        const imgData = await uploadToS3(selectedImgFile);
        data.material_image = imgData;
      } else {
        data.material_image = viewData.material_image;
      }
      modifySubmit.mutate({
        params: viewData.material_info_idx,
        data: {
          ...data,
          pci_manufacturer: data?.pci_manufacturer
            ? data?.pci_manufacturer?.value
            : 0,
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

  const isDataChk = !!materialCategory && !!materialPatner;

  return (
    <>
      {((pageMode === 'add' && isDataChk) ||
        (pageMode === 'view' && viewData && isDataChk) ||
        (pageMode === 'modify' && viewData && isDataChk)) && (
        <MaterialForm
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${60 * 60 * 24}, stale-while-revalidate=59`
  );

  const environment = await fetchEnvironment({
    name: 'material_status,material_product_type,material_storage_type,material_trade_unit,material_spec_unit,taxable,vat,country,material_sale_brand,partner_company_type',
  });

  return {
    props: {
      environment,
    },
  };
};
