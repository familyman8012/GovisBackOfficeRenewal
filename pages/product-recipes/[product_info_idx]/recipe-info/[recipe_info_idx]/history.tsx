import generateHistoryPage from '@ComponentFarm/template/history/generateHistoryPage';
import { recipeInfoDetailLayoutConfig } from '@ComponentFarm/template/recipe/const';

const RecipeDetailHistoryPage = generateHistoryPage({
  endpoint: '/recipe/info/history/[recipe_info_idx]',
  subTitle: '레시피 변경 내역',
  layoutProps: recipeInfoDetailLayoutConfig,
});

export default RecipeDetailHistoryPage;
