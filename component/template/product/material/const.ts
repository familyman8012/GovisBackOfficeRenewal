type PageModeSettings = {
  title: string;
  firstButtonText: string;
  secondButtonText: string;
};

export const settingsByMode: Record<string, PageModeSettings> = {
  add: {
    title: '원재료 등록',
    firstButtonText: '취소',
    secondButtonText: '등록',
  },
  modify: {
    title: '원재료 상세 정보 수정',
    firstButtonText: '취소',
    secondButtonText: '저장',
  },
  view: {
    title: '원재료 상세 정보',
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
    value: 'material_code',
  },
  {
    label: '원재료 명',
    value: 'material_name_ko',
  },
];

export const dateConfig = [
  {
    field: 'created_date',
    placeholder: '등록일',
  },
  {
    field: 'updated_date',
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