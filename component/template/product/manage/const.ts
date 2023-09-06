type SelectConfigEntry =
  | [string, string]
  | [string, string, { label: string | number; value: string | number }[]];

export const selectConfigSet: SelectConfigEntry[] = [
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

export const searchCouponType = [
  {
    value: '',
    label: '전체',
  },
  {
    value: '0',
    label: '상품',
  },
  {
    value: '1',
    label: '할인율',
  },
  {
    value: '2',
    label: '할인액',
  },
];

export const searchNotificationType = [
  {
    value: '',
    label: '전체',
  },
  {
    value: '0',
    label: '일반',
  },
  {
    value: '1',
    label: '알림톡',
  },
];

export const storeInfoSelectCofing = [
  { label: '지역', field: 'search_status', options: searchStatus },
  {
    label: '매장 구분',
    field: 'search_coupon_type',
    options: searchCouponType,
  },
  {
    label: '매장 상태',
    field: 'search_notification_type',
    options: searchNotificationType,
  },
];
