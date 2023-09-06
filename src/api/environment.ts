import { IEnvironmentReq } from '@InterfaceFarm/environment';
import { CommonRequest } from '.';

export const fetchEnvironment = async (params: IEnvironmentReq) => {
  const response = await CommonRequest.get('/environment_variable/list', {
    params,
  });

  return response.data.data;
};
