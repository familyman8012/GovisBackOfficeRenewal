export const categoryDateConfig = [
  {
    field: 'created_date',
    placeholder: '등록일',
  },
  {
    field: 'updated_date',
    placeholder: '수정일',
  },
];

export const menuSelectConfig = [
  {
    label: '분류 그룹',
    field: 'category',
    options: [
      { value: '', label: '전체' },
      { value: '1', label: '1' },
      { value: '2', label: '2' },
    ],
  },
  { label: '메뉴 분류 상태', field: 'search_status', options: [] },
];
