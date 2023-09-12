import { IProductReq, IProductRes } from '@InterfaceFarm/product';
import { BoRequest } from '.';

export const fetchProductList = async (params?: IProductReq) => {
  const response = await BoRequest.get<IResponse<IProductRes>>(
    '/product/info/list',
    {
      params,
    }
  );

  return response.data.data;
};
