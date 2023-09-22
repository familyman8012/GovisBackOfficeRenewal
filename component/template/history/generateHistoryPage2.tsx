import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { fetchDataHistoryList } from '@ApiFarm/history';
import { IHistoryResItem } from '@InterfaceFarm/history';
import type { LayoutWithTitleBoxAndTabProps } from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import InfiniteHistoryTable from './InfiniteHistoryTable';

type Config = {
  endpoint: string;
  subTitle?: string;
  layoutProps: LayoutWithTitleBoxAndTabProps;
};

const generateHistoryPage = (config: Config) => {
  return function HistoryPage() {
    const router = useRouter();
    const [params] = useState({
      per_num: 20,
    });

    const computedEndpoint = useMemo(
      () =>
        config.endpoint
          .split('/')
          .map(v => {
            const returnVal =
              v.search(/\[.*\]$/) !== -1
                ? router.query[v.replace(/\[(.*)\]/, '$1')]
                : v;
            return returnVal;
          })
          .join('/'),
      [router.query]
    );

    const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
      [computedEndpoint, params],
      ({ pageParam = 1 }) =>
        fetchDataHistoryList(computedEndpoint, {
          ...params,
          current_num: pageParam,
        }),
      {
        getNextPageParam: (response, allPages) => {
          const maxPageNumber = Math.ceil(
            response.total_count / params.per_num
          );
          console.log(maxPageNumber);
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
      <InfiniteHistoryTable
        list={list}
        loading={isLoading}
        onBottomScroll={handleLoadData}
      />
    );
  };
};

export default generateHistoryPage;
