import { IMaterialReq } from '@InterfaceFarm/material';
import { IMenuListItem } from '@InterfaceFarm/menu';
import { CommonRequest } from '.';

export const fetchCommonMaterialList = async (params?: IMaterialReq) => {
  const response = await CommonRequest.get('/material/info/list', {
    params,
  });

  return response.data.data;
};

export const fetchCommonMenuList = async (params: any) => {
  const response = await CommonRequest.get<
    IResponse<{
      info: any;
      list: IMenuListItem[];
    }>
  >('/menu/info/list', { params });
  return response.data.data;
};
