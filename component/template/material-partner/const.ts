export const selectConfig = (category: string) => [
  {
    label: `${category} 상태`,
    field: 'partner_company_status',
    options: [
      {
        label: '전체',
        value: '',
      },
      {
        label: '운영',
        value: 'pcs_operation',
      },
      {
        label: '중단',
        value: 'pcs_discontinuation',
      },
    ],
  },
];

export const searchOption = (category: string) => [
  {
    label: `${category} 코드`,
    value: 'partner_company_code',
  },
  {
    label: `${category}명`,
    value: 'partner_company_name',
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

type PageModeSettings = {
  title: string;
  firstButtonText: string;
  secondButtonText: string;
};

type SettingsByModeFunction = (
  partnerLabel: string
) => Record<string, PageModeSettings>;

export const settingsByMode: SettingsByModeFunction = (
  partnerLabel: string
) => {
  return {
    add: {
      title: `${partnerLabel} 등록`,
      firstButtonText: '취소',
      secondButtonText: '등록',
    },
    modify: {
      title: `${partnerLabel} 상세 정보 수정`,
      firstButtonText: '취소',
      secondButtonText: '저장',
    },
    view: {
      title: `${partnerLabel} 상세 정보`,
      firstButtonText: '이전',
      secondButtonText: '수정',
    },
  };
};

export const test = (testStr: string) => {
  return {
    a: '10',
  };
};
