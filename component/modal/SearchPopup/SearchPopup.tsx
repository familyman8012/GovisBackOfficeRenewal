import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import CheckBoxGroup from '@ComponentFarm/modules/CheckBoxGroup/CheckBoxGroup';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import CheckBox from '@ComponentFarm/atom/Checkbox/CheckBox';
import Radio from '@ComponentFarm/atom/Radio/Radio';
import { IOption, Select } from '@ComponentFarm/atom/Select/Select';
import { Table, TableWrap } from '@ComponentFarm/common';
import SearchKeyword from '@ComponentFarm/molecule/SearchKeyword/SearchKeyword';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { SelectConfig } from '@UtilFarm/convertEnvironment';
import { SearchBox, SearchResult } from '../searchPopup_style';

type ColumnNameType = {
  th: string[];
  col: number[];
};

type selectOptionsType = {
  [key: string]: string | null;
};

export type checkedItemType = {
  idx: string;
  name: string;
};

export interface ICommonResultData {
  idx: number;
  label: string;
}

interface SearchPopupProps<T extends ICommonResultData> {
  width?: string;
  title: string;
  selectConfig?: SelectConfig[];
  tableCofig: ColumnNameType;
  resultData: T[];
  type?: string;
  disabled?: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  filters: selectOptionsType;
  setFilters: Dispatch<SetStateAction<selectOptionsType>>;
  initialValues: string[];
  setSelectItems: Dispatch<SetStateAction<checkedItemType[]>>;
  badge: string[];
}

const SearchPopup = <T extends ICommonResultData>({
  width = '68.3rem',
  title,
  selectConfig,
  tableCofig,
  resultData,
  type,
  disabled = false,
  isOpen,
  setIsOpen,
  filters,
  setFilters,
  initialValues,
  setSelectItems,
  badge,
}: SearchPopupProps<T>) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const onFormSubmit = () => {
    const selectedProducts = resultData
      .filter((item: T) => checkedItems.includes(String(item.idx)))
      .map((item: T) => ({ idx: String(item.idx), name: item.label || '' }));

    setSelectItems(selectedProducts);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handlerClose = () => {
    setIsOpen(false);
  };

  // filter
  const handleFilterChange = (
    field: string,
    value: IOption | string | null
  ) => {
    setFilters(prev => ({
      ...prev,
      [field]:
        typeof value === 'string' ? value : value ? String(value.value) : null,
    }));
  };

  const renderTable = () => {
    return (
      <Table className="basic">
        <colgroup>
          {tableCofig.col.map((el, i) => (
            <col key={i} width={getTableWidthPercentage(el, 646)} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th colSpan={tableCofig.col.length}>검색 결과</th>
          </tr>
          <tr>
            <th>
              {type !== 'radio' && (
                <CheckBox value="allChkHandler" label="All" />
              )}
            </th>
            {tableCofig.th.map((el, i) => (
              <React.Fragment key={i}>
                <th>{el}</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {resultData?.map((el: T) => (
            <tr key={el.idx}>
              <td>
                {type === 'radio' ? (
                  <Radio value={el.idx} label={el.label} />
                ) : (
                  <CheckBox value={String(el.idx)} label={el.label} />
                )}
              </td>
              {Object.entries(el).map(
                ([key, value], index) =>
                  key !== 'idx' && (
                    <td key={index}>
                      {key === 'status' ? (
                        <Badge
                          color={
                            value === badge[0]
                              ? 'green'
                              : value === badge[badge.length - 1]
                              ? 'red'
                              : 'yellow'
                          }
                          size="sm"
                          dot
                        >
                          {String(value)}
                        </Badge>
                      ) : key === 'category' ? (
                        <label htmlFor={String(el.idx)}>{String(value)}</label>
                      ) : (
                        String(value)
                      )}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const modalType = () => {
    const commonProps = {
      name: 'chkSelectItem',
      disabled,
    };

    const allOptions = resultData?.map((item: T) => ({
      value: String(item.idx),
      label: item.label,
    }));

    if (type === 'radio') {
      return (
        <RadioGroup
          {...commonProps}
          defaultValue={String(...initialValues)}
          onChange={(data: string) => setCheckedItems([data])}
        >
          <>{renderTable()}</>
        </RadioGroup>
      );
    }

    return (
      <CheckBoxGroup
        {...commonProps}
        initialCheckedValues={initialValues}
        allChechkHandler={allOptions}
        onChange={setCheckedItems}
      >
        <>{renderTable()}</>
      </CheckBoxGroup>
    );
  };

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={handlerClose}
      onCancel={handlerClose}
      showCloseButton
      addStyles={css`
        max-width: unset;
        overflow-y: unset;
      `}
      onFormSubmit={onFormSubmit}
    >
      <SearchBox width={width}>
        <fieldset>
          <legend>{title} 검색</legend>
          <table>
            <tbody>
              <tr>
                <th scope="row">필터</th>
                <td>
                  <div className="wrap_input">
                    {selectConfig?.map(el => (
                      <Select
                        key={el.field}
                        options={el.options}
                        selectedOption={filters[el.field]}
                        setSelectedOption={option =>
                          handleFilterChange(el.field, option)
                        }
                        prefixLabel={el.label}
                        placeholder="전체"
                      />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">매장명</th>
                <td>
                  <SearchKeyword
                    handler={keyword =>
                      handleFilterChange(
                        'search_keyword',
                        keyword.search_keyword
                      )
                    }
                    placeholder="검색어를 입력해 주세요"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </SearchBox>
      <SearchResult width={width} col={tableCofig.col}>
        <TableWrap>{modalType()}</TableWrap>
      </SearchResult>
    </Modal>
  );
};

export default SearchPopup;
