import { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useMutation, useQueryClient } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { updateRecipe } from '@ApiFarm/product-recipe';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { IRecipeFormFields } from '@InterfaceFarm/product-recipe';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import RecipeForm from '@ComponentFarm/template/recipe/RecipeForm';
import RecipeSwitch from '@ComponentFarm/template/recipe/RecipeSwitch';
import { RegisterRecipeWrap } from '@ComponentFarm/template/recipe/style';
import { useGoMove } from '@HookFarm/useGoMove';
import { uploadToS3 } from '@UtilFarm/uploads3';

const RecipeDetailPage: NextPage<{ envs: IEnvironmentResItem[] }> = ({
  envs,
}) => {
  const qc = useQueryClient();
  const router = useRouter();
  const { onBack } = useGoMove();
  const [editable, setEditable] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const product_info_idx = useMemo(
    () => parseInt(router.query?.product_info_idx as string, 10),
    [router]
  );
  const recipe_info_idx = useMemo(
    () => parseInt(router.query?.recipe_info_idx as string, 10),
    [router]
  );

  const updateTransaction = async (formData: IRecipeFormFields) => {
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
            : step.topping_image ?? '';

          return {
            ...stepParams,
            topping_image,
          };
        })
      );
    }

    return updateRecipe(params);
  };

  const updateMutate = useMutation(updateTransaction, {
    onSuccess: () => {
      setEditable(false);
      qc.invalidateQueries(['product-recipe-list', product_info_idx]);
    },
  });

  return (
    <RegisterRecipeWrap>
      <TitleArea
        title="레시피 상세 정보"
        BtnBox={
          <>
            <Button variant="gostSecondary" onClick={() => onBack()}>
              이전
            </Button>
            {!editable ? (
              <Button onClick={() => setEditable(true)}>수정</Button>
            ) : (
              <Button
                disabled={updateMutate.isLoading}
                onClick={() => formRef.current?.requestSubmit()}
              >
                저장
              </Button>
            )}
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
        ]}
        activeTabIndex={1}
        onTabChange={index => {}}
      />

      <RecipeSwitch />
      <RecipeForm
        key={recipe_info_idx}
        ref={formRef}
        productId={product_info_idx}
        recipeId={recipe_info_idx}
        editable={editable}
        envs={envs}
        onSubmit={updateMutate.mutate}
      />
    </RegisterRecipeWrap>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          product_info_idx: ':product_info_idx',
          recipe_info_idx: ':recipe_info_idx',
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
