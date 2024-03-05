import React from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchSalesSummary } from '@ApiFarm/sales';
import { ISalesSummaryReq } from '@InterfaceFarm/sales';
import SkeletonTh from '@ComponentFarm/atom/Skeleton/SkeletonTh';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { tableField } from './const';
import SubTitleBox from '../common/SubTitleBox';
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
        th:first-of-type {
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
      height: 9.8rem;

      &.bg {
        background-color: var(--color-blue_gray10);
      }
    }
    td:first-of-type,
    td:nth-of-type(4) {
      border-right: 1px solid var(--color-neutral90);
    }

    .total_price,
    .txt_amount {
      color: var(color-neutral10);
    }

    .total_price {
      font-size: 2.4rem;
      font-weight: 700;
    }

    .txt_amount {
      font-size: 1.6rem;
      font-weight: 600;
    }

    .txt_ratio {
      margin-top: 1.6rem;
      font-size: 1.2rem;
      font-weight: 400;
      color: var(color-blue60);
    }
  }
`;

const SalesSummaryTable = ({ params }: { params: any }) => {
  const { isLoading, data } = useQuery(['SalesSummary', params], () =>
    fetchSalesSummary(params as ISalesSummaryReq)
  );

  return (
    <SummaryWrap>
      <SubTitleBox title="통계요약" desc="단위 : 원" hideUnderline />
      <TableSty1>
        <colgroup>
          <col width={getTableWidthPercentage(280)} />
          {tableField.types.map((el, i) => (
            <col key={i} width={getTableWidthPercentage(167)} />
          ))}
          {tableField.channels.map((el, i) => (
            <col key={i} width={getTableWidthPercentage(108)} />
          ))}
        </colgroup>
        <thead>
          <tr>
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
          {isLoading ? (
            <SkeletonTh colLength={11} rowLength={1} />
          ) : (
            <tr>
              <td className="total_price">
                {Number(data?.result.total_sales_amount).toLocaleString()}
              </td>
              {tableField.types.map((type, i) => (
                <td key={type.field} className={i % 2 !== 0 ? 'bg' : ''}>
                  <div className="txt_amount">
                    {data?.result.by_order_type[
                      `${type.field}_sales_amount`
                    ].toLocaleString()}
                  </div>
                  <div className="txt_ratio">
                    {data?.result.by_order_type[`${type.field}_sales_ratio`]}
                  </div>
                </td>
              ))}
              {tableField.channels.map((channel, i) => (
                <td key={channel.field} className={i % 2 !== 0 ? 'bg' : ''}>
                  <div className="txt_amount">
                    {data?.result.by_order_channel[
                      `${channel.field}_sales_amount`
                    ].toLocaleString()}
                  </div>
                  <div className="txt_ratio">
                    {
                      data?.result.by_order_channel[
                        `${channel.field}_sales_ratio`
                      ]
                    }
                  </div>
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </TableSty1>
    </SummaryWrap>
  );
};

export default SalesSummaryTable;
