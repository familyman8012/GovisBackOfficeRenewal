import {
  ICategoryDetailRes,
  ICategoryStatisticsRes,
  IProductStatisticsRes,
} from '@InterfaceFarm/product-statistics';
import { BoV2Request } from '.';

export const fetchProductAllStatis = async (params?: any) => {
  console.log('params?.type?.value', params?.type, params);
  const { type, ...rest } = params;
  const response = await BoV2Request.get<IResponse<IProductStatisticsRes>>(
    `/analytics/product/sales/overall/${type}`,
    {
      params: rest,
    }
  );

  return response.data.data;
};

export const fetchCategoryStatics = async (params?: any) => {
  const response = await BoV2Request.get<IResponse<ICategoryStatisticsRes>>(
    `/analytics/product/sales/by_category`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchCategoryStaticsDetail = async (
  pathname: number,
  params: any
) => {
  const response = await BoV2Request.get<IResponse<ICategoryDetailRes>>(
    `/analytics/product/sales/category/${pathname}`,
    {
      params,
    }
  );
  return response.data.data;
};
