export interface IMenuTotalRes {
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

export interface IMenuAnalyzeReq {
  [key: string]: string | number | undefined | string[]; // QueryParam Type과 호환을 위해 추가
  base_dt_start?: string;
  base_dt_finish?: string;
  comparison_dt_start?: string;
  comparison_dt_finish?: string;
  menu_info_idx?: string;
  store_idx?: string;
}
export interface IMenuAllAnalyzeReq extends IMenuAnalyzeReq {
  type?: string;
}

export interface IMenuDailyAnalyzeReq extends IMenuAnalyzeReq {
  current_page_number?: number;
  per_page_number?: number;
}

export interface IStoreAnalyzeReq extends IMenuAnalyzeReq {
  ranking_limit_number?: number;
}

export interface IMenuAnalyzeResListItem {
  item_label: string;
  base_sales_count: number;
  comparison_sales_count: number;
  increase_decrease_number: number;
  increase_decrease_rate: number;
  base_included_days?: number;
  comparison_included_days?: number;
}

export interface IMenuAnalyzeRes {
  info: IMenuAnalyzeReq;
  list: IMenuAnalyzeResListItem[];
  total: {
    total_base_sales_count: number;
    total_comparison_sales_count: number;
    total_increase_decrease_number: number;
    total_increase_decrease_rate: number;
  };
}

export interface ICategoryAnalyzeListItem extends IMenuAnalyzeResListItem {
  item_key: number;
}

export interface ICategoryAnalyzeRes extends Omit<IMenuAnalyzeRes, 'list'> {
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
  info: IMenuAnalyzeReq;
  list: ICategoryDetailListItem[];
}

export interface IChannelRes {
  info: IMenuAnalyzeReq;
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

export interface IChannelRankingReq extends IMenuAnalyzeReq {
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

// 2024.03.08 매장별 일별 제품 판매현황

export interface IStoreSalesDayInfo {
  sales_day: string;
  sales_amount: number;
}

export interface IStoreDailySalesList {
  store_idx: number;
  store_name: string;
  store_type_code: string;
  store_type_value: string;
  store_status_code: string;
  store_status_value: string;
  daily_sales_list: IStoreSalesDayInfo[];
}

export interface IStoreDailySales {
  info: IMenuDailyAnalyzeReq;
  list: IStoreDailySalesList[];
  daily_sales_list_info: {
    total_items: number;
    is_last_page: number;
  };
  total: {
    total_base_sales_count: number;
    total_comparison_sales_count: number;
    total_increase_decrease_number: number;
    total_increase_decrease_rate: number;
  };
}
