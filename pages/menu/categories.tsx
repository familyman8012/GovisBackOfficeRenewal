import { useState } from 'react';
import { useQuery } from 'react-query';
import { downloadMenuCategoryList, fetchMenuCategoryList } from '@ApiFarm/menu';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Export from '@ComponentFarm/atom/icons/Export';
import Plus from '@ComponentFarm/atom/icons/Plus';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import CategoryFilter from '@ComponentFarm/template/menu/CategoryFilter';
import CategoryListTable from '@ComponentFarm/template/menu/CategoryListTable';
import RegisterModal from '@ComponentFarm/template/menu/CategoryRegisterModal';
import { menuListLayoutConfig } from '@ComponentFarm/template/menu/const';
import useQueryParams from '@HookFarm/useQueryParams';

const CategoryListPage = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [params, updateParams, resetParams] = useQueryParams({
    current_num: 1,
    per_num: 10,
  });

  const handlePageChange = (current_num: number) => {
    updateParams({ current_num });
  };

  const { data } = useQuery(['menu-categories', params], () =>
    fetchMenuCategoryList(params)
  );

  return (
    <div>
      <LayoutTitleBoxWithTab
        {...menuListLayoutConfig}
        actionButtons={
          <>
            <Button
              variant="gostSecondary"
              LeadingIcon={<Export />}
              onClick={() => downloadMenuCategoryList(params)}
            >
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
      <CategoryFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <CategoryListTable list={data?.list ?? []} updateParams={updateParams} />
      <Pagination
        pageInfo={[Number(params.current_num), Number(params.per_num)]}
        totalCount={data?.total_count ?? 1}
        handlePageChange={handlePageChange}
      />
      <RegisterModal
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onRegister={() => {
          setShowRegisterModal(false);
          updateParams({ ...params, current_num: 1 });
        }}
      />
    </div>
  );
};

export default CategoryListPage;
