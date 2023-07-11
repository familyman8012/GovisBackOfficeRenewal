export interface IResponse<T> {
  code: string;
  data: T;
  message: string;
}

export type ServerError = {
  code: string;
  message: string;
  status: number;
  response: unknown;
};
