import React, { useMemo } from 'react';
import { css } from '@emotion/react';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Sync } from '@ComponentFarm/atom/icons';
import { ListHandlerWrap } from '@ComponentFarm/layout/styles';
import ListDatePickers from '@ComponentFarm/molecule/ListDatePickers/ListDatePickers';
import ListFilterSelects from '@ComponentFarm/molecule/ListFilterSelects/ListFilterSelects';
import SearchKeyword from '@ComponentFarm/molecule/SearchKeyword/SearchKeyword';
import { QueryParams } from '@HookFarm/useQueryParams';
import { selectConfigGeneration } from '@UtilFarm/convertEnvironment';
import { dateConfig, searchOption } from './const';

export type keywordType = {
  search_type?: string;
  search_keyword: string;
};

interface IListHandler {
  environment: IEnvironmentRes;
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

const ManageListHandler = ({
  environment,
  params,
  updateParams,
  resetParams,
}: IListHandler) => {
  const handlerKeyword = (keyword: keywordType) => {
    if (keyword.search_type) {
      updateParams({ ...keyword, page: 1 });
    } else {
      // search_type이 없을 경우, search_keyword만 사용
      updateParams({ search_keyword: keyword.search_keyword, page: 1 });
    }
  };

  const selectConfig = useMemo(
    () =>
      selectConfigGeneration(
        [
          ['제품 분류', 'product_category'],
          ['판매 분류', 'sale_type'],
          ['제품 상태', 'product_status'],
          [
            '레시피',
            'is_recipe_registration',
            [
              { label: '미사용', value: 0 },
              { label: '사용', value: 1 },
            ],
          ],
        ],
        environment.list
      ),
    [environment.list]
  );

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

export default ManageListHandler;
