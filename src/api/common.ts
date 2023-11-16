import { IMaterialReq } from '@InterfaceFarm/material';
import { CommonRequest } from '.';

export const fetchCommonMaterialList = async (params?: IMaterialReq) => {
  const response = await CommonRequest.get('/material/info/list', {
    params,
  });

  return response.data.data;
};
