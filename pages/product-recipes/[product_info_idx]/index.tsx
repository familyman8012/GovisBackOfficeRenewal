import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchProductFormView } from '@ApiFarm/product';
import { Button } from '@ComponentFarm/atom/Button/Button';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import ProductForm from '@ComponentFarm/template/product/manage/Form';
import { recipeInfoListLayoutConfig } from '@ComponentFarm/template/recipe/const';
import { RecipeDetailWrap } from '@ComponentFarm/template/recipe/style';
import { useGoMove } from '@HookFarm/useGoMove';
import { EnvStore } from '@MobxFarm/store';

const RecipeProductPage = () => {
  const { onBack } = useGoMove();
  const router = useRouter();

  const environment = useMemo(
    () =>
      EnvStore?.getData({
        name: 'product_status,product_group,product_category,sale_type',
      }),
    [EnvStore.data]
  );

  const product_info_idx = useMemo(
    () => parseInt(router.query?.product_info_idx as string, 10),
    [router]
  );

  const { data } = useQuery(
    ['productView', product_info_idx],
    () => fetchProductFormView(product_info_idx?.toString() ?? ''),
    {
      enabled: !!product_info_idx,
    }
  );

  return (
    <RecipeDetailWrap>
      <LayoutTitleBoxWithTab
        {...recipeInfoListLayoutConfig}
        actionButtons={
          <Button variant="gostSecondary" onClick={() => onBack()}>
            이전
          </Button>
        }
      />
      {data && (
        <ProductForm
          initialData={data}
          environment={environment}
          pageMode="view"
          setSelectedImgFile={() => {}}
          submitFunc={() => {}}
        />
      )}
    </RecipeDetailWrap>
  );
};

export default RecipeProductPage;
