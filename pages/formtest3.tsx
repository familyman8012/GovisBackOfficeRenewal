import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import DatePicker, {
  NewDate,
} from '@ComponentFarm/modules/DatePicker/DatePicker';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { FormWrap } from '@ComponentFarm/common';

type FormFields = {
  status: string; // TODO: replace with the actual value
  group: string; // TODO: replace with the actual value
  cat: string; // TODO: replace with the actual value
  name_ko: string; // TODO: replace with the actual value
  name_en: string; // TODO: replace with the actual value
  desc: string; // TODO: replace with the actual value
  start_date: string; // TODO: replace with the actual value
};

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

const Form = ({ isEdit = false, initialData = {} }) => {
  const defaultValues = isEdit
    ? initialData
    : {
        status: '', // TODO: replace with the actual value
        group: '', // TODO: replace with the actual value
        cat: '', // TODO: replace with the actual value
        name_ko: '', // TODO: replace with the actual value
        name_en: '', // TODO: replace with the actual value
        desc: '', // TODO: replace with the actual value
        start_date: '', // TODO: replace with the actual value
      };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues });
  const onSubmit = (data: FormFields) => console.log(data);

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)} css={productStyles}>
      <div className="line line1">
        <div className="field1">
          <label htmlFor="status" className="req">
            제품 상태
          </label>
          <select
            id="status"
            {...register('status', { required: '필수 입력항목입니다.' })}
          >
            {/*   {data.status.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
          </select>
          {errors.status && <ErrorTxt>{errors.status.message}</ErrorTxt>}
        </div>{' '}
      </div>
      <div className="line line2">
        <div className="field1">
          <label htmlFor="group" className="req">
            제품 그룹
          </label>
          <select
            id="group"
            {...register('group', { required: '필수 입력항목입니다.' })}
          >
            {/*   {data.group.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
          </select>
          {errors.group && <ErrorTxt>{errors.group.message}</ErrorTxt>}
        </div>
        <div className="field2">
          <label htmlFor="cat" className="req">
            제품 분류
          </label>
          <select
            id="cat"
            {...register('cat', { required: '필수 입력항목입니다.' })}
          >
            {/*   {data.cat.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
          </select>
          {errors.cat && <ErrorTxt>{errors.cat.message}</ErrorTxt>}
        </div>{' '}
      </div>
      <div className="line line3">
        <div className="field1">
          <label htmlFor="name_ko" className="req">
            제품명 (한글)
          </label>
          <input
            type="text"
            id="name_ko"
            className="inp"
            placeholder="한글 입력만 가능"
            {...register('name_ko', { required: '필수 입력항목입니다.' })}
          />
          {errors.name_ko && <ErrorTxt>{errors.name_ko.message}</ErrorTxt>}
        </div>
        <div className="field2">
          <label htmlFor="name_en" className="req">
            제품명 (영어)
          </label>
          <input
            type="text"
            id="name_en"
            className="inp"
            placeholder="영문 입력만 가능"
            {...register('name_en', { required: '필수 입력항목입니다.' })}
          />
          {errors.name_en && <ErrorTxt>{errors.name_en.message}</ErrorTxt>}
        </div>{' '}
      </div>
      <div className="line line4">
        <div className="field1">
          <label htmlFor="desc" className="">
            제품설명
          </label>
          <textarea
            id="desc"
            placeholder="제품에 대한 설명 입력"
            {...register('desc')}
          />
          {errors.desc && <ErrorTxt>{errors.desc.message}</ErrorTxt>}
        </div>{' '}
      </div>
      <div className="line line5">
        <Controller
          control={control}
          name="start_date"
          rules={{ required: '필수 입력 항목입니다.' }}
          render={({ field }) => (
            <DatePicker
              selectedDate={field.value}
              onChange={(newDate: NewDate) => {
                field.onChange(String(newDate));
              }}
            />
          )}
        />
        {errors.start_date && (
          <ErrorTxt>{String(errors.start_date.message)}</ErrorTxt>
        )}
      </div>
      <button type="submit">등록</button>
    </FormWrap>
  );
};

export default Form;
