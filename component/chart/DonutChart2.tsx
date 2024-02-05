import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import Skeleton from 'react-loading-skeleton';
import { ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';
import styled from '@emotion/styled';
import { mq } from '@ComponentFarm/common';

export const DonutArea = styled.div`
  width: 50%;
  height: 50rem;
  max-height: 500px;
  max-width: 565px;
  margin: 0 auto;

  .donut-text {
    font-weight: bold;
  }

  ${mq[0]} {
    width: 100%;
    height: 25.2rem;
    margin-right: 0;

    .donut-text {
      font-size: 8px;
      &.text2 {
        font-size: 8px;
      }
    }
  }
`;

const DonutChart = ({
  chartData,
  height,
  activeIndex,
}: {
  chartData: any;
  height: string;
  activeIndex: number | null;
}) => {
  const containerRef = useRef<any>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // 컨테이너 크기 업데이트 함수
  const updateContainerSize = () => {
    if (containerRef.current) {
      // eslint-disable-next-line no-shadow
      const { width, height } = containerRef.current.getBoundingClientRect();
      setContainerSize({ width, height });
    }
  };

  const debouncedUpdateSize = debounce(updateContainerSize, 250);

  useEffect(() => {
    // 첫 마운트에서 컨테이너 크기를 설정
    updateContainerSize();
    window.addEventListener('resize', debouncedUpdateSize);

    return () => {
      window.removeEventListener('resize', debouncedUpdateSize);
    };
  }, []);

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
    } = props;
    const sin =
      Math.sin(-RADIAN * midAngle) * (activeIndex === props.index ? 1.2 : 1);
    const cos =
      Math.cos(-RADIAN * midAngle) * (activeIndex === props.index ? 1.2 : 1);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx;
    // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    // const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    // const x = cx + radius * Math.cos(-midAngle * RADIAN);
    // const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // 초기 차트 너비 설정
    const initialWidth = 600; // 초기 차트 너비를 적절한 값으로 설정하세요

    const scaleX = containerSize.width / initialWidth;

    // 활성화된 Sector의 중심 좌표 계산
    const activeInnerRadius =
      activeIndex === props.index ? innerRadius - 10 * 1.2 : innerRadius - 10;
    const activeOuterRadius =
      activeIndex === props.index ? outerRadius + 35 * 1.2 : outerRadius + 10;
    const activeRadius =
      activeInnerRadius + (activeOuterRadius - activeInnerRadius) * 0.5;
    const activeX = cx + activeRadius * Math.cos(-midAngle * RADIAN);
    const activeY = cy + activeRadius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={
            activeIndex === props.index ? outerRadius * 1.2 : outerRadius
          }
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={
            activeIndex === props.index
              ? outerRadius + containerSize.width * 0.05 * 1.2
              : outerRadius + 6
          }
          outerRadius={
            activeIndex === props.index
              ? outerRadius + (containerSize.width * 0.05 + 4) * 1.2
              : outerRadius + 10
          }
          fill={fill}
        />
        {props.percent !== 0 && (
          <>
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

            <text
              x={ex + (cos >= 0 ? 1 : -1) * (15 * scaleX)}
              y={ey + 4 * scaleX}
              textAnchor={textAnchor}
              fill={fill}
              className="donut-text"
            >{`${props.item_label}`}</text>
            <text
              x={activeX}
              y={activeIndex === props.index ? activeY - 5 : activeY}
              fill="white" // 텍스트 색상을 흰색으로 변경
              textAnchor="middle" // 텍스트를 가운데 정렬
              dominantBaseline="central"
              className="donut-text text2"
            >
              {`${(percent * 100).toFixed(0)}%`}
            </text>
            {activeIndex === props.index && (
              <text
                x={activeX}
                y={activeY + 12}
                fill="white" // 텍스트 색상을 흰색으로 변경
                textAnchor="middle" // 텍스트를 가운데 정렬
                dominantBaseline="central"
              >
                ({props.value}개)
              </text>
            )}
          </>
        )}
      </g>
    );
  };

  return (
    <DonutArea ref={containerRef}>
      {chartData ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart
            margin={{
              bottom: 15,
              left: 80,
              right: 80,
            }}
          >
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderActiveShape}
              innerRadius="50%"
              outerRadius="70%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="base_sales_count"
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <Skeleton height={height} baseColor="#fcfcfc" />
      )}
    </DonutArea>
  );
};

export default DonutChart;
