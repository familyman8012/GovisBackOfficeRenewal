export interface IProductListItem {
  product_info_idx: number;
  product_code: string;
  evi_product_group: number;
  evi_product_group_str: string;
  evi_product_category: number;
  evi_product_category_str: string;
  product_name_ko: string;
  product_name_en: string;
  evi_sale_type: number;
  evi_sale_type_str: string;
  sale_start_date: string;
  sale_end_date: string;
  created_date: string;
  updated_date: string;
  evi_product_status: number;
  evi_product_status_str: string;
  is_recipe_registration: number;
}
