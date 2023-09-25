import { fetchEnvironment } from '@ApiFarm/environment';
import generateHistoryPage from '@ComponentFarm/template/history/generateHistoryPage';
import { menuDetailLayoutConfig } from '@ComponentFarm/template/menu/const';

const MenuDetailHistoryPage = generateHistoryPage({
  endpoint: `/menu/info/history/[menu_info_idx]`,
  subTitle: '메뉴 변경 내역',
  layoutProps: menuDetailLayoutConfig,
});

export const getServerSideProps = async () => {
  const props = await fetchEnvironment({
    name: [
      'menu_group',
      'menu_type',
      'menu_status',
      'menu_category_status',
      'menu_classification',
    ].join(','),
  });

  return {
    props: {
      envs: props.list,
      cacheTime: 3600,
    },
  };
};

export default MenuDetailHistoryPage;
