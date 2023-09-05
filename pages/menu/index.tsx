import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next';
import { fetchEnvironmentByNames, EnvRow } from '@ApiFarm/environment';
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

const loadEnvNams = ['menu_group', 'menu_type', 'menu_status'] as const;

const MenuListPage: NextPage<
  Record<(typeof loadEnvNams)[number], EnvRow[]>
> = props => {
  const router = useRouter();
  const [pathname] = router.asPath.split('?');
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  const handlePageChange = (pageNumber: number) => {
    updateParams({ page: pageNumber });
  };

  return (
    <>
      {JSON.stringify(props)}
      <TitleArea
        title="메뉴 관리"
        BtnBox={
          <>
            <Button variant="gostSecondary" LeadingIcon={<Export />}>
              내보내기
            </Button>
            <Button variant="primary" LeadingIcon={<Plus />}>
              메뉴 생성
            </Button>
          </>
        }
      />
      <Tabs tabs={tabs} activeTabIndex={1} onTabChange={() => {}} />
      <MenuFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <MenuListTable
        onClick={() => router.push(`${pathname}/1`)}
        toggleSort={toggleSort}
      />

      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const props = await fetchEnvironmentByNames<(typeof loadEnvNams)[number]>(
    loadEnvNams
  );

  return {
    props,
    revalidate: 1,
  };
};

export default MenuListPage;
