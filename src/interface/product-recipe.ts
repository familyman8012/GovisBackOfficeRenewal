export interface IRecipeProductListItem {
  product_info_idx: number;
  product_code: string;
  evi_product_group: number;
  evi_product_category: number;
  product_name_ko: string;
  product_name_en: string;
  evi_sale_type: number;
  evi_product_status: number;
  is_recipe_registration: number;
  recipe_created_date: string;
  recipe_updated_date: string;
  recipe_count: number;
}

export interface IRecipeListItem {
  recipe_info_idx: number;
  evi_recipe_status: number;
  recipe_name: number;
}

export interface IRecipeStepFormFields {
  recipe_info_idx?: number;
  product_info_idx?: number;
  recipe_step_idx?: number;
  recipe_step_name: string;
  evi_recipe_step_topping_type?: string;
  topping_image?: string;
  initial_topping_image?: FileList | null;
  manufacturing_time: number | string;
  recipe_step_description?: string;
  recipe_material_list?: {
    material_info_idx: number;
    readonly material_image?: string;
    readonly material_name?: string;
    readonly material_name_ko?: string;
    readonly evv_country?: string;
    readonly pcn_manufacturer?: string;
    recipe_material_meterage_value: number;
    evi_recipe_material_meterage_unit: number | string;
    recipe_material_quantity_value: number;
    evi_recipe_material_quantity_unit: number | string;
    recipe_material_note: string;
  }[];
}

export interface IRecipeFormFields {
  recipe_info_idx?: number;
  product_info_idx?: number;
  recipe_name: string;
  recipe_image: string;
  initial_recipe_image?: FileList | null;
  evi_recipe_step_topping_type: string;
  manufacturing_time: number | string;
  recipe_steps: IRecipeStepFormFields[];
}
