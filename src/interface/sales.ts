export interface ISalesParam {
  order_dt_start?: string;
  order_dt_finish?: string;
  store_idx?: string;
  store_status?: string;
  sales_type?: string;
  is_export?: string;
}

export interface ISalesSummaryReq extends Omit<ISalesParam, 'is_export'> {}

export interface ISalesOrderType {
  [key: string]: string | number;
  visit_sales_amount: number;
  visit_sales_ratio: string;
  takeout_sales_amount: number;
  takeout_sales_ratio: string;
  delivery_sales_amount: number;
  delivery_sales_ratio: string;
}

export interface ISalesOrderChannel {
  [key: string]: string | number;
  pos_sales_amount: number;
  pos_sales_ratio: string;
  kiosk_sales_amount: number;
  kiosk_sales_ratio: string;
  baemin_sales_amount: number;
  baemin_sales_ratio: string;
  yogiyo_sales_amount: number;
  yogiyo_sales_ratio: string;
  coupang_sales_amount: number;
  coupang_sales_ratio: string;
  ddangyo_sales_amount: number;
  ddangyo_sales_ratio: string;
  xgo_sales_amount: number;
  xgo_sales_ratio: string;
}

export interface ISalesSummaryRes {
  info: ISalesSummaryReq;
  result: {
    total_sales_amount: string;
    by_order_type: ISalesOrderType;
    by_order_channel: ISalesOrderChannel;
  };
}

export interface IStoreSaleReq extends ISalesSummaryReq {}

export interface IStoreSaleOrderType
  extends Pick<
    ISalesOrderType,
    'visit_sales_amount' | 'takeout_sales_amount' | 'delivery_sales_amount'
  > {
  [key: string]: string | number;
}

export interface IStoreSaleOrderChannel
  extends Pick<
    ISalesOrderChannel,
    | 'pos_sales_amount'
    | 'kiosk_sales_amount'
    | 'baemin_sales_amount'
    | 'yogiyo_sales_amount'
    | 'coupang_sales_amount'
    | 'ddangyo_sales_amount'
    | 'xgo_sales_amount'
  > {
  [key: string]: string | number;
}

export interface IStoreSaleRes {
  info: IStoreSaleReq;
  list: {
    store_idx: number;
    store_name: string;
    store_status: string;
    store_type: string;
    total_sales_amount: number;
    by_order_type: IStoreSaleOrderType;
    by_order_channel: IStoreSaleOrderChannel;
  }[];
}

export interface IDaySaleReq extends Omit<ISalesParam, 'is_export'> {}

export interface IDaySaleRes {
  info: IDaySaleReq;
  list: {
    store_idx: number;
    store_name: string;
    store_status: string;
    store_type: string;
    total_sales_amount: number;
    daily_sales_list: {
      sales_day: string;
      sales_amount: number;
    }[];
  }[];
}
