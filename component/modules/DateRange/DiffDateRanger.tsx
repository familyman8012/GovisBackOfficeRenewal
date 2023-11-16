import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
  const [dateRangeLength, setDateRangeLength] = useState(0);

  const handleDateRangeChange1 = (update: DateRangeType) => {
    setSelectedDateRanges(prevRanges => ({
      ...prevRanges,
      range1: update,
    }));
    if (update[0] && update[1]) {
      const length = dayjs(update[1]).diff(dayjs(update[0]), 'day');
      setDateRangeLength(length);
    }
  };

  const handleDateRangeChange2 = (update: DateRangeType) => {
    if (update[0] && dateRangeLength) {
      const endDate = dayjs(update[0]).add(dateRangeLength, 'day').toDate();
      setSelectedDateRanges(prevRanges => ({
        ...prevRanges,
        range2: [update[0], endDate],
      }));
    } else {
      setSelectedDateRanges(prevRanges => ({
        ...prevRanges,
        range2: update,
      }));
    }
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
          dayjs(String(params.base_dt_start), 'YYYY-MM-DD').toDate(), // 문자열을 Date 객체로 변환
          dayjs(String(params.base_dt_finish), 'YYYY-MM-DD').toDate(),
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
          onDateRangeChange={update => handleDateRangeChange1(update)}
          initialDateRange={selectedDateRanges.range1}
        />
      </span>
      <span className="bar">~</span>
      <span>
        <DateRangePicker
          onDateRangeChange={update => handleDateRangeChange2(update)}
          initialDateRange={selectedDateRanges.range2}
          exceptDateRange={selectedDateRanges.range1}
        />
      </span>
    </DiffDateRangerWrap>
  );
};
