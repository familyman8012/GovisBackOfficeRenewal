import React from 'react';
import { BarHorizonChartCard } from '@ComponentFarm/chart/BarHorizonChart';

const Index = () => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <BarHorizonChartCard
        title="카테고리별 제품판매 현황"
        txt1="최고에요"
        txt2="VS 3,240"
        moreLink="/"
        className="best"
      />
      <BarHorizonChartCard
        title="카테고리별 제품판매 현황"
        txt1="보통이에요"
        txt2="VS 3,240"
        moreLink="/"
        className="normal"
      />
      <BarHorizonChartCard
        title="카테고리별 제품판매 현황"
        txt1="개선필요해요"
        txt2="VS 3,240"
        moreLink="/"
        className="worst"
      />
    </div>
  );
};

export default Index;
