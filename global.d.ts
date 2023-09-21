/// <reference types="next" />

interface IResponse<T> {
  code: string;
  data: T;
  message: string;
}
