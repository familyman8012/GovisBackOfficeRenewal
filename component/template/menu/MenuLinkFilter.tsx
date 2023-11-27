import { useQuery } from 'react-query';
import { fetchStoreSearchModal } from '@ApiFarm/search-modal';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { ListHandlerWrap } from '@ComponentFarm/layout/styles';
import StoreSearchPopup from '@ComponentFarm/modal/SearchPopup/StoreSearchPopup';
import SearchKeyword from '@ComponentFarm/molecule/SearchKeyword/SearchKeyword';
import { QueryParams } from '@HookFarm/useQueryParams';
import useSelectItems from '../common/FilterTable/useFilterHandler';

interface Props {
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
  resetParams: () => void;
}
const MenuLinkFilter = ({ params, updateParams, resetParams }: Props) => {
  const storeSelect = useSelectItems('store_name');

  const { data: storeModalData } = useQuery(
    ['searchModal', 'store', storeSelect.filters],
    () => fetchStoreSearchModal(storeSelect.filters),
    { cacheTime: 0, enabled: storeSelect.isOpen || !!params.store_idx }
  );

  return (
    <ListHandlerWrap>
      <StoreSearchPopup setConfig={storeSelect} data={storeModalData} />
      <div className="line line1">
        <Button
          variant="gostSecondary"
          onClick={() => storeSelect.setIsOpen(true)}
        >
          매장 선택
        </Button>
        <div className="right">
          <SearchKeyword
            placeholder="메뉴명"
            params={params}
            handler={({ search_keyword }) =>
              updateParams({ ...params, search_keyword })
            }
          />
        </div>
      </div>
    </ListHandlerWrap>
  );
};

export default MenuLinkFilter;
