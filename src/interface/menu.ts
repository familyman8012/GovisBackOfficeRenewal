export interface IMenuCategoryFetchParams {
  per_num?: number;
  current_num?: number;
  evi_menu_category_status?: number;
  created_date?: number;
  updated_date?: number;
  search_target?: string;
  search_keyword?: string;
  sort_target?: string;
  sort_type?: string;
  is_export?: string;
}

export interface IMenuFormFields {
  menu_name: string;
  evi_menu_type: number | string;
  evi_menu_group: number | string;
  evi_menu_status: number | string;
  menu_category_idx: number;
  product_info_idx?: number;
  product_name_ko?: string;
  visit_normal_price: number;
  visit_discount_price: number;
  takeout_normal_price: number;
  takeout_discount_price: number;
  delivery_normal_price: number;
  delivery_discount_price: number;
  is_menu_option: string;
  option_view: [number, number] | undefined;
  menu_groups: {
    menu_option_category_idx?: number;
    menu_option_category_name: string;
    menu_options: {
      menu_option_name?: string;
      product_info_idx?: number;
      product_name_ko?: string;
      visit_normal_price?: number;
      visit_discount_price?: number;
      takeout_normal_price?: number;
      takeout_discount_price?: number;
      delivery_normal_price?: number;
      delivery_discount_price?: number;
    }[];
  }[];
}
export interface IMenuInfoResponse
  extends Omit<
    IMenuFormFields,
    'is_menu_option' | 'menu_groups' | 'option_view' | 'is_menu_option'
  > {
  evv_menu_status: string;
  evv_menu_group: string;
  evv_menu_type: string;
  menu_info_idx: number;
  menu_code: string;
  product_image: string;
  product_name_en: string;
  created_date: string;
  updated_date: string;
  menu_category_name: string;
  menu_option_category_list: {
    menu_option_category_idx: number;
    menu_option_category_name: string;
  }[];
}

export interface IMenuOptionListResponse {
  menu_info_idx: number;
  menu_option_category_idx: number;
  menu_option_category_name: string;
  menu_option_info_list: {
    menu_option_info_idx: number;
    menu_option_name: string;
  }[];
}

export type MenuCategoryCreateParams = Omit<
  IMenuFormFields,
  'product_name_ko' | 'option_view' | `menu_groups`
> & {
  menu_groups: (Omit<IMenuFormFields['menu_groups'][number], 'menu_options'> & {
    menu_options: Omit<
      IMenuFormFields['menu_groups'][number]['menu_options'][number],
      'product_name_ko'
    >[];
  })[];
};

export interface IMenuCategoryItem {
  menu_category_idx: number;
  menu_category_code: string;
  menu_category_name: string;
  created_date: string;
  updated_date: string;
  evi_menu_category_status: number;
  evv_menu_category_status: string;
}

export interface IMenuListItem {
  menu_info_idx: number;
  menu_code: string;
  evi_menu_group: number;
  evv_menu_group: string;
  menu_category_idx: number;
  menu_category_name: string;
  menu_name: string;
  evi_menu_status: number;
  evv_menu_status: string;
  created_date: string;
  updated_date: string;
}
