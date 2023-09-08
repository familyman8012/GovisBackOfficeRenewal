import React from 'react';
import { EnvRow } from '@ApiFarm/environment';

const useFormOptionsWithEnvs = <T extends string>(
  names: readonly T[],
  envs: EnvRow[]
) => {
  return React.useMemo(
    () =>
      envs.reduce(
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
