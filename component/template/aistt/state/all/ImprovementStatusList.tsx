import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Skeleton from 'react-loading-skeleton';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fetchImprovementStatus } from '@ApiFarm/aistt';
import { IAisttStateReq, IimprovementStatusItem } from '@InterfaceFarm/aistt';
import { TextBadge } from '@ComponentFarm/atom/Badge/TextBadge';
import RingChart from '@ComponentFarm/chart/RingChart';
import ScoreLabel from '@ComponentFarm/chart/ScoreLabel';
import { QueryParams } from '@HookFarm/useQueryParams';

dayjs.extend(duration);

export const ImprovementStatusWrap = styled.div`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0.8rem;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  .head {
    display: flex;
    padding: 1.6rem 2.4rem;
    border-bottom: 1px solid #e5e5e5;

    .product_info {
      margin-right: auto;
      color: var(--color-blue-gray50);
      .product_name {
        margin-bottom: 0.7rem;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 110%;
      }
      .store {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 120%;
      }
    }
  }

  .content {
    display: flex;
    padding: 2.4rem;
    align-items: center;

    .box_time {
      margin-left: auto;
      text-align: right;
      .time {
        margin-bottom: 0.6rem;
        color: var(--color-neutral10);
        font-size: 3.6rem;
        font-weight: 700;
        line-height: 110%;
      }
      .label {
        color: var(--gray400);
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 120%; /* 1.68rem */
      }
    }
  }
`;

export const SkeletonWrap = styled.div`
  display: flex;

  > span {
    display: flex;
    overflow: hidden;
    width: calc(33.3% - 1.5rem);
    height: 29.1rem;
    margin-right: 1.5rem;
    border-radius: 0.8rem;

    &:nth-of-type(2) {
      width: 33.4%;
      margin: 0 3rem 0 1.5rem;
    }
  }
`;

export const ImprovementStatus = ({
  data,
}: {
  data: IimprovementStatusItem;
}) => {
  const RingChartData = [
    { name: 'Score', value: data.converted_score },
    { name: 'Remaining', value: 100 - data.converted_score },
  ];
  return (
    <ImprovementStatusWrap>
      <div className="head">
        <div className="product_info">
          <div className="product_name">{data.product_name}</div>
          <div className="store">{data.store_name}</div>
        </div>
        <TextBadge text={data.improvement_label} color="red" />
      </div>
      <div className="content">
        <div className="chart">
          <RingChart
            chartData={RingChartData}
            size="12rem"
            gradient={['#ffa4a4', '#f24768']}
            labelComponent={<ScoreLabel />}
          />
        </div>
        <div className="box_time">
          <div className="time">
            {dayjs
              .duration(data.manufacture_since_time, 'seconds')
              .format('mm:ss')}
          </div>
          <div className="label">제조 소요시간</div>
        </div>
      </div>
    </ImprovementStatusWrap>
  );
};

export const ImprovementStatusList = ({ params }: { params: QueryParams }) => {
  const { data } = useQuery(['improvementList', params], () =>
    fetchImprovementStatus(params as IAisttStateReq)
  );

  return (
    <div
      css={css`
        height: 28.1rem;
      `}
    >
      {data ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {data?.list.map(item => (
            <SwiperSlide key={item.inspection_info_idx}>
              <ImprovementStatus data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SkeletonWrap>
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton key={i} baseColor="#fcfcfc" />
          ))}
        </SkeletonWrap>
      )}
    </div>
  );
};
