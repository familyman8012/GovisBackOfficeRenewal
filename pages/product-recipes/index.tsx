import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useQuery } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import {
  downloadRecipeProductList,
  fetchRecipeProductList,
} from '@ApiFarm/product-recipe';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Export from '@ComponentFarm/atom/icons/Export';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import RecipeFilter from '@ComponentFarm/template/recipe/RecipeFilter';
import RecipeListTable from '@ComponentFarm/template/recipe/RecipeListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const RecipeListPage: NextPage<{ envs: IEnvironmentResItem[] }> = ({
  envs,
}: {
  envs: IEnvironmentResItem[];
}) => {
  const router = useRouter();
  const [pathname] = router.asPath.split('?');
  const [params, updateParams, resetParams] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const handlePageChange = (current_num: number) =>
    updateParams({ current_num });

  const { data } = useQuery(['recipe-product-list', params], () =>
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
        envs={envs}
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <RecipeListTable
        list={data?.list ?? []}
        onClick={item => router.push(`${pathname}/${item.product_info_idx}`)}
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
