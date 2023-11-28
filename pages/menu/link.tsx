import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchUnLinkedMenuList, updateLinkMenu } from '@ApiFarm/menu';
import { IUnLinkMenuListItem } from '@InterfaceFarm/menu';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import MenuSelectModal from '@ComponentFarm/molecule/MenuSelect';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { menuListLayoutConfig } from '@ComponentFarm/template/menu/const';
import MenuLinkFilter from '@ComponentFarm/template/menu/MenuLinkFilter';
import MenuLinkListTable from '@ComponentFarm/template/menu/MenuLinkListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const MenuLinkPage = () => {
  const qc = useQueryClient();
  const [selectedUnLinkMenu, setSelectedUnLinkMenu] =
    useState<IUnLinkMenuListItem | null>(null);
  const [params, updateParams, resetParams] = useQueryParams({
    per_num: 10,
    current_num: 1,
  });

  const { data, isLoading } = useQuery(['menu-unlink', params], () =>
    fetchUnLinkedMenuList(params)
  );

  const updateLinkMutate = useMutation(updateLinkMenu, {
    onSuccess: () => {
      toast.info('메뉴 연결이 완료되었습니다.');
      qc.invalidateQueries(['menu-unlink', params]);
    },
  });

  return (
    <div>
      <LayoutTitleBoxWithTab {...menuListLayoutConfig} />
      <MenuLinkFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <MenuLinkListTable
        loading={isLoading || updateLinkMutate.isLoading}
        list={data?.list ?? []}
        onRequestLink={item => setSelectedUnLinkMenu(item)}
      />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={100}
        handlePageChange={current_num => updateParams({ current_num })}
      />
      <MenuSelectModal
        type="radio"
        open={!!selectedUnLinkMenu}
        onSelect={([item]) =>
          selectedUnLinkMenu &&
          updateLinkMutate.mutate({
            menu_info_idx: item.menu_info_idx,
            unidentified_menu_name: selectedUnLinkMenu.unidentified_menu_name,
          })
        }
        onClose={() => selectedUnLinkMenu && setSelectedUnLinkMenu(null)}
      />
    </div>
  );
};

export default MenuLinkPage;
