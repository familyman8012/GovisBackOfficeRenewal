import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { FormWrap } from '@ComponentFarm/common';
import { ProductSelect } from '@ComponentFarm/molecule/ProductSelect';
import { MenuOptionForm } from './OptionForm';

export type FormFields = {
  evi_menu_group: number;
  menu_name: string;
  evi_menu_type: number | string;
  menu_category_idx: number;
  product_info_idx: number;
  visit_normal_price: number;
  visit_discount_price: number;
  takeout_normal_price: number;
  takeout_discount_price: number;
  delivery_normal_price: number;
  delivery_discount_price: number;
  evi_menu_status: number | string;
  menu_groups: {
    menu_option_category_name: string;
    menu_options: {
      menu_option_name?: string;
      product_info_idx?: number;
      product_info_name?: string;
      visit_normal_price: number;
      visit_discount_price: number;
      takeout_normal_price: number;
      takeout_discount_price: number;
      delivery_normal_price: number;
      delivery_discount_price: number;
    }[];
  }[];
};

const MENU_GROUPS = [
  {
    label: '직영 (D)',
    value: 1,
  },
  {
    label: '가맹 (F)',
    value: 2,
  },
  {
    label: 'XGOPIZZA (X)',
    value: 3,
  },
];

const MENU_TYPE = [
  {
    label: '세트',
    value: '1',
  },
  {
    label: '단품',
    value: '2',
  },
];

const FormStyles = css`
  h2 {
    border: 0;
    &:nth-of-type(2) {
      border-bottom: 1px solid var(--color-neutral90);
    }
  }

  .field1 {
    display: inline-flex;
    gap: 0.8rem;
    width: 52rem;

    select {
      width: 21%;
      min-width: 15rem;
    }

    input {
      width: 100%;
      flex: 1;
      margin-left: 0.8rem;
    }

    .combined {
      flex: none;
      display: inline-flex;
      width: 52rem;
    }
  }

  .field3 select {
    width: 32.6rem;
  }

  .field4 input {
    width: 32.6rem;
  }

  [class^='line'] {
    margin-bottom: 3.2rem;
  }

  [class^='field'] {
    display: inline-flex;
    gap: 0.8rem;
  }

  .combined {
    flex: none;
    display: inline-flex;
  }

  .price {
    input {
      margin: 0 0.8rem;
      width: 13.5rem;
    }

    span {
      font-weight: normal;
      color: var(--color-neutral10);
    }

    & + .price {
      margin-left: 10rem;
    }
  }
`;

export const MenuRegisterForm = React.forwardRef<HTMLFormElement, {}>(
  ({}, ref) => {
    const methods = useForm<FormFields>({
      defaultValues: {
        evi_menu_group: 1,
      },
    });
    const { register, control } = methods;

    return (
      <FormProvider {...methods}>
        <FormWrap css={FormStyles} ref={ref}>
          <h2>메뉴 기본 정보</h2>
          <div className="line1">
            <div className="field1">
              <label htmlFor="name" className="req">
                메뉴명
              </label>
              <div className="combined">
                <select {...register('evi_menu_group')}>
                  <option value="">메뉴 분류를 선택해주세요.</option>
                  {MENU_GROUPS.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <input className="inp" type="text" placeholder="메뉴명 입력" />
              </div>
            </div>
          </div>
          <h2>메뉴 상세 정보</h2>
          <div className="line2">
            <div className="field2">
              <label htmlFor="1" className="req">
                메뉴 종류
              </label>
              <Controller
                name="evi_menu_type"
                control={control}
                render={({ field: { onChange, value, ref, ...restField } }) => (
                  <RadioGroup
                    defaultValue="1"
                    onChange={onChange}
                    {...restField}
                    options={MENU_TYPE}
                  />
                )}
              />
            </div>
          </div>
          <div className="line3">
            <div className="field3">
              <label htmlFor="2" className="req">
                카테고리
              </label>
              <select>
                <option value="">카테고리를 선택해주세요.</option>
              </select>
            </div>
          </div>
          <div className="line4">
            <div className="field4">
              <label htmlFor="3" className="req">
                제품
              </label>
              <ProductSelect placeholder="제품 선택" />
            </div>
          </div>
          <div className="line5">
            <div className="field5">
              <label htmlFor="3" className="req">
                내점 가격
              </label>
              <div className="combined">
                <div className="price">
                  <span>정상가</span>
                  <input
                    {...register('visit_normal_price')}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <div className="price">
                  <span>정상가</span>
                  <input
                    {...register('visit_discount_price')}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="line6">
            <div className="field6">
              <label htmlFor="3" className="req">
                포장 가격
              </label>
              <div className="combined">
                <div className="price">
                  <span>정상가</span>
                  <input
                    {...register('takeout_normal_price')}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <div className="price">
                  <span>할인가</span>
                  <input
                    {...register('takeout_discount_price')}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="line7">
            <div className="field7">
              <label htmlFor="3" className="req">
                배달 가격
              </label>
              <div className="combined">
                <div className="price">
                  <span>정상가</span>
                  <input
                    {...register('delivery_normal_price')}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <div className="price">
                  <span>할인가</span>
                  <input
                    {...register('delivery_discount_price')}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="line8">
            <div className="field8">
              <label htmlFor="1" className="req">
                메뉴 상태
              </label>
              <Controller
                name="evi_menu_status"
                control={control}
                render={({ field: { onChange, value, ref, ...restField } }) => (
                  <RadioGroup
                    defaultValue="1"
                    onChange={onChange}
                    {...restField}
                    options={[
                      {
                        label: '사용',
                        value: '1',
                      },
                      {
                        label: '사용안함',
                        value: '2',
                      },
                    ]}
                  />
                )}
              />
            </div>
          </div>
          <div className="line9">
            <div className="field9">
              <label htmlFor="1" className="req">
                옵션 여부
              </label>
              <Controller
                name="evi_menu_type"
                control={control}
                render={({ field: { onChange, value, ref, ...restField } }) => (
                  <RadioGroup
                    defaultValue="1"
                    onChange={onChange}
                    {...restField}
                    options={[
                      {
                        label: '사용',
                        value: '1',
                      },
                      {
                        label: '사용안함',
                        value: '2',
                      },
                    ]}
                  />
                )}
              />
            </div>
          </div>
          {JSON.stringify(methods.watch(), null, 2)}
          <MenuOptionForm />
        </FormWrap>
      </FormProvider>
    );
  }
);

MenuRegisterForm.displayName = 'MenuRegisterForm';
