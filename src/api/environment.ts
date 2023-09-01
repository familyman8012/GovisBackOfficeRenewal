import { CommonRequest } from '.';

export const fetchEnvironment = async (params?: string) => {
  const response = await CommonRequest.get('/environment_variable/list', {
    params,
  });

  return response.data.data;
};
