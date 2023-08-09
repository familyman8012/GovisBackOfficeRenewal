import React from 'react';
import { QueryParams } from '@HookFarm/useQueryParams';
import DatePicker from '../../modules/DatePicker/DatePicker';

export type dateConfigType = {
  field: string;
  placeholder: string;
}[];

interface ListDatePickersProps {
  dateConfig: dateConfigType;
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
}

const ListDatePickers = ({
  dateConfig,
  params,
  updateParams,
}: ListDatePickersProps) => {
  return (
    <>
      {dateConfig.map(item => (
        <span key={item.field}>
          <DatePicker
            selectedDate={String(params[item.field] ?? '')}
            onChange={(value: string) =>
              updateParams({ [item.field]: value, page: 1 })
            }
            placeholderText={item.placeholder}
          />
        </span>
      ))}
    </>
  );
};

export default ListDatePickers;
