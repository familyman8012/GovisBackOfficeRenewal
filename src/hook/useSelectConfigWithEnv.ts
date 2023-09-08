import React from 'react';
import { EnvRow } from '@ApiFarm/environment';

const useSelectConfigWithEnv = (
  config: any,
  envs: Record<string, EnvRow[]>
) => {
  return React.useMemo(
    () =>
      config.map((select: any) => {
        const matchEnvs =
          Object.entries(envs).find(([key, value]) =>
            select.field.endsWith(key)
          )?.[1] ?? [];

        return {
          ...select,
          options: [
            ...select.options,
            ...matchEnvs.map(env => ({
              label: env.value,
              value: env.environment_variable_idx,
            })),
          ],
        };
      }),
    [config, envs]
  );
};

export default useSelectConfigWithEnv;
