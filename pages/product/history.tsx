import React from 'react';
import { useRouter } from 'next/router';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import generateHistoryPage2 from '@ComponentFarm/template/history/generateHistoryPage2';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';

const History = () => {
  const router = useRouter();
  const tabData = tabDataFunc('view', router?.query);

  const test = generateHistoryPage2({
    idx: String(router?.query?.id),
    endpoint: `/product/info/history`,
    subTitle: '제품 변경 내역',
  });

  return (
    <DetailPageLayout tabData={tabData} title="제품 상세 정보">
      {test()}
    </DetailPageLayout>
  );
};

export default History;
