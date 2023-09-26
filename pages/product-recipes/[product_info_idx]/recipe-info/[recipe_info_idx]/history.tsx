import { fetchEnvironment } from '@ApiFarm/environment';
import generateHistoryPage from '@ComponentFarm/template/history/generateHistoryPage';
import { recipeInfoDetailLayoutConfig } from '@ComponentFarm/template/recipe/const';

const RecipeDetailHistoryPage = generateHistoryPage({
  endpoint: '/recipe/info/history/[recipe_info_idx]',
  subTitle: '레시피 변경 내역',
  layoutProps: recipeInfoDetailLayoutConfig,
});

export const getServerSideProps = async () => {
  const environment = await fetchEnvironment({
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
      environment,
      cacheTime: 3600,
    },
  };
};

export default RecipeDetailHistoryPage;
