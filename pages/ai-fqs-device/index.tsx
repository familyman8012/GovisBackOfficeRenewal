import React, { useState } from 'react';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Select } from '@ComponentFarm/atom/Select/Select';
import { inspectionOptions } from '@ComponentFarm/template/ai-fqs/const';
import { DevicePageStyle } from '@ComponentFarm/template/ai-fqs/style';
import TitleBox from '@ComponentFarm/template/common/TitleBox';

const DeviceListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <DevicePageStyle>
      <TitleBox
        title="기기 상태"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
        hideUnderline
      />
      <div className="total">
        <span>
          총 <span className="value">115</span> 건
        </span>
        <Select
          selectedOption={{}}
          options={React.useMemo(
            () => [
              {
                label: '전체',
                value: '',
              },
              ...inspectionOptions,
            ],
            []
          )}
          setSelectedOption={() => {}}
        />
      </div>
      <div className="status" />

      <div className="summary">
        <h3>결과</h3>
        <span>
          총 <span className="value">115</span> 건
        </span>
      </div>
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
