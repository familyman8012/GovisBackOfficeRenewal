/* eslint-disable react/no-unstable-nested-components */
import { TableVirtuoso } from 'react-virtuoso';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchDaySale } from '@ApiFarm/sales';
import { IDaySaleReq } from '@InterfaceFarm/sales';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
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
  const { isLoading, data } = useQuery(['DaySale', params], () =>
    fetchDaySale(params)
  );

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
              <th>총합</th>
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
                          {StoreStr[store.store_type]}
                        </Badge>
                        <Badge
                          color={
                            store.store_status === 'OPEN'
                              ? 'blue'
                              : store.store_status === 'CLOSED'
                              ? 'red'
                              : 'yellow'
                          }
                          size="sm"
                        >
                          {StatusStr[store.store_status]}
                        </Badge>
                      </div>
                    </div>
                  </td>
                  <td>{store?.total_sales_amount.toLocaleString()}</td>
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

export default SalesDayVirtualTable2;
