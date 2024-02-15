import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchMonitoringStoreProductList } from '@ApiFarm/aistt';
import { IFqsMonitoringVideoInfo } from '@InterfaceFarm/ai-fqs';
import MonitoringMakeHistory from './MonitoringMakeHistory';
import FqsVideo from '../common/FqsVideo';
import { SectionStyle } from '../style';

const MonitoringVideoViewStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  .video-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    justify-content: center;
    align-items: stretch;
  }

  .product-wrap {
    margin-right: 27.6rem;
    border: 1px solid var(--color-neutral90);
    border-radius: 0.4rem;

    .product-list {
      top: 0;
      overflow: auto;
      position: absolute;
      height: 100%;
      width: 26.6rem;
      margin-left: 1.6rem;
      border: 1px solid var(--color-neutral90);
      border-radius: 0.4rem;
    }

    .title {
      font-size: 1.4rem;
    }

    section {
      position: sticky;
      top: 0;
      z-index: 1;
      margin: 0;
      padding: 0 0.8rem;
      background-color: #f7f7fa;
      border-bottom: 1px solid var(--color-neutral90);
    }
  }
`;

interface MonitoringVideoViewProps {
  storeIdx: number | string;
  activeDate: string;
  videoInfo: IFqsMonitoringVideoInfo;
}

const MonitoringVideoView = ({
  storeIdx,
  activeDate,
  videoInfo,
}: MonitoringVideoViewProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const makingTime = React.useMemo(
    () => router.query.d as string,
    [router.query]
  );

  const { data, isLoading } = useQuery(
    [
      'aistt-monitoring-time-products',
      storeIdx,
      activeDate,
      videoInfo.store_stt_cctv_idx,
    ],
    () =>
      fetchMonitoringStoreProductList({
        store_idx: storeIdx,
        record_date: activeDate,
        store_stt_cctv_idx: videoInfo.store_stt_cctv_idx,
      })
  );

  useEffect(() => {
    if (isLoading || !makingTime) return;
    const dt = dayjs(makingTime);

    if (
      dt.format('YYYY-MM-DD') !== activeDate ||
      dt.format('HH') !== dayjs(videoInfo.record_dt).format('HH')
    )
      return;

    const { video_play_seconds } = data?.list.find(item =>
      dt.isSame(item.manufacture_dt)
    ) ?? {
      video_play_seconds: 0,
    };

    if (dt.isValid() && videoRef.current && video_play_seconds) {
      videoRef.current.currentTime = video_play_seconds;
    }
  }, [videoRef, makingTime, isLoading]);

  return (
    <>
      <SectionStyle>
        <h3 className="title">영상 정보</h3>
      </SectionStyle>
      <MonitoringVideoViewStyle>
        <div className="video-wrap">
          <FqsVideo
            ref={videoRef}
            src={videoInfo.cctv_video_url}
            crossOrigin="anonymous"
          />
        </div>
        <div className="product-wrap">
          <div className="product-list">
            <SectionStyle>
              <h3 className="title">제조 피자 목록</h3>
              <span className="count">
                총 <span className="number">{data?.total_count}</span> 건
              </span>
            </SectionStyle>
            {data?.list.map(item => (
              <MonitoringMakeHistory
                key={item.inspection_info_idx}
                data={item}
                active={item.manufacture_dt === makingTime}
                onClickAnalysis={() => {
                  router.push(
                    `/aistt-monitoring/${storeIdx}/analysis/${item.inspection_info_idx}`
                  );
                }}
                onClickItem={clickItem => {
                  router.replace(
                    {
                      pathname: router.pathname,
                      query: {
                        ...router.query,
                        d: clickItem.manufacture_dt,
                      },
                    },
                    undefined,
                    {
                      scroll: false,
                      shallow: true,
                    }
                  );
                }}
              />
            ))}
          </div>
        </div>
      </MonitoringVideoViewStyle>
    </>
  );
};

export default MonitoringVideoView;
