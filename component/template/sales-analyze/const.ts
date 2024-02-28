// Tab
export const salesAnalyzeTabData = [
  {
    title: '전체',
    url: '/sales-analyze',
  },
  {
    title: '일별',
    url: '/sales-analyze/day',
  },
];

// Filter
export const storeStatusOption = [
  {
    label: '운영중',
    value: 'OPEN',
  },
  {
    label: '폐업',
    value: 'CLOSED',
  },
  {
    label: '운영예정',
    value: 'PLANNED',
  },
];

// Table Data
export const tableField = {
  types: [
    { label: '내점', field: 'visit' },
    { label: '포장', field: 'takeout' },
    { label: '배달', field: 'delivery' },
  ],
  channels: [
    { label: 'POS', field: 'pos' },
    { label: '키오스크', field: 'kiosk' },
    { label: '배달의 민족', field: 'baemin' },
    { label: '요기요', field: 'yogiyo' },
    { label: '쿠팡잇츠', field: 'coupang' },
    { label: '땡겨요', field: 'ddangyo' },
    { label: 'XGOPIZZA', field: 'xgo' },
  ],
};

// Filter select
export const salesTypeSelect = tableField.types
  .concat(tableField.channels)
  .map(({ field, ...rest }) => ({
    ...rest,
    value: field.toUpperCase(),
  }));
