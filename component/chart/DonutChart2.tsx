import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import Skeleton from 'react-loading-skeleton';
import { ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';

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

  useEffect(() => {
    // debounce를 사용하여 리사이즈 핸들러 설정
    const debouncedHandleResize = debounce(updateContainerSize, 200);

    window.addEventListener('resize', debouncedHandleResize);

    // 첫 마운트에서 컨테이너 크기를 설정
    updateContainerSize();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  console.log('containerSize', containerSize);

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
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // 추가된 배경색 사각형을 위한 계산
    const textHeight = 20; // 텍스트 높이 추정값

    // 초기 차트 너비 설정
    const initialWidth = 600; // 초기 차트 너비를 적절한 값으로 설정하세요
    const initialHeight = 500; // 초기 차트 높이

    const scaleX = containerSize.width / initialWidth;
    const scaleY = containerSize.height / initialHeight;

    interface Idynamic {
      [key: string]: number;
    }

    // 동적으로 조정된 너비와 위치 계산
    const dynamicWidth: Idynamic = {
      '100점~80점': 81 * scaleX,
      '80점~50점': 76 * scaleX,
      '50점~0점': 66 * scaleX, // '50점 미만'과 같은 다른 레이블에 대한 처리
    };

    const dynamicX: Idynamic = {
      '100점~80점': ex + (cos >= 0 ? 1 : -1) * (11 * scaleX),
      '80점~50점': ex + (cos >= 0 ? 1 : -1) * (11 * scaleX) * 7.8,
      '50점~0점': ex + (cos >= 0 ? 1 : -1) * (11 * scaleX),
    };

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
              ? outerRadius + 31 * 1.2
              : outerRadius + 6
          }
          outerRadius={
            activeIndex === props.index
              ? outerRadius + 35 * 1.2
              : outerRadius + 10
          }
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <rect
          x={dynamicX[props.item_label]}
          y={ey - 11 * scaleY}
          width={dynamicWidth[props.item_label]}
          height={textHeight * scaleY}
          fill={
            props.item_label === '100점~80점'
              ? 'var(--color-blue90)'
              : props.item_label === '80점~50점'
              ? 'var(--color-yellow90)'
              : 'var(--color-red90)'
          } // 배경색을 원하는 색으로 설정하세요
        />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * (15 * scaleX)}
          y={ey + 4 * scaleX}
          textAnchor={textAnchor}
          fill={
            props.item_label === '100점~80점'
              ? 'var(--color-blue70)'
              : props.item_label === '80점~50점'
              ? 'var(--color-yellow50)'
              : 'var(--color-orange70)'
          }
        >{`${props.item_label}`}</text>

        <text
          x={
            activeIndex === props.index
              ? props.item_label === '100점~80점'
                ? x + 13 * scaleX
                : props.item_label === '80점~50점'
                ? x - 14 * scaleX
                : x + 13 * scaleX
              : x
          }
          y={y}
          fill="white" // 텍스트 색상을 흰색으로 변경
          textAnchor="middle" // 텍스트를 가운데 정렬
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
        {activeIndex === props.index && (
          <text
            x={
              activeIndex === props.index
                ? props.item_label === '100점~80점'
                  ? x + 13 * scaleX
                  : props.item_label === '80점~50점'
                  ? x - 14 * scaleX
                  : x + 13 * scaleX
                : x
            }
            y={y + 23}
            fill="white" // 텍스트 색상을 흰색으로 변경
            textAnchor="middle" // 텍스트를 가운데 정렬
            dominantBaseline="central"
          >
            ({props.value}개)
          </text>
        )}
      </g>
    );
  };

  return (
    <div
      ref={containerRef}
      style={{ width: '60rem', height, margin: '0 auto' }}
    >
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
    </div>
  );
};

export default DonutChart;
