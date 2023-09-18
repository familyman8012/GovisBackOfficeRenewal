import { useRef } from 'react';
import { NextPage } from 'next';
import { useMutation } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { createRecipe } from '@ApiFarm/product-recipe';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { IRecipeFormFields } from '@InterfaceFarm/product-recipe';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import RecipeForm from '@ComponentFarm/template/recipe/RecipeForm';
import { RegisterRecipeWrap } from '@ComponentFarm/template/recipe/style';
import { useGoMove } from '@HookFarm/useGoMove';
import { uploadToS3 } from '@UtilFarm/uploads3';

const RecipeDetailPage: NextPage<{ envs: IEnvironmentResItem[] }> = ({
  envs,
}) => {
  const { onBack } = useGoMove();
  const formRef = useRef<HTMLFormElement>(null);

  const createRecipeTransaction = async (formData: IRecipeFormFields) => {
    const { initial_recipe_image, ...params } = formData;
    if (initial_recipe_image && initial_recipe_image.length > 0) {
      const recipe_image = await uploadToS3(initial_recipe_image[0]);
      params.recipe_image = recipe_image;
    }

    if (params.recipe_steps) {
      params.recipe_steps = await Promise.all(
        params.recipe_steps.map(async (step, idx) => {
          const { initial_topping_image, ...stepParams } = step;

          const hasImage =
            initial_topping_image && initial_topping_image.length > 0;

          const topping_image = hasImage
            ? await uploadToS3(initial_topping_image[0])
            : '';

          return {
            ...stepParams,
            topping_image,
          };
        })
      );
    }

    createRecipe(params);
  };

  const createMutate = useMutation(createRecipeTransaction, {
    onSuccess: () => {
      onBack();
    },
  });
  return (
    <RegisterRecipeWrap>
      <TitleArea
        title="레시피 상세 정보"
        BtnBox={
          <>
            <Button variant="gostSecondary">이전</Button>
            <Button
              disabled={createMutate.isLoading}
              onClick={() => formRef.current?.requestSubmit()}
            >
              저장
            </Button>
          </>
        }
      />
      <Tabs
        id="recipe-detail-tab"
        tabs={[
          {
            title: '제품 상세',
          },
          {
            title: '레시피 정보',
          },
          {
            title: '부서정보',
          },
        ]}
        activeTabIndex={1}
        onTabChange={index => {}}
      />
      <RecipeForm ref={formRef} envs={envs} onSubmit={createMutate.mutate} />
    </RegisterRecipeWrap>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          product_info_idx: ':id',
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps = async () => {
  const props = await fetchEnvironment({
    name: [
      'product_group',
      'product_category',
      'product_status',
      'recipe_status',
      'recipe_step_topping_type',
      'recipe_material_meterage_unit',
      'recipe_material_quantity_unit',
    ].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
    revalidate: 10,
  };
};

export default RecipeDetailPage;
