import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from '@emotion/styled';
import { IDetailStateRes } from '@InterfaceFarm/aistt';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';

export const ImprovementNeedCauseWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 3rem;

  dl {
    display: flex;
    flex-direction: column;
    dt {
      order: 2;
      display: flex;
      align-items: center;
      margin-bottom: 1.2rem;

      span[aria-busy='true'] {
        width: 100%;
        height: 100%;
      }

      .txt {
        margin-right: 1.2rem;
        color: var(--color-neutral10);
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 110%;
      }
    }
    dd {
      order: 1;
      overflow: hidden;
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 0.8rem;

      img {
        width: 100%;
        border-radius: 0.8rem;
      }
    }
  }
`;

export const ImprovementNeedCause = ({
  isLoading,
  data,
}: {
  isLoading?: boolean;
  data?: IDetailStateRes;
}) => {
  return (
    <ImprovementNeedCauseWrap>
      {!data
        ? Array.from({ length: 3 }, (_, i) => (
            <dl key={i}>
              <dt>
                <Skeleton width="100%" height="100%" baseColor="#fcfcfc" />
              </dt>
              <dd>
                <Skeleton width="100%" height="100%" baseColor="#fcfcfc" />
              </dd>
              <dd>
                {/* <img src={el.image} alt={`${el.label} 사진`} /> */}
                <Skeleton width="100%" height="100%" baseColor="#fcfcfc" />
              </dd>
            </dl>
          ))
        : data?.improvement_factor?.map((el, i) => (
            <dl key={i}>
              <dt>
                <span className="txt">{el.label}</span>
                <Badge color="red">
                  개선 필요 : {data.improvement_needed[i].frequency_count}건
                </Badge>
              </dt>
              <dd>
                <img src={el.color_image_url} alt={`${el.label} 사진`} />
              </dd>
            </dl>
          ))}
    </ImprovementNeedCauseWrap>
  );
};
