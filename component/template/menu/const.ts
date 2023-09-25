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
    label: '메뉴 그룹',
    field: 'evi_menu_group',
    options: [{ value: '', label: '전체' }],
  },
  {
    label: '메뉴 상태',
    field: 'evi_menu_status',
    options: [{ value: '', label: '전체' }],
  },
  {
    label: '메뉴 종류',
    field: 'evi_menu_type',
    options: [{ value: '', label: '전체' }],
  },
  {
    label: '메뉴 구분',
    field: 'evi_menu_classification',
    options: [{ value: '', label: '전체' }],
  },
  {
    label: '카테고리',
    field: 'menu_category_idx',
    options: [{ value: '', label: '전체' }],
  },
];

export const menuListLayoutConfig = {
  id: 'menuListLayout',
  title: '메뉴 관리',
  tabs: [
    {
      title: '카테고리 목록',
      path: '/menu/categories',
    },
    {
      title: '메뉴 목록',
      path: '/menu',
    },
  ],
};

export const menuDetailLayoutConfig = {
  id: 'menuDetailLayout',
  title: '메뉴 관리',
  tabs: [
    {
      title: '메뉴 상세 정보',
      path: '/menu/[menu_info_idx]',
    },
    {
      title: '변경 내역',
      path: '/menu/[menu_info_idx]/history',
    },
  ],
};
