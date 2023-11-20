import React, { Dispatch, SetStateAction, useEffect } from 'react';
import dayjs from 'dayjs';
import DateRangePicker from '@ComponentFarm/modules/DateRange/DateRange';
import { QueryParams } from '@HookFarm/useQueryParams';
import { DiffDateRangerWrap } from './style';

export type DateRangeType = [Date | null, Date | null];

export type DiffDateType = {
  range1: DateRangeType;
  range2: DateRangeType;
};

interface DiffDateRangerProps {
  selectedDateRanges: DiffDateType;
  setSelectedDateRanges: Dispatch<SetStateAction<DiffDateType>>;
  params: QueryParams;
}

export const DiffDateRanger = ({
  selectedDateRanges,
  setSelectedDateRanges,
  params,
}: DiffDateRangerProps) => {
  const handleDateRangeChange = (
    rangeType: 'range1' | 'range2',
    update: DateRangeType
  ) => {
    setSelectedDateRanges(prevRanges => ({
      ...prevRanges,
      [rangeType]: update,
    }));
  };

  // URL의 쿼리 파라미터로부터 날짜 범위를 설정합니다.
  useEffect(() => {
    if (
      params.base_dt_start &&
      params.base_dt_finish &&
      params.comparison_dt_start &&
      params.comparison_dt_finish
    ) {
      setSelectedDateRanges({
        range1: [
          params.base_dt_start !== '0000-00-00'
            ? dayjs(String(params.base_dt_start), 'YYYY-MM-DD').toDate()
            : null, // 문자열을 Date 객체로 변환
          params.base_dt_finish !== '0000-00-00'
            ? dayjs(String(params.base_dt_finish), 'YYYY-MM-DD').toDate()
            : null,
        ],
        range2: [
          params.comparison_dt_start !== '0000-00-00'
            ? dayjs(String(params.comparison_dt_start), 'YYYY-MM-DD').toDate()
            : null, // '0000-00-00' 이면 null 할당
          params.comparison_dt_finish !== '0000-00-00'
            ? dayjs(String(params.comparison_dt_finish), 'YYYY-MM-DD').toDate()
            : null,
        ],
      });
    }
  }, [
    params.base_dt_start,
    params.base_dt_finish,
    params.comparison_dt_start,
    params.comparison_dt_finish,
    setSelectedDateRanges,
  ]);

  return (
    <DiffDateRangerWrap>
      <span>
        <DateRangePicker
          onDateRangeChange={update => handleDateRangeChange('range1', update)}
          initialDateRange={selectedDateRanges.range1}
          placeholder="기준일"
        />
      </span>
      <span className="bar">~</span>
      <span>
        <DateRangePicker
          onDateRangeChange={update => handleDateRangeChange('range2', update)}
          initialDateRange={selectedDateRanges.range2}
          exceptDateRange={selectedDateRanges.range1}
          placeholder="비교일"
        />
      </span>
    </DiffDateRangerWrap>
  );
};
