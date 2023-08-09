import React, { ReactNode, useEffect, useState } from 'react';
import CheckBox, { CheckBoxProps } from '@ComponentFarm/atom/Checkbox/CheckBox';

export interface CheckBoxGroupProps {
  children?: React.ReactNode;
  options?: { label: string; value: string }[];
  onChange?: (checkedValues: string[]) => void;
  allChechkHandler?: { label: string; value: string }[];
  name: string;
  control?: any;
  initialCheckedValues?: string[];
}

const CheckboxGroup: React.FC<CheckBoxGroupProps> = ({
  children,
  options,
  onChange,
  allChechkHandler,
  name,
  control,
  initialCheckedValues = [],
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
    optionArr: { label: string; value: string }[]
  ): ReactNode => {
    return optionArr.map(option => (
      <CheckBox
        key={option.value}
        value={option.value}
        checked={!!values[option.value]}
        onChange={(e: any) => handleChange(option.value, e.target.checked)}
        label={option.label}
      />
    ));
  };

  const renderAllCheckbox = () => {
    return allChechkHandler ? (
      <CheckBox
        key="all"
        value="all"
        checked={isAllSelected}
        onChange={(e: any) => handleAllChange(e.target.checked)}
        label="All"
      />
    ) : null;
  };

  return (
    <div>
      {renderAllCheckbox()}
      {options ? renderOptions(options) : renderChildren(children)}
    </div>
  );
};

export default CheckboxGroup;
