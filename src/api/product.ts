import {
  IProductChannelImg,
  IProductReq,
  IProductRes,
} from '@InterfaceFarm/product';
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

// 채널 이미지
export const fetchChannelImgView = async (params: string) => {
  console.log('fetchChannelImgView', params);
  const response = await BoRequest.get(`/product/info/channel/image/${params}`);
  console.log('response', response);
  return response.data.data;
};

export const fetchChannelImgSave = async (data: {
  params: string;
  data: IProductChannelImg;
}) => {
  console.log('fetchChannelImgSave data', data);
  const response = await BoRequest.put(
    `/product/info/channel/image/${data.params}`,
    data.data
  );
  console.log('response', response);
  return response.data.data;
};
