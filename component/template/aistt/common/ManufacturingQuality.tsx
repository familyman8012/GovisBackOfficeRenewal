import React, { SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import styled from '@emotion/styled';
import { IManufacturingQualityItem } from '@InterfaceFarm/aistt';
import { TextBadge, TextBadgeColor } from '@ComponentFarm/atom/Badge/TextBadge';
import { Progress } from '@ComponentFarm/chart/Progress';
import { ProgressStatus } from '@ComponentFarm/template/common/ProgressStatusExample';
import { QueryParams } from '@HookFarm/useQueryParams';

export const ManufacturingQualityWrap = styled.div`
  overflow: hidden;
  width: 33.3%;
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

  &:nth-of-type(2) {
    width: 33.4%;
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
      border-bottom: 1px solid #e5e5e5;
      dl {
        &:first-of-type {
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
    .box_chart {
      padding: 2.4rem;

      > div + div {
        margin-top: 1.6rem;
      }
    }
  }
`;

export const ManufacturingQualityListWrap = styled.div`
  display: flex;
  gap: 2.4rem;
  height: 26.9rem;
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
  1: { text: '100점~70점', color: 'blue' },
  2: { text: '70점~50점', color: 'yellow' },
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
  const router = useRouter();
  const chartArray = [
    {
      title: '제조수',
      color: 'var(--color-green30)',
      progress: data.manufacturing_count_per,
    },
    {
      title: '개선 필요 수',
      color: 'var(--color-orange80)',
      progress: data.improvement_needed_count_per,
    },
  ];

  const handlerScoreRange = () => {
    if (type === 'state') {
      router.push({
        pathname: '/aistt-state/quality',
        query: { ...router.query, score_range: data.score_range },
      });
    }
    if (type !== 'state' && updateParams) {
      if (selectScoreRange === String(data.score_range)) {
        setselectScoreRange('');
        updateParams({ score_range: undefined });
      } else {
        setselectScoreRange(String(data.score_range));
        updateParams({ score_range: data.score_range });
      }
    }
  };

  return (
    <ManufacturingQualityWrap
      className={
        selectScoreRange === String(data.score_range)
          ? `on_${data.score_range}`
          : ''
      }
      onClick={handlerScoreRange}
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
            <dt>제조수</dt>
            <dd>{data.manufacturing_count.toLocaleString()}</dd>
          </dl>
          <dl>
            <dt>개선 필요 수</dt>
            <dd>{data.improvement_needed_count.toLocaleString()}</dd>
          </dl>
        </div>
        <div className="box_chart">
          {chartArray.map(el => (
            <ProgressStatus key={el.title}>
              <span className="label">{el.title}</span>
              <Progress
                width="calc(100% - 13rem)"
                height="0.8rem"
                color={el.color}
                progress={el.progress}
              />
              <span className="txt_progress">{el.progress.toFixed(1)}%</span>
            </ProgressStatus>
          ))}
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
  const [selectScoreRange, setselectScoreRange] = useState('');

  useEffect(() => {
    if (data) {
      setselectScoreRange(String(params?.score_range));
    }
  }, [data]);

  return (
    <>
      {data ? (
        <ManufacturingQualityListWrap>
          {data?.map((item, i: number) => (
            <ManufacturingQuality
              key={i}
              type={type}
              data={item}
              selectScoreRange={selectScoreRange}
              setselectScoreRange={setselectScoreRange}
              updateParams={updateParams}
            />
          ))}
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
