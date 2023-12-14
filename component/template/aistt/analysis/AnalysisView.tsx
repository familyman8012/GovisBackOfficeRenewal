import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { runInAction } from 'mobx';
import { useMutation } from 'react-query';
import { requestInspection } from '@ApiFarm/aistt';
import { IFqsInspectionInfo } from '@InterfaceFarm/ai-fqs';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import DataFilled from '@ComponentFarm/atom/icons/DataFilled';
import Pic from '@ComponentFarm/atom/icons/Pic';
import Tooltip from '@ComponentFarm/atom/Tooltip/Tooltip';
import { Table, TableWrap } from '@ComponentFarm/common';
import SecondBadges from '@ComponentFarm/template/common/SecondBadges';
import TableExpandRow from '@ComponentFarm/template/common/TableExpandRow';
import { useGoMove } from '@HookFarm/useGoMove';
import { confirmModalStore } from '@MobxFarm/store';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { getScoreFormat } from '@UtilFarm/number';
import { AnalysisPageStyle } from './style';
import FqsVideo from '../common/FqsVideo';
import { FqsAnalysisDataStyle, FqsInfoTable, SectionStyle } from '../style';

const AnalysisView = ({
  data,
  inspectionId,
}: {
  data?: IFqsInspectionInfo;
  inspectionId?: number | string;
}) => {
  const { onBack } = useGoMove();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [requestedInspect, setRequestedInspect] = useState(false);
  const handleChangeVideoTime = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  // 평가 재요청
  const requestInspect = useMutation(requestInspection, {
    onSuccess: () => {
      setRequestedInspect(true);
      runInAction(() => {
        confirmModalStore.openModal({
          title: '평가 재요청',
          content: (
            <p>
              해당 제조 영상에 대한 평가 재요청을 완료했습니다. <br /> 목록으로
              이동합니다.
            </p>
          ),
          showCloseButton: false,
          showCancelButton: false,
          onFormSubmit: () => {
            confirmModalStore.isOpen = false;
            onBack(2);
          },
          onClose: () => {
            confirmModalStore.isOpen = false;
            onBack(2);
          },
          onCancel: () => {
            confirmModalStore.isOpen = false;
            onBack(2);
          },
        });
      });
    },
  });

  const isRequested =
    data?.is_re_request === 1 || requestInspect.isLoading || requestedInspect;

  return (
    <AnalysisPageStyle>
      <FqsVideo
        sticky
        closeButton
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
          <h3 className="title">제조 결과</h3>
          {inspectionId && (
            <Button
              disabled={isRequested}
              onClick={() => requestInspect.mutate(Number(inspectionId))}
            >
              평가 재요청
              {isRequested && (
                <Tooltip eventType="hover" direction="left">
                  {`평가 재요청됨.\n평가 완료까지 시간이 소요됩니다.`}
                </Tooltip>
              )}
            </Button>
          )}
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
                <th>종합 점수</th>
                <td colSpan={3}>{getScoreFormat(data?.converted_score)}/100</td>
              </tr>
              <tr>
                <th>감점 요인 등</th>
                <td>
                  감점 요인{' '}
                  <span className="cnt-text yellow">{data?.average_count}</span>{' '}
                  건 / 개선 필요{' '}
                  <span className="cnt-text red">{data?.poor_count}</span> 건
                </td>
                <th>영상 보관</th>
                <td>
                  <a
                    className="download-link"
                    href={data?.video_url}
                    download={`${data?.inspection_dt}_${data?.store_name}_${
                      data?.product_info_name ?? ''
                    }`}
                  >
                    보관하기
                  </a>
                </td>
              </tr>
            </tbody>
          </FqsInfoTable>
        </SectionStyle>
        <SectionStyle className="list">
          <h3 className="title">단계별 상세 결과</h3>
          <span className="count">
            총 <span className="number">{data?.step_list.length ?? 0}</span> 건
          </span>
          <TableWrap className="content">
            <Table className="basic">
              <colgroup>
                <col width={getTableWidthPercentage(50)} />
                <col width={getTableWidthPercentage(100)} />
                <col width={getTableWidthPercentage(160)} />
                <col width={getTableWidthPercentage(150)} />
                <col width={getTableWidthPercentage(936)} />
                <col width={getTableWidthPercentage(140)} />
              </colgroup>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th className="center">검수 결과</th>
                  <th>구간 종류</th>
                  <th>구간 이미지</th>
                  <th className="center">구간 시작 및 종료</th>
                  <th>구간 점수</th>
                </tr>
              </thead>
              <tbody>
                {!data?.step_list.length && (
                  <tr className="empty">
                    <td colSpan={5}>
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
                                <h3>개선/감점 요인</h3>
                                <div className="effect">
                                  {item.rating_scale_idx_1 !== 1 && (
                                    <Badge
                                      color={
                                        item.rating_scale_idx_1 === 2
                                          ? 'yellow'
                                          : item.rating_scale_idx_1 === 3
                                          ? 'red'
                                          : 'gray'
                                      }
                                      size="sm"
                                    >
                                      {item.rating_scale_name_1}
                                    </Badge>
                                  )}
                                  <p>
                                    {item.improvement_label ||
                                      item.decrease_label ||
                                      '개선/감점 요인이 없습니다.'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </FqsAnalysisDataStyle>
                    }
                  >
                    <td className="center">
                      <Badge
                        color={
                          item.rating_scale_idx_1 === 2
                            ? 'yellow'
                            : item.rating_scale_idx_1 === 3
                            ? 'red'
                            : 'blue'
                        }
                        size="sm"
                      >
                        {item.rating_scale_name_1}
                      </Badge>
                    </td>
                    <td>{item?.step_variable_name}</td>

                    <td>
                      <img
                        src={item.step_image_url}
                        alt={item?.step_variable_name}
                        width="82px"
                      />
                    </td>

                    {/** 시간 클릭 시 영상 시간 변경 */}
                    <td className="center">
                      <SecondBadges
                        beforeSecond={item.section_dt_start}
                        afterSecond={item.section_dt_finish}
                        onClickSecond={handleChangeVideoTime}
                      />
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
  );
};

export default AnalysisView;
