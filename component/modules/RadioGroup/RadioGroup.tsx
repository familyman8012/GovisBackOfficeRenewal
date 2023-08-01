import React, { useState } from 'react';
import Radio from '@ComponentFarm/atom/Checkbox/Radio';

type OptionType = { label: string; value: string };
type RadioValueType = string;

export interface RadioGroupProps {
  options: OptionType[];
  defaultValue?: RadioValueType;
  onChange: (checkedValue: RadioValueType) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  defaultValue = '',
  onChange,
}) => {
  const [checkedValue, setCheckedValue] =
    useState<RadioValueType>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      {options.map((option, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <Radio
            value={option.value}
            chksize="md"
            checked={checkedValue === option.value}
            onChange={handleChange}
            label={option.label}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
