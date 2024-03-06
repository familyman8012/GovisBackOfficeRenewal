import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchStoreSearchModal } from '@ApiFarm/search-modal';
import { ISalesParam } from '@InterfaceFarm/sales';
import CheckBoxGroup from '@ComponentFarm/modules/CheckBoxGroup/CheckBoxGroup';
import {
  DiffDateRanger,
  DiffDateType,
} from '@ComponentFarm/modules/DateRange/DiffDateRanger';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Building from '@ComponentFarm/atom/icons/Building';
import { IOption, Select } from '@ComponentFarm/atom/Select/Select';
import StoreSearchPopup from '@ComponentFarm/modal/SearchPopup/StoreSearchPopup';
import { salesTypeSelect, storeStatusOption } from './const';
import useSelectItems from '../common/FilterTable/useFilterHandler';

export const FilterSalesAnalyzeWrap = styled.div`
  display: flex;

  margin: 1.6rem 0;
  padding: 1.6rem;
  border-radius: 0.8rem;
  border: 2px solid var(--color-neutral90);
  background: var(--color-blue_gray10);

  .btn_reset {
    margin-left: 1.6rem;
  }

  dl {
    &:first-of-type {
      dt,
      dd {
        padding-left: 0;
      }
    }
    &:last-of-type {
      dd {
        padding-right: 0;
        border-right: 0;
      }
    }
    dt {
      padding-left: 3.2rem;
      margin-bottom: 0.8rem;
      color: #687182;
    }
    dd {
      display: flex;
      align-items: center;
      height: 4.5rem;
      padding: 0 3.2rem;
      border-right: 1px solid var(--color-neutral90);

      .select_library_control {
        min-width: 25.4rem;
      }
      .box_daterange_input {
        margin: 0;
        .icoInput {
          width: 25.4rem;
        }
      }

      .box_checkbox_group {
        label {
          margin-right: 2.4rem !important;
        }
      }

      svg {
        path {
          fill: var(--color-blue60);
        }
      }
    }
  }
`;

interface FilterTableFormProps {
  salesType?: boolean;
  params: ISalesParam;
  updateParams: (newParams: ISalesParam) => void;
}

const FilterTableForm = ({
  salesType,
  params,
  updateParams,
}: FilterTableFormProps) => {
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
  // 기간 선택
  const [selectedDateRanges, setSelectedDateRanges] = useState<DiffDateType>({
    range1: [null, null],
  });

  const storeSelect = useSelectItems('store_name');

  const [storeStatus, setStoreStatus] = useState<string[]>([]);

  const { data: storeModalData } = useQuery(
    ['searchModal', 'store', storeSelect.filters],
    () => fetchStoreSearchModal(storeSelect.filters),
    { cacheTime: 0, enabled: storeSelect.isOpen || !!params.store_idx }
  );

  // params에 따른 초기화
  useEffect(() => {
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
  }, [params.store_idx, storeModalData?.list]);

  const handleDateRangerResult = () => {
    const { range1 } = selectedDateRanges;

    let dateParams = {};
    if (range1.every(date => date !== null)) {
      dateParams = {
        order_dt_start: dayjs(range1[0]).format('YYYY-MM-DD'),
        order_dt_finish: dayjs(range1[1]).format('YYYY-MM-DD'),
      };
    }

    updateParams({
      ...params,
      ...dateParams,
    });
  };

  useEffect(() => {
    handleDateRangerResult();
  }, [selectedDateRanges]);

  useEffect(() => {
    updateParams({
      ...params,
      store_idx: storeSelect.selectItems.map(item => item.idx).join(','),
    });
  }, [storeSelect.selectItems]);

  useEffect(() => {
    updateParams({
      ...params,
      store_status: storeStatus.join(','),
    });
  }, [storeStatus]);

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  useEffect(() => {
    if (winReady) {
      updateParams({
        ...params,
        sales_type: String(selectedOption?.value),
      });
    }
  }, [selectedOption]);

  return (
    <FilterSalesAnalyzeWrap>
      {salesType && (
        <dl>
          <dt>매출종류</dt>
          <dd>
            {winReady && (
              <Select
                options={[{ label: '전체', value: '' }, ...salesTypeSelect]}
                selectedOption={
                  selectedOption === null && params.sales_type
                    ? (salesTypeSelect.find(
                        el => el.value === params.sales_type
                      ) as IOption)
                    : selectedOption
                }
                setSelectedOption={setSelectedOption}
                placeholder="매출 종류 선택"
              />
            )}
          </dd>
        </dl>
      )}
      <dl>
        <dt>기간 선택</dt>
        <dd>
          <DiffDateRanger
            dateKeys={{ startKey: 'order_dt_start', endKey: 'order_dt_finish' }}
            selectedDateRanges={selectedDateRanges}
            setSelectedDateRanges={setSelectedDateRanges}
            params={params}
            maxDateRanger={6}
          />
        </dd>
      </dl>
      <dl>
        <dt>매장 선택</dt>
        <dd>
          <Button
            variant="gostPrimary"
            onClick={() => storeSelect.setIsOpen(true)}
            TrailingIcon={<Building />}
          >
            매장 선택
          </Button>
        </dd>
      </dl>
      <dl>
        <dt>운영 상테</dt>
        <dd>
          <CheckBoxGroup
            options={storeStatusOption}
            onChange={setStoreStatus}
            initialCheckedValues={
              params.store_status ? String(params.store_status)?.split(',') : []
            }
            name="store_status"
          />
        </dd>
      </dl>
      <StoreSearchPopup setConfig={storeSelect} data={storeModalData} />
    </FilterSalesAnalyzeWrap>
  );
};

export default FilterTableForm;
