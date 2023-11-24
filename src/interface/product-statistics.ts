export interface IProductStatisticsReq {
  base_dt_start: string;
  base_dt_finish: string;
  comparison_dt_start: string;
  comparison_dt_finish: string;
  product_info_idx: string;
  store_idx: string;
}

export interface IProductStatisticsResListItem {
  item_label: string;
  base_sales_count: number;
  comparison_sales_count: number;
  increase_decrease_number: number;
  increase_decrease_rate: number;
}

export interface IProductStatisticsRes {
  info: IProductStatisticsReq;
  list: IProductStatisticsResListItem[];
  total: {
    total_base_sales_count: number;
    total_comparison_sales_count: number;
    total_increase_decrease_number: number;
    total_increase_decrease_rate: number;
  };
}

export interface ICategoryStatisticsListItem
  extends IProductStatisticsResListItem {
  item_key: number;
}

export interface ICategoryStatisticsRes
  extends Omit<IProductStatisticsRes, 'list'> {
  list: ICategoryStatisticsListItem[];
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
  info: IProductStatisticsReq;
  list: ICategoryDetailListItem[];
}

export interface IChannelRes {
  info: IProductStatisticsReq;
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

export interface IChannelRankingReq extends IProductStatisticsReq {
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
