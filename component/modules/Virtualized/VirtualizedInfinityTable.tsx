/* eslint-disable react/no-unstable-nested-components */
import { useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { TableVirtuoso } from 'react-virtuoso';
import { useInfiniteQuery } from 'react-query';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fetchStoreDayAnalyze } from '@ApiFarm/product-analyze';
import {
  IProductDailyAnalyzeReq,
  IStoreSalesDayInfo,
} from '@InterfaceFarm/product-analyze';
import { IDaySaleReq } from '@InterfaceFarm/sales';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { PageSpinner } from '@ComponentFarm/atom/Spinner/Spinner';
import { StatusStr, StoreStr } from '@ComponentFarm/modal/SearchPopup/const';

export const VirtusoTable = styled.table`
  width: 100%;

  th,
  td {
    &:first-of-type {
      width: 18rem;
    }
    &:first-of-type,
    &:nth-of-type(2) {
      position: sticky !important;
    }
    &:first-of-type {
      left: 0;
    }
    &:nth-of-type(2) {
      left: 18rem;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 1px;
        background-color: var(--color-neutral90); /* Border 색상 */
      }
    }

    &:not(:first-of-type) {
      width: 14rem;
      text-align: center;
    }
  }

  &.lessSty {
    th,
    td {
      &:not(:first-of-type) {
        width: auto;
      }
    }
  }

  th {
    position: relative;
    z-index: 2;
    height: 4.8rem;
    padding: 0 2.4rem;
    color: var(--color-gray500);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    letter-spacing: 0.042rem;
    /* border-top: 1px solid var(--color-neutral90);
    border-bottom: 1px solid var(--color-neutral90); */
    background: #f7f9fc;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--color-neutral90); /* Border 색상 */
    }

    &:first-of-type,
    &:nth-of-type(2) {
      z-index: 3;
    }

    &.bg {
      background-color: var(--color-blue_gray30);
    }
  }

  td {
    height: 7.7rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-neutral10);
    border-bottom: 1px solid var(--color-neutral90);

    &:first-of-type,
    &:nth-of-type(2) {
      background: #fff;
    }

    &.bg {
      background-color: var(--color-blue_gray10);
    }
  }

  .wrap_storename {
    width: 100%;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.8rem;
    .badge:nth-of-type(1) {
      margin-right: 0.4rem;
    }
  }
`;

const SalesDayVirtualTable2 = ({ params }: { params: IDaySaleReq }) => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['StoreDayAnalyze', params],
      async ({ pageParam = 1 }) => {
        const updatedParams: IProductDailyAnalyzeReq = {
          ...params,
          current_page_number: pageParam,
          per_page_number: 180,
        };
        const response = await fetchStoreDayAnalyze(updatedParams);
        return response;
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          return !lastPage.daily_sales_list_info.is_last_page
            ? Number(lastPage.info.current_page_number) + 1
            : undefined;
        },
      }
    );

  const mergedData = useMemo(() => {
    if (!data) return [];

    const storeMap = new Map();

    data.pages.forEach(page => {
      page.list.forEach(store => {
        if (!storeMap.has(store.store_idx)) {
          storeMap.set(store.store_idx, store);
        } else {
          const existingStore = storeMap.get(store.store_idx);
          store.daily_sales_list.forEach(newSale => {
            if (
              !existingStore.daily_sales_list.some(
                (sale: IStoreSalesDayInfo) =>
                  sale.sales_day === newSale.sales_day
              )
            ) {
              existingStore.daily_sales_list.push(newSale);
            }
          });
        }
      });
    });

    return Array.from(storeMap.values());
  }, [data]);

  const LOAD_MORE_THRESHOLD = 200;

  const handleScrollDebounced = useCallback(
    debounce((target: HTMLDivElement | null) => {
      if (target) {
        const { scrollLeft, scrollWidth, clientWidth } = target;
        if (
          scrollLeft + clientWidth >= scrollWidth - LOAD_MORE_THRESHOLD &&
          hasNextPage &&
          !isFetchingNextPage
        ) {
          fetchNextPage();
        }
      }
    }, 200),
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      handleScrollDebounced(event.currentTarget);
    },
    [handleScrollDebounced]
  );

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      {isFetchingNextPage && <PageSpinner />}
      {data && (
        <TableVirtuoso
          style={{ height: '81rem' }}
          data={mergedData}
          onScroll={handleScroll}
          components={{
            Table: ({ style, ...props }) => (
              <VirtusoTable
                {...props}
                style={{ ...style }}
                className={
                  mergedData.length > 0 &&
                  mergedData[0].daily_sales_list.length <= 3
                    ? 'lessSty'
                    : ''
                }
              />
            ),
          }}
          fixedHeaderContent={() => (
            <tr>
              <th>매장명</th>
              {mergedData.length > 0 &&
                mergedData[0].daily_sales_list.map(
                  (el: IStoreSalesDayInfo, i: number) => (
                    <th
                      key={el.sales_day}
                      className={`${i % 2 !== 0 ? 'bg' : ''}`}
                    >
                      {el.sales_day}
                    </th>
                  )
                )}
            </tr>
          )}
          itemContent={(i, store) => (
            <>
              <td>
                <div className="wrap_storename">
                  <div className="store_name">{store.store_name}</div>
                  <div className="info">
                    <Badge color="gray" size="sm">
                      {StoreStr[store.store_type_code]}
                    </Badge>
                    <Badge
                      color={
                        store.store_status_code === 'OPEN'
                          ? 'blue'
                          : store.store_status_code === 'CLOSED'
                          ? 'red'
                          : 'yellow'
                      }
                      size="sm"
                    >
                      {StatusStr[store.store_status_code]}
                    </Badge>
                  </div>
                </div>
              </td>
              {store.daily_sales_list.map(
                (el: IStoreSalesDayInfo, index: number) => (
                  <td
                    key={el.sales_day}
                    className={`${index % 2 !== 0 ? 'bg' : ''}`}
                  >
                    {el.sales_amount.toLocaleString()}
                  </td>
                )
              )}
            </>
          )}
        />
      )}
    </div>
  );
};

export default SalesDayVirtualTable2;
