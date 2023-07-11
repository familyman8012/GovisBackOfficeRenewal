import dayjs from "dayjs";

import {
  ICouponCreateParams,
  ICouponUpdateParams,
  ICouponFindSerials,
  ICouponSerialCustomer,
  ICouponPatch,
  ICouponMessage,
  ICouponMessageUpdateParams,
  ICouponMessageResendParams,
  ICouponFetchParams,
  ICouponCopyParams,
  ICouponSerialCreateParams,
} from "../interface/coupon";
import { BoRequest } from ".";

export const fetchCouponFindAll = async (params: any) => {
  const response = await BoRequest.get("/coupon", {
    params,
  });

  return response.data.data;
};

export const fetchCouponFindById = async (id: number) => {
  const response = await BoRequest.get(`/coupon/${id}`);

  return response.data.data;
};

export const fetchCouponFindMessageInfo = async (id: number) => {
  const response = await BoRequest.get<any>(`/coupon_notification`, {
    params: {
      coupon_idx: id,
    },
  });

  return response.data.data;
};

export const fetchCouponCreate = async (params: ICouponCreateParams) => {
  const response = await BoRequest.post("/coupon", params);

  return response.data.data;
};

export const fetchCouponUpdate = async (params: ICouponUpdateParams) => {
  const response = await BoRequest.put(`/coupon`, params);

  return response.data.data;
};

export const fetchCouponUpdateTemplate = async (id: number, image: File) => {
  const formData = new FormData();
  formData.append("coupon_idx", `${id}`);
  formData.append("upload_image", image);

  const response = await BoRequest.put(`/coupon_template`, formData);

  return response.data.data;
};

export const fetchCouponSaveMessageInfo = async (
  id: number,
  params: ICouponMessageUpdateParams
) => {
  const response = await BoRequest.post<any>(`/coupon_notification`, {
    coupon_idx: id,
    ...params,
  });

  return response.data.data;
};

export const fetchCouponCopyCoupon = async (params: ICouponCopyParams) => {
  const response = await BoRequest.post(`/coupon/copy`, params);

  return response.data.data;
};

export const fetchCouponRemove = async (id: number) => {
  const response = await BoRequest.delete(`/coupon`, {
    data: {
      coupon_idx: id,
    },
  });

  return response.data.data;
};

export const fetchCouponFindSerials = async (id: number, params: any) => {
  const response = await BoRequest.get<any>(`/coupon_list/${id}`, {
    params,
  });

  return response.data.data;
};

export const fetchCouponAddSerial = async (
  id: number,
  params?: ICouponSerialCreateParams
) => {
  const response = await BoRequest.post(`/coupon_list/${id}`, params);

  return response.data.data;
};

export const fetchCouponUpdateSerial = async (
  id: number,
  params: ICouponSerialCustomer
) => {
  const response = await BoRequest.put(`/coupon_list/${id}`, params);

  return response.data.data;
};

export const fetchCouponResendMessage = async (
  params: ICouponMessageResendParams
) => {
  const response = await BoRequest.post(
    `/coupon_list/notification_resend`,
    params
  );

  return response.data.data;
};

// export const fetchCouponDownloadSerials = (id: number) => {
//   return BoRequest.get(`/coupon_list/${id}`, {
//     params: {
//       export: 1,
//     },
//     responseType: "blob",
//   })
//     .then(
//       downloadAxiosResponse(
//         `쿠폰 상세 리스트_${dayjs().format("YYYY-MM-DD HH:mm:ss")}.xlsx`
//       )
//     )
//     .catch(() => new Error("다운로드에 실패하였습니다."));
// };

export const fetchCouponUploadCustomerList = async (id: number, file: File) => {
  const formData = new FormData();
  formData.append("coupon_idx", `${id}`);
  formData.append("upload_file", file);
  const response = await BoRequest.put("/coupon_list/customer", formData);

  return response.data.data;
};

export const cancelCouponSerial = async (params: {
  coupon_idx: number;
  coupon_number: string;
}) => BoRequest.put("/coupon_list/cancel", params).then((res) => res.data.data);

export const registerCouponSerial = async (params: {
  coupon_idx: number;
  coupon_number: string;
  store_id: number;
}) => BoRequest.put("/coupon_list/use", params).then((res) => res.data.data);

export const fetchCouponFindHistories = async (id: number) => {
  const response = await BoRequest.get(`/coupon_history/${id}`);

  return response.data.data;
};
