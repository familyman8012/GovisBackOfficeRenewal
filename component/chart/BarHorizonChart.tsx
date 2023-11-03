import React from 'react';
import Link from 'next/link';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
} from 'recharts';

const data = [
  {
    name: '피자',
    uv: 3054,
    fill: '#00AFF0',
  },
  {
    name: '파스타',
    uv: 2700,
    fill: 'var(--color-indigo45)',
  },
  {
    name: '샐러드',
    uv: 3154,
    fill: '#FF74D8',
  },
  {
    name: '키즈피자',
    uv: 2700,
    fill: '#BFE0FF',
  },
  {
    name: '주류',
    uv: 3054,
    fill: '#68778D',
  },
];

const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g>
      <text x={x} y={y} textAnchor="start" fill="#666">
        <tspan x="0" dy="0.355em">
          {payload.value}
        </tspan>
      </text>
    </g>
  );
};

export const BarHorizonChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart
        width={442}
        height={196}
        data={data}
        layout="vertical"
        margin={{
          top: 15,
          right: 88,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis type="number" hide />
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          width={100}
          textAnchor="start"
          tick={<CustomYAxisTick />}
        />
        <Bar dataKey="uv" barSize={20}>
          <LabelList
            dataKey="uv"
            position={{ x: 315, y: 15 }}
            fill="var(--color-neutral50)"
            formatter={(value: number) => value.toLocaleString()}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

interface BarHorizonChartCardProps {
  title: string;
  txt1: string;
  txt2: string;
  moreLink: string;
  className: string;
}

export const BarHorizonChartCard = ({
  title,
  txt1,
  txt2,
  moreLink,
  className,
}: BarHorizonChartCardProps) => {
  return (
    <BarHorizonChartCardWrap>
      <div className="head">
        <h2>
          <span>{title}</span>
          {moreLink && (
            <Link href={moreLink} className="link_more">
              더보기
            </Link>
          )}
        </h2>
        <p className={`txt1 ${className}`}>{txt1}</p>
        <div className="txt2">{txt2}</div>
      </div>
      <BarHorizonChart />
    </BarHorizonChartCardWrap>
  );
};
