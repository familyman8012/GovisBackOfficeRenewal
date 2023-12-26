export interface IProductTotalRes {
  info: {
    base_dt_start: string;
    base_dt_finish: string;
    comparison_dt_start: string;
    comparison_dt_finish: string;
  };
  result: {
    total_base_sales_count: number;
    total_comparison_sales_count: number;
    total_increase_decrease_number: number;
    total_increase_decrease_rate: number;
  };
}

export interface IProductAnalyzeReq {
  [key: string]: string | number | undefined | string[]; // QueryParam Type과 호환을 위해 추가
  base_dt_start?: string;
  base_dt_finish?: string;
  comparison_dt_start?: string;
  comparison_dt_finish?: string;
  product_info_idx?: string;
  store_idx?: string;
}
export interface IProductAllAnalyzeReq extends IProductAnalyzeReq {
  type?: string;
}

export interface IStoreAnalyzeReq extends IProductAnalyzeReq {
  ranking_limit_number?: number;
}

export interface IProductAnalyzeResListItem {
  item_label: string;
  base_sales_count: number;
  comparison_sales_count: number;
  increase_decrease_number: number;
  increase_decrease_rate: number;
  base_included_days?: number;
  comparison_included_days?: number;
}

export interface IProductAnalyzeRes {
  info: IProductAnalyzeReq;
  list: IProductAnalyzeResListItem[];
  total: {
    total_base_sales_count: number;
    total_comparison_sales_count: number;
    total_increase_decrease_number: number;
    total_increase_decrease_rate: number;
  };
}

export interface ICategoryAnalyzeListItem extends IProductAnalyzeResListItem {
  item_key: number;
}

export interface ICategoryAnalyzeRes extends Omit<IProductAnalyzeRes, 'list'> {
  list: ICategoryAnalyzeListItem[];
}

export interface ICategoryDetailListItem {
  product_info_idx: number;
  product_name_ko: string;
  base_sales_count: number;
  comparison_sales_count: number;
  increase_decrease_number: number;
  increase_decrease_rate: number;
}

export interface ICategoryDetailRes {
  info: IProductAnalyzeReq;
  list: ICategoryDetailListItem[];
}

export interface IChannelRes {
  info: IProductAnalyzeReq;
  list: {
    store_idx: number;
    store_name: string;
    store_type_code: string;
    store_type_value: string;
    store_status_code: string;
    store_status_value: string;
    base_sales_count: number;
    comparison_sales_count: number;
    increase_decrease_number: number;
    increase_decrease_rate: number;
  }[];
  total: {
    total_base_sales_count: number;
    total_comparison_sales_count: number;
    total_increase_decrease_number: number;
    total_increase_decrease_rate: number;
  };
}

export interface IChannelRankingReq extends IProductAnalyzeReq {
  ranking_limit_number?: number;
}

export interface IChannelStoreListItem {
  ranking: number;
  store_idx: number;
  store_name: string;
  base_sales_count: number;
  comparison_sales_count: number;
  increase_decrease_number: number;
  increase_decrease_rate: number;
}

export interface IChannelRankingRes {
  info: IChannelRankingReq;
  direct_store_list: IChannelStoreListItem[];
  franchisee_store_list: IChannelStoreListItem[];
}
