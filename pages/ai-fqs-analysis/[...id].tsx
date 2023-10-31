import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Pic } from '@ComponentFarm/atom/icons';
import DataFilled from '@ComponentFarm/atom/icons/DataFilled';
import { Table, TableWrap } from '@ComponentFarm/common';
import PageLayout from '@ComponentFarm/layout/PageLayout';
import {
  AnalysisPageStyle,
  FqsAnalysisDataStyle,
  FqsInfoTable,
  SectionStyle,
  VideoWrapStyle,
} from '@ComponentFarm/template/ai-fqs/style';
import TableExpandRow from '@ComponentFarm/template/ai-fqs/TableExpandRow';
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
          title: '제품 분석',
          url: pathname,
        },
      ]}
      title="기기관리"
    >
      <AnalysisPageStyle>
        <VideoWrapStyle>
          <video muted controls />
        </VideoWrapStyle>

        <div className="info">
          <h2>
            [평촌학원가점] 클래식 마르게리타 피자
            <Badge dot color="green" size="sm">
              검수 완료
            </Badge>
          </h2>
          <p>평가일자 2023-10-24</p>
          <p>제조일자 2023-10-24</p>
        </div>
        <div className="inspection-info">
          <SectionStyle className="summary">
            <h3 className="title">내역</h3>
            <Button variant="primary">평가 재요청</Button>
            <FqsInfoTable bordered>
              <colgroup>
                <col width={getTableWidthPercentage(120)} />
                <col width={getTableWidthPercentage(648)} />
                <col width={getTableWidthPercentage(120)} />
                <col width={getTableWidthPercentage(648)} />
              </colgroup>
              <tbody>
                <tr>
                  <th>피자명</th>
                  <td>클래식 마르게리타 피자</td>
                  <th>제조시간</th>
                  <td>2분 24초</td>
                </tr>
                <tr>
                  <th>종합점수</th>
                  <td>32/40</td>
                  <th>변환점수</th>
                  <td>80/100</td>
                </tr>
                <tr>
                  <th>감점 요인 등</th>
                  <td>감점 4건 / 심각 0건</td>
                  <th>영상 보관</th>
                  <td>
                    <Button variant="gostPrimary" size="md">
                      보관하기
                    </Button>
                  </td>
                </tr>
              </tbody>
            </FqsInfoTable>
          </SectionStyle>
          <SectionStyle className="list">
            <h3 className="title">영상 내역</h3>
            <span className="count">
              총 <span className="number">115</span> 건
            </span>
            <TableWrap className="content">
              <Table className="basic">
                <colgroup>
                  <col width={getTableWidthPercentage(50)} />
                  <col width={getTableWidthPercentage(185)} />
                  <col width={getTableWidthPercentage(150)} />
                  <col width={getTableWidthPercentage(278)} />
                  <col width={getTableWidthPercentage(256)} />
                  <col width={getTableWidthPercentage(278)} />
                  <col width={getTableWidthPercentage(96)} />
                  <col width={getTableWidthPercentage(140)} />
                </colgroup>
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>구간 종류</th>
                    <th className="center">구간 이미지</th>
                    <th>구간 시작 및 종료</th>
                    <th>감점 요인</th>
                    <th>심각 요인</th>
                    <th>구간 점수</th>
                    <th>변환 점수</th>
                  </tr>
                </thead>
                <tbody>
                  <TableExpandRow
                    content={
                      <FqsAnalysisDataStyle>
                        <ul className="">
                          <li>
                            <span className="ico">
                              <Pic />
                            </span>
                            <div className="cont">
                              <div className="inspection-img">
                                <h3>제조 이미지</h3>
                                <img src="" alt="" />
                              </div>

                              <div className="inspection-img">
                                <h3>제조 이미지 컬러맵</h3>
                                <img src="" alt="" />
                              </div>
                            </div>
                          </li>
                          <li className="hide-line">
                            <span className="ico">
                              <DataFilled />
                            </span>
                            <div className="cont">
                              <div className="inspection">
                                <h3>감점 및 심각 요인</h3>
                                <div className="effect">
                                  <Badge color="yellow" size="sm">
                                    감점내역
                                  </Badge>
                                  <p>감점 내역이 없습니다.</p>
                                </div>
                                <div className="effect">
                                  <Badge color="red" size="sm">
                                    심각 내역
                                  </Badge>
                                  <p>심각 내역이 없습니다.</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </FqsAnalysisDataStyle>
                    }
                  >
                    <td>도우</td>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>
                      <Badge color="gray">00:00</Badge>
                      &gt;
                      <Badge color="gray">00:30</Badge>
                    </td>
                    <td>
                      <Badge color="yellow">소스 부족</Badge>
                    </td>
                    <td>
                      <Badge color="red">소스 부족</Badge>
                    </td>
                    <td>10/10</td>
                    <td>25/25</td>
                  </TableExpandRow>
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
