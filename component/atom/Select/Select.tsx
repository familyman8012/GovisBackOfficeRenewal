import React, { FC, SetStateAction, Dispatch } from 'react';
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

interface CommonProps {
  options: IOption[];
  placeholder?: string;
  LeadingIcon?: React.ReactElement;
  width?: string;
  height?: string;
  isSearchable?: boolean;
  formatOptionLabel?: (option: IOption) => React.ReactNode;
}

interface SingleSelectProps extends CommonProps {
  selectedOption: IOption | null;
  setSelectedOption: Dispatch<SetStateAction<IOption | null>>;
  isMulti?: boolean;
}

export interface MultiSelectProps extends CommonProps {
  selectedOption: readonly IOption[] | null;
  setSelectedOption: Dispatch<SetStateAction<IOption[] | null>>;
  isMulti: boolean;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;

const DropdownIndicator = (props: DropdownIndicatorProps<IOption, boolean>) => {
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
  isMulti = false,
  formatOptionLabel,
}) => {
  const customStyles: StylesConfig<IOption, boolean> = {
    control: (provided, state) => ({
      ...provided,
      width,
      height,
      display: 'flex',
      fontSize: '1.6rem',
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
      fontSize: '1.6rem',
      paddingLeft: isMulti ? '2.5rem' : '',
      background: isMulti
        ? state.isSelected
          ? "url('http://localhost:3000/images/ico_checkbox2.png') no-repeat 0.5rem center / 2rem"
          : "url('http://localhost:3000/images/ico_checkbox.png') no-repeat 0.5rem center / 2rem"
        : '',
      backgroundColor: state.isSelected
        ? '#0070f3'
        : state.isFocused
        ? '#ebf8ff'
        : 'transparent',
      color: state.isSelected ? 'inherit' : 'inherit',
    }),
  };

  const handleChange = (value: any) => {
    setSelectedOption(value);
  };

  return (
    <Select<IOption, boolean>
      styles={customStyles}
      classNames={{
        option: state => (state.isSelected ? 'eunsuk' : 'mmm'),
      }}
      components={{ DropdownIndicator }}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      placeholder={placeholder || 'Select...'}
      isClearable={false}
      isSearchable={isSearchable}
      isMulti={isMulti}
      formatOptionLabel={formatOptionLabel}
      hideSelectedOptions={false} // 여기에 이 줄을 추가
    />
  );
};
