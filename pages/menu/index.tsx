import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useQuery } from 'react-query';
import { fetchEnvironmentByNames, EnvRow } from '@ApiFarm/environment';
import { fetchMenuList } from '@ApiFarm/menu';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import Export from '@ComponentFarm/atom/icons/Export';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import MenuFilter from '@ComponentFarm/template/menu/MenuFilter';
import MenuListTable from '@ComponentFarm/template/menu/MenuListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const tabs = [
  {
    title: '카테고리 목록',
  },
  {
    title: '메뉴 목록',
  },
];

const loadEnvNames = ['menu_group', 'menu_type', 'menu_status'] as const;

const MenuListPage: NextPage<
  Record<(typeof loadEnvNames)[number], EnvRow[]>
> = props => {
  const router = useRouter();
  const [pathname] = router.asPath.split('?');
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    per_num: 10,
    current_num: 1,
  });

  const handlePageChange = (pageNumber: number) =>
    updateParams({ page: pageNumber });

  const { data } = useQuery(['menu-list', params], () => fetchMenuList(params));

  return (
    <>
      <TitleArea
        title="메뉴 관리"
        BtnBox={
          <>
            <Button variant="gostSecondary" LeadingIcon={<Export />}>
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
      <Tabs tabs={tabs} activeTabIndex={1} onTabChange={() => {}} />
      <MenuFilter
        envs={props}
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <MenuListTable
        list={data?.list ?? []}
        onClick={id => router.push(`${pathname}/${id}`)}
        toggleSort={toggleSort}
      />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={data?.total_count ?? 1}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const props = await fetchEnvironmentByNames<(typeof loadEnvNames)[number]>(
    loadEnvNames
  );

  return {
    props,
    revalidate: 10,
  };
};

export default MenuListPage;
