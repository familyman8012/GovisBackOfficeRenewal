import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { debounce } from 'lodash';
import { css } from '@emotion/react';
import CheckBoxGroup from '@ComponentFarm/modules/CheckBoxGroup/CheckBoxGroup';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import CheckBox from '@ComponentFarm/atom/Checkbox/CheckBox';
import Radio from '@ComponentFarm/atom/Radio/Radio';
import { IOption, Select } from '@ComponentFarm/atom/Select/Select';
import { Table, TableWrap } from '@ComponentFarm/common';
import SearchKeyword from '@ComponentFarm/template/common/FilterTable/SearchKeyword';
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
  width?: number;
  title: string;
  className?: string;
  searchBoxPlaceHolder?: string;
  keyWordSearchTitle: string;
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
  selectItems: checkedItemType[];
  setSelectItems: Dispatch<SetStateAction<checkedItemType[]>>;
  badge: string[];
  defaultKeyword?: {
    search_target: string;
    search_keyword: string;
  };
}

const SearchPopup = <T extends ICommonResultData>({
  width = 833,
  title,
  className,
  searchBoxPlaceHolder,
  keyWordSearchTitle,
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
  selectItems,
  setSelectItems,
  badge,
  defaultKeyword = {
    search_target: '',
    search_keyword: '',
  },
}: SearchPopupProps<T>) => {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [tbodyScrollChk, setTbodyScrollChk] = useState(true);

  const onFormSubmit = () => {
    const selectedProducts = resultData
      .filter((item: T) => checkedItems.includes(String(item.idx)))
      .map((item: T) => ({ idx: String(item.idx), name: item.label || '' }));

    const filterSelectItems = selectItems?.filter(item =>
      checkedItems.includes(item.idx)
    );

    const combineItems = [...filterSelectItems, ...selectedProducts].reduce(
      (accumulator: checkedItemType[], currentItem) => {
        if (!accumulator.some(item => item.idx === currentItem.idx)) {
          accumulator.push(currentItem);
        }
        return accumulator;
      },
      []
    );

    setSelectItems(combineItems);
    setFilters({ search_target: filters.search_target });
    setKeyword({
      search_target: '',
      search_keyword: '',
    });
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
    setFilters({ search_target: filters.search_target });
    setKeyword({
      search_target: '',
      search_keyword: '',
    });
    setIsOpen(false);
  };

  // filter
  const handleFilterChange = (
    field: string,
    value: IOption | string | null
  ) => {
    setFilters(prev => ({
      ...prev,
      search_keyword: keyword.search_keyword,
      [field]:
        typeof value === 'string' ? value : value ? String(value.value) : null,
    }));
  };

  const [reorderedArray, setReorderedArray] = useState<T[]>([]);

  useEffect(() => {
    const selectIdxs = new Set(selectItems.map(item => item.idx));
    const selectedItems: T[] = [];
    const remainingItems: T[] = [];

    resultData.forEach((item: T) => {
      if (selectIdxs.has(String(item.idx))) {
        selectedItems.push(item);
      } else {
        remainingItems.push(item);
      }
    });

    setReorderedArray([...selectedItems.reverse(), ...remainingItems]);
  }, [selectItems, resultData]);

  const tbodyRef = useRef<HTMLTableSectionElement>(null); // <tbody> 요소를 위한 ref 생성

  useEffect(() => {
    const checkScroll = () => {
      const tbody = tbodyRef.current;
      if (tbody) {
        // 스크롤 여부 확인
        const hasScroll = tbody.scrollHeight > tbody.clientHeight;
        if (hasScroll) {
          // 스크롤이 있으면 'scroll' 클래스 추가
          setTbodyScrollChk(true);
        } else {
          // 스크롤이 없으면 'scroll' 클래스 제거
          setTbodyScrollChk(false);
        }
      }
    };

    const debouncedCheckScroll = debounce(checkScroll, 100); // 100ms 동안 debounce 적용

    // 컴포넌트 마운트 시 및 창 크기 변경 시 검사 실행
    debouncedCheckScroll();
    window.addEventListener('resize', debouncedCheckScroll);

    return () => {
      window.removeEventListener('resize', debouncedCheckScroll);
      debouncedCheckScroll.cancel(); // 컴포넌트 언마운트 시 debounce 대기 중인 호출 취소
    };
  }, [resultData]); // resultData 변경 시 재검사

  const renderTable = () => {
    return (
      <Table className="basic">
        <colgroup>
          {tableCofig.col.map((el, i) => (
            <col
              key={i}
              width={getTableWidthPercentage(
                el,
                tbodyScrollChk && tableCofig.col.length === i + 1
                  ? width - 67
                  : width
              )}
            />
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
        <tbody ref={tbodyRef}>
          {reorderedArray?.map((el: T) => (
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
      <SearchBox width={width} className={className}>
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
                <th scope="row">{keyWordSearchTitle}</th>
                <td>
                  <SearchKeyword
                    keyword={keyword}
                    setKeyword={setKeyword}
                    handler={keywordConfig => {
                      handleFilterChange(
                        'search_keyword',
                        keywordConfig.search_keyword
                      );
                    }}
                    placeholder={
                      searchBoxPlaceHolder ?? '검색어를 입력해 주세요'
                    }
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
