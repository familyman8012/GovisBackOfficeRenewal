import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import CheckBoxGroup from '@ComponentFarm/modules/CheckBoxGroup/CheckBoxGroup';
import Editor from '@ComponentFarm/modules/Editor/Editor';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { FormWrap } from '@ComponentFarm/common';

type FormFields = {
  product_name: string; // TODO: replace with the actual value
  desc: string; // TODO: replace with the actual value
  chkmulti: string | string[]; // TODO: replace with the actual value
};

interface FormProps {
  initialData?: FormFields;
  loading?: boolean;
  onSubmit: (data: FormFields) => void;
}

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
        chkmulti: [], // TODO: replace with the actual value
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

  const optionData = [
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
            placeholder="제품명을 입력하세요"
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
      </div>
      <div className="line line2">
        <Controller
          name="chkmulti"
          control={control}
          defaultValue={['Apple', 'Pear']}
          render={({ field: { onChange, value, ref, ...restField } }) => (
            <CheckBoxGroup
              {...restField}
              onChange={v => onChange(v.join(', '))}
              options={optionData}
              allChechkHandler={optionData}
            />
          )}
        />
      </div>
      <button type="submit">등록</button>
    </FormWrap>
  );
};

export default Form;
