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

export const fetchProductFormSave = async (params: string) => {
  const response = await BoRequest.post('/product/info/basic', params);
  console.log('response', response);
  return response.data.data;
};

export const fetchProductFormView = async (params: string) => {
  const response = await BoRequest.get(`/product/info/basic/${params}`);
  console.log('response', response);
  return response.data.data;
};

export const fetchProductFormModify = async (data: any) => {
  console.log('params', data);
  const response = await BoRequest.put(
    `/product/info/basic/${data.params}`,
    data.data
  );
  console.log('fetchProductFormModify response', response);
  return response.data.data;
};
