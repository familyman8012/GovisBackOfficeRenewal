interface ISaleItem {
  menu_info_idx: number;
  menu_name: string;
  menu_code: string;
  quantity: number;
  price: number;
}

export interface ISalesKeyIn {
  store_id: number;
  store_name: string;
  date: string;
  user_id: number;
  user_name: string;
  order_number: string;
  total_price: number;
  order_item_list: {
    order_item_idx?: number;
    menu_info_idx: number;
    menu_name: string;
    quantity: number;
    amount: number;
  }[];
}

export interface ISalesKeyInFormFields {
  store_id: number;
  key_in: Omit<
    ISalesKeyIn & {
      items: ISaleItem[];
    },
    'store_name' | 'store_id' | 'user_id' | 'user_name' | 'order_number'
  >[];
}

export interface ISalesKeyInFetchParams {
  current_num: number;
  per_num: number;
  store_id?: string;
  search_start_dt: string;
  search_end_dt: string;
  sort_type: number;
}

export interface ISalesKeyInFetchResponse {
  total_count: number;
  list: ISalesKeyIn[];
  total: {
    date: string;
    menu_info_idx: number;
    menu_name: string;
    quantity: number;
    amount: number;
  }[];
}

export interface ISalesKeyInViewResponse {
  sales_keyin_idx: number;
  store_id: number;
  store_name: string;
  user_id: number;
  user_name: string;
  date: string;
  total_price: number;
  order_item_list: {
    order_item_idx: number;
    menu_info_idx: number;
    menu_name: string;
    quantity: number;
    amount: number;
  }[];
}

export interface ISalesKeyInDownloadParams
  extends Pick<
    ISalesKeyInFetchParams,
    'store_id' | 'search_start_dt' | 'search_end_dt' | 'sort_type'
  > {}

export interface ISaleskeyInRegisterParams {
  store_id: number;
  key_in: {
    date: string;
    total_price: number;
    items: ISaleItem[];
  }[];
}
