import React, { useState, useEffect } from 'react';
import Pagination from '@ComponentFarm/modules/Paginate/Pagination';
import { Select } from '@ComponentFarm/atom/Select/Select';
import { AnalysisPageStyle } from '@ComponentFarm/template/ai-fqs/style';
import VideoList from '@ComponentFarm/template/ai-fqs/VideoList';

const ProductAnalysis = () => {
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
        <h2>총 115건</h2>
        <Select selectedOption={{}} options={[]} setSelectedOption={() => {}} />
      </div>
      <VideoList list={analysisVideos} />
      <Pagination
        pageInfo={[currentPage, 10]}
        totalCount={100}
        handlePageChange={setCurrentPage}
      />
    </AnalysisPageStyle>
  );
};

export default ProductAnalysis;
