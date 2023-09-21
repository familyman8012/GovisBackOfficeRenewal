import React from 'react';
import { useRouter } from 'next/router';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';

const Materialinfo = () => {
  const router = useRouter();
  const tabData = tabDataFunc('view', router?.query);

  return (
    <DetailPageLayout title="제품 관리 상세 정보" tabData={tabData}>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        준비 중입니다.
      </div>
    </DetailPageLayout>
  );
};

export default Materialinfo;
