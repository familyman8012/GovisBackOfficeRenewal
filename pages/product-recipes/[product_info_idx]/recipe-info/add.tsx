import { useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useMutation } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { createRecipe } from '@ApiFarm/product-recipe';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { IRecipeFormFields } from '@InterfaceFarm/product-recipe';
import { Button } from '@ComponentFarm/atom/Button/Button';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { recipeAddLayoutConfig } from '@ComponentFarm/template/recipe/const';
import RecipeForm from '@ComponentFarm/template/recipe/RecipeForm';
import { RegisterRecipeWrap } from '@ComponentFarm/template/recipe/style';
import { useGoMove } from '@HookFarm/useGoMove';
import { formRequestSubmit } from '@UtilFarm/form';
import { uploadToS3 } from '@UtilFarm/uploads3';

const RecipeAddPage = ({ envs }: { envs: IEnvironmentResItem[] }) => {
  const router = useRouter();
  const { onBack } = useGoMove();
  const formRef = useRef<HTMLFormElement>(null);

  const product_info_idx = useMemo(
    () => parseInt(router.query?.product_info_idx as string, 10),
    [router]
  );

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

    return createRecipe(params);
  };

  const createMutate = useMutation(createRecipeTransaction, {
    onSuccess: () => {
      onBack();
    },
  });
  return (
    <RegisterRecipeWrap>
      <LayoutTitleBoxWithTab
        {...recipeAddLayoutConfig}
        actionButtons={
          <>
            <Button variant="gostSecondary" onClick={() => onBack()}>
              이전
            </Button>
            <Button
              disabled={createMutate.isLoading}
              onClick={() => formRequestSubmit(formRef.current)}
            >
              저장
            </Button>
          </>
        }
      />
      <RecipeForm
        productId={product_info_idx}
        ref={formRef}
        envs={envs}
        onSubmit={createMutate.mutate}
      />
    </RegisterRecipeWrap>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${60 * 60 * 24}, stale-while-revalidate=59`
  );

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
      // cacheTime: 3600,
    },
  };
};

export default RecipeAddPage;
