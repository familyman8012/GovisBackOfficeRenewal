import { useState } from 'react';
import { useRouter } from 'next/router';
import { Pagination } from '@ComponentFarm/modules/Paginate/Pagination';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Export, Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import ListFilter from '@ComponentFarm/template/ingredient/ListFilter';
import ListTable from '@ComponentFarm/template/ingredient/ListTable';
import useQueryParams from '@HookFarm/useQueryParams';

const Manage = () => {
  const router = useRouter();
  const [pathname] = router.asPath.split('?');

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [params, updateParams, resetParams, toggleSort] = useQueryParams({
    page: 1,
    size: 10,
    search_type: 0,
  });

  const tabData = [
    {
      title: '물류사 목록',
    },
  ];

  const handlePageChange = (pageNumber: number) => {
    updateParams({ page: pageNumber });
  };

  return (
    <>
      <TitleArea
        title="원재료 관리"
        BtnBox={
          <>
            <Button variant="gostSecondary" LeadingIcon={<Export />}>
              내보내기
            </Button>
            <Button
              onClick={() => router.push(`${pathname}/add`)}
              LeadingIcon={<Plus />}
            >
              물류사 등록
            </Button>
          </>
        }
      />
      <Tabs
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={setActiveTabIndex}
      />
      <ListFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <ListTable toggleSort={toggleSort} />
      <Pagination
        pageInfo={[Number(params.page), Number(params.size)]}
        totalCount={100}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Manage;
