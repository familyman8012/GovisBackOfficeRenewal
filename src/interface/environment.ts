export interface IEnvironmentReq {
  name?: string;
  environment_variable_idx?: string;
  code?: string;
  value?: string;
}

export interface IEnvironmentResItem {
  environment_variable_idx: number;
  name: string;
  code: string;
  value: string;
}

export interface IEnvironmentRes {
  list: IEnvironmentResItem[];
}
