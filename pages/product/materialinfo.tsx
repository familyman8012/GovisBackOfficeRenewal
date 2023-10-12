import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchMaterialInfoView } from '@ApiFarm/product';
import { FormWrap } from '@ComponentFarm/common';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';
import RecipeMaterialInfo from '@ComponentFarm/template/recipe/RecipeMaterialInfo';

const MaterialInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const tabData = tabDataFunc('view', router?.query);

  const { data: MaterialInfoData } = useQuery(
    ['materialInfoList', id],
    () => fetchMaterialInfoView(String(id && id)),
    {
      enabled: !!router.query.id,
    }
  );

  return (
    <FormWrap>
      <DetailPageLayout tabData={tabData} title="제품 상세 정보">
        <RecipeMaterialInfo materialInfo={MaterialInfoData} />
      </DetailPageLayout>
    </FormWrap>
  );
};

export default MaterialInfo;
