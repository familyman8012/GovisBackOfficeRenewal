import {
  IMenuCategoryItem,
  MenuCategoryCreateParams,
  IMenuCategoryFetchParams,
  IMenuListItem,
  IMenuInfoResponse,
  IMenuOptionListResponse,
  IMenuFormFields,
} from '@InterfaceFarm/menu';
import { BoV2Request } from './index';

export const fetchMenuCategories = (params: IMenuCategoryFetchParams) => {
  return BoV2Request.get<
    IResponse<{
      total_count: number;
      list: IMenuCategoryItem[];
    }>
  >(`/menu/category/list`, { params }).then(res => res.data.data);
};

export const fetchMenuList = (params: any) => {
  return BoV2Request.get<
    IResponse<{
      total_count: number;
      list: IMenuListItem[];
    }>
  >(`/menu/info/list`, { params }).then(res => res.data.data);
};

export const fetchMenuOptionList = async (menu_option_category_idx: number) => {
  return BoV2Request.get<IResponse<IMenuOptionListResponse>>(
    `/menu/option/category/${menu_option_category_idx}`
  ).then(res => res.data.data);
};

export const fetchMenu = async (
  menu_info_idx: number
): Promise<
  IMenuInfoResponse & {
    menu_groups: IMenuFormFields['menu_groups'];
  }
> => {
  const info = await BoV2Request.get<IResponse<IMenuInfoResponse>>(
    `/menu/info/${menu_info_idx}`
  ).then(res => res.data.data);

  if (!info.menu_option_category_list?.length) {
    return { ...info, menu_groups: [] };
  }

  const menu_groups = await Promise.all(
    info.menu_option_category_list.map(
      async ({ menu_option_category_idx, menu_option_category_name }) => {
        const menu_option_info_list = await fetchMenuOptionList(
          menu_option_category_idx
        );

        return {
          menu_option_category_idx,
          menu_option_category_name,
          menu_options: menu_option_info_list.menu_option_info_list.map(
            option => ({
              menu_option_info_idx: option.menu_option_info_idx,
              menu_option_name: option.menu_option_name,
            })
          ),
        };
      }
    )
  );

  return { ...info, menu_groups };
};

export const createMenuOption = async (
  params: MenuCategoryCreateParams['menu_groups'][number] & {
    menu_info_idx: number;
  }
) => {
  const { menu_option_category_idx, menu_info_idx } = await BoV2Request.post<
    IResponse<{
      menu_info_idx: number;
      menu_option_category_idx: number;
    }>
  >(`/menu/option/category`, {
    menu_info_idx: params.menu_info_idx,
    menu_option_category_name: params.menu_option_category_name,
  }).then(res => res.data.data);

  const menuOptionIdxs = await Promise.all(
    params.menu_options.map(async menuOption => {
      const optionResponse = await BoV2Request.post<
        IResponse<{
          menu_info_idx: number;
          menu_option_category_idx: number;
          menu_option_info_idx: number;
        }>
      >('/menu/option/info', {
        menu_info_idx,
        menu_option_category_idx,
        ...menuOption,
      });

      return optionResponse.data.data.menu_option_info_idx;
    })
  );

  return { menu_option_category_idx, menuOptionIdxs };
};

export const createMenu = async (params: MenuCategoryCreateParams) => {
  const { menu_info_idx } = await BoV2Request.post<
    IResponse<{
      menu_info_idx: number;
      menu_code: string;
    }>
  >(`/menu/info`, params).then(res => res.data.data);

  if (!params.menu_groups || params.is_menu_option === '0') {
    return { menu_info_idx };
  }

  const menu_options = await Promise.all(
    params.menu_groups.map(group =>
      createMenuOption({ ...group, menu_info_idx })
    )
  );

  return { menu_info_idx, menu_options };
};
