import dayjs from 'dayjs';
import { IMaterialReq } from '@InterfaceFarm/material';
import { IMaterialInfoViewRes } from '@InterfaceFarm/product';
import {
  IRecipeFormFields,
  IRecipeListItem,
  IRecipeProductListItem,
  IRecipeStepFormFields,
  RecipeInfo,
  RecipeStepInfo,
} from '@InterfaceFarm/product-recipe';
import { downloadAxiosResponse } from '@UtilFarm/download';
import { BoV2Request } from './index';

export const fetchRecipeProductList = async (params: any) => {
  return BoV2Request.get<
    IResponse<{
      list: IRecipeProductListItem[];
      total_count: number;
    }>
  >(`/recipe/info/list`, { params }).then(res => res.data.data);
};

export const downloadRecipeProductList = async (params: any) => {
  return BoV2Request.get(`/recipe/info/list`, {
    params: {
      ...params,
      is_export: '1',
    },
    responseType: 'blob',
  })
    .then(
      downloadAxiosResponse(
        `제품 레시피 목록_${dayjs().format('YYYY-MM-DD HH:mm:ss')}.xlsx`
      )
    )
    .catch(() => new Error('다운로드에 실패하였습니다.'));
};

export const fetchRecipeProductView = async (id: number) => {
  return BoV2Request.get<IResponse<any>>(
    `/recipe/info/detail/product/${id}`
  ).then(res => res.data.data);
};

export const fetchRecipeMaterialList = async (params?: IMaterialReq) => {
  const response = await BoV2Request.get('/recipe/material/info/list', {
    params,
  });

  return response.data.data;
};

export const fetchProductRecipeList = async (
  product_info_idx: number | string
) => {
  return BoV2Request.get<
    IResponse<{
      list: IRecipeListItem[];
    }>
  >(`/recipe/info/detail/list/${product_info_idx}`).then(res => res.data.data);
};

export const fetchRecipeList = async (id: number) => {
  return BoV2Request.get(`/recipe/info/detail/list/${id}`).then(
    res => res.data.data
  );
};

export const fetchRecipeBasicInfo = async ({
  product_info_idx,
  recipe_info_idx,
}: {
  product_info_idx: number;
  recipe_info_idx: number;
}) => {
  return BoV2Request.get<IResponse<RecipeInfo>>(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}`
  ).then(response => response.data.data);
};

export const fetchRecipeStepInfo = async ({
  product_info_idx,
  recipe_info_idx,
  recipe_step_idx,
}: {
  product_info_idx: number;
  recipe_info_idx: number;
  recipe_step_idx: number;
}) => {
  return BoV2Request.get<IResponse<RecipeStepInfo>>(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}/step/${recipe_step_idx}`
  ).then(response => response.data.data);
};

export const fetchRecipe = async ({
  product_info_idx,
  recipe_info_idx,
}: {
  product_info_idx: number;
  recipe_info_idx: number;
}) => {
  const basicInfo = await fetchRecipeBasicInfo({
    product_info_idx,
    recipe_info_idx,
  });

  const recipe_steps = await Promise.all(
    basicInfo.recipe_step_list.map(({ recipe_step_idx, sort_number }) =>
      fetchRecipeStepInfo({
        product_info_idx,
        recipe_info_idx,
        recipe_step_idx,
      }).then(step => ({ sort_number, ...step }))
    )
  );

  return {
    ...basicInfo,
    recipe_steps,
  };
};

export const fetchRecipeMaterialInfo = async (id: number) => {
  return BoV2Request.get<IResponse<IMaterialInfoViewRes>>(
    `/recipe/info/detail/material/${id}`
  ).then(response => response.data.data);
};

export const createRecipeStep = async ({
  product_info_idx,
  recipe_info_idx,
  ...formData
}: IRecipeStepFormFields) => {
  return BoV2Request.post(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}/step`,
    formData
  ).then(res => res.data.data);
};

export const createRecipe = async (params: IRecipeFormFields) => {
  const { product_info_idx } = params;

  const { recipe_info_idx } = await BoV2Request.post<
    IResponse<{ recipe_info_idx: number }>
  >(`/recipe/info/detail/${product_info_idx}/basic`, {
    recipe_name: params.recipe_name,
    recipe_image: params.recipe_image,
    recipe_manufacturing_time: params.recipe_manufacturing_time,
  }).then(res => res.data.data);

  const steps = await Promise.all(
    params.recipe_steps.map(step =>
      createRecipeStep({
        product_info_idx,
        recipe_info_idx,
        ...step,
      })
    )
  );

  return {
    recipe_info_idx,
    steps,
  };
};

export const updateRecipeStep = async ({
  product_info_idx,
  recipe_info_idx,
  recipe_step_idx,
  ...formData
}: IRecipeStepFormFields) => {
  return BoV2Request.put(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}/step/${recipe_step_idx}`,
    formData
  ).then(res => res.data.data);
};

export const updateRecipe = async (params: IRecipeFormFields) => {
  const { product_info_idx } = params;

  const { recipe_info_idx } = await BoV2Request.put<
    IResponse<{ recipe_info_idx: number }>
  >(`/recipe/info/detail/${product_info_idx}/basic/${params.recipe_info_idx}`, {
    recipe_name: params.recipe_name,
    recipe_image: params.recipe_image,
    recipe_manufacturing_time: params.recipe_manufacturing_time,
  }).then(res => res.data.data);

  const steps = await Promise.all(
    params.recipe_steps.map(step =>
      step.recipe_step_idx
        ? updateRecipeStep({
            product_info_idx,
            recipe_info_idx,
            ...step,
          })
        : createRecipeStep({
            product_info_idx,
            recipe_info_idx,
            ...step,
          })
    )
  );

  return {
    recipe_info_idx,
    steps,
  };
};

export const updateRecipeStatus = async ({
  product_info_idx,
  recipe_info_idx,
  evi_recipe_status,
}: Pick<IRecipeFormFields, 'product_info_idx' | 'recipe_info_idx'> & {
  evi_recipe_status: number;
}) =>
  BoV2Request.put<IResponse<{ recipe_info_idx: number }>>(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}/status`,
    {
      evi_recipe_status,
    }
  ).then(res => res.data.data);

export const removeRecipe = async ({
  product_info_idx,
  recipe_info_idx,
}: Pick<IRecipeFormFields, 'product_info_idx' | 'recipe_info_idx'>) =>
  BoV2Request.delete<IResponse<{ recipe_info_idx: number }>>(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}`
  ).then(res => res.data.data);

export const removeRecipeStep = async ({
  product_info_idx,
  recipe_info_idx,
  recipe_step_idx,
}: Pick<IRecipeFormFields, 'product_info_idx' | 'recipe_info_idx'> & {
  recipe_step_idx: number;
}) =>
  BoV2Request.delete<IResponse<{ recipe_step_idx: number }>>(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}/step/${recipe_step_idx}`
  ).then(res => res.data.data);

export const updateRecipeStepOrder = async ({
  product_info_idx,
  recipe_info_idx,
  ...parmas
}: {
  product_info_idx: number;
  recipe_info_idx: number;
  change_info_list: { recipe_step_idx: number; sort_number: number }[];
}) => {
  return BoV2Request.put<IResponse<any>>(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}/step/sort_change`,
    parmas
  );
};
