import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { authStore } from "../mobx/store";
import { IResponse } from "../interface/response";

export interface AxiosUtilResponse<T> {
  code: string;
  data: T;
  message: string;
}

//window location 에 따른 기본 url
const getBaseUrl = () => {
  let reVal = "https://dev.api.gopizza.kr";

  let host;
  if (typeof window !== "undefined") {
    host = window.location.host;
  }

  const hostSplit = host?.split(".");

  if (hostSplit && hostSplit[0] === "dev") {
    reVal = "http://dev.api.gopizza.kr";
  } else if (
    (hostSplit && hostSplit[0] === "192") ||
    (hostSplit && hostSplit[0].indexOf("localhost") >= 0) ||
    (hostSplit && hostSplit[0] === "local")
  ) {
    reVal = "http://dev.api.gopizza.kr";
    //reVal = "http://feature.api.gopizza.kr";
    //reVal = "http://api.gopizza.kr";
    // reVal = "http://192.168.0.10:8000";
  }

  return reVal;
};

// ApiRequest 생성
const ApiRequest = axios.create({
  baseURL: `${getBaseUrl()}/runway/v2`,
});

// BoRequest 생성
const VERSION = "v1";
const BoRequest = axios.create({ baseURL: `${getBaseUrl()}/bo/${VERSION}/` });

export const getToolBaseUrl = () => {
  let reVal = "http://tools.gopizza.kr";

  let host;
  if (typeof window !== "undefined") {
    host = window.location.host;
  }

  const hostSplit = host?.split(".");

  if (hostSplit && hostSplit[0] === "dev") {
    reVal = "https://tools.gopizza.kr";
  } else if (
    (hostSplit && hostSplit[0] === "192") ||
    (hostSplit && hostSplit[0].indexOf("localhost") >= 0) ||
    (hostSplit && hostSplit[0] === "local")
  ) {
    reVal = "http://dev.tools.gopizza.kr";
    //reVal = "http://feature.api.gopizza.kr";
    //reVal = "https://tools.gopizza.kr";
    // reVal = "http://192.168.0.10:8000";
  }

  return reVal;
};

export let FqsToolsRequest = axios.create({
  baseURL: getToolBaseUrl(),
});

export const FqsApiRequest = axios.create({
  baseURL: getBaseUrl(),
});

// 공통 Request
const handleRequestFullfilled = async (request: AxiosRequestConfig) => {
  if (
    localStorage.getItem("token") !== null &&
    localStorage.getItem("user_info") !== null &&
    authStore.user_info === null
  ) {
    authStore.init();
  }
  (request.headers as any) = {
    Authorization: `jwt ${String(authStore.token)}`,
    //Authorization: `jwt Q/aupDRJRa1klgevswkLSClrCGzvtfwGL1xfq20t5fZzA2/87YvQm/cXSD4kYw8vzu7m7bd4nZX9oJyvQOIv3kJF5R3KAjIW5Rik2K3qrJXKgLMES/kt/LyVw08suRlZ77MfSanHyW5jh1uydTRTKEP3cfFfADjglnN+JPNnhJg0s+rxNTOzh3FJ+t+cdjhrXpza3u74i2dFejqayvDKORHC+I1F1BSzU8NNUO1K57tfIg+LUc8T4EJZrJ331RK+WVTzVos4aoZqgPn2L2n7sA==`,
    ...request.headers,
  };

  return request;
};

// 공통 Request - error
const handleRequestReject = (e: any) => Promise.reject(e);

export const handleResponseFullfilled = (
  response: AxiosResponse<IResponse<any>>
) => {
  if (response.data.code && response.data.code !== "0000") {
    throw {
      code: response?.data?.code,
      message: response.data.message,
      response,
    };
  }

  return response;
};

export const handleResponseReject = (error: any) => {
  if (
    error.response &&
    error.response.data.message === "Signature has expired."
  ) {
    alert("로그인 시간이 만료되었습니다. 다시 로그인 해주세요");
    localStorage.clear();
    return (window.location.href = "/");
  }

  return Promise.reject(error);
};

// 공통 Request 적용
ApiRequest.interceptors.request.use(
  handleRequestFullfilled,
  handleRequestReject
);
ApiRequest.interceptors.response.use(
  handleResponseFullfilled,
  handleResponseReject
);
BoRequest.interceptors.request.use(
  handleRequestFullfilled,
  handleRequestReject
);
BoRequest.interceptors.response.use(
  handleResponseFullfilled,
  handleResponseReject
);
FqsApiRequest.interceptors.request.use(
  handleRequestFullfilled,
  handleRequestReject
);
FqsApiRequest.interceptors.response.use(
  handleResponseFullfilled,
  handleResponseReject
);
FqsToolsRequest.interceptors.request.use(
  handleRequestFullfilled,
  handleRequestReject
);
FqsToolsRequest.interceptors.response.use(
  handleResponseFullfilled,
  handleResponseReject
);
export { ApiRequest, BoRequest };
