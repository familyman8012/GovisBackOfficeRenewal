import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { IRecipeFormFields } from '@InterfaceFarm/product-recipe';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { FormWrap } from '@ComponentFarm/common';
import SelectFile from '@ComponentFarm/molecule/SelectFile/SelectFile';
import TimeSecondInput from '@ComponentFarm/molecule/TimeSecondInput/TimeSecondInput';
import RecipeStepForm from './RecipeStepForm';
import { RecipeFormStyle } from './style';

interface RecipeFormProps {
  id?: number; // 레시피 아이디
  editable?: boolean;
  envs: IEnvironmentResItem[];
  onSubmit: (formData: IRecipeFormFields) => void;
}

const RecipeForm = React.forwardRef<HTMLFormElement, RecipeFormProps>(
  ({ id, envs, editable = true, onSubmit }, formRef) => {
    const methods = useForm<IRecipeFormFields>({
      defaultValues: {
        recipe_name: '',
        recipe_image: '',
        manufacturing_time: '',
        recipe_steps: [],
      },
    });

    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = methods;

    return (
      <FormProvider {...methods}>
        <form
          ref={formRef}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormWrap css={RecipeFormStyle}>
            <h3>레시피 기본 정보</h3>
            <div className="line line1">
              <div className="field1">
                <label htmlFor="reipce_name" className="req">
                  레시피명
                </label>
                <div className={`box_inp ${errors.recipe_name ? 'error' : ''}`}>
                  <input
                    id="reipce_name"
                    type="text"
                    className="inp"
                    {...register('recipe_name', {
                      required: true,
                    })}
                  />
                  <ErrorTxt error={errors.recipe_name} />
                </div>
              </div>
            </div>
            <div className="line line2">
              <div className="field2">
                <label htmlFor="reipce_image" className="req">
                  레시피 완성 이미지
                </label>
                <div
                  className={`box_inp ${errors.recipe_image ? 'error' : ''}`}
                >
                  <SelectFile
                    {...register('initial_recipe_image', {
                      required: !!id,
                    })}
                  />
                  <ErrorTxt error={errors.initial_recipe_image} />
                </div>
              </div>
              <div className="group">
                <div className="field3">
                  <label htmlFor="recipe_code" className="req">
                    레시피 코드
                  </label>
                  <div className="box_inp">
                    <input
                      id="recipe_code"
                      className="inp"
                      disabled
                      placeholder="자동생성"
                    />
                  </div>
                </div>
                <div className="field4">
                  <label htmlFor="time-min" className="req">
                    총 제조 시간
                  </label>
                  <div
                    className={`box_inp ${
                      errors.manufacturing_time ? 'error' : ''
                    }`}
                  >
                    <Controller
                      name="manufacturing_time"
                      defaultValue={0}
                      rules={{
                        validate: val =>
                          !val ||
                          (typeof val === 'string' ? parseInt(val, 10) : val) >
                            0 ||
                          '총 제조 시간은 0보다 커야합니다.',
                      }}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TimeSecondInput
                          value={value ?? ''}
                          onChange={onChange}
                        />
                      )}
                    />
                    <ErrorTxt error={errors.manufacturing_time} />
                  </div>
                </div>
              </div>
            </div>
            <RecipeStepForm envs={envs} editable={editable} />
          </FormWrap>
        </form>
      </FormProvider>
    );
  }
);

RecipeForm.displayName = 'RecipeForm';

export default RecipeForm;
