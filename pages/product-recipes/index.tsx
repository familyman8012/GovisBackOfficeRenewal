import { useRouter } from 'next/router';
import { Pagination } from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Export from '@ComponentFarm/atom/icons/Export';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import RecipeFilter from '@ComponentFarm/template/recipe/ListHandler';
import ListTable from '@ComponentFarm/template/recipe/ListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const tabs = [
  {
    title: '레시피 목록',
  },
];

const RecipeListPage = () => {
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
      <TitleArea
        title="레시피 관리"
        BtnBox={
          <>
            <Button variant="gostSecondary" LeadingIcon={<Export />}>
              내보내기
            </Button>
          </>
        }
      />
      <Tabs tabs={tabs} activeTabIndex={0} onTabChange={() => {}} />
      <RecipeFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <ListTable
        data={{ list: [] }}
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

export default RecipeListPage;
