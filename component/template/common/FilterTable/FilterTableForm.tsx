import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import {
  fetchProductSearchModal,
  fetchStoreSearchModal,
} from '@ApiFarm/search-modal';
import {
  DiffDateRanger,
  DiffDateType,
} from '@ComponentFarm/modules/DateRange/DiffDateRanger';
import { Button } from '@ComponentFarm/atom/Button/Button';
import ProductSearchPopup from '@ComponentFarm/modal/SearchPopup/ProductSearchPopup';
import StoreSearchPopup from '@ComponentFarm/modal/SearchPopup/StoreSearchPopup';
import { QueryParams } from '@HookFarm/useQueryParams';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import SelectItemsList from './SelectItemsList';
import { FilterTable, FilterTableBtnBox } from './style';
import useSelectItems from './useFilterHandler';

interface FilterTableFormProps {
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
}

const FilterTableForm = ({ params, updateParams }: FilterTableFormProps) => {
  // 기간 선택
  const [selectedDateRanges, setSelectedDateRanges] = useState<DiffDateType>({
    range1: [null, null],
    range2: [null, null],
  });

  // 팝업
  const productSelect = useSelectItems('product_name_ko');
  const storeSelect = useSelectItems('store_name');

  const { data: productModalData } = useQuery(
    ['searchModal', 'product', productSelect.filters],
    () => fetchProductSearchModal(productSelect.filters),
    { cacheTime: 0, enabled: productSelect.isOpen || !!params.product_info_idx }
  );

  const { data: storeModalData } = useQuery(
    ['searchModal', 'store', storeSelect.filters],
    () => fetchStoreSearchModal(storeSelect.filters),
    { cacheTime: 0, enabled: storeSelect.isOpen || !!params.store_idx }
  );

  const filterItems = [
    {
      title: '제품 구분',
      select: productSelect,
    },
    {
      title: '매장 구분',
      select: storeSelect,
    },
  ];

  // params에 따른 초기화
  useEffect(() => {
    if (params.product_info_idx) {
      const setProductItems = productModalData?.list
        ?.filter(item =>
          String(params.product_info_idx)
            .split(',')
            .includes(item.product_info_idx.toString())
        )
        ?.map(item => ({
          idx: String(item.product_info_idx),
          name: item.product_name_ko,
        }));
      if (setProductItems) {
        productSelect?.setSelectItems(setProductItems);
      }
    }
    if (params.store_idx) {
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
      }
    }
  }, [
    params.product_info_idx,
    productModalData?.list,
    params.store_idx,
    storeModalData?.list,
  ]);

  const handleFilterResult = () => {
    const { range1, range2 } = selectedDateRanges;

    let dateParams = {};
    if (
      range1.every(date => date !== null) &&
      range2.every(date => date !== null)
    ) {
      dateParams = {
        base_dt_start: dayjs(range1[0]).format('YYYY-MM-DD'),
        base_dt_finish: dayjs(range1[1]).format('YYYY-MM-DD'),
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
      product_info_idx: productSelect.selectItems
        .map(item => item.idx)
        .join(','),
      store_idx: storeSelect.selectItems.map(item => item.idx).join(','),
    });
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
                selectedDateRanges={selectedDateRanges}
                setSelectedDateRanges={setSelectedDateRanges}
                params={params}
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

      <ProductSearchPopup setConfig={productSelect} data={productModalData} />
      <StoreSearchPopup setConfig={storeSelect} data={storeModalData} />

      <FilterTableBtnBox>
        <Button variant="gostSecondary">초기화</Button>
        <Button variant="primary" onClick={handleFilterResult}>
          조회
        </Button>
      </FilterTableBtnBox>
    </>
  );
};

export default FilterTableForm;
