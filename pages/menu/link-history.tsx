import { runInAction } from 'mobx';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchLinkedHistoryList, updateUnLinkMenu } from '@ApiFarm/menu';
import { IMenuLinkHistoryItem } from '@InterfaceFarm/menu';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { menuListLayoutConfig } from '@ComponentFarm/template/menu/const';
import MenuLinkFilter from '@ComponentFarm/template/menu/MenuLinkFilter';
import MenuLinkHistoryTable from '@ComponentFarm/template/menu/MenuLinkHistoryTable';
import useQueryParams from '@HookFarm/useQueryParams';
import { confirmModalStore } from '@MobxFarm/store';

const MenuLinkHistoryPage = () => {
  const qc = useQueryClient();

  const [params, updateParams, resetParams] = useQueryParams({
    per_num: 10,
    current_num: 1,
  });

  const { data, isLoading } = useQuery(['menu-link-histories', params], () =>
    fetchLinkedHistoryList(params)
  );

  const updateUnLinkMutate = useMutation(updateUnLinkMenu, {
    onSuccess: () => {
      toast.info('메뉴 연결이 해제되었습니다.');
      qc.invalidateQueries(['menu-link-histories', params]);
    },
  });

  const handleUnlinkConfirm = (item: IMenuLinkHistoryItem) => {
    runInAction(() => {
      confirmModalStore.openModal({
        title: '메뉴 연결 해제',
        content: (
          <p>
            기존 메뉴 연결을 해제하고
            <br />
            미확인 메뉴로 이동됩니다.
          </p>
        ),
        showCancelButton: true,
        submitButtonText: '확인',
        onFormSubmit: () => {
          updateUnLinkMutate.mutate({
            unidentified_menu_name: item.unidentified_menu_name,
          });
          confirmModalStore.isOpen = false;
        },
        onCancel: () => {
          confirmModalStore.isOpen = false;
        },
      });
    });
  };

  return (
    <div>
      <LayoutTitleBoxWithTab {...menuListLayoutConfig} />
      <MenuLinkFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <MenuLinkHistoryTable
        loading={isLoading || updateUnLinkMutate.isLoading}
        list={data?.list ?? []}
        onRequestUnLink={handleUnlinkConfirm}
      />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={data?.total_count ?? 0}
        handlePageChange={current_num => updateParams({ current_num })}
      />
    </div>
  );
};

export default MenuLinkHistoryPage;
