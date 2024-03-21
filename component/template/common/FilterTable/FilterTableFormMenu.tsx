import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import {
  fetchMenuSearchModal,
  fetchStoreSearchModal,
} from '@ApiFarm/search-modal';
import {
  DiffDateRanger,
  DiffDateType,
} from '@ComponentFarm/modules/DateRange/DiffDateRanger';
import { Button } from '@ComponentFarm/atom/Button/Button';
import MenuSearchPopup from '@ComponentFarm/modal/SearchPopup/menuSearchPopup';
import StoreSearchPopup from '@ComponentFarm/modal/SearchPopup/StoreSearchPopup';
import { QueryParams } from '@HookFarm/useQueryParams';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import SelectItemsList from './SelectItemsList';
import { FilterTable, FilterTableBtnBox } from './style';
import useSelectItems from './useFilterHandler';

interface FilterTableFormProps {
  type?: string;
  dateKeys?: {
    startKey: string; // 시작 날짜의 파라미터 키
    endKey: string; // 종료 날짜의 파라미터 키
  };
  maxDateRanger?: number;
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
  resetParams: () => void;
}

const FilterTableForm = ({
  type,
  dateKeys = {
    startKey: 'search_start_dt',
    endKey: 'search_end_dt',
  },
  maxDateRanger,
  params,
  updateParams,
  resetParams,
}: FilterTableFormProps) => {
  // 기간 선택
  const [selectedDateRanges, setSelectedDateRanges] = useState<DiffDateType>(
    type === 'diff'
      ? {
          range1: [null, null],
          range2: [null, null],
        }
      : { range1: [null, null] }
  );

  // 팝업
  const menuSelect = useSelectItems('menu_name');
  const storeSelect = useSelectItems('store_name');

  const { data: menuModalData } = useQuery(
    ['searchModal', 'menu', menuSelect.filters],
    () => fetchMenuSearchModal(menuSelect.filters),
    { cacheTime: 0, enabled: menuSelect.isOpen || !!params.menu_info_idx }
  );

  const { data: storeModalData } = useQuery(
    ['searchModal', 'store', storeSelect.filters],
    () => fetchStoreSearchModal(storeSelect.filters),
    { cacheTime: 0, enabled: storeSelect.isOpen || !!params.store_idx }
  );

  const filterItems = [
    {
      title: '메뉴 구분',
      select: menuSelect,
    },
    {
      title: '매장 구분',
      select: storeSelect,
    },
  ];

  // params에 따른 초기화
  useEffect(() => {
    if (params.menu_info_idx && menuSelect?.isFirstLoad) {
      const setProductItems = menuModalData?.list
        ?.filter(item =>
          String(params.menu_info_idx)
            .split(',')
            .includes(item.menu_info_idx.toString())
        )
        ?.map(item => ({
          idx: String(item.menu_info_idx),
          name: item.menu_name,
        }));
      if (setProductItems) {
        menuSelect?.setSelectItems(setProductItems);
        menuSelect?.setIsFirstLoad(false);
      }
    }
    if (params.store_idx && storeSelect?.isFirstLoad) {
      const setStoreItems = storeModalData?.list
        .filter(item =>
          String(params.store_idx)
            .split(',')
            .includes(item.store_idx.toString())
        )
        ?.map(item => ({
          idx: String(item.store_idx),
          name: item.store_name,
        }));
      if (setStoreItems) {
        storeSelect?.setSelectItems(setStoreItems);
        storeSelect?.setIsFirstLoad(false);
      }
    }
  }, [
    params.menu_info_idx,
    menuModalData?.list,
    params.store_idx,
    storeModalData?.list,
  ]);

  const handleFilterResult = () => {
    const { range1, range2 } = selectedDateRanges;

    let dateParams = {};
    if (range1 && range1.every(date => date !== null)) {
      dateParams =
        type === 'diff'
          ? {
              base_dt_start: range1[0]
                ? dayjs(range1[0]).format('YYYY-MM-DD')
                : '0000-00-00',
              base_dt_finish: range1[1]
                ? dayjs(range1[1]).format('YYYY-MM-DD')
                : '0000-00-00',
            }
          : {
              [dateKeys.startKey]: dayjs(range1[0]).format('YYYY-MM-DD'),
              [dateKeys.endKey]: dayjs(range1[1]).format('YYYY-MM-DD'),
            };
    }

    if (range2 && range2.every(date => date !== null)) {
      dateParams = {
        ...dateParams,
        comparison_dt_start: range2[0]
          ? dayjs(range2[0]).format('YYYY-MM-DD')
          : '0000-00-00',
        comparison_dt_finish: range2[1]
          ? dayjs(range2[1]).format('YYYY-MM-DD')
          : '0000-00-00',
      };
    }

    updateParams({
      ...params,
      ...dateParams,
      menu_info_idx: menuSelect.selectItems.map(item => item.idx).join(','),
      store_idx: storeSelect.selectItems.map(item => item.idx).join(','),
    });
  };

  const handlerReset = () => {
    setSelectedDateRanges({
      range1: [null, null],
      range2: [null, null],
    });
    menuSelect.setSelectItems([]);
    storeSelect.setSelectItems([]);
    resetParams();
  };

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
              <DiffDateRanger
                type={type}
                selectedDateRanges={selectedDateRanges}
                setSelectedDateRanges={setSelectedDateRanges}
                params={params}
                dateKeys={dateKeys}
                maxDateRanger={maxDateRanger}
              />
            </td>
          </tr>
          {filterItems.map(({ title, select }) => (
            <SelectItemsList
              key={title}
              title={title}
              items={select.selectItems}
              itemsSetting={select.setSelectItems}
              openModal={() => select.setIsOpen(true)}
              deleteItem={select.handleDeleteItem}
            />
          ))}
        </tbody>
      </FilterTable>
      <MenuSearchPopup setConfig={menuSelect} data={menuModalData} />
      <StoreSearchPopup setConfig={storeSelect} data={storeModalData} />
      <FilterTableBtnBox>
        <Button variant="gostSecondary" onClick={handlerReset}>
          초기화
        </Button>
        <Button variant="primary" onClick={handleFilterResult}>
          조회
        </Button>
      </FilterTableBtnBox>
    </>
  );
};

export default FilterTableForm;
