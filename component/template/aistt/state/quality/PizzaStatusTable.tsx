import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fetchPizzaStatus } from '@ApiFarm/aistt';
import { IAisttStateReq } from '@InterfaceFarm/aistt';
import { TimeBadge } from '@ComponentFarm/atom/Badge/TimeBadge';
import { Pic } from '@ComponentFarm/atom/icons';
import Verified from '@ComponentFarm/atom/icons/Verified';
import SkeletonTh from '@ComponentFarm/atom/Skeleton/SkeletonTh';
import { TableSty1 } from '@ComponentFarm/template/common/table/TableSty';
import { QueryParams } from '@HookFarm/useQueryParams';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

const PizzaStatusTableWrap = styled.div`
  width: 100%;
  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-neutral90);
  background: #fff;

  .area_info {
    display: flex;
    aiign-items: center;
    margin-bottom: 3rem;
    dt {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 11rem;
      height: 4.1rem;
      margin: 0 1.2rem 0 2.4rem;
      color: var(--color-blue_gray50);
      border-radius: 0.4rem;
      background: var(--color-blue_gray20);

      &:first-of-type {
        margin-left: 0;
      }
    }
    dd {
      display: flex;
      align-items: center;
      color: var(--color-neutral10);
      font-size: 2rem;
      font-weight: 400;
      line-height: 120%;
    }
  }
`;

const tablePageSty = css`
  th:nth-of-type(2) {
    text-align: left;
  }
  td {
    height: 15.2rem;
  }

  td:not(.product_info),
  td:not(.product_info) {
    font-size: 1.6rem;
    font-weight: 600;
  }

  .num {
    color: var(--color-neutral50);
    .box_rank {
      display: flex;
      align-items: center;
      svg {
        path:first-of-type {
          fill: var(--color-blue60);
        }
      }
    }
  }
  .product_info {
    text-align: left;
    .inner {
      display: flex;
      align-items: center;
      .thumb {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 17rem;
        height: 12.8rem;
        margin: 0 2rem;
        border-radius: 0.8rem;
        background: #f3f2f2;
      }
      .txt_product_info {
        padding: 0 2.4rem;
        .product_name {
          display: block;
          margin-bottom: 0.8rem;
          color: var(--color-blue60);
          font-size: 1.4rem;
          font-weight: 500;
          text-decoration-line: underline;
        }
        .category {
          color: var(--color-neutral50);
          font-size: 1.2rem;
          font-weight: 400;
        }
      }
    }
  }
  .count,
  .score,
  .need {
    color: var(--color-neutral10);
  }
`;

export const PizzaStatusTable = ({ params }: { params: QueryParams }) => {
  const { data } = useQuery(['pizzaStatusList', params], () =>
    fetchPizzaStatus(params as IAisttStateReq)
  );

  // eslint-disable-next-line no-unused-vars
  const { product_info_idx, ...rest } = params;

  return (
    <PizzaStatusTableWrap>
      <dl className="area_info">
        <dt>평균</dt>
        <dd>{data?.summary.converted_score_avarage_total}점</dd>
        <dt>총 메뉴 수</dt>
        <dd>{data?.summary.product_count}개</dd>
        <dt>총 제조 수</dt>
        <dd>{data?.summary.manufacturing_count_total.toLocaleString()}개</dd>
      </dl>
      <TableSty1 css={tablePageSty}>
        <colgroup>
          {[96, 668, 181, 181, 181, 181].map((size, i) => (
            <col key={i} width={getTableWidthPercentage(size)} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th>NO.</th>
            <th>제품명</th>
            <th>총 제조건수</th>
            <th>평균 제조 점수</th>
            <th>평균 제조 시간</th>
            <th>개선 필요 피자 수</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data?.list.map((item, i) => (
              <tr key={item.product_info_idx}>
                <td className="num">
                  <div className="box_rank">
                    {i <= 2 && <Verified size={20} />}
                    {i < 9 ? `0${i + 1}` : i + 1}
                  </div>
                </td>
                <td className="product_info">
                  <div className="inner">
                    <div className="thumb">
                      {item.product_image ? (
                        <img src={item.product_image} alt={item.product_name} />
                      ) : (
                        <Pic size={25} />
                      )}
                    </div>
                    <div className="txt_product_info">
                      <Link
                        href={{
                          pathname: `/aistt-state/detail/${item.product_info_idx}`,
                          query: { ...rest },
                        }}
                        className="product_name"
                      >
                        {item.product_name}
                      </Link>
                      <div className="category">
                        {item.evi_product_category_str}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="count">{item.manufacturing_count}건</td>
                <td className="score">{item.converted_score_avarage}점</td>
                <td className="time">
                  <TimeBadge time={item.manufacture_since_time_avarage} />
                </td>
                <td className="need">{item.improvement_needed_count}건</td>
              </tr>
            ))
          ) : (
            <SkeletonTh colLength={6} />
          )}
        </tbody>
      </TableSty1>
    </PizzaStatusTableWrap>
  );
};
