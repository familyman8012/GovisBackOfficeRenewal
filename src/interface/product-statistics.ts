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
