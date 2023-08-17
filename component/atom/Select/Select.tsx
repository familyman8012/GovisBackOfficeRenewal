import React, { FC, useMemo } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
  default as SelectLibrary,
  components,
  DropdownIndicatorProps,
  StylesConfig,
} from 'react-select';

export interface IOption {
  value: string;
  label: string | React.ReactNode;
  status?: string;
}

export interface SelectProps {
  options: IOption[];
  selectedOption: IOption | string | null;
  setSelectedOption: (option: any) => void;
  placeholder?: string;
  LeadingIcon?: React.ReactElement;
  width?: string;
  height?: string;
  isSearchable?: boolean;
  formatOptionLabel?: (option: IOption) => React.ReactNode;
  formatStatus?: (status: string) => React.ReactNode;
  prefixLabel?: string;
}

const DropdownIndicator = (props: DropdownIndicatorProps<IOption, false>) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiChevronDown size={20} className="text-gray-500" />
    </components.DropdownIndicator>
  );
};

const CustomControl = (prefixLabel: string) => {
  const ControlComponent = ({ children, selectProps, ...rest }: any) => {
    return (
      <components.Control {...rest}>
        <span
          style={{
            padding: '0 .2rem 0 1.2rem',
          }}
        >
          <span style={{ color: '#687182' }}>{prefixLabel}</span>
        </span>
        {children}
      </components.Control>
    );
  };

  ControlComponent.displayName = 'CustomControl';
  return ControlComponent;
};

export const Select: FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
  LeadingIcon,
  width,
  height,
  isSearchable,
  formatOptionLabel,
  formatStatus,
  prefixLabel,
  ...restProps
}) => {
  const customStyles: StylesConfig<IOption, false> = {
    control: (provided, state) => ({
      ...provided,
      width,
      minHeight: '4rem',
      height: '4rem',
      display: 'flex',
      border: state.menuIsOpen
        ? '1px solid var(--input-selectFoucsBorder) !important'
        : '1px solid var(--input-selectBorder) !important',
      boxShadow: state.isFocused ? 'none' : undefined,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: '.2rem .4rem .2rem .8rem',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      padding: state.selectProps.menuIsOpen
        ? '.8rem 0 .8rem .8rem'
        : '.8rem .8rem .8rem 0',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: provided => ({
      ...provided,
      zIndex: 10,
      border: '1px solid var(--input-selectBorder)',
      boxShadow: 'none',
      borderRadius: '0.4rem',
    }),
    menuList: provided => ({
      paddingTop: 0,
      overflowY: 'auto',
      maxHeight: '27rem',
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: '1.4rem',
      lineHeight: '120%',
      backgroundColor: state.isFocused
        ? 'var(--input-selectOptionSelected)'
        : 'transparent',
      color: state.isFocused ? 'var(--color-blue)' : 'var(--color-neutral10)',
      // color: state.isSelected ? 'white' : 'inherit',
    }),
  };

  // 상태에 따라 뱃지와 라벨을 포맷하는 함수
  const customFormatOptionLabel = (option: IOption) => {
    const statusBadge = formatStatus
      ? formatStatus(String(option.status))
      : null;
    return (
      <>
        {statusBadge}
        {option.label}
      </>
    );
  };

  const computedSelectedOption = useMemo(() => {
    return typeof selectedOption === 'string'
      ? options.find(el => el.value === selectedOption)
      : selectedOption;
  }, [selectedOption, options]);

  return (
    <SelectLibrary
      classNames={{
        control: state => 'select_library_control',
      }}
      styles={customStyles}
      components={{
        DropdownIndicator,
        Control: prefixLabel ? CustomControl(prefixLabel) : components.Control,
      }}
      options={options}
      value={computedSelectedOption}
      onChange={setSelectedOption}
      placeholder={placeholder || 'Select...'}
      isClearable={false}
      isSearchable
      formatOptionLabel={customFormatOptionLabel}
    />
  );
};
