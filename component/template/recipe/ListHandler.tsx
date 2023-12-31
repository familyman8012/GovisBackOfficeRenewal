import React from 'react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Sync from '@ComponentFarm/atom/icons/Sync';
import ListDatePickers from '@ComponentFarm/molecule/ListDatePickers/ListDatePickers';
import ListFilterSelects from '@ComponentFarm/molecule/ListFilterSelects/ListFilterSelects';
import SearchKeyword from '@ComponentFarm/molecule/SearchKeyword/SearchKeyword';
import { QueryParams } from '@HookFarm/useQueryParams';
import { dateConfig, searchOption, selectConfig } from './const';
import { ListHandlerStyle } from './style';

export type keywordType = {
  search_type?: string;
  search_keyword: string;
};

interface IListHandler {
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
  resetParams: () => void;
}

const RecipeFilter = ({ params, updateParams, resetParams }: IListHandler) => {
  const handlerKeyword = (keyword: keywordType) => {
    if (keyword.search_type) {
      updateParams({ ...keyword, page: 1 });
    } else {
      // search_type이 없을 경우, search_keyword만 사용
      updateParams({ search_keyword: keyword.search_keyword, page: 1 });
    }
  };

  return (
    <ListHandlerStyle className="justify-between align-end">
      <div className="group">
        <ListFilterSelects
          selectConfig={selectConfig}
          params={params}
          updateParams={updateParams}
        />
        <div className="divider" />
        <ListDatePickers
          dateConfig={dateConfig}
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
          selOption={searchOption}
          handler={handlerKeyword}
        />
      </div>
    </ListHandlerStyle>
  );
};

export default RecipeFilter;
