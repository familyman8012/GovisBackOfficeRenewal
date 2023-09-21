import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { downloadMenuList, fetchMenuList } from '@ApiFarm/menu';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import Export from '@ComponentFarm/atom/icons/Export';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { menuListLayoutConfig } from '@ComponentFarm/template/menu/const';
import MenuCopyModal from '@ComponentFarm/template/menu/MenuCopyModal';
import MenuFilter from '@ComponentFarm/template/menu/MenuFilter';
import MenuListTable from '@ComponentFarm/template/menu/MenuListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const MenuListPage = ({ envs }: { envs: IEnvironmentResItem[] }) => {
  const router = useRouter();
  const [pathname] = router.asPath.split('?');
  const [params, updateParams, resetParams] = useQueryParams({
    per_num: 10,
    current_num: 1,
  });

  const [copyTargerId, setCopyTargetId] = useState<number | undefined>(
    undefined
  );

  const handlePageChange = (current_num: number) =>
    updateParams({ current_num });

  const { data } = useQuery(['menu-list', params], () => fetchMenuList(params));

  return (
    <div>
      <LayoutTitleBoxWithTab
        {...menuListLayoutConfig}
        actionButtons={
          <>
            <Button
              variant="gostSecondary"
              LeadingIcon={<Export />}
              onClick={() => downloadMenuList(params)}
            >
              내보내기
            </Button>
            <Button
              variant="primary"
              LeadingIcon={<Plus />}
              onClick={() => router.push(`${pathname}/add`)}
            >
              메뉴 생성
            </Button>
          </>
        }
      />
      <MenuFilter
        envs={envs}
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <MenuListTable
        list={data?.list ?? []}
        onClick={item => router.push(`${pathname}/${item.menu_info_idx}`)}
        onClickCopy={item => setCopyTargetId(item.menu_info_idx)}
        updateParams={updateParams}
      />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={data?.total_count ?? 1}
        handlePageChange={handlePageChange}
      />
      <MenuCopyModal
        envs={envs}
        show={!!copyTargerId}
        menu_info_idx={copyTargerId}
        onClose={() => setCopyTargetId(undefined)}
        onRegister={() => {
          setCopyTargetId(undefined);
          updateParams({ ...params, current_num: 1 });
        }}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const props = await fetchEnvironment({
    name: [
      'menu_group',
      'menu_type',
      'menu_status',
      'menu_category_status',
    ].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
    revalidate: 10,
  };
};

export default MenuListPage;
