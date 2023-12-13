import {
  FqsStoreInfoParams,
  IFqsInspectionInfo,
  IFqsInspectionListResponse,
  IFqsStoreCameraInfo,
  IFqsStoreCameraVideoList,
  IFqsStoreDeviceInfo,
  IFqsStoreDeviceListResponse,
  IFqsStoreInfoResponse,
  IFqsStoreStatus,
} from '@InterfaceFarm/ai-fqs';
import {
  IAisttStateReq,
  IDetailStateRes,
  IManufacturingListReq,
  IManufacturingListRes,
  IManufacturingQualityRes,
  IManufacturingTimeRes,
  IPizzaStatusRes,
  IReportAnalysisModifyReq,
  IReportDetailAnalysModifyisRes,
  IReportInfoRes,
  IReportListReq,
  IReportListRes,
  IReportManufacturingStatusRes,
  IReportScoreAverageDetailRes,
  IReportScoreAverageRes,
  IStoreManufacturingStateRes,
  IimprovementStatusRes,
} from '@InterfaceFarm/aistt';
import { QueryParams } from '@HookFarm/useQueryParams';
import { BoV2Request } from '.';

// 제품 분석
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

export const requestInspection = (inspection_info_idx: number) => {
  return BoV2Request.put(
    `/aifqs/inspection/info/${inspection_info_idx}/re-request`
  );
};

// 기기관리
export const fetchAiFqsDeviceStatus = () => {
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
  return BoV2Request.get<IResponse<IFqsStoreCameraInfo>>(
    `/aifqs/stt/device/camera/${params.store_idx}/${params.store_stt_camera_idx}/info`
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

// 현황, 보고서
export const fetchImprovementStatus = async (params?: IAisttStateReq) => {
  const response = await BoV2Request.get<IResponse<IimprovementStatusRes>>(
    `/aifqs/overview/pizzas/improvement/needed`,
    {
      params,
    }
  );
  return response.data.data;
};

export const fetchManufacturingQuality = async (params?: IAisttStateReq) => {
  const response = await BoV2Request.get<IResponse<IManufacturingQualityRes>>(
    `/aifqs/overview/manufacturing/quality`,
    {
      params,
    }
  );
  return response.data.data;
};

export const fetchManufacturingTime = async (params?: IAisttStateReq) => {
  const response = await BoV2Request.get<IResponse<IManufacturingTimeRes>>(
    `/aifqs/overview/manufacturing/average-production-time`,
    {
      params,
    }
  );
  return response.data.data;
};

export const fetchStoreManufacturingState = async (params?: IAisttStateReq) => {
  const response = await BoV2Request.get<
    IResponse<IStoreManufacturingStateRes>
  >(`/aifqs/overview/stores/manufacturing-status`, {
    params,
  });
  return response.data.data;
};

export const fetchPizzaStatus = async (params?: IAisttStateReq) => {
  console.log('fetchPizzaStatus params', params);
  const response = await BoV2Request.get<IResponse<IPizzaStatusRes>>(
    `/aifqs/quality/pizza-status`,
    {
      params,
    }
  );
  return response.data.data;
};

export const fetchDetailState = async (params?: IAisttStateReq) => {
  const response = await BoV2Request.get<IResponse<IDetailStateRes>>(
    `/aifqs/overview/details/reports`,
    {
      params,
    }
  );
  return response.data.data;
};

export const fetchManufacturingList = async (
  params?: IManufacturingListReq
) => {
  const response = await BoV2Request.get<IResponse<IManufacturingListRes>>(
    `/aifqs/overview/production/list`,
    {
      params,
    }
  );
  return response.data.data;
};

export const fetchManufacturingInfo = async (inspection_info_idx?: number) => {
  const response = await BoV2Request.get<IResponse<IFqsInspectionInfo>>(
    `/aifqs/overview/production/detail/${inspection_info_idx}`
  );
  return response.data.data;
};

// 레포트
export const fetchReportList = async (params: IReportListReq) => {
  const response = await BoV2Request.get<IResponse<IReportListRes>>(
    `/aifqs/reports/list`,
    {
      params,
    }
  );
  return response.data.data;
};

export const fetchReportInfo = async (fqs_reports_idx: number) => {
  const response = await BoV2Request.get<IResponse<IReportInfoRes>>(
    `/aifqs/reports/details/${fqs_reports_idx}`
  );
  return response.data.data;
};

export const fetchAnalysisResult = async ({
  fqs_reports_idx,
  number,
  contents,
}: IReportAnalysisModifyReq) => {
  const response = await BoV2Request.put<
    IResponse<IReportDetailAnalysModifyisRes>
  >(`/aifqs/reports/details/${fqs_reports_idx}/analysis-result/${number}`, {
    contents,
  });

  return response.data.data;
};

export const fetchReportManufacturingStatus = async ({
  fqs_reports_idx,
  store_idx,
}: {
  fqs_reports_idx: string;
  store_idx?: string;
}) => {
  const response = await BoV2Request.get<
    IResponse<IReportManufacturingStatusRes>
  >(
    `/aifqs/reports/details/${fqs_reports_idx}/manufacturing-status`,
    store_idx !== 'undefined'
      ? {
          params: { store_idx },
        }
      : {}
  );
  return response.data.data;
};

export const fetchScoreResult = async ({
  fqs_reports_idx,
  store_idx,
}: {
  fqs_reports_idx: string;
  store_idx?: string;
}) => {
  const response = await BoV2Request.get<IResponse<IReportScoreAverageRes>>(
    `/aifqs/reports/details/${fqs_reports_idx}/ratings-sorted-results`,
    store_idx !== 'undefined'
      ? {
          params: { store_idx },
        }
      : {}
  );

  return response.data.data;
};

export const fetchScoreResultDetail = async ({
  fqs_reports_idx,
  product_info_idx,
  store_idx,
}: {
  fqs_reports_idx: string;
  product_info_idx: string;
  store_idx?: string;
}) => {
  const response = await BoV2Request.get<
    IResponse<IReportScoreAverageDetailRes>
  >(
    `/aifqs/reports/details/${fqs_reports_idx}/ratings-sorted-results/${product_info_idx}`,
    store_idx !== 'undefined'
      ? {
          params: { store_idx },
        }
      : {}
  );

  return response.data.data;
};
