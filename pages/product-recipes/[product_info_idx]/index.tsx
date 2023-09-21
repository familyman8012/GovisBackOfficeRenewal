import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { Button } from '@ComponentFarm/atom/Button/Button';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { recipeInfoListLayoutConfig } from '@ComponentFarm/template/recipe/const';
import { RecipeListWrap } from '@ComponentFarm/template/recipe/style';
import { useGoMove } from '@HookFarm/useGoMove';

const RecipeProductPage: NextPage<{ envs: IEnvironmentResItem[] }> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
} = ({ envs }) => {
  const { onBack } = useGoMove();

  return (
    <RecipeListWrap>
      <LayoutTitleBoxWithTab
        {...recipeInfoListLayoutConfig}
        actionButtons={
          <Button variant="gostSecondary" onClick={() => onBack()}>
            이전
          </Button>
        }
      />
      <h3>@TODO 제품 정보</h3>
    </RecipeListWrap>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          product_info_idx: ':product_info_idx',
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps = async () => {
  const props = await fetchEnvironment({
    name: ['recipe_status'].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
    revalidate: 10,
  };
};

export default RecipeProductPage;
