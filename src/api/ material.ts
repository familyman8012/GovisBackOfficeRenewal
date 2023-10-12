import {
  IMaterialReq,
  IMaterialShippingSaveReq,
  IPartnerCountryReq,
  IPartnerSaveReq,
} from '@InterfaceFarm/material';
import { BoV2Request } from '.';

export const fetchMaterialCategory = async (params?: number) => {
  const response = await BoV2Request.get('/material/category/list', {
    params,
  });

  return response.data.data;
};

export const fetchMaterialList = async (params?: IMaterialReq) => {
  const response = await BoV2Request.get('/material/info/list', {
    params,
  });

  return response.data.data;
};

export const fetchMaterialFormSave = async (params: string) => {
  const response = await BoV2Request.post('/material/info', params);
  return response.data.data;
};

export const fetchMaterialFormView = async (params: string) => {
  const response = await BoV2Request.get(`/material/info/${params}`);
  return response.data.data;
};

export const fetchMaterialFormModify = async (data: any) => {
  const response = await BoV2Request.put(
    `/material/info/${data.params}`,
    data.data
  );
  return response.data.data;
};

// 배송 정보
export const fetchShippingSave = async (data: {
  params: string;
  data: IMaterialShippingSaveReq;
}) => {
  const response = await BoV2Request.post(
    `/material/shipping/${data.params}`,
    data.data
  );
  return response.data.data;
};

export const fetchShippingView = async (params: string) => {
  const response = await BoV2Request.get(`/material/shipping/${params}`);
  return response.data.data;
};

export const fetchShippingModify = async (data: {
  params: string;
  data: IMaterialShippingSaveReq;
}) => {
  const response = await BoV2Request.put(
    `/material/shipping/${data.params}`,
    data.data
  );
  return response.data.data;
};

// 협력업체
export const fetchPartnerList = async (category: string, params?: any) => {
  const response = await BoV2Request.get(`/partner_company/list/${category}`, {
    params,
  });
  return response.data.data;
};

export const fetchPartnerFormSave = async (params: IPartnerSaveReq) => {
  const response = await BoV2Request.post('/partner_company', params);
  return response.data.data;
};

export const fetchPartnerFormView = async (params: string) => {
  const response = await BoV2Request.get(`/partner_company/${params}`);
  return response.data.data;
};

export const fetchPartnerFormModify = async (data: any) => {
  const response = await BoV2Request.put(
    `/partner_company/${data.params}`,
    data.data
  );
  return response.data.data;
};

export const fetchPartnerHistory = async (params: any) => {
  const response = await BoV2Request.get(
    `/partner_company/history/list/${params}`
  );
  return response.data.data;
};

export const fetchCountryList = async (params?: IPartnerCountryReq) => {
  const response = await BoV2Request.get('/origin/list', {
    params,
  });

  return response.data.data;
};
