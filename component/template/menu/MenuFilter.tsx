import { EnvRow } from '@ApiFarm/environment';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Sync from '@ComponentFarm/atom/icons/Sync';
import { ListFilterStyle } from '@ComponentFarm/common';
import ListDatePickers from '@ComponentFarm/molecule/ListDatePickers/ListDatePickers';
import ListFilterSelects from '@ComponentFarm/molecule/ListFilterSelects/ListFilterSelects';
import SearchKeyword from '@ComponentFarm/molecule/SearchKeyword/SearchKeyword';
import { QueryParams } from '@HookFarm/useQueryParams';
import useSelectConfigWithEnv from '@HookFarm/useSelectConfigWithEnv';
import { categoryDateConfig, menuSelectConfig } from './const';

export type keywordType = {
  search_type?: string;
  search_keyword: string;
};

interface IMenuFilterProps {
  envs: Record<string, EnvRow[]>;
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
  resetParams: () => void;
}

const MenuFilter = ({
  envs,
  params,
  updateParams,
  resetParams,
}: IMenuFilterProps) => {
  const handlerKeyword = (keyword: keywordType) => {
    if (keyword.search_type) {
      updateParams({ ...keyword, page: 1 });
    } else {
      // search_type이 없을 경우, search_keyword만 사용
      updateParams({ search_keyword: keyword.search_keyword, page: 1 });
    }
  };

  const menuSelectConfigWithEnv = useSelectConfigWithEnv(
    menuSelectConfig,
    envs
  );

  return (
    <ListFilterStyle className="justify-between align-end">
      <div className="group">
        <ListFilterSelects
          selectConfig={menuSelectConfigWithEnv}
          params={params}
          updateParams={updateParams}
        />
        <div className="divider" />
        <ListDatePickers
          dateConfig={categoryDateConfig}
          params={params}
          updateParams={updateParams}
        />
        <Button
          className="btn_reset"
          variant="transparent"
          onClick={resetParams}
          LeadingIcon={<Sync />}
        >
          초기화
        </Button>
      </div>
      <div className="group">
        <SearchKeyword
          params={params}
          placeholder="메뉴명 검색"
          handler={handlerKeyword}
        />
      </div>
    </ListFilterStyle>
  );
};

export default MenuFilter;
