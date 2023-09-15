import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  fetchPartnerFormModify,
  fetchPartnerFormSave,
  fetchPartnerFormView,
} from '@ApiFarm/ material';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { IPartnerSaveReq } from '@InterfaceFarm/material';
import PartnerForm from '@ComponentFarm/template/material-partner/PartnerForm';

const LogisticsDetailPage = ({
  environment,
}: {
  environment: IEnvironmentRes;
}) => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const [pageMode, setPageMode] = useState('');

  // view 일때, 데이터 불러오기
  const { data: viewData } = useQuery(
    ['partnerFormView', router.asPath],
    () => fetchPartnerFormView(String(id && id[1])),
    {
      enabled: pageMode === 'view',
      cacheTime: 0,
    }
  );
  /// /pct_manufacturer : 제조사
  // pct_shipping_company : 물류사
  const partnerCategory = useMemo(
    () => environment?.list?.find(el => el.code === router.query.category),
    [environment.list, router.query.category]
  );

  // 등록일때, 데이터 저장
  const saveSubmit = useMutation(
    pageMode === 'add' ? fetchPartnerFormSave : fetchPartnerFormModify,
    {
      onSuccess: () => {
        console.log('성공!');
        queryClient.invalidateQueries(['materialList']);
        router.push({
          pathname: '/material/partner',
          query: router.query,
        });
      },
    }
  );

  const modifySubmit = useMutation(fetchPartnerFormModify, {
    onSuccess: () => {
      console.log('성공!');
      queryClient.invalidateQueries(['materialList']);
      router.back();
    },
  });

  const saveFunc = async (submitData: IPartnerSaveReq) => {
    console.log('Partner submitData', submitData);
    if (pageMode === 'add') {
      submitData.evi_partner_company_type = String(
        partnerCategory?.environment_variable_idx
      );
      console.log('submitData', submitData);
      saveSubmit.mutate(submitData);
    }
    if (pageMode === 'modify') {
      console.log('Partner modifyData', submitData);
      delete submitData.partner_company_code;
      modifySubmit.mutate({
        params: viewData.partner_company_idx,
        data: {
          ...submitData,
        },
      });
    }
  };

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

  return (
    <>
      {(pageMode === 'add' ||
        (pageMode === 'view' && viewData) ||
        (pageMode === 'modify' && viewData)) && (
        <PartnerForm
          initialData={pageMode !== 'add' ? viewData : undefined}
          pageMode={pageMode}
          environment={environment}
          partnerLabel={String(partnerCategory?.value)}
          submitFunc={submitFunc}
        />
      )}
    </>
  );
};

export default LogisticsDetailPage;

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
    name: 'partner_company_type,partner_company_status',
  });

  return {
    props: {
      environment,
    },
    revalidate: 10,
  };
};
