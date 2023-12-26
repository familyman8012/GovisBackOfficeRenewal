/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { SetStateAction, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { IoAlertCircleOutline } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IManufacturingQualityItem } from '@InterfaceFarm/aistt';
import { TextBadge, TextBadgeColor } from '@ComponentFarm/atom/Badge/TextBadge';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import DonutChart from '@ComponentFarm/chart/DonutChart2';
import { QueryParams } from '@HookFarm/useQueryParams';

export const ManufacturingQualityWrap = styled.div`
  overflow: hidden;

  min-width: 50rem;
  cursor: pointer;
  border-radius: 0.8rem;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  &.on_1 {
    border: 0.2rem solid #2a31de;
    box-shadow: 0 0 0 0.8rem #eaebff;
  }

  &.on_2 {
    border: 0.2rem solid var(--color-yellow50);
    box-shadow: 0 0 0 0.8rem var(--color-yellow90);
  }

  &.on_3 {
    border: 0.2rem solid var(--color-orange70);
    box-shadow: 0 0 0 0.8rem var(--color-red90);
  }

  .status_head {
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-bottom: 1px solid #e5e5e5;
    background: #f7f9fc;

    .title {
      margin-right: auto;
      color: var(--color-blue-gray50);
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 110%;
    }
  }

  .status_content {
    .info {
      display: flex;
      padding: 2.4rem;
      dl {
        width: 80%;
        &:first-of-type {
          width: 20%;
          margin-right: 2.4rem;
        }
        dt {
          margin-bottom: 0.6rem;
          color: var(--color-gray400);
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 120%;
        }
        dd {
          color: #242424;
          font-family: Inter;
          font-size: 2rem;
          font-style: normal;
          font-weight: 500;
          line-height: 125%;
        }
      }
    }
  }
`;

export const ManufacturingQualityListWrap = styled.div`
  display: flex;
`;

export const SkeletonWrap = styled.div`
  display: flex;

  > span {
    display: flex;
    overflow: hidden;
    width: calc(33.3% - 1.2rem);
    height: 25.3rem;
    margin-right: 1.2rem;
    border-radius: 0.8rem;

    &:nth-of-type(2) {
      width: 33.4%;
      margin: 0 2.4rem 0 1.2rem;
    }
  }
`;

const textBadgeLabel: {
  [key: number]: { text: string; color: TextBadgeColor };
} = {
  1: { text: '100점~80점', color: 'blue' },
  2: { text: '80점~50점', color: 'yellow' },
  3: { text: '50점~0점', color: 'orange' },
};

export const ManufacturingQuality = ({
  type,
  selectScoreRange,
  setselectScoreRange,
  updateParams,
  data,
}: {
  type?: string;
  selectScoreRange: string;
  setselectScoreRange: React.Dispatch<SetStateAction<string>>;
  updateParams?: (newParams: QueryParams) => void;
  data: IManufacturingQualityItem;
}) => {
  const chartArray = [
    {
      title: '제조수',
      color: 'var(--color-green30)',
      progress: data.manufacturing_count_per,
    },
  ];

  return (
    <ManufacturingQualityWrap
      className={
        selectScoreRange === String(data.score_range)
          ? `manufacturing on_${data.score_range}`
          : 'manufacturing'
      }
    >
      <div className="status_head">
        <span className="title">점수대별 현황</span>
        <TextBadge
          text={textBadgeLabel[data.score_range].text}
          color={textBadgeLabel[data.score_range].color}
        />
      </div>
      <div className="status_content">
        <div className="info">
          <dl>
            <dt>제조 수</dt>
            <dd>{data.manufacturing_count.toLocaleString()}개</dd>
          </dl>
          <dl>
            <dt>제조 비율</dt>
            <dd>
              {chartArray.map(el => (
                <span className="txt_progress" key={el.title}>
                  {el.progress.toFixed(1)}%
                </span>
              ))}
            </dd>
          </dl>
        </div>
      </div>
    </ManufacturingQualityWrap>
  );
};

export const ManufacturingQualityList = ({
  type,
  params,
  updateParams,
  data,
}: {
  type?: string;
  params?: QueryParams;
  updateParams?: (newParams: QueryParams) => void;
  data?: IManufacturingQualityItem[];
}) => {
  const router = useRouter();
  const [selectScoreRange, setselectScoreRange] = useState('');

  useEffect(() => {
    if (data) {
      setselectScoreRange(String(params?.score_range));
    }
  }, [data]);

  const chartDataArr = useMemo(
    () => [
      { item_label: '100점~80점', fill: '#3B82F6' },
      { item_label: '80점~50점', fill: '#0EA5E9' },
      { item_label: '50점~0점', fill: '#06B6D4' },
    ],
    []
  );

  const chartData = useMemo(
    () =>
      data?.map((el, i) => {
        return {
          ...chartDataArr[i],
          base_sales_count: el.manufacturing_count,
          manufacturing_count_per: el.manufacturing_count_per,
        };
      }),
    [chartDataArr, data]
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (params?.score_range) {
      setActiveIndex(Number(params.score_range) - 1);
    }
  }, []);

  const handlerScoreRange = (item: any) => {
    if (type === 'state') {
      router.push({
        pathname: '/aistt-state/quality',
        query: { ...router.query, score_range: item.score_range },
      });
    }
    if (type !== 'state' && updateParams) {
      if (selectScoreRange === String(item.score_range)) {
        setselectScoreRange('');
        updateParams({ score_range: undefined });
      } else {
        setselectScoreRange(String(item.score_range));
        updateParams({ score_range: item.score_range });
      }
    }
  };

  return (
    <>
      {data ? (
        <ManufacturingQualityListWrap>
          {data?.every(el => el.manufacturing_count === 0) ? (
            <Empty Icon={<IoAlertCircleOutline size={42} />}>
              조회된 조건의 제조 피자가 없습니다.
            </Empty>
          ) : (
            <DonutChart
              height="50rem"
              chartData={chartData}
              activeIndex={activeIndex}
            />
          )}
          <div>
            {data?.map((item, i: number) => (
              // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
              <div
                key={i}
                css={css`
                  display: block;
                  margin-top: 10px;
                  &:hover {
                    &:nth-of-type(1) {
                      .manufacturing {
                        border: 0.2rem solid #2a31de;
                        box-shadow: 0 0 0 0.8rem #eaebff;
                      }
                    }
                    &:nth-of-type(2) {
                      .manufacturing {
                        border: 0.2rem solid var(--color-yellow50);
                        box-shadow: 0 0 0 0.8rem var(--color-yellow90);
                      }
                    }

                    &:nth-of-type(3) {
                      .manufacturing {
                        border: 0.2rem solid var(--color-orange70);
                        box-shadow: 0 0 0 0.8rem var(--color-red90);
                      }
                    }
                  }
                `}
                onMouseOver={() => {
                  setselectScoreRange('');
                  setActiveIndex(i);
                }}
                onMouseLeave={() => {
                  setselectScoreRange(String(params?.score_range));
                  setActiveIndex(Number(params?.score_range) - 1);
                }}
                onClick={() => handlerScoreRange(item)}
              >
                <ManufacturingQuality
                  type={type}
                  data={item}
                  selectScoreRange={selectScoreRange}
                  setselectScoreRange={setselectScoreRange}
                  updateParams={updateParams}
                />
              </div>
            ))}
          </div>
        </ManufacturingQualityListWrap>
      ) : (
        <SkeletonWrap>
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton key={i} baseColor="#fcfcfc" />
          ))}
        </SkeletonWrap>
      )}
    </>
  );
};
