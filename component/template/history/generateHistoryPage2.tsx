import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { fetchDataHistoryList } from '@ApiFarm/history';
import { IHistoryResItem } from '@InterfaceFarm/history';
import InfiniteHistoryTable from './InfiniteHistoryTable';
import { HistoryPageLayout } from './style';

type Config = {
  idx: string;
  endpoint: string;
  subTitle?: string;
};

const generateHistoryPage2 = (config: Config) => {
  return function HistoryPage() {
    const router = useRouter();
    const [params] = useState({
      per_num: 20,
    });

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
      [config.endpoint, params],
      ({ pageParam = 1 }) =>
        fetchDataHistoryList(`${config.endpoint}/${config.idx}`, {
          ...params,
          current_num: pageParam,
        }),
      {
        getNextPageParam: (response, allPages) => {
          const maxPageNumber = Math.ceil(
            response.total_count / params.per_num
          );
          if (maxPageNumber < allPages.length + 1) return undefined;
          return allPages.length + 1;
        },
        enabled: !!router.isReady,
      }
    );

    const list = useMemo(
      () =>
        ([] as IHistoryResItem[]).concat(
          ...(data?.pages.map(res => res.list) ?? [])
        ),
      [data]
    );

    const handleLoadData = useCallback(() => {
      if (hasNextPage) fetchNextPage();
    }, [hasNextPage, fetchNextPage]);

    return (
      <HistoryPageLayout>
        {config.subTitle && <h2>{config.subTitle}</h2>}
        <InfiniteHistoryTable
          list={list}
          loading={isLoading}
          onBottomScroll={handleLoadData}
        />
      </HistoryPageLayout>
    );
  };
};

export default generateHistoryPage2;
