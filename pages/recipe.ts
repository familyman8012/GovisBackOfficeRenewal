import { BoV2Request } from '../src/api/index';

/**
 * @TODO type definition
 */
export const fetchRecipeProductList = async (params: any) => {
  return BoV2Request.get(`/recipe/info/list`).then(res => res.data.data);
};

export const fetchRecipeProduct = async (id: string) => {
  return BoV2Request.get(`/recipe/info/detail/product/${id}`).then(
    res => res.data.data
  );
};

export const fetchRecipeList = async (id: string) => {
  BoV2Request.get(`/recipe/info/detail/list/${id}`).then(res => res.data.data);
};

export const fetchRecipeBasicInfo = async ({
  product_info_idx,
  recipe_info_idx,
}: {
  product_info_idx: string;
  recipe_info_idx: string;
}) => {
  return BoV2Request.get(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}`
  ).then(response => response.data.data);
};

export const fetchRecipeStepInfo = async ({
  product_info_idx,
  recipe_info_idx,
  recipe_step_idx,
}: {
  product_info_idx: string;
  recipe_info_idx: string;
  recipe_step_idx: string;
}) => {
  return BoV2Request.get(
    `/recipe/info/detail/${product_info_idx}/step/${recipe_info_idx}/step/${recipe_step_idx}`
  ).then(response => response.data.data);
};

export const registerRecipeStep = async ({
  product_info_idx,
  recipe_info_idx,
  ...formData
}: any) => {
  BoV2Request.post(
    `/recipe/info/detail/${product_info_idx}/basic/${recipe_info_idx}/step`,
    formData
  ).then(res => res.data.data);
};

export const registerRecipe = async (params: any) => {
  const { product_info_idx } = params;

  const { recipe_info_idx } = await BoV2Request.post<
    IResponse<{ recipe_info_idx: number }>
  >(`/recipe/info/detail/${product_info_idx}/basic`, {
    recipe_name: params.recipe_name,
    recipe_image: params.recipe_image,
    manufacturing_time: params.manufacturing_time,
  }).then(res => res.data.data);

  const steps = await Promise.all(
    params.steps.map((step: any) =>
      registerRecipeStep({
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
