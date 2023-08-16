import React from 'react';
import { css } from '@emotion/react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Sync } from '@ComponentFarm/atom/icons';
import { ListHandlerWrap } from '@ComponentFarm/layout/styles';
import ListDatePickers from '@ComponentFarm/molecule/ListDatePickers/ListDatePickers';
import ListFilterSelects from '@ComponentFarm/molecule/ListFilterSelects/ListFilterSelects';
import SearchKeyword from '@ComponentFarm/molecule/SearchKeyword/SearchKeyword';
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

const pageListSetting = css`
  .line1 {
    .field1,
    .field2,
    .field3 {
      width: 15.3rem;
    }
    .field4,
    .field5 {
      width: 13.5rem;
    }
  }
  .line2 {
    .left .field {
      width: 15.3rem;
    }
  }
`;

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
    <ListHandlerWrap css={pageListSetting}>
      <div className="line line1">
        <ListFilterSelects
          selectConfig={selectConfig}
          params={params}
          updateParams={updateParams}
        />
      </div>
      <div className="line line2">
        <div className="left">
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
        <div className="right">
          <SearchKeyword
            params={params}
            selOption={searchOption}
            handler={handlerKeyword}
          />
        </div>
      </div>
    </ListHandlerWrap>
  );
};

export default ListHandler;
