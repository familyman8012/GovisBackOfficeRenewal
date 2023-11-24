import React from 'react';
import { css } from '@emotion/react';
import { IChannelStoreListItem } from '@InterfaceFarm/product-statistics';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import Arrow2Down from '@ComponentFarm/atom/icons/Arrow2Down';
import Arrow2Up from '@ComponentFarm/atom/icons/Arrow2Up';
import { TableSty1 } from '@ComponentFarm/template/common/table/TableSty';

const pageStyle = css`
  td {
    height: 5.6rem;
    padding: 0 1.6rem !important;

    &.comparison_sales_count {
      color: var(--color-gray8);
    }

    .badge {
      margin-right: 1.6rem;
    }
    .store_name {
      padding-left: 1.6rem;
      font-weight: 600;
    }
  }
`;

const StoreSalesTable = ({
  rankingData,
}: {
  rankingData: IChannelStoreListItem[];
}) => {
  return (
    <TableSty1 css={pageStyle}>
      <thead>
        <tr>
          <th scope="col">매장명</th>
          <th scope="col">기준일 판매</th>
          <th scope="col">비교일 판매</th>
          <th scope="col">증감율</th>
        </tr>
      </thead>
      <tbody>
        {rankingData.map(el => (
          <tr key={el.store_idx}>
            <td>
              <Badge
                color={el.ranking > 3 ? 'gray' : 'indigo'}
                size="circle"
                hasBorder={false}
              >
                {el.ranking}
              </Badge>
              <span className="store_name"> {el.store_name}</span>
            </td>
            <td>{el.base_sales_count}</td>
            <td className="comparison_sales_count">
              {el.comparison_sales_count}
            </td>
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
    </TableSty1>
  );
};

export default StoreSalesTable;
