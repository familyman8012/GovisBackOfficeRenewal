import {
  ICategoryDetailRes,
  IChannelRankingRes,
  IProductAnalyzeReq,
  IProductAnalyzeRes,
  IProductTotalRes,
} from '@InterfaceFarm/product-analyze';
import { BoV2Request } from '.';

export const fetchAllProductInfo = async () => {
  const response = await BoV2Request.get<IResponse<IProductTotalRes>>(
    `analytics/product/sales/dashboard/total`
  );

  return response.data.data;
};

export const fetchAllProductAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/dashboard/hourly`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchCategoryAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<ICategoryDetailRes>>(
    `/analytics/product/sales/dashboard/category_detail`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchOrderAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/dashboard/by_order_method`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchChannelAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/dashboard/by_order_channel`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchStoreRankingAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IChannelRankingRes>>(
    `/analytics/product/sales/dashboard/by_store_type_ranking`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchRegionAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/dashboard/by_region`,
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchAreaAnalyze = async (params?: IProductAnalyzeReq) => {
  const response = await BoV2Request.get<IResponse<IProductAnalyzeRes>>(
    `/analytics/product/sales/dashboard/by_commercial_area`,
    {
      params,
    }
  );

  return response.data.data;
};
