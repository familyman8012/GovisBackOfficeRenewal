import { SyntheticEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import DatePicker, {
  NewDate,
} from '@ComponentFarm/modules/DatePicker/DatePicker';
import { Button } from '@ComponentFarm/atom/Button/Button';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { Content, FormWrap } from '@ComponentFarm/common';

type FormFields = {
  name: string; // TODO: replace with the actual value
  group: string; // TODO: replace with the actual value,
  kind: string; // TODO: replace with the actual value,
  product_name_ko: string; // TODO: replace with the actual value,
  product_name_en: string; // TODO: replace with the actual value,
  desc: string; // TODO: replace with the actual value
  selectedDate: any;
};

const productStyles = css`
  .line1,
  .line2,
  .line3,
  .line5 {
    .field1,
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

const dataArr = {
  group: [
    { label: '본사(H)', value: 1 },
    { label: '직영(D)', value: 2 },
    { label: '가맹(F)', value: 3 },
    { label: 'XGOPIZZA(X)', value: 4 },
  ],
  kind: [
    { label: '피자', value: 1 },
    { label: '파스타', value: 2 },
    { label: '샐러드', value: 3 },
    { label: '떡볶이', value: 4 },
    { label: '음료', value: 5 },
    { label: '치킨', value: 6 },
    { label: '튀김', value: 7 },
    { label: '빵', value: 8 },
    { label: '스낵', value: 9 },
    { label: '필라프', value: 10 },
    { label: '키즈피즈(밀키트)', value: 11 },
    { label: '주류', value: 12 },
    { label: '소스/토핑/피클', value: 13 },
    { label: '행사상품', value: 14 },
    { label: '기타', value: 15 },
  ],
};

const Form = ({ isEdit = false, initialData = {} }) => {
  // default values
  const defaultValues = isEdit
    ? initialData
    : {
        name: '', // TODO: replace with the actual value
        group: '', // TODO: replace with the actual value,
        kind: '', // TODO: replace with the actual value,
        product_name_ko: '', // TODO: replace with the actual value,
        product_name_en: '', // TODO: replace with the actual value,
        desc: '', // TODO: replace with the actual value
      };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues,
  });

  const onSubmit = (data: FormFields) => console.log(data);

  return (
    <Content>
      <FormWrap css={productStyles} onSubmit={handleSubmit(onSubmit)}>
        <h3>제품 기본 정보</h3>
        <div className="line line1">
          <div className="field1">
            <div className="box_upload_image">
              <h4>제품 이미지</h4>
              <div className="thumb" />
              <div className="box_btn">
                <Button variant="primary">이미지 등록</Button>
                <span className="txt_notice">※ 2 MB 이하만 업로드 가능</span>
              </div>
            </div>
          </div>
          <div className="field2">
            <label htmlFor="name" className="req">
              제품이름
            </label>
            <input
              type="text"
              id="name"
              className="inp"
              {...register('name', { required: '필수 입력항목입니다.' })}
            />
            {errors.name && <ErrorTxt>{errors.name.message}</ErrorTxt>}
          </div>
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
              {dataArr.group.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.group && <ErrorTxt>{errors.group.message}</ErrorTxt>}
          </div>
          <div className="field2">
            <label htmlFor="kind" className="">
              제품 분류
            </label>
            <select id="kind" {...register('kind')}>
              {dataArr.kind.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.kind && <ErrorTxt>{errors.kind.message}</ErrorTxt>}
          </div>
        </div>
        <div className="line line3">
          <div className="field1">
            <label htmlFor="product_name_ko" className="req">
              제품명 (한글)
            </label>
            <input
              type="text"
              id="product_name_ko"
              className="inp"
              {...register('product_name_ko', {
                required: '필수 입력항목입니다.',
              })}
            />
            {errors.product_name_ko && (
              <ErrorTxt>{errors.product_name_ko.message}</ErrorTxt>
            )}
          </div>
          <div className="field2">
            <label htmlFor="product_name_en" className="req">
              제품명 (영어)
            </label>
            <input
              type="text"
              id="product_name_en"
              className="inp"
              {...register('product_name_en', {
                required: '필수 입력항목입니다.',
              })}
            />
            {errors.product_name_en && (
              <ErrorTxt>{errors.product_name_en.message}</ErrorTxt>
            )}
          </div>
        </div>
        <div className="line line4">
          <div className="field1">
            <label htmlFor="desc" className="req">
              제품 설명
            </label>
            <textarea
              id="desc"
              {...register('desc', { required: '필수 입력항목입니다.' })}
            />
            {errors.desc && <ErrorTxt>{errors.desc.message}</ErrorTxt>}
          </div>
        </div>
        <h3>제품 판매 정보</h3>
        <div className="line line5">
          <div className="field1">
            <Controller
              control={control}
              name="selectedDate"
              render={({ field }) => (
                <DatePicker
                  selectedDate={field.value}
                  onChange={(
                    newDate: NewDate,
                    event: SyntheticEvent<any> | undefined
                  ) => {
                    field.onChange(String(newDate));
                  }}
                />
              )}
            />
          </div>
        </div>
        <div>
          <button type="submit">등록</button>
        </div>
      </FormWrap>
    </Content>
  );
};

export default Form;
