import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import CheckBoxGroup from '@ComponentFarm/modules/CheckBoxGroup/CheckBoxGroup';
import Editor from '@ComponentFarm/modules/Editor/Editor';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { FormWrap } from '@ComponentFarm/common';

type FormFields = {
  product_name: string; // TODO: replace with the actual value
  desc: string; // TODO: replace with the actual value
  option: string; // TODO: replace with the actual value
  chklist: string[]; // TODO: replace with the actual value
};

interface FormProps {
  initialData?: FormFields;
  loading?: boolean;
  onSubmit: (data: FormFields) => void;
}

const sampleData = [
  {
    label: 'Apple',
    value: '1',
  },
  {
    label: 'Pear',
    value: '2',
  },
  {
    label: 'Orange',
    value: '3',
  },
];

const productStyles = css`
  .line1,
  .line2,
  .line3 {
    .field1 {
      width: calc(50% - 25px);
    }
    .field2 {
      width: calc(50% - 25px);
    }
  }
  .line4 {
    .field1 {
      width: 100%;
    }
  }
`;

const Form: React.FC<FormProps> = ({ initialData, loading, onSubmit }) => {
  const isEdit = !!initialData;
  const defaultValues = isEdit
    ? initialData
    : {
        product_name: '', // TODO: replace with the actual value
        desc: '', // TODO: replace with the actual value
        option: '', // TODO: replace with the actual value
        chklist: [], // TODO: replace with the actual value
      };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues });
  const onFormSubmit = handleSubmit(data => {
    onSubmit(data);
  });

  return (
    <FormWrap onSubmit={onFormSubmit} css={productStyles}>
      <div className="line line1">
        <div className="field1">
          <label htmlFor="product_name" className="req">
            제품명
          </label>
          <input
            type="text"
            id="product_name"
            className="inp"
            placeholder="dd"
            {...register('product_name', { required: '필수 입력항목입니다.' })}
          />
          {errors.product_name && (
            <ErrorTxt>{errors.product_name.message}</ErrorTxt>
          )}
        </div>
        <div className="field2">
          <label htmlFor="desc" className="req">
            제품설명
          </label>
          <Controller
            name="desc"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Editor
                value={field.value}
                onChange={value => field.onChange(value)}
              />
            )}
          />
          {errors.desc && <ErrorTxt>{errors.desc.message}</ErrorTxt>}
        </div>

        <div className="field3">
          <label htmlFor="option" className="">
            제품옵션
          </label>
          <select id="option" {...register('option')}>
            {sampleData.map(el => (
              <option key={el.value} value={el.value}>
                {el.label}
              </option>
            ))}
          </select>
          {errors.option && <ErrorTxt>{errors.option.message}</ErrorTxt>}
        </div>
        <Controller
          name="chklist"
          control={control}
          defaultValue={[]}
          render={({ field: { value, ref, ...restField } }) => (
            <CheckBoxGroup
              {...restField}
              options={sampleData}
              allChechkHandler={sampleData}
              initialCheckedValues={value}
            />
          )}
        />
      </div>
      <button type="submit">등록</button>
    </FormWrap>
  );
};

export default Form;
