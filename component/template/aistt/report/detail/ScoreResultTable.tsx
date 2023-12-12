import React from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { fetchScoreResultDetail } from '@ApiFarm/aistt';
import { IReportScoreAverageItem } from '@InterfaceFarm/aistt';
import { TimeBadge } from '@ComponentFarm/atom/Badge/TimeBadge';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { Pic } from '@ComponentFarm/atom/icons';
import DataFilled from '@ComponentFarm/atom/icons/DataFilled';
import SkeletonTh from '@ComponentFarm/atom/Skeleton/SkeletonTh';
import { Table, TableWrap } from '@ComponentFarm/common';
import TableExpandRow from '@ComponentFarm/template/common/TableExpandRow';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { ImprovementNeedCause } from '../../state/detail/ImprovementNeedCause';
import { ReportTable } from '../../state/detail/ReportTable';
import { FqsAnalysisDataStyle } from '../../style';

const pageStyle = css`
  h3 {
    margin-bottom: 1.6rem;
  }
  .wrap_improvement_need {
    display: flex;
  }

  ul {
    > li:first-of-type {
      padding-bottom: 3rem;
    }
  }
`;

export const ScoreResultExpandContent = ({
  info,
  product_info_idx,
}: {
  info: { fqs_reports_idx: string; store_idx: string };
  product_info_idx: string;
}) => {
  const { data: ScoreResultDetailData } = useQuery(
    ['ScoreResultList', product_info_idx],
    () =>
      fetchScoreResultDetail({
        fqs_reports_idx: String(info.fqs_reports_idx),
        product_info_idx,
        store_idx: String(info.store_idx),
      }),
    {
      enabled: !!info.fqs_reports_idx && !!product_info_idx,
      cacheTime: 60,
    }
  );

  console.log('ScoreResultDetailData', ScoreResultDetailData);

  return (
    <FqsAnalysisDataStyle css={pageStyle}>
      <ul>
        <li>
          <span className="ico">
            <Pic />
          </span>
          <div className="cont_improvement_need">
            <h3>주요 개선 필요 요인</h3>
            <ImprovementNeedCause
              data={ScoreResultDetailData?.improvement_factor}
            />
          </div>
        </li>
        <li className="hide-line">
          <span className="ico">
            <DataFilled />
          </span>
          <div className="cont">
            <div className="inspection">
              <h3>리포트</h3>
              <ReportTable data={ScoreResultDetailData?.report} />
            </div>
          </div>
        </li>
      </ul>
    </FqsAnalysisDataStyle>
  );
};

export const ScoreResultTable = ({
  isLoading,
  info,
  data,
}: {
  isLoading: boolean;
  info: { fqs_reports_idx: string; store_idx: string };
  data?: IReportScoreAverageItem[];
}) => {
  return (
    <TableWrap className="content">
      <Table className="basic">
        <colgroup>
          {[50, 330, 150, 225.5, 225.5, 225.5, 225.5].map((el, i) => (
            <col key={i} width={getTableWidthPercentage(el)} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>제품명</th>
            <th className="center">구간 이미지</th>
            <th>총 제조 건수</th>
            <th>평균 제조 점수</th>
            <th>평균 제조 시간</th>
            <th>개선 필요 피자 수</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <SkeletonTh colLength={7} rowLength={8} />
          ) : data?.length === 0 ? (
            <tr>
              <td colSpan={7}>
                <Empty Icon={<IoAlertCircleOutline size={42} />} />
              </td>
            </tr>
          ) : (
            data?.map(item => (
              <TableExpandRow
                key={item.product_info_idx}
                content={
                  <ScoreResultExpandContent
                    info={info}
                    product_info_idx={String(item.product_info_idx)}
                  />
                }
              >
                <td>{item.product_name}</td>
                <td>
                  {item.product_image ? (
                    <img src={item.product_image} alt={item.product_name} />
                  ) : (
                    <Pic size={25} />
                  )}
                </td>
                <td>{item.manufacturing_count}건</td>
                <td>{item.converted_score_avarage}점</td>
                <td>
                  <TimeBadge time={item.manufacture_since_time_avarage} />
                </td>
                <td>{item.improvement_needed_count}건</td>
              </TableExpandRow>
            ))
          )}
        </tbody>
      </Table>
    </TableWrap>
  );
};
