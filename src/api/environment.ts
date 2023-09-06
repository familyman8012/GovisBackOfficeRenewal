import { CommonRequest } from '.';

interface IEnvvironment {
  name?: string;
  environment_variable_idx?: string;
  code?: string;
  value?: string;
}

export const fetchEnvironment = async (params: IEnvvironment) => {
  const response = await CommonRequest.get('/environment_variable/list', {
    params,
  });

  return response.data.data;
};
