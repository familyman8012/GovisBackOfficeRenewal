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
      {dateConfig.map((item, i) => (
        <div key={item.field} className={`field field${i + 1}`}>
          <DatePicker
            selectedDate={String(params[item.field] ?? '')}
            onChange={(value: string) =>
              updateParams({ [item.field]: value, page: 1 })
            }
            placeholderText={item.placeholder}
          />
        </div>
      ))}
    </>
  );
};

export default ListDatePickers;
