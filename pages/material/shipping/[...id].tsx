import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  fetchPartnerList,
  fetchShippingModify,
  fetchShippingSave,
  fetchShippingView,
} from '@ApiFarm/ material';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import {
  IMaterialShippingSaveReq,
  IMaterialShippingSaveRes,
} from '@InterfaceFarm/material';
import { convertInitialFormat } from '@ComponentFarm/template/product/material/shipping/convertShipping';
import ShippingForm from '@ComponentFarm/template/product/material/shipping/ShippingForm';

// 임의의 initialData 생성
// const mockInitialData: FormFields = {
//   CJ_inp1: '5',
//   CJ_inp2: '7',
//   CJ_inp3: '3',
//   CJ_inp4: '8',
//   CJ_inp5: '2',
//   CJ_inp6: '4',
//   CJ_inp7: '6',
//   CJ_inp8: '9',
//   CJ_inp9: '1',
//   CJ_inp10: '10',
//   CJ_inp11: '11',
//   CJ_inp12: '12',
//   CJ_inp13: '13',
//   CJ_inp14: '14',
//   CJ_inp15: '15',
//   CJ_inp16: '16',
//   CJ_inp17: '17',
//   DirectDelivery_inp1: '6',
//   DirectDelivery_inp2: '9',
//   DirectDelivery_inp3: '8',
//   DirectDelivery_inp4: '7',
//   DirectDelivery_inp5: '5',
//   DirectDelivery_inp6: '4',
//   DirectDelivery_inp7: '3',
//   DirectDelivery_inp8: '2',
//   DirectDelivery_inp9: '1',
//   DirectDelivery_inp10: '10',
//   DirectDelivery_inp11: '11',
//   DirectDelivery_inp12: '12',
//   DirectDelivery_inp13: '13',
//   DirectDelivery_inp14: '14',
//   DirectDelivery_inp15: '15',
//   DirectDelivery_inp16: '16',
//   DirectDelivery_inp17: '17',
// };

const Shipping = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const [pageMode, setPageMode] = useState('');

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

  // view 일때, 데이터 불러오기
  const { data: viewData } = useQuery(
    ['shippingView', router.asPath],
    () => fetchShippingView(String(id && id[1])),
    {
      enabled: pageMode === 'view',
      cacheTime: 0,
    }
  );

  // 물류사, 지역정보 가져오기
  const partnerCategory = useMemo(
    () => environment?.list?.find(el => el.code === 'pct_shipping_company'),
    [environment.list]
  );

  const area = useMemo(
    () => environment?.list?.filter(el => el.name === 'area'),
    [environment.list]
  );

  const { data: shippingListData } = useQuery(
    ['shippingList'],
    () => fetchPartnerList(String(partnerCategory?.environment_variable_idx)),
    { enabled: !!partnerCategory }
  );

  const saveSubmit = useMutation(fetchShippingSave, {
    onSuccess: (data: IMaterialShippingSaveRes) => {
      console.log('데이터 저장 성공!', data);
      queryClient.invalidateQueries(['shippingView']);
      router.push(`/material/shipping/view/${id && id[1]}`);
    },
  });

  const modifySubmit = useMutation(fetchShippingModify, {
    onSuccess: () => {
      console.log('성공!');
      queryClient.invalidateQueries(['shippingView']);
      router.back();
    },
  });

  const saveFunc = async (submitData: {
    params: string;
    data: IMaterialShippingSaveReq;
  }) => {
    if (pageMode === 'add') {
      saveSubmit.mutate(submitData);
    }
    if (pageMode === 'modify') {
      // console.log('Partner modifyData', submitData);
      // delete submitData.partner_company_code;
      modifySubmit.mutate(submitData);
    }
  };

  const submitFunc = (data: {
    params: string;
    data: IMaterialShippingSaveReq;
  }) => {
    saveFunc(data);
  };

  const isDataChk = !!environment && !!shippingListData;

  console.log(
    'viewData',
    viewData,
    'convertInitialFormat(viewData)',
    convertInitialFormat(viewData?.list)
  );

  return (
    <>
      {((pageMode === 'add' && isDataChk) ||
        (pageMode === 'view' && viewData && isDataChk) ||
        (pageMode === 'modify' && viewData && isDataChk)) && (
        <ShippingForm
          initialData={
            pageMode !== 'add'
              ? convertInitialFormat(viewData?.list)
              : undefined
          }
          pageMode={pageMode}
          shippingListData={shippingListData}
          area={area}
          submitFunc={submitFunc}
        />
      )}
    </>
  );
};

export default Shipping;

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

export const getStaticProps: GetStaticProps = async context => {
  const environment = await fetchEnvironment({
    name: 'partner_company_type,area',
  });

  return {
    props: {
      environment,
    },
    revalidate: 10,
  };
};
