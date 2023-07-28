import React from 'react';
// eslint-disable-next-line import/no-cycle
import { CheckBoxWrap } from './style';

export type CheckBoxSize = 'sm' | 'md' | 'lg';

export const sizes = {
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
};

interface CheckBoxProps {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  chksize?: CheckBoxSize;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  checked,
  onChange,
  chksize = 'md',
}) => {
  return (
    <CheckBoxWrap
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
      chksize={chksize}
    />
  );
};

export default CheckBox;
