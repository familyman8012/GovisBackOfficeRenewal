import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import CircleUp from '@ComponentFarm/atom/icons/CircleUp';
import Toggle from '@ComponentFarm/atom/Toggle/Toggle';
import { Table, TableWrap } from '@ComponentFarm/common';
import PageLayout from '@ComponentFarm/layout/PageLayout';
import {
  DevicePageStyle,
  FqsInfoTable,
  SectionStyle,
  VideoWrapStyle,
} from '@ComponentFarm/template/ai-fqs/style';
import TableExpandRow from '@ComponentFarm/template/ai-fqs/TableExpandRow';
import StateInfoBox from '@ComponentFarm/template/common/StateInfoBox';
import {
  MenuOptionGroupStyle,
  MenuOptionListStyle,
} from '@ComponentFarm/template/menu/style';
import { useGoMove } from '@HookFarm/useGoMove';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

const AnalysisViewPage = () => {
  const router = useRouter();
  const { onBack } = useGoMove();
  const path = React.useMemo(() => router.query.id?.[0] ?? 'view', []);
  const id = React.useMemo(() => router.query.id?.[1] ?? '', []);
  const pathname = React.useMemo(
    () => router.asPath.split('?')[0],
    [router.asPath]
  );

  useEffect(() => {
    if (path !== 'view') {
      onBack(id ? 2 : 1);
    }
  }, [path]);

  return (
    <PageLayout
      tabData={[
        {
          title: '제조 제품 목록',
          url: pathname,
        },
      ]}
      title="기기관리"
    >
      <DevicePageStyle>
        <SectionStyle>
          <h3 className="title">기기 기본 정보</h3>
        </SectionStyle>
        <FqsInfoTable bordered>
          <colgroup>
            <col width={getTableWidthPercentage(120)} />
            <col width={getTableWidthPercentage(1384)} />
          </colgroup>
          <tbody>
            <tr>
              <th>매장 코드</th>
              <td>NO. 14124</td>
            </tr>
            <tr>
              <th>매장명</th>
              <td>평촌학원가점</td>
            </tr>
            <tr>
              <th>Wi-fi</th>
              <td>
                <Toggle />
              </td>
            </tr>
            <tr>
              <th>Application</th>
              <td>
                <Toggle />
              </td>
            </tr>
          </tbody>
        </FqsInfoTable>
        <SectionStyle>
          <h3 className="title">카메라 정보</h3>
        </SectionStyle>
        <MenuOptionListStyle>
          <div className="wrap">
            <div className="side">
              <div className="list">
                <MenuOptionGroupStyle className="camera-group">
                  <div className="header" role="button" tabIndex={0}>
                    카메라 목록
                  </div>
                  <button className="option" type="button">
                    테이블 카메라
                  </button>
                  <button className="option" type="button">
                    얼굴 카메라
                  </button>
                  <button className="option" type="button">
                    왼쪽 바트 카메라
                  </button>
                  <button className="option" type="button">
                    오른쪽 바트 카메라
                  </button>
                </MenuOptionGroupStyle>
              </div>
            </div>
            <div className="view">
              <SectionStyle>
                <h3 className="title">영상 정보</h3>
              </SectionStyle>
              <StateInfoBox
                items={[
                  {
                    title: '카메라 ID',
                    txt1: 'ca_123112',
                  },
                  {
                    title: '카메라 해상도',
                    txt1: '1024',
                    txt2: 'px',
                  },
                  {
                    title: '카메라 해상도 높이',
                    txt1: '720',
                    txt2: 'px',
                  },
                  {
                    title: '카메라 FPS',
                    txt1: '60',
                    txt2: 'fps',
                  },
                ]}
              />
              <VideoWrapStyle>
                <video muted controls />
              </VideoWrapStyle>
              <SectionStyle>
                <h3 className="title">영상 내역</h3>
                <span className="count">
                  총 <span className="number">115</span> 건
                </span>
                <TableWrap className="content">
                  <Table className="basic">
                    <colgroup>
                      <col width={getTableWidthPercentage(48)} />
                      <col width={getTableWidthPercentage(160)} />
                      <col width={getTableWidthPercentage(644)} />
                      <col width={getTableWidthPercentage(336)} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th>등록일</th>
                        <th>영상수</th>
                        <th>총 영상 시간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="right">
                          <button type="button" className="dropdown-btn">
                            <CircleUp transform="rotate(180)" />
                          </button>
                        </td>
                        <td className="code">2023-10-09</td>
                        <td>13</td>
                        <td>01:00:00</td>
                      </tr>
                      <TableExpandRow
                        show={false}
                        colSpan={8}
                        imageContent={
                          <>
                            <div className="inspection-img">
                              <h3>제조 이미지</h3>
                              <img src="" alt="" />
                            </div>
                            <div className="inspection-img">
                              <h3>제조 이미지 컬러맵</h3>
                              <img src="" alt="" />
                            </div>
                          </>
                        }
                        dataContent={
                          <div className="inspection">
                            <h3>감점 및 심각 요인</h3>
                            <div className="effect">
                              <Badge color="yellow" size="sm">
                                감점 요인
                              </Badge>
                              <p>감점 내역이 없습니다.</p>
                            </div>
                            <div className="effect">
                              <Badge color="red" size="sm">
                                심각 요인
                              </Badge>
                              <p>심각 내역이 없습니다.</p>
                            </div>
                          </div>
                        }
                      />
                    </tbody>
                  </Table>
                </TableWrap>
              </SectionStyle>
            </div>
          </div>
        </MenuOptionListStyle>
      </DevicePageStyle>
    </PageLayout>
  );
};

export default AnalysisViewPage;
