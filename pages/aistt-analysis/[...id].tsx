import React, { useEffect, useMemo, useRef } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchInspectionInfo } from '@ApiFarm/aistt';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { Pic } from '@ComponentFarm/atom/icons';
import DataFilled from '@ComponentFarm/atom/icons/DataFilled';
import { Table, TableWrap } from '@ComponentFarm/common';
import PageLayout from '@ComponentFarm/layout/PageLayout';
import FqsVideo from '@ComponentFarm/template/aistt/FqsVideo';
import {
  AnalysisPageStyle,
  FqsAnalysisDataStyle,
  FqsInfoTable,
  SectionStyle,
} from '@ComponentFarm/template/aistt/style';
import TableExpandRow from '@ComponentFarm/template/common/TableExpandRow';
import { useGoMove } from '@HookFarm/useGoMove';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { getScoreFormat } from '@UtilFarm/number';

const AnalysisViewPage = () => {
  const { onBack } = useGoMove();
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const pathname = useMemo(() => router.asPath.split('?')[0], [router.asPath]);
  const path = useMemo(() => router.query.id?.[0] ?? 'view', [router.isReady]);
  const id = useMemo(() => router.query.id?.[1] ?? '', [router.isReady]);

  const handleChangeVideoTime = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const { data } = useQuery(
    ['fqs-analysis-view', id],
    () => fetchInspectionInfo(Number(id)),
    {
      onError: () => onBack(2),
      enabled: router.isReady,
    }
  );

  useEffect(() => {
    if (router.isReady && path !== 'view') {
      onBack(id ? 2 : 1);
    }
  }, [path, router.isReady]);

  return (
    <PageLayout
      key="fqs-analysis-view"
      tabData={[
        {
          title: '상세 정보',
          url: pathname,
        },
      ]}
      title="제품 분석"
    >
      <AnalysisPageStyle>
        <FqsVideo
          sticky
          ref={videoRef}
          src={data?.dual_video_url ? data?.dual_video_url : data?.video_url}
        />
        <div className="info">
          <h2>
            {`[${data?.store_name ?? ''}] ${data?.product_info_name ?? ''}`}
            <Badge
              color={
                data?.inspection_status === 'complete'
                  ? 'green'
                  : data?.inspection_status === 'indeterminate'
                  ? 'red'
                  : 'yellow'
              }
              dot
              size="sm"
            >
              {data?.inspection_status === 'complete'
                ? '검수 완료'
                : data?.inspection_status === 'indeterminate'
                ? '판단 불가'
                : '영상 불량'}
            </Badge>
          </h2>
          <p>평가일자 {data?.inspection_dt}</p>
          <p>제조일자 {data?.manufacture_dt}</p>
        </div>
        <div className="inspection-info">
          <SectionStyle className="summary">
            <h3 className="title">내역</h3>
            <FqsInfoTable bordered className="content">
              <colgroup>
                <col width={getTableWidthPercentage(120)} />
                <col width={getTableWidthPercentage(648)} />
                <col width={getTableWidthPercentage(120)} />
                <col width={getTableWidthPercentage(648)} />
              </colgroup>
              <tbody>
                <tr>
                  <th>피자명</th>
                  <td>{data?.product_info_name}</td>
                  <th>제조시간</th>
                  <td>
                    {dayjs
                      .unix(data?.manufacture_since_time ?? 0)
                      .format('m분 ss초')}
                  </td>
                </tr>
                <tr>
                  <th>종합점수</th>
                  <td>
                    {data?.total_score ?? 0}/
                    {(data?.step_list.length ?? 0) * 10}
                  </td>
                  <th>변환점수</th>
                  <td>{getScoreFormat(data?.converted_score)}/100</td>
                </tr>
                <tr>
                  <th>개선 필요</th>
                  <td>{data?.poor_count}건</td>
                  <th>영상 보관</th>
                  <td>
                    <a
                      className="download-link"
                      download
                      href={data?.video_url}
                    >
                      보관하기
                    </a>
                  </td>
                </tr>
              </tbody>
            </FqsInfoTable>
          </SectionStyle>
          <SectionStyle className="list">
            <h3 className="title">영상 내역</h3>
            <span className="count">
              총 <span className="number">{data?.step_list.length ?? 0}</span>{' '}
              건
            </span>
            <TableWrap className="content">
              <Table className="basic">
                <colgroup>
                  <col width={getTableWidthPercentage(50)} />
                  <col width={getTableWidthPercentage(185)} />
                  <col width={getTableWidthPercentage(150)} />
                  <col width={getTableWidthPercentage(812)} />
                  <col width={getTableWidthPercentage(96)} />
                  <col width={getTableWidthPercentage(140)} />
                </colgroup>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>구간 종류</th>
                    <th>구간 이미지</th>
                    <th className="center">구간 시작 및 종료</th>
                    <th>구간 점수</th>
                    <th>변환 점수</th>
                  </tr>
                </thead>
                <tbody>
                  {!data?.step_list.length && (
                    <tr className="empty">
                      <td colSpan={6}>
                        <Empty>데이터가 없습니다.</Empty>
                      </td>
                    </tr>
                  )}
                  {data?.step_list.map(item => (
                    <TableExpandRow
                      key={item.inspection_step_idx}
                      content={
                        <FqsAnalysisDataStyle>
                          <ul>
                            <li>
                              <span className="ico">
                                <Pic />
                              </span>
                              <div className="cont">
                                <div className="inspection-img">
                                  <h3>제조 이미지</h3>
                                  <img
                                    src={item.step_image_url}
                                    alt=""
                                    width="100%"
                                  />
                                </div>

                                <div className="inspection-img">
                                  <h3>제조 이미지 컬러맵</h3>
                                  <img
                                    src={item.step_color_image_url}
                                    alt=""
                                    width="100%"
                                  />
                                </div>
                              </div>
                            </li>

                            <li className="hide-line">
                              <span className="ico">
                                <DataFilled />
                              </span>
                              <div className="cont">
                                <div className="inspection">
                                  <h3>감점/개선 요인</h3>
                                  <div className="effect">
                                    {item.rating_scale_idx_1 !== 1 && (
                                      <Badge
                                        color={
                                          item.rating_scale_idx_1 === 2
                                            ? 'red'
                                            : item.rating_scale_idx_1 === 3
                                            ? 'yellow'
                                            : 'gray'
                                        }
                                        size="sm"
                                      >
                                        {item.rating_scale_name_1}
                                      </Badge>
                                    )}
                                    <p>
                                      {item.rating_scale_idx_1 !== 1
                                        ? `${item.step_variable_name?.replace(
                                            '고피자',
                                            ''
                                          )} ${item.rating_scale_name_3}`
                                        : '개선/감점 요인이 없습니다.'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </FqsAnalysisDataStyle>
                      }
                    >
                      <td>{item?.step_variable_name}</td>
                      <td>
                        <img src={item.step_image_url} alt="" width="82px" />
                      </td>
                      {/** 시간 클릭 시 영상 시간 변경 */}
                      <td className="center">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={e => {
                            e.stopPropagation();
                            handleChangeVideoTime(item.section_dt_start);
                          }}
                          onKeyDown={e => {
                            if (e.key === 'Enter') {
                              handleChangeVideoTime(item.section_dt_start);
                            }
                          }}
                        >
                          <Badge color="gray">
                            {dayjs.unix(item.section_dt_start).format('mm:ss')}
                          </Badge>
                          <span className="gt" />
                          <Badge color="gray">
                            {dayjs.unix(item.section_dt_finish).format('mm:ss')}
                          </Badge>
                        </div>
                      </td>
                      <td>
                        {item.section_score}/{item.section_score_std}
                      </td>
                      <td>{item.conversion_score}/100</td>
                    </TableExpandRow>
                  ))}
                </tbody>
              </Table>
            </TableWrap>
          </SectionStyle>
        </div>
      </AnalysisPageStyle>
    </PageLayout>
  );
};

export default AnalysisViewPage;