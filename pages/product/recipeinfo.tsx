import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchProductRecipe } from '@ApiFarm/product';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import PageLayout from '@ComponentFarm/layout/PageLayout';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';
import RecipeView from '@ComponentFarm/template/recipe/RecipeView';
import { EnvStore } from '@MobxFarm/store';

const ProductRecipeInfoPage = () => {
  const router = useRouter();
  const tabData = tabDataFunc('view', router?.query);
  const id = useMemo(() => router.query.id, [router?.query]);

  const environment = useMemo(
    () =>
      EnvStore?.getData({
        name: [
          'product_group',
          'product_category',
          'product_status',
          'recipe_status',
          'recipe_step_topping_type',
          'recipe_material_meterage_unit',
          'recipe_material_quantity_unit',
        ].join(','),
      }),
    [EnvStore.data]
  );

  // view 일때, 데이터 불러오기
  const { data, isLoading, isError } = useQuery(
    ['productRecipeView', id],
    () => fetchProductRecipe(id?.toString() ?? ''),
    {
      enabled: !!id,
    }
  );

  if (isLoading) {
    return (
      <PageLayout title="제품 관리 상세 정보" tabData={tabData}>
        <Empty>불러오는중입니다....</Empty>
      </PageLayout>
    );
  }

  if (isError || !data || data?.recipe_info_idx === 0) {
    return (
      <PageLayout title="제품 관리 상세 정보" tabData={tabData}>
        <Empty>
          조회된 레시피가 없습니다. <br />{' '}
          <span className="sub">레시피를 등록해주세요.</span>
        </Empty>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="제품 관리 상세 정보" tabData={tabData}>
      {data && <RecipeView initialData={data} envs={environment.list} />}
    </PageLayout>
  );
};

export default ProductRecipeInfoPage;
