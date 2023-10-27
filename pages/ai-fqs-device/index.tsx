import React, { useState } from 'react';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Table, TableWrap } from '@ComponentFarm/common';
import { DevicePageStyle } from '@ComponentFarm/template/ai-fqs/style';
import FqsCard from '@ComponentFarm/template/common/FqsCard';
import TitleBox from '@ComponentFarm/template/common/TitleBox';
// import { Badge } from '@ComponentFarm/token';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

const DeviceListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <DevicePageStyle>
      <TitleBox
        title="기기 상태"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
        hideUnderline
      />

      <div className="status">
        <FqsCard
          label="매장 구분"
          title="AI-FQS 도입 매장"
          value="5"
          unit="/100"
        />
        <FqsCard label="기기 상태" title="기기 ON" value="4" unit="/5" />
        <FqsCard
          label="프로그램 상태"
          title="프로그램 ON"
          value="3"
          unit="/5"
        />
        <FqsCard
          label="현황"
          title="AI-FQS 정상 수집 수"
          value="15,021"
          unit="/16,212"
          placeholder="97.0%"
        />
      </div>

      <div className="summary">
        <h3>결과</h3>
        <span>
          총 <span className="value">115</span> 건
        </span>
      </div>

      <TableWrap>
        <Table className="basic">
          <colgroup>
            <col width={getTableWidthPercentage(140)} />
            <col width={getTableWidthPercentage(450)} />
            <col width={getTableWidthPercentage(150)} />
            <col width={getTableWidthPercentage(150)} />
            <col width={getTableWidthPercentage(210)} />
            <col width={getTableWidthPercentage(210)} />
            <col width={getTableWidthPercentage(200)} />
          </colgroup>
          <thead>
            <tr>
              <th>NO.</th>
              <th>매장명</th>
              <th className="center">PC 상태</th>
              <th className="center">프로그램 상태</th>
              <th className="center">활성 카메라 수</th>
              <th className="center">총 카메라 수</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <tr key={`${i} + ${i}`}>
                <td>{100}</td>
                <td>대치 본점</td>
                <td className="center">
                  <Badge dot color="green">
                    ON
                  </Badge>
                </td>
                <td className="center">
                  <Badge dot color="red">
                    OFF
                  </Badge>
                </td>
                <td className="center">{5}</td>
                <td className="center">{5}</td>
                <td className="center">
                  <Button variant="gostSecondary">기기 정보 관리</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
      {/* <AnalysisVideoList list={analysisVideos} /> */}
      <Pagination
        pageInfo={[currentPage, 10]}
        totalCount={100}
        handlePageChange={setCurrentPage}
      />
    </DevicePageStyle>
  );
};

export default DeviceListPage;
