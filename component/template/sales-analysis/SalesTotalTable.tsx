import React from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchStoreSale } from '@ApiFarm/sales';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { StatusStr, StoreStr } from '@ComponentFarm/modal/SearchPopup/const';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { tableField } from './const';
import { TableSty1 } from '../common/table/TableSty';

const SummaryWrap = styled.div`
  margin-bottom: 3.2rem;
  .SubTitleBoxWrap {
    margin-bottom: 0.8rem;

    .desc {
      margin-left: auto;
    }
  }

  table {
    th,
    td,
    th:nth-of-type(1),
    td:nth-of-type(1) {
      padding: 0;
      text-align: center;
    }

    thead tr {
      &:nth-of-type(1) {
        th:nth-of-type(2) {
          border-right: 1px solid var(--color-neutral90);
        }
      }
      &:nth-of-type(2) {
        th:nth-of-type(3) {
          border-right: 1px solid var(--color-neutral90);
        }
      }
    }
    td {
      height: 7.6rem;
      font-size: 1.6rem;
      font-weight: 600;

      &.bg {
        background-color: var(--color-blue_gray10);
      }
    }
    td:first-of-type {
      text-align: left;
    }
    td:nth-of-type(2),
    td:nth-of-type(5) {
      border-right: 1px solid var(--color-neutral90);
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

const SalesTotal = ({ params }: any) => {
  const { isLoading, data } = useQuery(['SalesTotal', params], () =>
    fetchStoreSale(params)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SummaryWrap>
      <TableSty1>
        <colgroup>
          <col width={getTableWidthPercentage(185)} />
          <col width={getTableWidthPercentage(185)} />
          {tableField.types.map((el, i) => (
            <col key={i} width={getTableWidthPercentage(137)} />
          ))}
          {tableField.channels.map((el, i) => (
            <col key={i} width={getTableWidthPercentage(108)} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th rowSpan={2}>매장명</th>
            <th rowSpan={2}>합계</th>
            <th colSpan={tableField.types.length}>주문 구분별 합계</th>
            <th colSpan={tableField.channels.length}>주문 채널별 합계</th>
          </tr>
          <tr>
            {tableField.types.concat(tableField.channels).map(type => (
              <th key={type.field}>{type.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.list.map(store => (
            <tr key={store.store_idx}>
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
              <td className="txt_amount">
                {store.total_sales_amount.toLocaleString()}
              </td>
              {tableField.types.map((type, i) => (
                <td
                  key={type.field}
                  className={i % 2 !== 0 ? 'bg txt_amount' : 'txt_amount'}
                >
                  {Number(
                    store.by_order_type[`${type.field}_sales_amount`]
                  ).toLocaleString()}
                </td>
              ))}
              {tableField.channels.map((channel, i) => (
                <td
                  key={channel.field}
                  className={i % 2 !== 0 ? 'bg txt_amount' : 'txt_amount'}
                >
                  {store.by_order_channel[
                    `${channel.field}_sales_amount`
                  ].toLocaleString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableSty1>
    </SummaryWrap>
  );
};

export default SalesTotal;
