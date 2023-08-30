import { useState } from 'react';
import { Pagination } from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import Export from '@ComponentFarm/atom/icons/Export';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import CategoryFilter from '@ComponentFarm/template/menu/CategoryFilter';
import CategoryListTable from '@ComponentFarm/template/menu/CategoryListTable';
import RegisterModal from '@ComponentFarm/template/menu/CategoryRegisterModal';
import useQueryParams from '@HookFarm/useQueryParams';

const tabs = [
  {
    title: '메뉴 목록',
  },
  {
    title: '카테고리 목록',
  },
];

const CategoryListPage = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  const handlePageChange = (pageNumber: number) => {
    updateParams({ page: pageNumber });
  };

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
      <Tabs tabs={tabs} activeTabIndex={1} onTabChange={() => {}} />
      <CategoryFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <CategoryListTable toggleSort={toggleSort} onClick={() => {}} />
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />

      <RegisterModal
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onRegister={() => {}}
      />
    </>
  );
};

export default CategoryListPage;
