import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useQuery } from 'react-query';
import { EnvRow, fetchEnvironment } from '@ApiFarm/environment';
import { fetchMenuCategories } from '@ApiFarm/menu';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import Export from '@ComponentFarm/atom/icons/Export';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import CategoryFilter from '@ComponentFarm/template/menu/CategoryFilter';
import CategoryListTable from '@ComponentFarm/template/menu/CategoryListTable';
import RegisterModal from '@ComponentFarm/template/menu/CategoryRegisterModal';
import { menuListTabInfo } from '@ComponentFarm/template/menu/const';
import useQueryParams from '@HookFarm/useQueryParams';

const CategoryListPage: NextPage<{ envs: EnvRow[] }> = ({ envs }) => {
  const router = useRouter();

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const handleChangeTab = (tabIndex: number) =>
    router.push(`${menuListTabInfo[tabIndex].link}`);

  const handlePageChange = (current_num: number) => {
    updateParams({ current_num });
  };

  const { data } = useQuery(['menu-categories', params], () =>
    fetchMenuCategories(params)
  );

  return (
    <>
      <TitleArea
        title="메뉴 관리"
        BtnBox={
          <>
            <Button variant="gostSecondary" LeadingIcon={<Export />}>
              내보내기
            </Button>
            <Button
              variant="primary"
              LeadingIcon={<Plus />}
              onClick={() => setShowRegisterModal(true)}
            >
              카테고리 생성
            </Button>
          </>
        }
      />
      <Tabs
        tabs={menuListTabInfo}
        activeTabIndex={0}
        onTabChange={handleChangeTab}
      />
      <CategoryFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <CategoryListTable list={data?.list ?? []} toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={data?.total_count ?? 1}
        handlePageChange={handlePageChange}
      />
      <RegisterModal
        envs={envs}
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onRegister={() => {
          setShowRegisterModal(false);
          updateParams({ ...params, current_num: 1 });
        }}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const props = await fetchEnvironment({
    name: ['menu_category_status'].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
    revalidate: 10,
  };
};

export default CategoryListPage;
