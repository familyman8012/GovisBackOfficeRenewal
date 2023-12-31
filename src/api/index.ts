import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from 'axios';
import { IResponse } from '../interface/response';
import { authStore } from '../mobx/store';

export interface AxiosUtilResponse<T> {
  code: string;
  data: T;
  message: string;
}

// window location 에 따른 기본 url
const getBaseUrl = () => {
  let reVal;
  if (process.env.DEVMODE === 'development') {
    reVal = 'https://feature.api.gopizza.kr';
  } else {
    reVal = 'https://api.gopizza.kr';
  }

  let host;
  if (typeof window !== 'undefined') {
    host = window.location.host;
  }

  const hostSplit = host?.split('.');

  if ((hostSplit && hostSplit[0] === 'dev') || host?.includes('vercel')) {
    reVal = 'https://dev.api.gopizza.kr';
  } else if (
    (hostSplit && hostSplit[0] === '192') ||
    (hostSplit && hostSplit[0].indexOf('localhost') >= 0) ||
    (hostSplit && hostSplit[0] === 'local')
  ) {
    reVal = 'https://feature.api.gopizza.kr';
    // reVal = 'https://dev.api.gopizza.kr';
    // reVal = "http://api.gopizza.kr";
    // reVal = "http://192.168.10.131:8000";
    // reVal = "http://192.168.10.130:8080";
  }

  return reVal;
};

export const getToolBaseUrl = () => {
  let reVal = 'http://tools.gopizza.kr';

  let host;
  if (typeof window !== 'undefined') {
    host = window.location.host;
  }

  const hostSplit = host?.split('.');

  if (hostSplit && hostSplit[0] === 'dev') {
    reVal = 'https://tools.gopizza.kr';
  } else if (
    (hostSplit && hostSplit[0] === '192') ||
    (hostSplit && hostSplit[0].indexOf('localhost') >= 0) ||
    (hostSplit && hostSplit[0] === 'local')
  ) {
    reVal = 'http://dev.tools.gopizza.kr';
    // reVal = "http://feature.api.gopizza.kr";
    // reVal = "https://tools.gopizza.kr";
    // reVal = "http://192.168.0.10:8000";
  }

  return reVal;
};

// ApiRequest 생성
export const ApiRequest = axios.create({
  baseURL: `${getBaseUrl()}/runway/v2`,
});

// BoRequest 생성
const VERSION = 'v2';
export const BoRequest = axios.create({
  baseURL: `${getBaseUrl()}/bo/${VERSION}/`,
});

// Common Request 생성
export const CommonRequest = axios.create({
  baseURL: `${getBaseUrl()}/com/v2/`,
  // timeout: 3000,
});

export const BoV2Request = axios.create({ baseURL: `${getBaseUrl()}/bo/v2` });

export const FqsToolsRequest = axios.create({
  baseURL: getToolBaseUrl(),
});

export const FqsApiRequest = axios.create({
  baseURL: getBaseUrl(),
});

// 공통 Request
const handleRequestFullfilled = async (request: InternalAxiosRequestConfig) => {
  if (authStore.token) {
    // @ts-ignore
    request.headers = {
      'GO-AUTH': `${String(authStore.token)}`,
      ...request.headers,
    };
  } else {
    authStore.init();
  }

  return request;
};

// 공통 Request - error
const handleRequestReject = (e: unknown) => Promise.reject(e);

export const handleResponseFullfilled = (
  response: AxiosResponse<IResponse<unknown>>
) => {
  if (response.data.code && response.data.code !== '0000') {
    /* eslint-disable no-throw-literal */
    throw {
      code: response?.data?.code,
      message: response.data.message,
      response,
    };
  }

  return response;
};

interface IErrorResponse {
  message: string;
  [key: string]: unknown; // 오류 응답이 다른 프로퍼티를 포함할 수 있습니다.
}

export const handleResponseReject = (error: AxiosError) => {
  if (
    error.response &&
    (error.response.data as IErrorResponse).message === 'Signature has expired.'
  ) {
    alert('로그인 시간이 만료되었습니다. 다시 로그인 해주세요');
    localStorage.clear();
    window.location.href = '/';
    return;
  }

  // eslint-disable-next-line consistent-return
  return Promise.reject(error);
};

const registerInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    handleRequestFullfilled,
    handleRequestReject
  );
  instance.interceptors.response.use(
    handleResponseFullfilled,
    handleResponseReject
  );
};

// 공통 Interceptor 적용
registerInterceptors(ApiRequest);
registerInterceptors(BoRequest);
registerInterceptors(BoV2Request);
registerInterceptors(CommonRequest);
registerInterceptors(FqsApiRequest);
registerInterceptors(FqsToolsRequest);
