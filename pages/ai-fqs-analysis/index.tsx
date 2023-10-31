import React, { useState, useEffect } from 'react';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Select } from '@ComponentFarm/atom/Select/Select';
import PageLayout from '@ComponentFarm/layout/PageLayout';
import { inspectionOptions } from '@ComponentFarm/template/ai-fqs/const';
import {
  AnalysisPageStyle,
  SectionStyle,
} from '@ComponentFarm/template/ai-fqs/style';
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
    <PageLayout
      title="제품 분석"
      tabData={[{ title: '제조 제품 목록', url: '/ai-fqs-analysis' }]}
    >
      <AnalysisPageStyle>
        <SectionStyle>
          <span className="count">
            총 <span className="number">115</span> 건
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
        </SectionStyle>
        <AnalysisVideoList list={analysisVideos} />
        <Pagination
          pageInfo={[currentPage, 10]}
          totalCount={100}
          handlePageChange={setCurrentPage}
        />
      </AnalysisPageStyle>
    </PageLayout>
  );
};

export default AnalysisListPage;
