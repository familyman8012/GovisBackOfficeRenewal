import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useMutation, useQueryClient } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { updateRecipe } from '@ApiFarm/product-recipe';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { IRecipeFormFields } from '@InterfaceFarm/product-recipe';
import AlertModal from '@ComponentFarm/modules/Modal/AlertModal';
import { Button } from '@ComponentFarm/atom/Button/Button';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { recipeInfoDetailLayoutConfig } from '@ComponentFarm/template/recipe/const';
import RecipeForm from '@ComponentFarm/template/recipe/RecipeForm';
import RecipeSwitch from '@ComponentFarm/template/recipe/RecipeSwitch';
import { RegisterRecipeWrap } from '@ComponentFarm/template/recipe/style';
import { useGoMove } from '@HookFarm/useGoMove';
import { uploadToS3 } from '@UtilFarm/uploads3';

const RecipeDetailPage: NextPage<{ envs: IEnvironmentResItem[] }> & {
  getLayout?: (page: ReactElement) => React.ReactNode;
} = ({ envs }) => {
  const qc = useQueryClient();
  const router = useRouter();
  const { onBack } = useGoMove();
  const [editable, setEditable] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const product_info_idx = useMemo(
    () => parseInt(router.query?.product_info_idx as string, 10),
    [router]
  );
  const recipe_info_idx = useMemo(
    () => parseInt(router.query?.recipe_info_idx as string, 10),
    [router]
  );

  const updateTransaction = useCallback(async (formData: IRecipeFormFields) => {
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
  }, []);

  const updateMutate = useMutation(updateTransaction, {
    onSuccess: () => {
      setEditable(false);
      setShowAlert(true);
      qc.invalidateQueries(['product-recipe-list', product_info_idx]);
    },
  });

  return (
    <RegisterRecipeWrap>
      <LayoutTitleBoxWithTab
        {...recipeInfoDetailLayoutConfig}
        actionButtons={
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
      <RecipeSwitch />
      <RecipeForm
        ref={formRef}
        key={recipe_info_idx}
        productId={product_info_idx}
        recipeId={recipe_info_idx}
        editable={editable}
        envs={envs}
        onSubmit={updateMutate.mutate}
      />
      <AlertModal
        isOpen={showAlert}
        title="레시피 수정"
        content="레시피 정보가 수정 완료되었습니다."
        onClose={() => setShowAlert(false)}
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
  };
};

export default RecipeDetailPage;
