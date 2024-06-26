import {
  IMenuSearchModalReq,
  IMenuSearchModalRes,
  IProductSearchModalReq,
  IProductSearchModalRes,
  IStoreModalReq,
  IStoreModalRes,
} from '@InterfaceFarm/search-modal';
import { CommonRequest } from '.';

export const fetchProductSearchModal = async (
  params?: IProductSearchModalReq
) => {
  const response = await CommonRequest.get<IResponse<IProductSearchModalRes>>(
    '/product/info/list',
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchStoreSearchModal = async (params?: IStoreModalReq) => {
  const response = await CommonRequest.get<IResponse<IStoreModalRes>>(
    '/store/list',
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchMenuSearchModal = async (params?: IMenuSearchModalReq) => {
  const response = await CommonRequest.get<IResponse<IMenuSearchModalRes>>(
    '/menu/info/list',
    {
      params: {
        ...params,
        per_num: 9999,
      },
    }
  );

  return response.data.data;
};
