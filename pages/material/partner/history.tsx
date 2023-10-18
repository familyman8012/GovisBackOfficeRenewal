import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import generateHistoryPage2 from '@ComponentFarm/template/history/generateHistoryPage2';
import { tabDataFunc } from '@ComponentFarm/template/product/material/partner/const';

const History = ({ environment }: { environment: IEnvironmentRes }) => {
  const router = useRouter();

  const partnerLabel = useMemo(
    () => environment?.list?.find(el => el.code === router.query.category),
    [environment.list, router.query.category]
  )?.value;

  const tabData = tabDataFunc(String(partnerLabel), 'view', router?.query);

  const getHistory = generateHistoryPage2({
    idx: String(router?.query?.id),
    endpoint: `/partner_company/history/list`,
    subTitle: '거래처 변경 내역',
    tabData,
  });

  return <>{getHistory({ environment })}</>;
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
