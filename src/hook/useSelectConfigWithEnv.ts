import React from 'react';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';

const useSelectConfigWithEnv = (config: any, envs: IEnvironmentResItem[]) => {
  return React.useMemo(
    () =>
      config.map((select: any) => {
        const matchEnvs = envs.filter(env => select.field.endsWith(env.name));

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
