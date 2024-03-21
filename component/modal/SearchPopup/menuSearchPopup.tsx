import React from 'react';
import {
  IMenuSearchModalRes,
  ISearcPopupProps,
} from '@InterfaceFarm/search-modal';
import { envConfigGeneration } from '@UtilFarm/convertEnvironment';
import SearchPopup, { ICommonResultData } from './SearchPopup';

interface IMenuResultData extends ICommonResultData {
  code: string;
  group: string;
  type: string;
  classification: string;
  category: string;
  label: string;
  status: string;
}

const MenuSearchPopup = ({
  setConfig,
  data,
}: {
  setConfig: ISearcPopupProps;
  data?: IMenuSearchModalRes;
}) => {
  const {
    isOpen,
    setIsOpen,
    selectItems,
    setSelectItems,
    initialValues,
    filters,
    setFilters,
  } = setConfig;

  // 검색 필터
  const selectConfig = envConfigGeneration([
    ['메뉴 그룹', 'menu_group'],
    ['메뉴 종류', 'menu_type'],
    ['메뉴 구분', 'menu_classification'],
    ['메뉴 상태', 'menu_status'],
  ]);

  // 테이블 셋팅
  const tableCofig = {
    th: [
      '메뉴 코드',
      '메뉴 그룹',
      '메뉴 종류',
      '메뉴 구분',
      '메뉴 카테고리',
      '메뉴명',
      '메뉴 상태',
    ],
    col: [46, 100, 100, 100, 100, 150, 200, 150],
  };

  // 검색 테이블에 맞추어 정리.
  const resultData =
    data?.list?.map(el => {
      return {
        idx: el.menu_info_idx,
        code: el.menu_code,
        group: el.evv_menu_group,
        type: el.evv_menu_type,
        classification: el.evv_menu_classification,
        category: el.menu_category_name,
        label: el.menu_name,
        status: el.evv_menu_status,
      };
    }) || [];

  return (
    <SearchPopup<IMenuResultData>
      title="메뉴 상세 설정"
      className="menuPopup"
      searchBoxPlaceHolder="메뉴명을 입력해주세요"
      keyWordSearchTitle="메뉴명"
      width={946}
      selectConfig={selectConfig}
      tableCofig={tableCofig}
      resultData={resultData}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      filters={filters}
      setFilters={setFilters}
      initialValues={initialValues}
      selectItems={selectItems}
      setSelectItems={setSelectItems}
      badge={['운영', '중단', '폐기']}
    />
  );
};

export default MenuSearchPopup;
