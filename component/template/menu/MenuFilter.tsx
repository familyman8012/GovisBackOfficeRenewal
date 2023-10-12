import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchMenuCategoryList } from '@ApiFarm/menu';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Sync from '@ComponentFarm/atom/icons/Sync';
import ListDatePickers from '@ComponentFarm/molecule/ListDatePickers/ListDatePickers';
import ListFilterSelects from '@ComponentFarm/molecule/ListFilterSelects/ListFilterSelects';
import SearchKeyword from '@ComponentFarm/molecule/SearchKeyword/SearchKeyword';
import { QueryParams } from '@HookFarm/useQueryParams';
import useSelectConfigWithEnv from '@HookFarm/useSelectConfigWithEnv';
import { categoryDateConfig, menuSelectConfig } from './const';
import { ListHandlerStyle } from '../recipe/style';

export type keywordType = {
  search_type?: string;
  search_keyword: string;
};

interface IMenuFilterProps {
  envs: IEnvironmentResItem[];
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
  const categoryQuery = useQuery(['menu-categories'], () =>
    fetchMenuCategoryList({
      per_num: 9999,
      current_num: 1,
    })
  );
  const handlerKeyword = (keyword: keywordType) => {
    updateParams({
      search_target: 'menu_name',
      search_keyword: keyword.search_keyword,
      current_num: 1,
    });
  };

  const categoryEnvList = useMemo(
    () =>
      (categoryQuery?.data?.list ?? []).map(
        item =>
          ({
            environment_variable_idx: `${item.menu_category_idx}`,
            name: 'menu_category_idx',
            code: '',
            value: item.menu_category_name,
          }) as IEnvironmentResItem
      ),
    [categoryQuery.data]
  );

  const menuSelectConfigWithEnv = useSelectConfigWithEnv(menuSelectConfig, [
    ...envs,
    ...categoryEnvList,
  ]);

  return (
    <ListHandlerStyle>
      <div className="line group">
        <ListFilterSelects
          selectConfig={menuSelectConfigWithEnv}
          params={params}
          updateParams={updateParams}
        />
      </div>
      <div className="line justify-between">
        <div className="group ">
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
      </div>
    </ListHandlerStyle>
  );
};

export default MenuFilter;
