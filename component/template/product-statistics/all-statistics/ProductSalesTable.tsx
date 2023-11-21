import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IProductStatisticsResListItem } from '@InterfaceFarm/product-statistics';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import Arrow2Down from '@ComponentFarm/atom/icons/Arrow2Down';
import Arrow2Up from '@ComponentFarm/atom/icons/Arrow2Up';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

export const ProductSalesTableWrap = styled.table`
  width: 100%;

  th,
  td {
    &:first-of-type {
      padding: 0 2.4rem;
      text-align: left;
    }
  }

  th {
    height: 4.8rem;
    padding: 0 2.4rem;
    color: var(--color-gray500);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    letter-spacing: 0.042rem;
    border-top: 1px solid var(--color-neutral90);
    border-bottom: 1px solid var(--color-neutral90);
    background: #f7f9fc;
  }
  td {
    height: 7rem;
    text-align: center;
    border-bottom: 1px solid var(--color-neutral90);
  }
`;

export const ProductSalesTable = ({
  chartData,
  format,
}: {
  chartData?: IProductStatisticsResListItem[];
  format: (formValue: string, type?: string) => string;
}) => {
  return (
    <ProductSalesTableWrap>
      <colgroup>
        <col width={getTableWidthPercentage(510, 1536)} />
        <col width={getTableWidthPercentage(342, 1536)} />
        <col width={getTableWidthPercentage(342, 1536)} />
        <col width={getTableWidthPercentage(342, 1536)} />
      </colgroup>
      <thead>
        <tr>
          <th>시간</th>
          <th>기준일</th>
          <th>비교일</th>
          <th>증감율</th>
        </tr>
      </thead>
      <tbody>
        {chartData?.map((el, i: number) => (
          <tr key={el.item_label}>
            <td>{format(el.item_label)}</td>
            <td>{el.base_sales_count}</td>
            <td>{el.comparison_sales_count}</td>
            <td>
              <Badge
                type="square"
                color={
                  el.increase_decrease_rate > 0
                    ? 'green'
                    : el.increase_decrease_rate < 0
                    ? 'red'
                    : 'yellow'
                }
                LeadingIcon={
                  el.increase_decrease_rate > 0 ? (
                    <Arrow2Up
                      customCss={css`
                        path {
                          fill: var(--bage-greenLabel);
                        }
                      `}
                    />
                  ) : el.increase_decrease_rate < 0 ? (
                    <Arrow2Down
                      customCss={css`
                        path {
                          fill: var(--bage-redLabel);
                        }
                      `}
                    />
                  ) : (
                    <></>
                  )
                }
              >
                {String(Math.ceil(el.increase_decrease_rate)).replace('-', '')}%
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </ProductSalesTableWrap>
  );
};
