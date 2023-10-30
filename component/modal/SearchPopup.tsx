import React, { useState } from 'react';
import CheckBoxGroup from '@ComponentFarm/modules/CheckBoxGroup/CheckBoxGroup';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import CheckBox from '@ComponentFarm/atom/Checkbox/CheckBox';
import Radio from '@ComponentFarm/atom/Radio/Radio';
import { Table, TableWrap } from '@ComponentFarm/common';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { SearchBox, SearchResult } from './style';

type ColumnNameType = {
  searchBoxTitle: string[];
  th: string[];
  col: number[];
};

const SearchPopup = ({
  title = '제품 상세 설정',
  columnName = {
    searchBoxTitle: ['제품 상태', '제품 분류'],
    th: ['제품 분류', '제품명', '제품 상태'],
    col: [46, 180, 240, 180],
  },
  data,
  type,
  badge = true,
  disabled = false,
}: {
  title?: string;
  columnName: ColumnNameType;
  data: any;
  type?: string;
  badge?: boolean;
  disabled?: boolean;
}) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedRadio, setSelectedRadio] = useState('0');
  // eslint-disable-next-line no-unused-vars
  const [selectedLetters, setSelectedLetters] = useState<any>([]);
  const handlerClose = () => {};

  const options2 = data.map((item: any) => ({
    value: item.id.toString(), // id 값을 문자열로 변환하여 value로 설정
    label: item.name, // name 값을 label로 설정
  }));

  const renderTable = () => {
    return (
      <Table className="basic">
        {columnName.col.map((el, i) => (
          <col key={i} width={getTableWidthPercentage(el, 646)} />
        ))}
        <thead>
          <tr>
            <th colSpan={columnName.col.length}>검색 결과</th>
          </tr>
          <tr>
            <th>
              {type !== 'radio' && (
                <CheckBox value="allChkHandler" label="All" />
              )}
            </th>
            {columnName.th.map((el, i) => (
              <React.Fragment key={i}>
                <th>{el}</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el: any) => (
            <tr key={el.id}>
              <td>
                {type === 'radio' ? (
                  <Radio
                    value={options2[el.id].value}
                    label={options2[el.id].label}
                  />
                ) : (
                  <CheckBox
                    value={options2[el.id].value}
                    label={options2[el.id].label}
                  />
                )}
              </td>
              {Object.entries(el).map(
                ([key, value], index) =>
                  key !== 'id' && (
                    <td key={index}>
                      {key === 'state' && badge ? (
                        <Badge
                          color={
                            value === 'op'
                              ? 'green'
                              : value === 'st'
                              ? 'red'
                              : 'yellow'
                          }
                          size="sm"
                          dot
                        >
                          {value === 'op' ? '운영' : '중단'}
                        </Badge>
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

  const renderGroup = () => {
    const commonProps = {
      onChange: setSelectedLetters,
      name: 'letters',
      disabled,
    };

    if (type === 'radio') {
      return (
        <RadioGroup {...commonProps}>
          <>{renderTable()}</>
        </RadioGroup>
      );
    }

    return (
      <CheckBoxGroup
        {...commonProps}
        initialCheckedValues={[]}
        allChechkHandler={options2}
      >
        <>{renderTable()}</>
      </CheckBoxGroup>
    );
  };

  return (
    <Modal title={title} isOpen onClose={handlerClose} showCloseButton>
      <SearchBox>
        <fieldset>
          <legend>{title} 검색</legend>
          <h3>{columnName.searchBoxTitle[1]}</h3>
          <select name="email3">
            <option value="">전체</option>
          </select>
          <h3>{columnName.searchBoxTitle[2]}</h3>
          <select name="email3">
            <option value="">전체</option>
          </select>
        </fieldset>
      </SearchBox>
      <SearchResult>
        <TableWrap>{renderGroup()}</TableWrap>
      </SearchResult>
    </Modal>
  );
};

export default SearchPopup;
