import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { fetchProductRecipe } from '@ApiFarm/product';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import DetailPageLayout from '@ComponentFarm/layout/Product/DetailPageLayout';
import { tabDataFunc } from '@ComponentFarm/template/product/manage/const';
import RecipeView from '@ComponentFarm/template/recipe/RecipeView';

const ProductRecipeInfoPage = ({ envs }: { envs: IEnvironmentResItem[] }) => {
  const router = useRouter();
  const tabData = tabDataFunc('view', router?.query);
  const id = useMemo(() => router.query.id, [router?.query]);

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
      <DetailPageLayout title="제품 관리 상세 정보" tabData={tabData}>
        <Empty>불러오는중입니다....</Empty>
      </DetailPageLayout>
    );
  }

  if (isError || !data) {
    return (
      <DetailPageLayout title="제품 관리 상세 정보" tabData={tabData}>
        <Empty>
          조회된 레시피가 없습니다. <br />{' '}
          <span className="sub">레시피를 등록해주세요.</span>
        </Empty>
      </DetailPageLayout>
    );
  }

  return (
    <DetailPageLayout title="제품 관리 상세 정보" tabData={tabData}>
      {data && <RecipeView initialData={data} envs={envs} />}
    </DetailPageLayout>
  );
};

export const getStaticProps = async () => {
  const props = await fetchEnvironment({
    name: [
      'product_group',
      'product_category',
      'product_status',
      'recipe_status',
      'recipe_step_topping_type',
      'recipe_material_meterage_unit',
      'recipe_material_quantity_unit',
    ].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
  };
};

export default ProductRecipeInfoPage;
