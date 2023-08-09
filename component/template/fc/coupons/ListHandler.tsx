import React from 'react';
import ListDatePickers from '@ComponentFarm/modules/ListDatePickers/ListDatePickers';
import ListFilterSelects from '@ComponentFarm/modules/ListFilterSelects/ListFilterSelects';
import SearchKeyword from '@ComponentFarm/modules/SearchKeyword/SearchKeyword';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { QueryParams } from '@HookFarm/useQueryParams';
import { dateConfig, searchOption, selectConfig } from './const';

export type keywordType = {
  search_type?: string;
  search_keyword: string;
};

interface IListHandler {
  params: QueryParams;
  updateParams: (newParams: QueryParams) => void;
  resetParams: () => void;
}

const ListHandler = ({ params, updateParams, resetParams }: IListHandler) => {
  const handlerKeyword = (keyword: keywordType) => {
    if (keyword.search_type) {
      updateParams({ ...keyword, page: 1 });
    } else {
      // search_type이 없을 경우, search_keyword만 사용
      updateParams({ search_keyword: keyword.search_keyword, page: 1 });
    }
  };

  return (
    <div style={{ display: 'flex', marginBottom: '50px' }}>
      <SearchKeyword
        params={params}
        selOption={searchOption}
        handler={handlerKeyword}
      />
      <ListFilterSelects
        selectConfig={selectConfig}
        params={params}
        updateParams={updateParams}
      />
      <ListDatePickers
        dateConfig={dateConfig}
        params={params}
        updateParams={updateParams}
      />
      <Button variant="black" onClick={resetParams}>
        리셋
      </Button>
    </div>
  );
};

export default ListHandler;
