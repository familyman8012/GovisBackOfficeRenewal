import React, { ReactNode, useState, useEffect } from 'react';
import { CheckBoxProps } from '@ComponentFarm/atom/Checkbox/CheckBox';
import Radio from '@ComponentFarm/atom/Checkbox/Radio';

type OptionType = { label: string; value: string };
type RadioValueType = string;

export interface RadioGroupProps {
  children?: React.ReactNode;
  options?: OptionType[];
  defaultValue?: RadioValueType;
  onChange: (checkedValue: RadioValueType) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  options,
  defaultValue = '',
  onChange,
}) => {
  const [checkedValue, setCheckedValue] =
    useState<RadioValueType>(defaultValue);

  const handleChange = (value: string) => {
    setCheckedValue(value);
    onChange(value);
  };

  useEffect(() => {
    if (defaultValue && defaultValue !== checkedValue) {
      handleChange(defaultValue);
    }
  }, [defaultValue]);

  const renderChildren = (nodes: ReactNode): ReactNode => {
    return React.Children.map(nodes, node => {
      if (React.isValidElement<CheckBoxProps>(node) && node.type === Radio) {
        const isChecked = checkedValue === String(node.props.value);
        return React.cloneElement(node, {
          checked: isChecked,
          onChange: () => handleChange(String(node.props.value)),
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

  const renderOptions = (optionArr: OptionType[]): ReactNode => {
    return optionArr.map(option => (
      <Radio
        key={option.value}
        value={option.value}
        checked={checkedValue === option.value}
        onChange={() => handleChange(option.value)}
        label={option.label}
      />
    ));
  };

  return (
    <div>{options ? renderOptions(options) : renderChildren(children)}</div>
  );
};

export default RadioGroup;
