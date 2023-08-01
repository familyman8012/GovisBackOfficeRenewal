import React from 'react';
import { CheckBoxWrap, Label } from './style';

export type CheckBoxSize = 'sm' | 'md' | 'lg';

export const sizes = {
  sm: '1rem', // 0.5rem
  md: '1.9rem', // 1rem
  lg: '2.8rem', // 2rem
};

interface CheckBoxProps {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chksize?: CheckBoxSize;
  readOnly?: boolean;
  disabled?: boolean;
  label?: string;
}

const Radio: React.FC<CheckBoxProps> = ({
  value,
  checked,
  onChange,
  chksize = 'md',
  readOnly,
  disabled,
  label,
}) => {
  return (
    <Label>
      <CheckBoxWrap
        type="radio"
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

export default Radio;
