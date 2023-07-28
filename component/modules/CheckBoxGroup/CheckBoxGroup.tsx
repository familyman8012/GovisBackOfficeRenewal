import React, { useState } from 'react';
import CheckBox from '@ComponentFarm/atom/Checkbox/CheckBox';

type OptionType = { label: string; value: string };
type CheckBoxValueType = string[];

export interface CheckBoxGroupProps {
  options: OptionType[];
  defaultValue?: CheckBoxValueType;
  onChange: (checkedValues: CheckBoxValueType) => void;
}

const CheckboxGroup: React.FC<CheckBoxGroupProps> = ({
  options,
  defaultValue = [],
  onChange,
}) => {
  const [checkedValues, setCheckedValues] =
    useState<CheckBoxValueType>(defaultValue);

  const handleChange = (value: string) => {
    const nextCheckedValues = checkedValues.includes(value)
      ? checkedValues.filter(v => v !== value)
      : [...checkedValues, value];

    setCheckedValues(nextCheckedValues);
    onChange(nextCheckedValues);
  };

  return (
    <div>
      {options.map((option, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <label>
            <CheckBox
              value={option.value}
              chksize="md"
              checked={checkedValues.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
