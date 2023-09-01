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

export const searchOption = [
  {
    label: '원재료 코드',
    value: '0',
  },
  {
    label: '태그',
    value: '1',
  },
];

export const selectConfig = [
  { label: '대분류', field: 'search_status', options: searchStatus },
  {
    label: '중분류',
    field: 'search_coupon_type',
    options: searchCouponType,
  },
  {
    label: '소분류',
    field: 'search_notification_type',
    options: searchNotificationType,
  },
  {
    label: '구분',
    field: 'search_notification_type',
    options: searchNotificationType,
  },
  {
    label: '원재료 상태',
    field: 'search_notification_type',
    options: searchNotificationType,
  },
];

export const dateConfig = [
  {
    field: 'search_use_dt',
    placeholder: '등록일',
  },
  {
    field: 'search_end_dt',
    placeholder: '수정일',
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
