import React, { useMemo } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { IRecipeFormFields } from '@InterfaceFarm/product-recipe';
import Editor from '@ComponentFarm/modules/Editor/Editor';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import Ellipse from '@ComponentFarm/atom/icons/Ellipse';
import { InnerTable } from '@ComponentFarm/common';
import IngredientSelect from '@ComponentFarm/molecule/IngredientSelect';
import SelectFileButton from '@ComponentFarm/molecule/SelectFile/SelectFileButton';
import TimeSecondInput from '@ComponentFarm/molecule/TimeSecondInput/TimeSecondInput';
import useFormOptionsWithEnvs from '@HookFarm/useFormOptionsWithEnvs';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { RecipeStepWrap } from './style';
import { MenuOptionDetailStyle } from '../menu/style';

interface RecipeStepDetailProps {
  envs: IEnvironmentResItem[];
  editable?: boolean;
  stepIndex: number;
  currentView?: number;
  onChangeView: (view?: number) => void;
}

const RecipeStepDetail = ({
  envs,
  editable,
  currentView,
  stepIndex,
  onChangeView,
}: RecipeStepDetailProps) => {
  const { register, control, formState, watch } =
    useFormContext<IRecipeFormFields>();

  const options = useFormOptionsWithEnvs(
    [
      'recipe_status',
      'recipe_step_topping_type',
      'recipe_material_meterage_unit',
      'recipe_material_quantity_unit',
    ],
    envs
  );

  const formKey = `recipe_steps.${stepIndex}` as `recipe_steps.${number}`;
  const recipe_info_idx = watch('recipe_info_idx');
  // const stepFormData = watch(formKey);

  const { append, remove, fields } = useFieldArray<
    IRecipeFormFields,
    `recipe_steps.${number}.recipe_material_list`
  >({
    name: `${formKey}.recipe_material_list`,
  });

  const isShow = useMemo(
    () => currentView === stepIndex,
    [currentView, stepIndex]
  );

  const errors = useMemo(
    () => formState.errors.recipe_steps?.[stepIndex ?? -1],
    [formState, stepIndex]
  );

  return (
    <MenuOptionDetailStyle style={{ display: isShow ? '' : 'none' }}>
      <RecipeStepWrap>
        <section>
          <h3>기본 정보</h3>
          <InnerTable bordered fullWidth>
            <colgroup>
              <col width={getTableWidthPercentage(252, 1252)} />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th className="req">레시피 단계명</th>
                <td>
                  <div
                    className={`box_inp ${
                      errors?.recipe_step_name ? 'error' : ''
                    }`}
                  >
                    <input
                      type="text"
                      className="inp"
                      {...register(`${formKey}.recipe_step_name`, {
                        required: true,
                      })}
                    />
                    <ErrorTxt error={errors?.recipe_step_name} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>토핑 종류</th>
                <td>
                  <Controller
                    name={`${formKey}.evi_recipe_step_topping_type`}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <RadioGroup
                        defaultValue={value}
                        options={options.recipe_step_topping_type}
                        onChange={onChange}
                      />
                    )}
                  />
                </td>
              </tr>
              <tr>
                <th>토핑 완성 이미지</th>
                <td>
                  <div
                    className={`box_inp ${
                      errors?.topping_image ? 'error' : ''
                    }`}
                  >
                    <SelectFileButton
                      {...register(`${formKey}.initial_topping_image`, {
                        required: !!recipe_info_idx,
                      })}
                    />
                    <ErrorTxt error={errors?.topping_image} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="@TODO" className="req">
                    평균 제조 시간
                  </label>
                </th>
                <td>
                  <div
                    className={`box_inp ${
                      errors?.manufacturing_time ? 'error' : ''
                    }`}
                  >
                    <Controller
                      control={control}
                      name={`${formKey}.manufacturing_time`}
                      defaultValue={0}
                      rules={{
                        validate: val =>
                          !val ||
                          (typeof val === 'string' ? parseInt(val, 10) : val) >
                            0 ||
                          '총 제조 시간은 0보다 커야합니다.',
                      }}
                      render={({ field: { value, onChange } }) => (
                        <TimeSecondInput
                          value={value ?? ''}
                          onChange={onChange}
                        />
                      )}
                    />
                    <ErrorTxt error={errors?.manufacturing_time} />
                  </div>
                </td>
              </tr>
            </tbody>
          </InnerTable>
        </section>
        <section>
          <h3>원재료 정보</h3>
          <div className="ingredient-table-wrap">
            <div className="ingredient-buttons">
              <IngredientSelect
                onSelect={selectedItems => {
                  append(
                    selectedItems.map(item => ({
                      material_image: item.material_image,
                      material_name_ko: item.material_name_ko,
                      material_info_idx: item.material_info_idx,
                      evi_recipe_material_meterage_unit:
                        options.recipe_material_meterage_unit[0].value,
                      evi_recipe_material_quantity_unit:
                        options.recipe_material_quantity_unit[0].value,
                      evv_country: item.evv_country,
                      pcn_manufacturer: item.pcn_manufacturer,
                      recipe_material_meterage_value: 0,
                      recipe_material_quantity_value: 0,
                      recipe_material_note: '',
                    }))
                  );
                }}
              />
            </div>
            <InnerTable fullWidth>
              <colgroup>
                <col width={getTableWidthPercentage(48, 1181)} />
                <col width={getTableWidthPercentage(345, 1181)} />
                <col width={getTableWidthPercentage(288, 1181)} />
                <col width={getTableWidthPercentage(228, 1181)} />
                <col width={getTableWidthPercentage(279, 1181)} />
              </colgroup>
              <thead>
                <tr>
                  <td>&nbsp;</td>
                  <td>원재료명</td>
                  <td>투입량</td>
                  <td>계량 정보</td>
                  <td>비고</td>
                </tr>
              </thead>
              <tbody>
                {fields.length === 0 && (
                  <tr>
                    <td colSpan={5}>
                      <Empty>원재료를 선택해주세요.</Empty>
                    </td>
                  </tr>
                )}
                {fields.map((field, i) => (
                  <tr key={field.id}>
                    <td>
                      <Ellipse
                        className="ingredient-remove"
                        onClick={() => remove(i)}
                      />
                    </td>
                    <td>
                      <div className="ingredient-info">
                        {field.material_image && (
                          <div className="img">
                            <img
                              src={field.material_image}
                              alt={field.material_name_ko}
                            />
                          </div>
                        )}

                        <div className="info">
                          {field.material_name_ko}
                          <br />
                          <span>
                            {field.pcn_manufacturer} | {field.evv_country}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="box_inp">
                        <select
                          {...register(
                            `${formKey}.recipe_material_list.${i}.evi_recipe_material_quantity_unit`
                          )}
                        >
                          {options.recipe_material_quantity_unit.map(item => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                        <input
                          {...register(
                            `${formKey}.recipe_material_list.${i}.recipe_material_quantity_value`
                          )}
                          className="inp"
                          placeholder="수량"
                        />
                      </div>
                      <ErrorTxt />
                    </td>
                    <td>
                      <div className="box_inp">
                        <select
                          {...register(
                            `${formKey}.recipe_material_list.${i}.evi_recipe_material_meterage_unit`
                          )}
                        >
                          {options.recipe_material_meterage_unit.map(item => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                        <input
                          {...register(
                            `${formKey}.recipe_material_list.${i}.recipe_material_meterage_value`
                          )}
                          className="inp"
                          placeholder="수량"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="box_inp">
                        <input
                          {...register(
                            `${formKey}.recipe_material_list.${i}.recipe_material_note`
                          )}
                          className="inp"
                          placeholder="비고"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </InnerTable>
          </div>
        </section>
        <section>
          <h3>레시피 설명</h3>
          <Controller
            name={`${formKey}.recipe_material_note`}
            render={({ field: { onChange, value } }) => (
              <Editor value={value} onChange={onChange} />
            )}
          />
        </section>
      </RecipeStepWrap>
    </MenuOptionDetailStyle>
  );
};

export default RecipeStepDetail;
