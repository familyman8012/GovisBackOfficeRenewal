import React, { Dispatch, SetStateAction, useEffect } from 'react';
import dayjs from 'dayjs';
import { css } from '@emotion/react';
import DateRangePicker from '@ComponentFarm/modules/DateRange/DateRange';
import { QueryParams } from '@HookFarm/useQueryParams';
import { DiffDateRangerWrap } from './style';

export type DateRangeType = [Date | null, Date | null];

export type DiffDateType = {
  range1: DateRangeType;
  range2?: DateRangeType;
};

interface DiffDateRangerProps {
  type?: string;
  selectedDateRanges: DiffDateType;
  setSelectedDateRanges: Dispatch<SetStateAction<DiffDateType>>;
  params: QueryParams;
  dateKeys?: {
    startKey: string;
    endKey: string;
  };
}

export const DiffDateRanger = ({
  type,
  selectedDateRanges,
  setSelectedDateRanges,
  params,
  dateKeys = {
    startKey: 'search_dt',
    endKey: 'end_dt',
  },
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
      type === 'diff' &&
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
    type,
    params.base_dt_start,
    params.base_dt_finish,
    params.comparison_dt_start,
    params.comparison_dt_finish,
    setSelectedDateRanges,
  ]);

  useEffect(() => {
    if (
      type !== 'diff' &&
      params[dateKeys.startKey] &&
      params[dateKeys.endKey]
    ) {
      setSelectedDateRanges({
        range1: [
          params[dateKeys.startKey] !== '0000-00-00'
            ? dayjs(String(params[dateKeys.startKey]), 'YYYY-MM-DD').toDate()
            : null, // 문자열을 Date 객체로 변환
          params[dateKeys.endKey] !== '0000-00-00'
            ? dayjs(String(params[dateKeys.endKey]), 'YYYY-MM-DD').toDate()
            : null,
        ],
      });
    }
  }, [dateKeys.endKey, dateKeys.startKey, params, setSelectedDateRanges, type]);

  console.log('selectedDateRanges', selectedDateRanges);

  return (
    <DiffDateRangerWrap>
      {type === 'diff' && (
        <span
          css={css`
            margin-left: 2rem;
            color: var(--color-neutral60);
          `}
        >
          기준일:
        </span>
      )}

      <span>
        <DateRangePicker
          onDateRangeChange={update => handleDateRangeChange('range1', update)}
          initialDateRange={selectedDateRanges.range1}
          placeholder={type === 'diff' ? '기준일' : '기간을 선택하세요'}
        />
      </span>
      {type === 'diff' && (
        <>
          <span className="bar">~</span>
          <span
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <span
              css={css`
                margin-left: 1rem;
                color: var(--color-neutral60);
              `}
            >
              비교일:
            </span>
            <DateRangePicker
              onDateRangeChange={update =>
                handleDateRangeChange('range2', update)
              }
              initialDateRange={selectedDateRanges.range2}
              exceptDateRange={selectedDateRanges.range1}
              placeholder="비교일"
              disabled={selectedDateRanges.range1.every(date => date === null)}
            />
          </span>
        </>
      )}
    </DiffDateRangerWrap>
  );
};
