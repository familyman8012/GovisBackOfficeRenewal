import React from 'react';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';

const useFormOptionsWithEnvs = <T extends string>(
  names: readonly T[],
  envs: IEnvironmentResItem[]
) => {
  return React.useMemo(
    () =>
      envs
        ?.filter(env => env.is_hidden !== 1)
        ?.reduce(
          (acc, cur) => {
            const name = cur.name as T;
            if (names.includes(name)) {
              if (!Array.isArray(acc[name])) {
                acc[name] = [];
              }
              acc[name].push({
                label: `${cur.value}`,
                value: `${cur.environment_variable_idx}`,
                code: cur.code,
              });
            }
            return acc;
          },
          {} as Record<T, { label: string; value: string; code: string }[]>
        ),
    [envs]
  );
};

export default useFormOptionsWithEnvs;
