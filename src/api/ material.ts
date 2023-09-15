import {
  IMaterialReq,
  IMaterialShippingSaveReq,
  IPartnerCountryRes,
  IPartnerSaveReq,
} from '@InterfaceFarm/material';
import { BoRequest } from '.';

export const fetchMaterialCategory = async (params?: number) => {
  const response = await BoRequest.get('/material/category/list', {
    params,
  });

  console.log('response', response);

  return response.data.data;
};

export const fetchMaterialList = async (params?: IMaterialReq) => {
  const response = await BoRequest.get('/material/info/list', {
    params,
  });

  return response.data.data;
};

export const fetchMaterialFormSave = async (params: string) => {
  const response = await BoRequest.post('/material/info', params);
  console.log('response', response);
  return response.data.data;
};

export const fetchMaterialFormView = async (params: string) => {
  const response = await BoRequest.get(`/material/info/${params}`);
  console.log('response', response);
  return response.data.data;
};

export const fetchMaterialFormModify = async (data: any) => {
  console.log('fetchMaterialFormModify params', data);
  const response = await BoRequest.put(
    `/material/info/${data.params}`,
    data.data
  );
  console.log('fetchMaterialFormModify response', response);
  return response.data.data;
};

// 배송 정보
export const fetchShippingSave = async (data: {
  params: string;
  data: IMaterialShippingSaveReq;
}) => {
  console.log('fetchShippingSave', data);
  const response = await BoRequest.post(
    `/material/shipping/${data.params}`,
    data.data
  );
  console.log('response', response);
  return response.data.data;
};

export const fetchShippingView = async (params: string) => {
  const response = await BoRequest.get(`/material/shipping/${params}`);
  console.log('response', response);
  return response.data.data;
};

export const fetchShippingModify = async (data: {
  params: string;
  data: IMaterialShippingSaveReq;
}) => {
  console.log('params', data);
  const response = await BoRequest.put(
    `/material/shipping/${data.params}`,
    data.data
  );
  console.log('fetchProductFormModify response', response);
  return response.data.data;
};

// 협력업체
export const fetchPartnerList = async (category: string, params?: any) => {
  console.log('fetchPartnerList params', category, params);
  const response = await BoRequest.get(`/partner_company/list/${category}`, {
    params,
  });
  console.log('fetchPartnerList response', response);
  return response.data.data;
};

export const fetchPartnerFormSave = async (params: IPartnerSaveReq) => {
  const response = await BoRequest.post('/partner_company', params);
  console.log('response', response);
  return response.data.data;
};

export const fetchPartnerFormView = async (params: string) => {
  const response = await BoRequest.get(`/partner_company/${params}`);
  console.log('response', response);
  return response.data.data;
};

export const fetchPartnerFormModify = async (data: any) => {
  console.log('params', data);
  const response = await BoRequest.put(
    `/partner_company/${data.params}`,
    data.data
  );
  console.log('fetchProductFormModify response', response);
  return response.data.data;
};

export const fetchPartnerHistory = async (params: any) => {
  const response = await BoRequest.get(
    `/partner_company/history/list/${params}`
  );
  return response.data.data;
};

export const fetchCountry = async (params?: IPartnerCountryRes) => {
  const response = await BoRequest.get('/origin/list', {
    params,
  });

  return response.data.data;
};
