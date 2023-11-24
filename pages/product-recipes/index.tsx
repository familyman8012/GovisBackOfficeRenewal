import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import {
  downloadRecipeProductList,
  fetchRecipeProductList,
} from '@ApiFarm/product-recipe';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Export from '@ComponentFarm/atom/icons/Export';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import RecipeFilter from '@ComponentFarm/template/recipe/RecipeFilter';
import RecipeListTable from '@ComponentFarm/template/recipe/RecipeListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const RecipeListPage = () => {
  const router = useRouter();
  const [pathname, search] = router.asPath.split('?');
  const [params, updateParams, resetParams] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const handlePageChange = (current_num: number) =>
    updateParams({ current_num });

  const { data, isLoading } = useQuery(['recipe-product-list', params], () =>
    fetchRecipeProductList(params)
  );

  return (
    <>
      <LayoutTitleBoxWithTab
        id="recipeListLayout"
        title="레시피 관리"
        tabs={[{ title: '레시피 목록', path: pathname }]}
        actionButtons={
          <Button
            variant="gostSecondary"
            LeadingIcon={<Export />}
            onClick={() => downloadRecipeProductList(params)}
          >
            내보내기
          </Button>
        }
      />
      <RecipeFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <RecipeListTable
        loading={isLoading}
        list={data?.list ?? []}
        onClick={item =>
          router.push({
            pathname: `${pathname}/${item.product_info_idx}`,
            search,
          })
        }
        updateParams={updateParams}
      />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={data?.total_count ?? 1}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default RecipeListPage;
