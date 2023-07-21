import React, { FC } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Select, {
  components,
  DropdownIndicatorProps,
  StylesConfig,
} from 'react-select';

export interface IOption {
  value: string;
  label: string | React.ReactNode;
}

export interface SelectProps {
  options: IOption[];
  selectedOption: IOption | null;
  setSelectedOption: (option: IOption | null) => void;
  placeholder?: string;
  LeadingIcon?: React.ReactElement;
  width?: string;
  height?: string;
  isSearchable?: boolean;
  formatOptionLabel?: (option: IOption) => React.ReactNode;
}

const DropdownIndicator = (props: DropdownIndicatorProps<IOption, false>) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiChevronDown size={20} className="text-gray-500" />
    </components.DropdownIndicator>
  );
};

export const GoSelect: FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
  LeadingIcon,
  width,
  height,
  isSearchable,
  formatOptionLabel,
}) => {
  const customStyles: StylesConfig<IOption, false> = {
    control: (provided, state) => ({
      ...provided,
      width,
      height,
      display: 'flex',
      border: state.isFocused ? '1px solid #000' : '1px solid #d4d4d4',
      boxShadow: state.isFocused ? '0 0 0 1px #0070f3' : undefined,
      '&:hover': {
        border: '1px solid #0070f3',
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: provided => ({
      ...provided,
      zIndex: 10,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#0070f3'
        : state.isFocused
        ? '#ebf8ff'
        : 'transparent',
      color: state.isSelected ? 'white' : 'inherit',
    }),
  };

  return (
    <Select
      styles={customStyles}
      components={{ DropdownIndicator }}
      options={options}
      value={selectedOption}
      onChange={setSelectedOption}
      placeholder={placeholder || 'Select...'}
      isClearable={false}
      isSearchable={isSearchable}
      formatOptionLabel={formatOptionLabel}
    />
  );
};
