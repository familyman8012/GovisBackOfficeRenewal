import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchStoreSearchModal } from '@ApiFarm/search-modal';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Sync from '@ComponentFarm/atom/icons/Sync';
import { ListHandlerWrap } from '@ComponentFarm/layout/styles';
import StoreSearchPopup from '@ComponentFarm/modal/SearchPopup/StoreSearchPopup';
import ListDatePickers from '@ComponentFarm/molecule/ListDatePickers/ListDatePickers';
import { QueryParams } from '@HookFarm/useQueryParams';
import { salesFilterDateConfig } from './const';
import useSelectItems from '../common/FilterTable/useFilterHandler';

interface Props {
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
  resetParams: () => void;
}

const StoreSalesFilter = ({ params, updateParams, resetParams }: Props) => {
  const storeSelect = useSelectItems(
    'store_name',
    params.store_id
      ?.toString()
      .split(',')
      .map(item => ({ idx: item, name: '' }))
  );

  const { data: storeModalData } = useQuery(
    ['searchModal', 'store', storeSelect.filters],
    () => fetchStoreSearchModal(storeSelect.filters),
    { enabled: storeSelect.isOpen || !!params.store_id }
  );

  const storeSelectForParmas = useMemo(
    () => ({
      ...storeSelect,
      setSelectItems: (items: any) => {
        updateParams({
          ...params,
          store_id: items.map((item: any) => item.idx).join(','),
          current_num: 1,
        });
        storeSelect.setSelectItems(items);
      },
    }),
    [storeSelect, params]
  );

  return (
    <ListHandlerWrap>
      <div className="line line1">
        <div className="field">
          <Button
            variant="gostSecondary"
            onClick={() => storeSelect.setIsOpen(true)}
          >
            매장 선택
          </Button>
        </div>
        <ListDatePickers
          dateConfig={salesFilterDateConfig}
          params={params}
          updateParams={updateParams}
        />
        <div className="field">
          <Button
            className="btn_reset"
            variant="transparent"
            onClick={() => {
              resetParams();
              storeSelect.setSelectItems([]);
            }}
            LeadingIcon={<Sync />}
          >
            초기화
          </Button>
        </div>
      </div>
      <StoreSearchPopup
        setConfig={storeSelectForParmas}
        data={storeModalData}
      />
    </ListHandlerWrap>
  );
};

export default StoreSalesFilter;
