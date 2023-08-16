import React, { ReactNode, useEffect, useState } from 'react';
import CheckBox, { CheckBoxProps } from '@ComponentFarm/atom/Checkbox/CheckBox';

export type CheckBoxSize = 'sm' | 'md';

export const sizes = {
  sm: '1.6rem',
  md: '2.4rem',
};

export interface CheckBoxGroupProps {
  chksize?: CheckBoxSize;
  children?: React.ReactNode;
  options?: { label: string; subText?: string; value: string }[];
  onChange?: (checkedValues: string[]) => void;
  allChechkHandler?: { label: string; value: string }[];
  name: string;
  control?: any;
  initialCheckedValues?: string[];
  disabled?: boolean;
}

const CheckboxGroup: React.FC<CheckBoxGroupProps> = ({
  chksize,
  children,
  options,
  onChange,
  allChechkHandler,
  name,
  control,
  initialCheckedValues = [],
  disabled = false,
}) => {
  const [values, setValues] = useState<{ [key: string]: boolean }>(
    initialCheckedValues.reduce((acc: { [key: string]: boolean }, curr) => {
      acc[curr] = true;
      return acc;
    }, {})
  );

  const isAllSelected = allChechkHandler
    ? allChechkHandler.every(({ value }) => values[value])
    : false;

  const handleAllChange = (checked: boolean) => {
    const newValues = { ...values };
    allChechkHandler?.forEach(({ value }) => {
      newValues[value] = checked;
    });
    setValues(newValues);
  };

  useEffect(() => {
    if (onChange) {
      onChange(Object.keys(values).filter(key => values[key]));
    }
  }, [values, onChange]);

  const handleChange = (value: string, checked: boolean) => {
    setValues(prevValues => ({
      ...prevValues,
      [value]: checked,
    }));
  };

  const renderChildren = (nodes: ReactNode): ReactNode => {
    return React.Children.map(nodes, node => {
      if (React.isValidElement<CheckBoxProps>(node) && node.type === CheckBox) {
        const isChecked = !!values[String(node.props.value)];
        return React.cloneElement(node, {
          checked: isChecked,
          onChange: (e: any) =>
            handleChange(String(node.props.value), e.target.checked),
          disabled,
        });
      }

      if (React.isValidElement(node) && node.props.children) {
        const newProps = {
          children: renderChildren(node.props.children),
        };
        return React.cloneElement(node, newProps);
      }
      return node;
    });
  };

  const renderOptions = (
    optionArr: { label: string; subText?: string; value: string }[]
  ): ReactNode => {
    return optionArr.map(option => (
      <CheckBox
        key={option.value}
        value={option.value}
        checked={!!values[option.value]}
        onChange={(e: any) => handleChange(option.value, e.target.checked)}
        chksize={chksize}
        label={option.label}
        subText={option.subText}
        disabled={disabled}
      />
    ));
  };

  const renderAllCheckbox = () => {
    return allChechkHandler ? (
      <CheckBox
        key="all"
        value="all"
        checked={isAllSelected}
        chksize={chksize}
        onChange={(e: any) => handleAllChange(e.target.checked)}
        label="All"
        disabled={disabled}
      />
    ) : null;
  };

  return (
    <span className="box_checkbox_group">
      {renderAllCheckbox()}
      {options ? renderOptions(options) : renderChildren(children)}
    </span>
  );
};

export default CheckboxGroup;
