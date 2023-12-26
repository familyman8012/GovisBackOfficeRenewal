import { useState } from 'react';
import dayjs from 'dayjs';
import { DateRangeType } from '@ComponentFarm/modules/DateRange/DateRange';
import { QueryParams } from './useQueryParams';

const useDateRange = ({
  params,
  updateParams,
  dateKeys = {
    startKey: 'search_start_dt',
    endKey: 'search_end_dt',
  },
}: {
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
  dateKeys: { startKey: string; endKey: string };
}) => {
  const [selectedDateRanges, setSelectedDateRanges] = useState<DateRangeType>([
    params[dateKeys.startKey]
      ? dayjs(params[dateKeys.startKey] as string).toDate()
      : null,
    params[dateKeys.endKey]
      ? dayjs(params[dateKeys.endKey] as string).toDate()
      : null,
  ]);

  const handleFilterResult = () => {
    const [date1, date2] = selectedDateRanges;

    let dateParams = {};
    if (selectedDateRanges.every(date => date !== null)) {
      dateParams = {
        [dateKeys.startKey]: dayjs(date1).format('YYYY-MM-DD'),
        [dateKeys.endKey]: dayjs(date2).format('YYYY-MM-DD'),
      };
    }

    updateParams({
      ...params,
      ...dateParams,
    });
  };

  return { selectedDateRanges, setSelectedDateRanges, handleFilterResult };
};

export default useDateRange;
