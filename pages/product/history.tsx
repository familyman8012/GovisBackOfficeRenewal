import React from 'react';
import { useRouter } from 'next/router';
import generateHistoryPage2 from '@ComponentFarm/template/history/generateHistoryPage2';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';
import { EnvStore } from '@MobxFarm/store';

const History = () => {
  const router = useRouter();
  const environment = EnvStore?.getData({
    name: 'product_status,product_group,product_category,sale_type',
  });
  const tabData = tabDataFunc('view', router?.query);

  const getHistory = generateHistoryPage2({
    idx: String(router?.query?.id),
    endpoint: `/product/info/history`,
    subTitle: '제품 변경 내역',
    tabData,
  });

  return <>{getHistory({ environment })}</>;
};

export default History;
