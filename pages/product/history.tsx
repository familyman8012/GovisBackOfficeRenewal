import React from 'react';
import { useRouter } from 'next/router';
import { fetchEnvironment } from '@ApiFarm/environment';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import generateHistoryPage2 from '@ComponentFarm/template/history/generateHistoryPage2';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';

const History = (props: any) => {
  const router = useRouter();
  const tabData = tabDataFunc('view', router?.query);

  const test = generateHistoryPage2({
    idx: String(router?.query?.id),
    endpoint: `/product/info/history`,
    subTitle: '제품 변경 내역',
  });

  return (
    <DetailPageLayout tabData={tabData} title="제품 상세 정보">
      {test(props)}
    </DetailPageLayout>
  );
};

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'product_status,product_group,product_category,sale_type',
  });

  return {
    props: {
      environment,
    },
    revalidate: 60,
  };
};

export default History;
