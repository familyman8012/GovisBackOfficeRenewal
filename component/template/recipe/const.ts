export const searchOption = [
  {
    label: '제품코드',
    value: 'product_code',
  },
  {
    label: '제품명',
    value: 'product_name_ko',
  },
];

export const selectConfig = [
  {
    label: '제품그룹',
    field: 'evi_product_group',
    options: [
      {
        label: '전체',
        value: '',
      },
    ],
  },
  {
    label: '제품분류',
    field: 'evi_product_category',
    options: [
      {
        label: '전체',
        value: '',
      },
    ],
  },
  {
    label: '제품상태',
    field: 'evi_product_status',
    options: [
      {
        label: '전체',
        value: '',
      },
    ],
  },
  {
    label: '레시피 상태',
    field: 'is_recipe_registration',
    options: [
      {
        label: '전체',
        value: '',
      },
      {
        label: '등록',
        value: '1',
      },
      {
        label: '미등록',
        value: '0',
      },
    ],
  },
];

export const dateConfig = [
  {
    field: 'recipe_created_date',
    placeholder: '등록일',
  },
  {
    field: 'recipe_updated_date',
    placeholder: '수정일',
  },
];

export const recipeListTabInfo = [
  {
    title: '레시피 목록',
    link: '/product-recipes',
  },
];
