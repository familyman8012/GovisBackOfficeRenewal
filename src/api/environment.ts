import { CommonRequest } from '.';

export type EnvRow = {
  environment_variable_idx: string;
  name: string;
  code: string;
  value: string;
};

type EnvironmentResponse = IResponse<{
  list: EnvRow[];
}>;

export const fetchEnvironment = async (params?: {
  name?: string;
  environment_varialbe_idx?: string;
  code?: string;
  value?: string;
}) => {
  const response = await CommonRequest.get<EnvironmentResponse>(
    '/environment_variable/list',
    {
      params,
    }
  );

  return response.data.data;
};

export const fetchEnvironmentByNames = async <T extends string>(
  names: readonly T[]
) => {
  const response = await CommonRequest.get<EnvironmentResponse>(
    '/environment_variable/list',
    {
      params: {
        name: names,
      },
    }
  );

  const arr = response.data.data?.list || [];

  return arr.reduce(
    (acc, cur) => {
      const name = cur.name as T;
      if (names.includes(name)) {
        // eslint-disable-next-line no-prototype-builtins
        if (!acc.hasOwnProperty(name)) {
          acc[name] = [];
        }
        acc[name].push(cur);
      }
      return acc;
    },
    {} as Record<T, typeof arr>
  );
};
