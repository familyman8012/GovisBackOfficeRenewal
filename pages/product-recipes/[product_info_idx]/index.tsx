import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { fetchProductFormView } from '@ApiFarm/product';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { Button } from '@ComponentFarm/atom/Button/Button';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import ProductForm from '@ComponentFarm/template/product/manage/Form';
import { recipeInfoListLayoutConfig } from '@ComponentFarm/template/recipe/const';
import { RecipeDetailWrap } from '@ComponentFarm/template/recipe/style';
import { useGoMove } from '@HookFarm/useGoMove';

const RecipeProductPage = ({ envs }: { envs: IEnvironmentRes }) => {
  const { onBack } = useGoMove();
  const router = useRouter();

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
          environment={envs}
          pageMode="view"
          setSelectedImgFile={() => {}}
          submitFunc={() => {}}
        />
      )}
    </RecipeDetailWrap>
  );
};

export const getServerSideProps = async () => {
  const props = await fetchEnvironment({
    name: [
      'product_status',
      'product_group',
      'product_category',
      'sale_type',
    ].join(','),
  });

  return {
    props: {
      envs: props,
      cacheTime: 3600,
    },
  };
};

export default RecipeProductPage;
