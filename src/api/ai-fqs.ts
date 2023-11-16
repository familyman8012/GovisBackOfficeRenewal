import {
  FqsStoreInfoParams,
  IFqsInspectionInfo,
  IFqsInspectionListResponse,
  IFqsStoreCameraVideoList,
  IFqsStoreDeviceInfo,
  IFqsStoreDeviceListResponse,
  IFqsStoreInfoResponse,
  IFqsStoreStatus,
} from '@InterfaceFarm/ai-fqs';
import { QueryParams } from '@HookFarm/useQueryParams';
import { BoV2Request } from '.';

export const fetchInspectionList = (params: QueryParams) => {
  return BoV2Request.get<IResponse<IFqsInspectionListResponse>>(
    '/aifqs/inspection/list',
    { params }
  ).then(res => res.data.data);
};

export const fetchInspectionInfo = (inspection_info_idx: number) => {
  return BoV2Request.get<IResponse<IFqsInspectionInfo>>(
    `/aifqs/inspection/info/${inspection_info_idx}`
  ).then(res => res.data.data);
};

export const fetchAiFqsDeviceStatus = () => {
  /** @TODO typedef */
  return BoV2Request.get<IResponse<IFqsStoreStatus>>(
    `/aifqs/stt/devices/statuses`
  ).then(res => res.data.data);
};

export const fetchAisttStoreList = (params: QueryParams) => {
  return BoV2Request.get<IResponse<IFqsStoreDeviceListResponse>>(
    `/aifqs/stt/devices/list`,
    { params }
  ).then(res => res.data.data);
};

export const fetchAisttStoreInfo = (store_idx: number) => {
  return BoV2Request.get<IResponse<IFqsStoreInfoResponse>>(
    `/aifqs/stt/info/${store_idx}`
  ).then(res => res.data.data);
};

export const fetchAisttDeviceInfo = (store_idx: number) => {
  return BoV2Request.get<IResponse<IFqsStoreDeviceInfo>>(
    `/aifqs/stt/device/${store_idx}`
  ).then(res => res.data.data);
};

export const fetchAisttDeviceCameraInfo = (params: {
  store_idx: number;
  store_stt_camera_idx: number;
}) => {
  return BoV2Request.get<IResponse<any>>(
    `/aifqs/stt/device/camera/${params.store_idx}/${params.store_stt_camera_idx}`
  ).then(res => res.data.data);
};

export const fetchAisttDeviceCameraVideoList = (params: {
  store_idx: number;
  store_stt_camera_idx: number;
  recode_date: string;
}) => {
  return BoV2Request.get<IResponse<IFqsStoreCameraVideoList>>(
    `/aifqs/stt/device/camera/${params.store_idx}/${params.store_stt_camera_idx}/list/${params.recode_date}`
  ).then(res => res.data.data);
};

export const updateUpdateAisttInfo = ({
  store_idx,
  ...data
}: FqsStoreInfoParams) => {
  return BoV2Request.put(`/aifqs/stt/info/${store_idx}`, data);
};
