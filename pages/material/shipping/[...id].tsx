import React, { useEffect, useMemo, useState } from 'react';
import { runInAction } from 'mobx';
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
import { confirmModalStore } from '@MobxFarm/store';

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
      enabled: pageMode === 'view' || pageMode === 'modify',
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

  const confirmModal = () => {
    runInAction(() => {
      confirmModalStore.openModal({
        title: '원재료 등록',
        content: <p>원재료 정보가 등록 완료되었습니다.</p>,
        onFormSubmit: () => {
          confirmModalStore.isOpen = false;
          router.push(`/material/`);
        },
        submitButtonText: '확인',
        showCancelButton: false,
      });
    });
  };

  const saveSubmit = useMutation(fetchShippingSave, {
    onSuccess: (data: IMaterialShippingSaveRes) => {
      console.log('데이터 저장 성공!', data);
      queryClient.invalidateQueries(['shippingView']);
      // router.push(`/material/shipping/view/${id && id[1]}`);
      confirmModal();
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
