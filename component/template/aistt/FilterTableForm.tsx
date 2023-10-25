import React from 'react';
import styled from '@emotion/styled';
import { BtnDelete, Button } from '@ComponentFarm/atom/Button/Button';
import Sync from '@ComponentFarm/atom/icons/Sync';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';

export const FilterTable = styled.table`
  width: 100%;
  th,
  td {
    border: 1px solid var(--color-gray6);
  }
  th {
    width: fit-content;
    padding: 1.95rem 2rem 1.95rem 0;
    color: var(--color-neutral50);
    font-size: 1.4rem;
    font-weight: 700;
    border-left: none;
    text-align: right;
    background: var(--color-gray2);
  }
  td {
    border-right: 0;
    .inner {
      display: flex;
      align-items: center;
      padding: 0.8rem 1rem;
      border-right: none;

      button {
        min-width: auto;
        margin-right: 1.6rem;
      }

      .btn_box {
        display: flex;
        align-items: center;
      }

      .list_select_item {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.6rem 0;
      }
    }
  }
`;

export const FilterTableBtnBox = styled.div`
  diplay: flex;
  width: fit-content;
  margin: 3.6rem auto;

  button {
    width: 12.3rem;
    &:first-of-type {
      margin-right: 1.6rem;
    }
  }
`;

const FilterTableForm = () => {
  return (
    <>
      <FilterTable>
        <colgroup>
          <col width={getTableWidthPercentage(120)} />
          <col width={getTableWidthPercentage(1416)} />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">기간 선택</th>
            <td>
              {/* <Select
                    options={options}
                    selectedOption={String(params.product_category ?? '')}
                    setSelectedOption={({ value }: { value: string }) =>
                      updateParams({
                        product_category: value,
                        current_num: 1,
                      })
                    }
                    placeholder="전체"
                    prefixLabel="날짜"
                  />
                  <DatePicker
                    selectedDate={String(params.start_date ?? '')}
                    onChange={(value: string) =>
                      updateParams({ start_date: value, current_num: 1 })
                    }
                    placeholderText=""
                  /> */}
            </td>
          </tr>
          <tr>
            <th scope="row">제품 구분</th>
            <td>
              <div className="inner">
                <span className="btn_box">
                  <Button variant="gostSecondary">검색</Button>
                  <Button
                    className="btn_reset"
                    variant="transparent"
                    // onClick={resetParams}
                    LeadingIcon={<Sync />}
                  >
                    초기화
                  </Button>
                </span>
                <div className="list_select_item">
                  <Button variant="selectItem" TrailingIcon={<BtnDelete />}>
                    오리지널 페퍼로니 피자
                  </Button>
                  <Button variant="selectItem" TrailingIcon={<BtnDelete />}>
                    아메리칸 치즈 피자
                  </Button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">매장 구분</th>
            <td>
              <div className="inner">
                <span className="btn_box">
                  <Button variant="gostSecondary">검색</Button>
                  <Button
                    className="btn_reset"
                    variant="transparent"
                    // onClick={resetParams}
                    LeadingIcon={<Sync />}
                  >
                    초기화
                  </Button>
                </span>
                <div className="list_select_item" />
              </div>
            </td>
          </tr>
        </tbody>
      </FilterTable>
      <FilterTableBtnBox>
        <Button variant="gostSecondary">초기화</Button>
        <Button variant="primary">조회</Button>
      </FilterTableBtnBox>
    </>
  );
};

export default FilterTableForm;
