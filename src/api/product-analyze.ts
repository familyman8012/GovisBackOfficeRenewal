import {
  ICategoryDetailRes,
  ICategoryAnalyzeRes,
  IChannelRankingRes,
  IChannelRes,
  IProductAnalyzeRes,
  IProductAnalyzeReq,
  IProductAllAnalyzeReq,
  IProductDailyAnalyzeReq,
  IStoreDailySales,
} from '@InterfaceFarm/product-analyze';
import { BoV2Request } from '.';

export const fetchAllProductAnalyze = async (params: IProductAllAnalyzeReq) => {
  const { type, ...rest } = params;
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/overall/${type}`,
    {
      params: rest,
    }
  );

  return response.data.data;
};

export const fetchCategoryAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<ICategoryAnalyzeRes>>(
    `/analytics/product/sales/by_category`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchCategoryDetailAnalyze = async (
  pathname: number,
  params: IProductAnalyzeReq
) => {
  const response = await BoV2Request.get<IResponse<ICategoryDetailRes>>(
    `/analytics/product/sales/category/${pathname}`,
    {
      params,
    }
  );
  return response.data.data;
};

export const fetchOrderAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/by_order_method`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchChannelAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/by_order_channel`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchStoreRankingAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IChannelRankingRes>>(
    `/analytics/product/sales/by_store_type_ranking`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchStoreAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IChannelRes>>(
    `/analytics/product/sales/by_store`,
    {
      params,
    }
  );

  return response.data.data;
};

// 2024.03.07 매장별 현황 - 매장별 제품 판매 현황 (일별)
export const fetchStoreDayAnalyze = async (
  params?: IProductDailyAnalyzeReq
) => {
  const response = await BoV2Request.get<IResponse<IStoreDailySales>>(
    `/analytics/product/sales/by_store/daily`,
    {
      params: { ...params },
    }
  );

  return response.data.data;
};

export const fetchRegionAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/by_region`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchAreaAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/by_commercial_area`,
    {
      params,
    }
  );

  return response.data.data;
};
