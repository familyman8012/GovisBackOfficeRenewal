import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useQuery } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { fetchRecipeProductList } from '@ApiFarm/product-recipe';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Export from '@ComponentFarm/atom/icons/Export';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { recipeListTabInfo } from '@ComponentFarm/template/recipe/const';
import RecipeFilter from '@ComponentFarm/template/recipe/RecipeFilter';
import RecipeListTable from '@ComponentFarm/template/recipe/RecipeListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const RecipeListPage: NextPage<{ envs: IEnvironmentResItem[] }> = ({
  envs,
}) => {
  const router = useRouter();
  const [pathname] = router.asPath.split('?');
  const [params, updateParams, resetParams] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  const handlePageChange = (current_num: number) =>
    updateParams({ current_num });
  const handleChangeTab = (tabIndex: number) =>
    router.push(`${recipeListTabInfo[tabIndex].link}`);

  const { data } = useQuery(['recipe-product-list', params], () =>
    fetchRecipeProductList(params)
  );

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
      <Tabs
        id="recipes"
        tabs={recipeListTabInfo}
        activeTabIndex={0}
        onTabChange={handleChangeTab}
      />
      <RecipeFilter
        envs={envs}
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <RecipeListTable
        list={data?.list ?? []}
        onClick={item => router.push(`${pathname}/${item.product_info_idx}`)}
        // toggleSort={toggleSort}
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
  const props = await fetchEnvironment({
    name: ['product_group', 'product_category', 'product_status'].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
    revalidate: 10,
  };
};

export default RecipeListPage;
