/* eslint-disable react/no-unstable-nested-components */
import { TableVirtuoso } from 'react-virtuoso';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchStoreDayAnalyze } from '@ApiFarm/product-analyze';
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
    &:first-of-type {
      position: sticky !important;
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
    &:first-of-type {
      left: 0;
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

    &:first-of-type {
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

    &:first-of-type {
      padding-left: 1rem;
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

const StoreDayVirtualTable = ({ params }: { params: IDaySaleReq }) => {
  const { isLoading, data } = useQuery(['DayStore', params], () =>
    fetchStoreDayAnalyze({
      ...params,
      current_page_number: 1,
      per_page_number: 180,
    })
  );

  if (isLoading) {
    return (
      <div style={{ position: 'relative', height: '81rem', left: '-16rem' }}>
        <PageSpinner />
      </div>
    );
  }

  return (
    <>
      {data && (
        <TableVirtuoso
          style={{ height: '81rem' }}
          data={data?.list}
          // onScroll={() => console.log('aaa')}
          components={{
            Table: ({ style, ...props }) => (
              <VirtusoTable
                {...props}
                style={{ ...style }}
                className={
                  data?.list[0].daily_sales_list.length <= 3 ? 'lessSty' : ''
                }
              />
            ),
          }}
          fixedHeaderContent={() => (
            <tr>
              <th>매장명</th>
              {data?.list[0].daily_sales_list.map((el, i) => (
                <th key={el.sales_day} className={`${i % 2 !== 0 ? 'bg' : ''}`}>
                  {el.sales_day}
                </th>
              ))}
            </tr>
          )}
          itemContent={(i, store) => (
            <>
              {isLoading ? (
                <div />
              ) : (
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
                  {data?.list[0].daily_sales_list.map((el, index: number) => (
                    <td
                      key={el.sales_day}
                      className={`${index % 2 !== 0 ? 'bg' : ''}`}
                    >
                      {store.daily_sales_list[
                        index
                      ]?.sales_amount.toLocaleString()}
                    </td>
                  ))}
                </>
              )}
            </>
          )}
        />
      )}
    </>
  );
};

export default StoreDayVirtualTable;
