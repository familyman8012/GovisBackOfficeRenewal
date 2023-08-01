import React from 'react';
// eslint-disable-next-line import/no-cycle
import { CheckBoxWrap, Label } from './style';

export type CheckBoxSize = 'sm' | 'md' | 'lg';

export const sizes = {
  sm: '1rem', // 0.5rem
  md: '1.9rem', // 1rem
  lg: '2.8rem', // 2rem
};

export interface CheckBoxProps {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chksize?: CheckBoxSize;
  readOnly?: boolean;
  disabled?: boolean;
  label?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  checked,
  onChange,
  chksize = 'md',
  readOnly,
  disabled,
  label,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <Label>
      <CheckBoxWrap
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        chksize={chksize}
        readOnly={readOnly}
        disabled={disabled}
      />
      {label}
    </Label>
  );
};

export default CheckBox;
