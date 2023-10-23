import React from 'react';
import { useRouter } from 'next/router';
import generateHistoryPage2 from '@ComponentFarm/template/history/generateHistoryPage2';
import { tabDataFunc } from '@ComponentFarm/template/product/material/const';
import { EnvStore } from '@MobxFarm/store';

const History = () => {
  const router = useRouter();
  const tabData = tabDataFunc('history', 'view', router?.query);

  const environment = EnvStore?.getData({
    name: 'material_status,material_product_type,material_storage_type,material_trade_unit,material_spec_unit,taxable,vat,country,material_sale_brand,partner_company_type',
  });

  const getHistory = generateHistoryPage2({
    idx: String(router?.query?.id),
    endpoint: `/material/info/history`,
    subTitle: '원재료 변경 내역',
    tabData,
  });

  return <>{getHistory({ environment })}</>;
};

export default History;
