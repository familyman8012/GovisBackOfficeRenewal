import { GetServerSideProps } from 'next';
import { fetchEnvironment } from '@ApiFarm/environment';
import generateHistoryPage from '@ComponentFarm/template/history/generateHistoryPage';
import { menuDetailLayoutConfig } from '@ComponentFarm/template/menu/const';

const MenuDetailHistoryPage = generateHistoryPage({
  endpoint: `/menu/info/history/[menu_info_idx]`,
  subTitle: '메뉴 변경 내역',
  layoutProps: menuDetailLayoutConfig,
});

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${60 * 60 * 24 * 2}, stale-while-revalidate=59`
  );

  const environment = await fetchEnvironment({
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
      environment,
      // cacheTime: 3600,
    },
  };
};

export default MenuDetailHistoryPage;
