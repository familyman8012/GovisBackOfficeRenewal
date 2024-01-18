import React from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { fetchStoreSalesList } from '@ApiFarm/sales-keyin';
import { ISalesKeyInFetchResponse } from '@InterfaceFarm/store-sales-keyin';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Plus from '@ComponentFarm/atom/icons/Plus';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import StoreSalesFilter from '@ComponentFarm/template/store/SalesFIlter';
import SalesTable from '@ComponentFarm/template/store/SalesTable';
import useQueryParams from '@HookFarm/useQueryParams';

const defaultEndDt = dayjs().add(1, 'month').date(1).add(-1, 'day');
const defaultStartDt = dayjs(defaultEndDt).date(1);

const SalesKeyInPage = () => {
  const router = useRouter();
  const [params, updateParams, resetParams] = useQueryParams({
    current_num: 1,
    per_num: 20,
    search_start_dt: defaultStartDt.format('YYYY-MM-DD'),
    search_end_dt: defaultEndDt.format('YYYY-MM-DD'),
  });

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['store-sales-keyin-list', params],
    ({ pageParam = 1 }) =>
      fetchStoreSalesList({
        ...params,
        current_num: pageParam,
        sort_type: 11,
      }),
    {
      getNextPageParam: (response, allPages) => {
        const maxPageNumber = Math.ceil(
          response.total_count / (params.per_num ?? 20)
        );
        if (maxPageNumber < allPages.length + 1) return undefined;
        return allPages.length + 1;
      },
      enabled: !!params.search_start_dt && !!params.search_end_dt,
    }
  );

  const handleLoadMore = React.useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  const len = React.useMemo(() => data?.pages.length ?? 0, [data]);
  const list = React.useMemo(
    () =>
      ([] as ISalesKeyInFetchResponse['list']).concat(
        ...(data?.pages.map(res => res.list) ?? [])
      ),
    [data]
  );
  const total = React.useMemo(() => data?.pages[len - 1]?.total ?? [], [data]);

  return (
    <>
      <TitleArea
        title="매장 매출 수기입력"
        BtnBox={
          <Button
            variant="primary"
            LeadingIcon={<Plus />}
            onClick={() => router.push('/store/sales-keyin/add')}
          >
            매출 등록
          </Button>
        }
      />
      <Tabs
        id="sales-keyin-history"
        tabs={[
          {
            title: '매출 입력 내역',
          },
        ]}
        activeTabIndex={0}
        onTabChange={() => {}}
      />
      <StoreSalesFilter
        params={params}
        updateParams={updateParams}
        resetParams={resetParams}
      />
      <SalesTable
        loading={isLoading}
        list={list}
        total={total}
        onBottomScroll={handleLoadMore}
      />
    </>
  );
};

export default SalesKeyInPage;
