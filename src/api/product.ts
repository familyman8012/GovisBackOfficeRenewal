import {
  IProductChannelImg,
  IProductReq,
  IProductRes,
} from '@InterfaceFarm/product';
import { RecipeInfo, RecipeStepInfo } from '@InterfaceFarm/product-recipe';
import { BoV2Request } from '.';

export const fetchProductList = async (params?: IProductReq) => {
  const response = await BoV2Request.get<IResponse<IProductRes>>(
    '/product/info/list',
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchProductFormSave = async (params: string) => {
  const response = await BoV2Request.post('/product/info/basic', params);
  return response.data.data;
};

export const fetchProductFormView = async (params: string) => {
  const response = await BoV2Request.get(`/product/info/basic/${params}`);
  return response.data.data;
};

export const fetchProductFormModify = async (data: any) => {
  const response = await BoV2Request.put(
    `/product/info/basic/${data.params}`,
    data.data
  );
  return response.data.data;
};

// 채널 이미지
export const fetchChannelImgView = async (params: string) => {
  const response = await BoV2Request.get(
    `/product/info/channel/image/${params}`
  );
  return response.data.data;
};

export const fetchChannelImgSave = async (data: {
  params: string;
  data: IProductChannelImg;
}) => {
  const response = await BoV2Request.put(
    `/product/info/channel/image/${data.params}`,
    data.data
  );
  return response.data.data;
};

const fetchProductRecipeStepList = async ({
  product_info_idx,
  recipe_info_idx,
  recipe_step_idx,
}: {
  product_info_idx: string | number;
  recipe_info_idx?: string | number;
  recipe_step_idx?: string | number;
}) =>
  BoV2Request.get<IResponse<RecipeStepInfo>>(
    `/product/info/recipe/${product_info_idx}/basic/${recipe_info_idx}/step/${recipe_step_idx}`
  ).then(response => response.data.data);

export const fetchProductRecipe = async (product_info_idx: string | number) => {
  const basicInfo = await BoV2Request.get<IResponse<RecipeInfo>>(
    `/product/info/recipe/${product_info_idx}`
  ).then(response => response.data.data);

  const recipe_steps = await Promise.all(
    basicInfo.recipe_step_list.map(({ recipe_step_idx }) =>
      fetchProductRecipeStepList({
        product_info_idx,
        recipe_info_idx: basicInfo.recipe_info_idx,
        recipe_step_idx,
      })
    )
  );

  return {
    ...basicInfo,
    recipe_steps,
  };
};

// 원재료 정보 보기
export const fetchMaterialInfoView = async (params: string) => {
  const response = await BoV2Request.get(`/product/info/manufacture/${params}`);
  return response.data.data;
};
