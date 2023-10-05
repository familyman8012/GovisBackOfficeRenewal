import React from 'react';
import Select from 'react-select';
import styled from '@emotion/styled';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Sync } from '@ComponentFarm/atom/icons';
import Cross from '@ComponentFarm/atom/icons/Cross';

export interface IOption {
  value: string;
  label: string;
}

const ReactMultiSelectWrap = styled.div`
  width: 100%;

  .wrap_select {
    display: flex;
    .react-select-container {
      flex: 1;
      max-width: 30rem;
    }
    button.btn_reset {
      min-width: auto;
      min-height: 3.8rem;
      padding: 0;
      margin-left: 1.5rem;
      color: var(--color-neutral60);
    }
  }
  .react-select__value-container {
    position: relative;
  }
  .react-select__control:not(.react-select__control--menu-is-open)
    .react-select__value-container--has-value:before {
    position: absolute;

    left: 1rem;
    content: 'Select...';
    color: hsl(0, 0%, 50%);
  }
  .react-select__clear-indicator {
    display: none;
  }
  .badges {
    margin-top: 1rem;
  }
  .badge {
    display: inline-flex;
    margin-right: 1rem;
    aling-items: center;
    padding: 0.8rem 1rem;
    background-color: #eee;
    border-radius: 0.5rem;
    position: relative;
    button,
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
    button {
      margin-left: 0.5rem;
      cursor: pointer;
    }
    svg {
      margin-top: 1px;
    }
    border: 1px solid hsl(0, 0%, 83%);
  }

  .remove-badge {
    margin-left: 0.5rem;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
  }
`;

interface MultiSelectWithBadgesProps {
  options: IOption[];
  selectedOptions: IOption[];
  onChange: (options: IOption[]) => void;
  isDisabled?: boolean;
}

const MultiSelectWithBadges: React.FC<MultiSelectWithBadgesProps> = ({
  options,
  selectedOptions,
  onChange,
  isDisabled,
}) => {
  const handleRemoveBadge = (valueToRemove: string) => {
    const updatedOptions = selectedOptions.filter(
      (option: IOption) => option.value !== valueToRemove
    );
    onChange(updatedOptions);
  };

  const handleClearAll = () => {
    onChange([]);
  };

  return (
    <ReactMultiSelectWrap>
      <div className="wrap_select">
        <Select
          isMulti
          isDisabled={isDisabled}
          className="react-select-container"
          classNamePrefix="react-select"
          options={options as any}
          value={selectedOptions}
          onChange={selected => onChange(selected as IOption[])}
          components={{
            MultiValue: () => null, // 선택된 항목들을 숨김
          }}
        />
        {selectedOptions.length > 0 && !isDisabled && (
          //   <button type="button" onClick={handleClearAll}>
          //     All Clear
          //   </button>
          <Button
            className="btn_reset"
            variant="transparent"
            onClick={handleClearAll}
            LeadingIcon={<Sync />}
          >
            초기화
          </Button>
        )}
      </div>
      <div className="badges">
        {selectedOptions.map((option: IOption) => (
          <span key={option.value} className="badge">
            {option.label}
            <button
              type="button"
              onClick={() => handleRemoveBadge(option.value)}
            >
              <Cross />
              <span className="hiddenZoneV">삭제</span>
            </button>
          </span>
        ))}
      </div>
    </ReactMultiSelectWrap>
  );
};

export default MultiSelectWithBadges;
