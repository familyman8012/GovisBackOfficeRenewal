import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IMenuFormFields } from '@InterfaceFarm/menu';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { InnerTable } from '@ComponentFarm/common';
import { ProductSelect } from '@ComponentFarm/molecule/ProductSelect';
import { MenuOptionDetailStyle } from './style';

interface MenuOptionGroupProps {
  editable?: boolean;
  currentView: [number, number];
  groupIndex: number;
  optionIndex: number;
}

const MenuOptionDetail = ({
  editable,
  currentView,
  groupIndex,
  optionIndex,
}: MenuOptionGroupProps) => {
  const { register, control, setValue, formState } =
    useFormContext<IMenuFormFields>();

  const isShow =
    currentView[0] === groupIndex && currentView[1] === optionIndex;
  const errors =
    formState.errors.menu_groups?.[groupIndex]?.menu_options?.[optionIndex];

  return (
    <MenuOptionDetailStyle style={{ display: isShow ? '' : 'none' }}>
      <div className="header">
        <div className={`box_inp ${errors?.menu_option_name ? 'error' : ''}`}>
          <input
            {...register(
              `menu_groups.${groupIndex}.menu_options.${optionIndex}.menu_option_name`,
              {
                required: true,
                disabled: !editable,
              }
            )}
            className="inp"
            placeholder="옵션 메뉴명을 입력해주세요"
          />
          <ErrorTxt error={errors?.menu_option_name} />
        </div>
      </div>
      <InnerTable bordered>
        <colgroup>
          <col width={140} />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td>
              <label
                htmlFor={`menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_idx`}
                className="req"
              >
                제품
              </label>
            </td>
            <td>
              <div className="field4">
                <div
                  className={`box_inp ${
                    errors?.product_info_idx ? 'error' : ''
                  }`}
                >
                  <input
                    type="hidden"
                    {...register(
                      `menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_idx`,
                      {
                        required: true,
                        disabled: !editable,
                      }
                    )}
                  />
                  <Controller
                    name={`menu_groups.${groupIndex}.menu_options.${optionIndex}.product_name_ko`}
                    control={control}
                    render={({ field: { onChange, value, ref } }) => (
                      <ProductSelect
                        disabled={!editable}
                        value={value ?? ''}
                        onSelect={item => {
                          setValue(
                            `menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_idx`,
                            item.product_info_idx,
                            {
                              shouldValidate: true,
                            }
                          );
                          onChange(item.product_name_ko);
                        }}
                        placeholder="제품 선택"
                      />
                    )}
                  />
                  <ErrorTxt error={errors?.product_info_idx} />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor={`menu_groups.${groupIndex}.menu_options.${optionIndex}.visit_normal_price`}
                className="req"
              >
                내점 가격
              </label>
            </td>
            <td>
              <div className="field5">
                <div className="box_inp">
                  <div className="price">
                    <span>정상가</span>
                    <input
                      {...register(
                        `menu_groups.${groupIndex}.menu_options.${optionIndex}.visit_normal_price`,
                        {
                          required: true,
                          disabled: !editable,
                        }
                      )}
                      className="inp"
                      type="text"
                    />
                    <span>원(KRW)</span>
                  </div>
                  <div className="price">
                    <span>정상가</span>
                    <input
                      {...register(
                        `menu_groups.${groupIndex}.menu_options.${optionIndex}.visit_discount_price`,
                        {
                          required: true,
                          disabled: !editable,
                        }
                      )}
                      className="inp"
                      type="text"
                    />
                    <span>원(KRW)</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor={`menu_groups.${groupIndex}.menu_options.${optionIndex}.takeout_normal_price`}
                className="req"
              >
                포장 가격
              </label>
            </td>
            <td>
              <div className="field5">
                <div className="box_inp">
                  <div className="price">
                    <span>정상가</span>
                    <input
                      {...register(
                        `menu_groups.${groupIndex}.menu_options.${optionIndex}.takeout_normal_price`,
                        {
                          required: true,
                          disabled: !editable,
                        }
                      )}
                      className="inp"
                      type="text"
                    />
                    <span>원(KRW)</span>
                  </div>
                  <div className="price">
                    <span>정상가</span>
                    <input
                      {...register(
                        `menu_groups.${groupIndex}.menu_options.${optionIndex}.takeout_discount_price`,
                        {
                          required: true,
                          disabled: !editable,
                        }
                      )}
                      className="inp"
                      type="text"
                    />
                    <span>원(KRW)</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor={`menu_groups.${groupIndex}.menu_options.${optionIndex}.delivery_normal_price`}
                className="req"
              >
                배달 가격
              </label>
            </td>
            <td>
              <div className="field5">
                <div className="box_inp">
                  <div className="price">
                    <span>정상가</span>
                    <input
                      {...register(
                        `menu_groups.${groupIndex}.menu_options.${optionIndex}.delivery_normal_price`,
                        {
                          required: true,
                          disabled: !editable,
                        }
                      )}
                      className="inp"
                      type="text"
                    />
                    <span>원(KRW)</span>
                  </div>
                  <div className="price">
                    <span>정상가</span>
                    <input
                      {...register(
                        `menu_groups.${groupIndex}.menu_options.${optionIndex}.delivery_discount_price`,
                        {
                          required: true,
                          disabled: !editable,
                        }
                      )}
                      className="inp"
                      type="text"
                    />
                    <span>원(KRW)</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </InnerTable>
    </MenuOptionDetailStyle>
  );
};

export default MenuOptionDetail;
