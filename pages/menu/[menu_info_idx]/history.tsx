import generateHistoryPage from '@ComponentFarm/template/history/generateHistoryPage';
import { menuDetailLayoutConfig } from '@ComponentFarm/template/menu/const';

const MenuDetailHistoryPage = generateHistoryPage({
  endpoint: `/menu/info/history/[menu_info_idx]`,
  subTitle: '메뉴 변경 내역',
  layoutProps: menuDetailLayoutConfig,
});

export default MenuDetailHistoryPage;
