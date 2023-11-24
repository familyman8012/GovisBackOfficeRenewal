import {
  ICategoryDetailRes,
  ICategoryStatisticsRes,
  IChannelRankingRes,
  IChannelRes,
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

export const fetchOrderStatics = async (params?: any) => {
  const response = await BoV2Request.get<IResponse<IProductStatisticsRes>>(
    `/analytics/product/sales/by_order_method`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchChannelStatics = async (params?: any) => {
  const response = await BoV2Request.get<IResponse<IProductStatisticsRes>>(
    `/analytics/product/sales/by_order_channel`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchStoreRankingStatics = async (params?: any) => {
  const response = await BoV2Request.get<IResponse<IChannelRankingRes>>(
    `/analytics/product/sales/by_store_type_ranking`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchStoreStatics = async (params?: any) => {
  const response = await BoV2Request.get<IResponse<IChannelRes>>(
    `/analytics/product/sales/by_store`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchRegionStatics = async (params?: any) => {
  const response = await BoV2Request.get<IResponse<IProductStatisticsRes>>(
    `/analytics/product/sales/by_region`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchAreaStatics = async (params?: any) => {
  const response = await BoV2Request.get<IResponse<IProductStatisticsRes>>(
    `/analytics/product/sales/by_commercial_area`,
    {
      params,
    }
  );

  return response.data.data;
};
