import React from 'react';
import { Select } from '@ComponentFarm/atom/Select/Select';
import { QueryParams } from '@HookFarm/useQueryParams';

type selectConfigType = {
  label: string;
  field: string;
  options: {
    value: string;
    label: string;
  }[];
}[];

interface ListFilterSelectsProps {
  selectConfig: selectConfigType;
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
}

const ListFilterSelects = ({
  selectConfig,
  params,
  updateParams,
}: ListFilterSelectsProps) => {
  return (
    <>
      {selectConfig.map(item => (
        <span key={item.field}>
          <Select
            options={item.options}
            selectedOption={String(params[item.field] ?? '')}
            setSelectedOption={({ value }: { value: string }) =>
              updateParams({ [item.field]: value, page: 1 })
            }
            placeholder={item.label}
          />
        </span>
      ))}
    </>
  );
};

export default ListFilterSelects;
