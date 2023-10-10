import React from 'react';
import { useRouter } from 'next/router';
import { fetchEnvironment } from '@ApiFarm/environment';
import generateHistoryPage2 from '@ComponentFarm/template/history/generateHistoryPage2';
import { tabDataFunc } from '@ComponentFarm/template/product/material/const';

const History = (props: any) => {
  const router = useRouter();
  const tabData = tabDataFunc('view', router?.query);

  const getHistory = generateHistoryPage2({
    idx: String(router?.query?.id),
    endpoint: `/partner_company/history/list`,
    subTitle: '제조사 변경 내역',
    tabData,
  });

  return <>{getHistory(props)}</>;
};

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'partner_company_type,partner_company_status',
  });

  return {
    props: {
      environment,
    },
    revalidate: 60,
  };
};

export default History;
