import React, { useEffect, useMemo } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { EnvRow } from '@ApiFarm/environment';
import { fetchMenu, fetchMenuCategories } from '@ApiFarm/menu';
import { IMenuFormFields } from '@InterfaceFarm/menu';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { FormWrap } from '@ComponentFarm/common';
import { ProductSelect } from '@ComponentFarm/molecule/ProductSelect';
import useFormOptionsWithEnvs from '@HookFarm/useFormOptionsWithEnvs';
import { MenuOptionForm } from './OptionForm';
import { FormStyle } from './style';

interface MenuUpdateFormProps {
  id: number;
  editable?: boolean;
  envs: EnvRow[];
  onSubmit: (formData: IMenuFormFields) => void;
}

export const MenuUpdateForm = React.forwardRef<
  HTMLFormElement,
  MenuUpdateFormProps
>(({ id, envs, editable, onSubmit }, formRef) => {
  const optionFormRef = React.useRef<HTMLDivElement>(null);
  const options = useFormOptionsWithEnvs<
    'menu_group' | 'menu_type' | 'menu_status' | 'menu_category_status'
  >(['menu_group', 'menu_type', 'menu_status', 'menu_category_status'], envs);

  const methods = useForm<IMenuFormFields>({
    defaultValues: async () => {
      const data = await fetchMenu(id);

      return {
        ...data,
        is_menu_option: data.menu_option_category_list.length ? '1' : '0',
        option_view: undefined,
        menu_categories: data.menu_categories ?? [],
      };
    },
  });

  const useCategoryValue = useMemo(
    () =>
      options.menu_category_status.find(({ code }) => code === 'mcs_use')
        ?.value,
    [options.menu_category_status]
  );

  const categoryQuery = useQuery(['menu-categories'], () =>
    fetchMenuCategories({
      per_num: 9999,
      current_num: 1,
      evi_menu_category_status: useCategoryValue
        ? Number(useCategoryValue)
        : undefined,
    })
  );

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  const useOption = watch('is_menu_option') === '1';
  const isSetMenu =
    options.menu_type.find(type => type.value === watch('evi_menu_type'))
      ?.code === 'mt_set';

  useEffect(() => {
    if (isSetMenu) {
      setValue('product_info_idx', undefined);
      setValue('product_name_ko', undefined);
    }
  }, [isSetMenu]);

  return (
    <FormProvider {...methods}>
      <form
        ref={formRef}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit, error => {
          if (Object.keys(error).length === 1 && error.menu_categories) {
            optionFormRef?.current?.scrollIntoView();
            toast.error('옵션 정보를 확인해주세요.');
          }
        })}
      >
        <FormWrap css={FormStyle}>
          <h2>메뉴 기본 정보</h2>
          <div className="line1">
            <div className="field1">
              <label htmlFor="name" className="req">
                메뉴명
              </label>
              <div
                className={`box_inp combined ${
                  errors.evi_menu_group || errors.menu_name ? 'error' : ''
                }`}
              >
                <select
                  className="error"
                  disabled={!editable}
                  {...register('evi_menu_group', {
                    required: true,
                  })}
                >
                  <option value="">메뉴 분류를 선택해주세요.</option>
                  {options.menu_group.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <input
                  {...register('menu_name', {
                    required: true,
                  })}
                  disabled={!editable}
                  className="inp"
                  type="text"
                  placeholder="메뉴명 입력"
                />
                <ErrorTxt error={errors.evi_menu_group || errors.menu_name} />
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
                    defaultValue={`${value}`}
                    disabled={!editable}
                    onChange={onChange}
                    {...restField}
                    options={options.menu_type}
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
              <div
                className={`box_inp ${errors.menu_category_idx ? 'error' : ''}`}
              >
                <select
                  {...register('menu_category_idx', {
                    required: true,
                  })}
                  disabled={!editable}
                >
                  <option value="">카테고리를 선택해주세요.</option>
                  {categoryQuery.data?.list.map(
                    ({ menu_category_idx, menu_category_name }) => (
                      <option key={menu_category_idx} value={menu_category_idx}>
                        {menu_category_name}
                      </option>
                    )
                  )}
                </select>
                <ErrorTxt error={errors.menu_category_idx} />
              </div>
            </div>
          </div>
          <div className="line4">
            <div className="field4">
              <label htmlFor="3" className="req">
                제품
              </label>
              <div
                className={`box_inp ${errors.product_info_idx ? 'error' : ''}`}
              >
                <input
                  type="hidden"
                  {...register('product_info_idx', {
                    required: !isSetMenu,
                  })}
                />
                <Controller
                  name="product_name_ko"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <ProductSelect
                      value={value ?? ''}
                      disabled={!editable || isSetMenu}
                      onSelect={item => {
                        setValue('product_info_idx', item.product_info_idx, {
                          shouldValidate: true,
                        });
                        onChange(item.product_name_ko);
                      }}
                      placeholder="제품 선택"
                    />
                  )}
                />

                <ErrorTxt error={errors.product_info_idx} />
              </div>
            </div>
          </div>
          <div className="line5">
            <div className="field5">
              <label htmlFor="3" className="req">
                내점 가격
              </label>
              <div
                className={`box_inp ${
                  errors.visit_normal_price || errors.visit_discount_price
                    ? 'error'
                    : ''
                }`}
              >
                <div className="price">
                  <span>정상가</span>
                  <input
                    {...register('visit_normal_price', {
                      required: true,
                    })}
                    disabled={!editable}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <div className="price">
                  <span>할인가</span>
                  <input
                    {...register('visit_discount_price', {
                      required: true,
                    })}
                    disabled={!editable}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <ErrorTxt
                  error={
                    errors.visit_normal_price || errors.visit_discount_price
                  }
                />
              </div>
            </div>
          </div>
          <div className="line6">
            <div className="field6">
              <label htmlFor="3" className="req">
                포장 가격
              </label>
              <div
                className={`box_inp ${
                  errors.takeout_normal_price || errors.takeout_normal_price
                    ? 'error'
                    : ''
                }`}
              >
                <div className="price">
                  <span>정상가</span>
                  <input
                    {...register('takeout_normal_price', {
                      required: true,
                    })}
                    disabled={!editable}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <div className="price">
                  <span>할인가</span>
                  <input
                    {...register('takeout_discount_price', {
                      required: true,
                    })}
                    disabled={!editable}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <ErrorTxt
                  error={
                    errors.takeout_normal_price || errors.takeout_discount_price
                  }
                />
              </div>
            </div>
          </div>
          <div className="line7">
            <div className="field7">
              <label htmlFor="7" className="req">
                배달 가격
              </label>
              <div
                className={`box_inp ${
                  errors.delivery_normal_price || errors.delivery_discount_price
                    ? 'error'
                    : ''
                }`}
              >
                <div className="price">
                  <span>정상가</span>
                  <input
                    {...register('delivery_normal_price', {
                      required: true,
                    })}
                    disabled={!editable}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <div className="price">
                  <span>할인가</span>
                  <input
                    {...register('delivery_discount_price', {
                      required: true,
                    })}
                    disabled={!editable}
                    className="inp"
                    type="text"
                  />
                  <span>원(KRW)</span>
                </div>
                <ErrorTxt
                  error={
                    errors.delivery_normal_price ||
                    errors.delivery_discount_price
                  }
                />
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
                    defaultValue={`${value}`}
                    onChange={onChange}
                    disabled={!editable}
                    {...restField}
                    options={options.menu_status}
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
                name="is_menu_option"
                control={control}
                render={({ field: { onChange, value, ref, ...restField } }) => (
                  <RadioGroup
                    disabled={!editable}
                    defaultValue={`${value}`}
                    onChange={onChange}
                    {...restField}
                    options={[
                      {
                        label: '사용',
                        value: '1',
                      },
                      {
                        label: '사용안함',
                        value: '0',
                      },
                    ]}
                  />
                )}
              />
            </div>
          </div>
          {useOption && (
            <MenuOptionForm editable={editable} ref={optionFormRef} />
          )}
        </FormWrap>
      </form>
    </FormProvider>
  );
});

MenuUpdateForm.displayName = 'MenuUpdateForm';
