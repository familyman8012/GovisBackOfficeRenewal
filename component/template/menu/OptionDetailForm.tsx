import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { InnerTable } from '@ComponentFarm/common';
import { ProductSelect } from '@ComponentFarm/molecule/ProductSelect';
import type { FormFields } from './RegisterForm';
import { MenuOptionDetailStyle } from './style';

interface MenuOptionGroupProps {
  groupIndex: number;
  optionIndex: number;
}

const MenuOptionDetail = ({
  groupIndex,
  optionIndex,
}: MenuOptionGroupProps) => {
  const { register, control, setValue } = useFormContext<FormFields>();

  return (
    <MenuOptionDetailStyle>
      <div className="header">
        <input
          {...register(
            `menu_groups.${groupIndex}.menu_options.${optionIndex}.menu_option_name`,
            {
              required: true,
            }
          )}
          className="inp"
          placeholder="옵션 메뉴명을 입력해주세요"
        />
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
              <input
                type="hidden"
                {...register(
                  `menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_idx`,
                  {
                    required: true,
                  }
                )}
              />
              <div className="field4">
                <Controller
                  control={control}
                  name={`menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_name`}
                  render={({ field }) => (
                    <ProductSelect
                      value={field.value}
                      placeholder="제품 선택"
                      onSelect={item => {
                        setValue(field.name, item.name);
                        setValue(
                          `menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_idx`,
                          item.id
                        );
                      }}
                    />
                  )}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor={`menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_idx`}
                className="req"
              >
                내점 가격
              </label>
            </td>
            <td>
              <div className="field5">
                <div className="combined">
                  <div className="price">
                    <span>정상가</span>
                    <input className="inp" type="text" />
                    <span>원(KRW)</span>
                  </div>
                  <div className="price">
                    <span>정상가</span>
                    <input className="inp" type="text" />
                    <span>원(KRW)</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor={`menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_idx`}
                className="req"
              >
                포장 가격
              </label>
            </td>
            <td>
              <div className="field5">
                <div className="combined">
                  <div className="price">
                    <span>정상가</span>
                    <input className="inp" type="text" />
                    <span>원(KRW)</span>
                  </div>
                  <div className="price">
                    <span>정상가</span>
                    <input className="inp" type="text" />
                    <span>원(KRW)</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label
                htmlFor={`menu_groups.${groupIndex}.menu_options.${optionIndex}.product_info_idx`}
                className="req"
              >
                배달 가격
              </label>
            </td>
            <td>
              <div className="field5">
                <div className="combined">
                  <div className="price">
                    <span>정상가</span>
                    <input className="inp" type="text" />
                    <span>원(KRW)</span>
                  </div>
                  <div className="price">
                    <span>정상가</span>
                    <input className="inp" type="text" />
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
