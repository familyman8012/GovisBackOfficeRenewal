import React, { useState, useEffect } from 'react';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Select } from '@ComponentFarm/atom/Select/Select';
import { inspectionOptions } from '@ComponentFarm/template/ai-fqs/const';
import { AnalysisPageStyle } from '@ComponentFarm/template/ai-fqs/style';
import AnalysisVideoList from '@ComponentFarm/template/ai-fqs/VideoList';

const AnalysisListPage = () => {
  const [analysisVideos, setAnalysisVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (() => [])();
      setAnalysisVideos(data);
    };
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <AnalysisPageStyle>
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
      <AnalysisVideoList list={analysisVideos} />
      <Pagination
        pageInfo={[currentPage, 10]}
        totalCount={100}
        handlePageChange={setCurrentPage}
      />
    </AnalysisPageStyle>
  );
};

export default AnalysisListPage;
