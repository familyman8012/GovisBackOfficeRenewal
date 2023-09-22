import { tabGetQueryId } from '@UtilFarm/tabGetQueryId';

export type environmentConfigEntry =
  | [string, string]
  | [string, string, { label: string; value: string }[]];

export const selectConfigSet: environmentConfigEntry[] = [
  ['제품 분류', 'product_category'],
  ['판매 분류', 'sale_type'],
  ['제품 상태', 'product_status'],
  [
    '레시피',
    'is_recipe_registration',
    [
      { label: '미사용', value: '0' },
      { label: '사용', value: '1' },
    ],
  ],
];

export const dateConfig = [
  {
    field: 'sale_start_date',
    placeholder: '판매 시작일',
  },
  {
    field: 'sale_end_date',
    placeholder: '판매 종료일',
    minDate: 'sale_start_date',
  },
  {
    field: 'created_date',
    placeholder: '등록일',
  },
  {
    field: 'updated_date',
    placeholder: '수정일',
    minDate: 'created_date',
  },
];

export const detailConfigSet: environmentConfigEntry[] = [
  ['제품 상태', 'product_status'],
  ['제품 그룹', 'product_group'],
  ['제품 분류', 'product_category'],
  ['판매 분류', 'product_category'],
];

export const searchOption = [
  {
    label: '제품 코드',
    value: 'product_code',
  },
  {
    label: '제품명',
    value: 'product_name_ko',
  },
];

export type PageModeSettings = {
  title: string;
  firstButtonText: string;
  secondButtonText: string;
};

export const settingsByMode: Record<string, PageModeSettings> = {
  add: {
    title: '제품 등록',
    firstButtonText: '취소',
    secondButtonText: '등록',
  },
  modify: {
    title: '제품 상세 정보 수정',
    firstButtonText: '취소',
    secondButtonText: '저장',
  },
  view: {
    title: '제품 상세 정보',
    firstButtonText: '이전',
    secondButtonText: '수정',
  },
};

export const searchStatus = [
  {
    value: '',
    label: '전체',
  },
  {
    value: '0',
    label: '시행 전',
  },
  {
    value: '1',
    label: '시행 중',
  },
  {
    value: '2',
    label: '만료',
  },
];

export interface Tab {
  title: string;
  url: string;
  query?: { id?: string | string[] };
}

export const tabDataFunc = (pageMode: string, query?: any) => {
  const getIdFromQuery = tabGetQueryId(query);
  const baseUrl = '/product';

  return pageMode === 'add'
    ? [
        {
          title: '제품등록',
          url: `${baseUrl}/add`,
        },
      ]
    : pageMode === 'modify'
    ? [
        {
          title: '제품수정',
          url: `${baseUrl}/modify`,
        },
      ]
    : [
        {
          title: '제품상세',
          url: `${baseUrl}/view/${getIdFromQuery}`,
        },
        {
          title: '채널별 이미지 정보',
          url: `${baseUrl}/channelimg`,
          query: { id: getIdFromQuery },
        },
        {
          title: '레시피 정보',
          url: `${baseUrl}/recipeinfo`,
          query: { id: getIdFromQuery },
        },
        {
          title: '원재료 정보',
          url: `${baseUrl}/materialinfo`,
          query: { id: getIdFromQuery },
        },
        {
          title: '변경내역',
          url: `${baseUrl}/history/${getIdFromQuery}`,
        },
      ];
};
