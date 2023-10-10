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
    endpoint: `/material/info/history`,
    subTitle: '원재료 변경 내역',
    tabData,
  });

  return <>{getHistory(props)}</>;
};

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'material_status,material_product_type,material_storage_type,material_trade_unit,material_spec_unit,taxable,vat,country,material_sale_brand,partner_company_type',
  });

  return {
    props: {
      environment,
    },
    revalidate: 60,
  };
};

export default History;
