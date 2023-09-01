import { useState } from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import Editor from '@ComponentFarm/modules/Editor/Editor';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { Button } from '@ComponentFarm/atom/Button/Button';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { Select } from '@ComponentFarm/atom/Select/Select';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';

type FormFields = {
  status: string; // TODO: replace with the actual value
  innercode: string; // TODO: replace with the actual value
  product_category: string; // TODO: replace with the actual value
  sel_category1: string; // TODO: replace with the actual value
  sel_category2: string; // TODO: replace with the actual value
  sel_category3: string; // TODO: replace with the actual value
  save_dd: string; // TODO: replace with the actual value
  name_ko: string; // TODO: replace with the actual value
  name_en: string; // TODO: replace with the actual value
  quanity: string; // TODO: replace with the actual value
  quanity2: string; // TODO: replace with the actual value
  spec: string; // TODO: replace with the actual value
  spec2: string; // TODO: replace with the actual value
  amount: string; // TODO: replace with the actual value
  lessAmount: string; // TODO: replace with the actual value
  price1: string; // TODO: replace with the actual value
  price2: string; // TODO: replace with the actual value
  price3: string; // TODO: replace with the actual value
  taxable: string; // TODO: replace with the actual value
  vat: string; // TODO: replace with the actual value
  company: string; // TODO: replace with the actual value
  country: string; // TODO: replace with the actual value
  client: string; // TODO: replace with the actual value
  desc: string; // TODO: replace with the actual value
};

interface FormProps {
  initialData?: FormFields;
  loading?: boolean;
  onSubmit: (data: FormFields) => void;
}

const data0 = [
  {
    label: '운영',
    value: '1',
  },
  {
    label: '중단',
    value: '2',
  },
];

const data1 = [
  {
    label: '원재료',
    value: '1',
  },
  {
    label: '제품',
    value: '2',
  },
  {
    label: '상품',
    value: '3',
  },
];

const data5 = [
  {
    label: '냉장',
    value: '1',
  },
  {
    label: '냉동',
    value: '2',
  },
  {
    label: '실온',
    value: '3',
  },
  {
    label: '상온',
    value: '3',
  },
];

const data8 = [
  {
    label: '과세',
    value: '1',
  },
  {
    label: '면세',
    value: '2',
  },
  {
    label: '명세',
    value: '3',
  },
];

const data9 = [
  {
    label: '없음',
    value: '1',
  },
  {
    label: '별도',
    value: '2',
  },
  {
    label: '포함',
    value: '3',
  },
];
const productStyles = css`
  .label_radio {
    margin-right: 3.2rem !important;
  }
  .box_inp + .box_inp {
    margin-left: 1.6rem;
  }
  .line1 {
    .field2 {
      display: block;
      .box {
        display: flex;
        margin-bottom: 2.4rem;
      }
    }
  }
  .line {
    .field {
      width: 100%;
    }
  }
  .line1,
  .line5,
  .line8,
  .line12,
  .line13 {
    .field1 {
      width: calc(50% - 25px);
    }
    .field2 {
      width: calc(50% - 25px);
    }
  }

  .line3 {
    .box_inp {
      width: 15rem;
    }
  }
  .line6,
  .line7 {
    .box_inp {
      width: 11.2rem;
    }
  }
  .line8,
  .line9,
  .line10,
  .line11 {
    .inp {
      width: 24rem;
    }
  }

  .line14 {
    .inp {
      width: 40rem;
    }
  }
`;

const Form: React.FC<FormProps> = ({ initialData, loading, onSubmit }) => {
  const isEdit = !!initialData;
  const router = useRouter();
  const { id } = router.query;
  const isReadOnly = !id?.includes('add') && !!id;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabData = [
    {
      title: '원재료 기본 정보',
    },
    {
      title: '원재료 배송 정보',
    },
  ];

  const options: any[] = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
    },
  ];

  // const confirmModal = () => {
  //   runInAction(() => {
  //     confirmModalStore.openModal({
  //       title: '제품 정보 등록 완료',
  //       content: (
  //         <p>
  //           채널별 이미지를 등록하시겠습니까?
  //           <br /> (채널별 이미지는 추후 등록 가능합니다.)
  //         </p>
  //       ),
  //       onFormSubmit: () => {
  //         console.log('Form submitted!');
  //       },
  //       onCancel: () => {
  //         alert('aaa');
  //       },
  //       submitButtonText: '다음',
  //     });
  //   });
  // };

  const defaultValues = isEdit
    ? initialData
    : {
        status: '', // TODO: replace with the actual value
        innercode: '', // TODO: replace with the actual value
        product_category: '', // TODO: replace with the actual value
        sel_category1: '', // TODO: replace with the actual value
        sel_category2: '', // TODO: replace with the actual value
        sel_category3: '', // TODO: replace with the actual value
        save_dd: '', // TODO: replace with the actual value
        name_ko: '', // TODO: replace with the actual value
        name_en: '', // TODO: replace with the actual value
        quanity: '', // TODO: replace with the actual value
        quanity2: '', // TODO: replace with the actual value
        spec: '', // TODO: replace with the actual value
        spec2: '', // TODO: replace with the actual value
        amount: '', // TODO: replace with the actual value
        lessAmount: '', // TODO: replace with the actual value
        price1: '', // TODO: replace with the actual value
        price2: '', // TODO: replace with the actual value
        price3: '', // TODO: replace with the actual value
        taxable: '', // TODO: replace with the actual value
        vat: '', // TODO: replace with the actual value
        company: '', // TODO: replace with the actual value
        country: '', // TODO: replace with the actual value
        client: '', // TODO: replace with the actual value
        desc: '', // TODO: replace with the actual value
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
      <TitleArea
        title="원재료 등록"
        BtnBox={
          <>
            <Button variant="gostSecondary">취소</Button>
            <Button type="button" onClick={onFormSubmit}>
              등록
            </Button>
          </>
        }
      />
      <Tabs
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <h2>원재료 기본 정보</h2>
      <div className="line line1">
        <div className="field field1">
          <div className="box_upload_image">
            <h4>원재료 이미지</h4>
            <div className="thumb" />
            <div className="box_btn">
              <Button variant="primary">이미지 등록</Button>
              <span className="txt_notice">※ 2 MB 이하만 업로드 가능</span>
            </div>
          </div>
        </div>
        <div className="field field2">
          <div className="box box1">
            <label htmlFor="code" className="">
              원재료 코드
            </label>
            <div className="box_inp">
              <input
                type="text"
                id="code"
                className="inp"
                placeholder="등록 시, 자동 생성 (입력불가)"
                disabled
              />
            </div>
          </div>
          <div className="box box2">
            <label htmlFor="innercode" className="">
              내부 코드
            </label>
            <div className={`box_inp ${errors.innercode ? 'error' : ''}`}>
              <input
                type="text"
                id="code"
                className="inp"
                placeholder="기존 발주GO에 등록된 상품이면 코드 입력 필수"
                {...register('innercode')}
              />
              {errors.innercode && (
                <ErrorTxt>{errors.innercode.message}</ErrorTxt>
              )}
            </div>
          </div>
          <div className="box box3">
            <label htmlFor="status" className="req">
              원재료 상태
            </label>
            <div className={`box_inp ${errors.status ? 'error' : ''}`}>
              <select
                id="status"
                disabled={isReadOnly}
                {...register('status', { required: '필수 입력항목입니다.' })}
              >
                <option value="">전체</option>
                {data0.map(el => (
                  <option key={el.value} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </select>
              {errors.status && <ErrorTxt>{errors.status.message}</ErrorTxt>}
            </div>
          </div>
        </div>
      </div>
      <h2>원재료 유형</h2>
      <div className="line line2">
        <div className="field field1">
          <label htmlFor="product_category" className="req">
            상품 구분
          </label>
          <div className={`box_inp ${errors.product_category ? 'error' : ''}`}>
            <Controller
              name="product_category"
              control={control}
              render={({ field: { onChange, value, ref, ...restField } }) => (
                <RadioGroup
                  {...restField}
                  defaultValue="1"
                  onChange={onChange}
                  options={data1}
                  disabled={isReadOnly}
                />
              )}
            />
            {errors.product_category && (
              <ErrorTxt>{errors.product_category.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line3">
        <div className="field field1">
          <label htmlFor="sel_category1" className="req">
            분류 선택
          </label>
          <div className={`box_inp ${errors.sel_category1 ? 'error' : ''}`}>
            <select
              id="sel_category1"
              disabled={isReadOnly}
              {...register('sel_category1', {
                required: '필수 입력항목입니다.',
              })}
            >
              <option value="">대분류 전체</option>
              {/*   {data2.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
            </select>
            {errors.sel_category1 && (
              <ErrorTxt>{errors.sel_category1.message}</ErrorTxt>
            )}
          </div>
          <div className={`box_inp ${errors.sel_category2 ? 'error' : ''}`}>
            <select
              id="sel_category2"
              disabled={isReadOnly}
              {...register('sel_category2', {
                required: '필수 입력항목입니다.',
              })}
            >
              <option value="">중분류 전체</option>
              {/*   {data3.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
            </select>
            {errors.sel_category2 && (
              <ErrorTxt>{errors.sel_category2.message}</ErrorTxt>
            )}
          </div>
          <div className={`box_inp ${errors.sel_category3 ? 'error' : ''}`}>
            <select
              id="sel_category3"
              disabled={isReadOnly}
              {...register('sel_category3', {
                required: '필수 입력항목입니다.',
              })}
            >
              <option value="">소분류 전체</option>
              {/*   {data4.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
            </select>
            {errors.sel_category3 && (
              <ErrorTxt>{errors.sel_category3.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line4">
        <div className="field field1">
          <label htmlFor="save_dd" className="req">
            보관 구분
          </label>
          <div className={`box_inp ${errors.save_dd ? 'error' : ''}`}>
            <Controller
              name="save_dd"
              control={control}
              render={({ field: { onChange, value, ref, ...restField } }) => (
                <RadioGroup
                  {...restField}
                  defaultValue="1"
                  onChange={onChange}
                  options={data5}
                  disabled={isReadOnly}
                />
              )}
            />
            {errors.save_dd && <ErrorTxt>{errors.save_dd.message}</ErrorTxt>}
          </div>
        </div>
      </div>
      <div className="line line5">
        <div className="field field1">
          <label htmlFor="name_ko" className="req">
            원재료명 (한글)
          </label>
          <div className={`box_inp ${errors.name_ko ? 'error' : ''}`}>
            <input
              type="text"
              id="name_ko"
              className="inp"
              placeholder="한글 입력만 가능"
              disabled={isReadOnly}
              {...register('name_ko', { required: '필수 입력항목입니다.' })}
            />
            {errors.name_ko && <ErrorTxt>{errors.name_ko.message}</ErrorTxt>}
          </div>
        </div>
        <div className="field field2">
          <label htmlFor="name_en" className="">
            원재료명 (영어)
          </label>
          <div className={`box_inp ${errors.name_en ? 'error' : ''}`}>
            <input
              type="text"
              id="name_en"
              className="inp"
              placeholder="영문 입력만 가능"
              disabled={isReadOnly}
              {...register('name_en')}
            />
            {errors.name_en && <ErrorTxt>{errors.name_en.message}</ErrorTxt>}
          </div>
        </div>
      </div>
      <h2>상세 정보</h2>
      <div className="line line6">
        <div className="field field1">
          <label htmlFor="quanity" className="req">
            거래 수량
          </label>
          <div className={`box_inp ${errors.quanity ? 'error' : ''}`}>
            <select
              id="quanity"
              disabled={isReadOnly}
              {...register('quanity', { required: '필수 입력항목입니다.' })}
            >
              <option value="">PK</option>
              {/*   {data6.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
            </select>
            {errors.quanity && <ErrorTxt>{errors.quanity.message}</ErrorTxt>}
          </div>
          <div className={`box_inp ${errors.quanity2 ? 'error' : ''}`}>
            <input
              type="text"
              id="quanity2"
              className="inp"
              placeholder="0"
              disabled={isReadOnly}
              {...register('quanity2', { required: '필수 입력항목입니다.' })}
            />
            {errors.quanity2 && <ErrorTxt>{errors.quanity2.message}</ErrorTxt>}
          </div>
        </div>{' '}
      </div>
      <div className="line line7">
        <div className="field field1">
          <label htmlFor="spec" className="req">
            원재료 규격
          </label>
          <div className={`box_inp ${errors.spec ? 'error' : ''}`}>
            <select
              id="spec"
              disabled={isReadOnly}
              {...register('spec', { required: '필수 입력항목입니다.' })}
            >
              <option value="">Kg</option>
              {/*   {data7.map(el => (
              <option key={el.value} value={el.value}>{el.label}</option> 
            ))}   */}
            </select>
            {errors.spec && <ErrorTxt>{errors.spec.message}</ErrorTxt>}
          </div>
          <div className={`box_inp ${errors.spec2 ? 'error' : ''}`}>
            <input
              type="text"
              id="spec2"
              className="inp"
              placeholder="0"
              disabled={isReadOnly}
              {...register('spec2', { required: '필수 입력항목입니다.' })}
            />
            {errors.spec2 && <ErrorTxt>{errors.spec2.message}</ErrorTxt>}
          </div>
        </div>{' '}
      </div>
      <div className="line line8">
        <div className="field field1">
          <label htmlFor="amount" className="req">
            입수량
          </label>
          <div className={`box_inp ${errors.amount ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="amount"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('amount', { required: '필수 입력항목입니다.' })}
              />
              <span className="txt_addition">개</span>
            </span>
            {errors.amount && <ErrorTxt>{errors.amount.message}</ErrorTxt>}
          </div>
        </div>
        <div className="field field2">
          <label htmlFor="lessAmount" className="req">
            최소 구매수량
          </label>
          <div className={`box_inp ${errors.lessAmount ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="lessAmount"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('lessAmount', {
                  required: '필수 입력항목입니다.',
                })}
              />
              <span className="txt_addition">BOX</span>
            </span>
            {errors.lessAmount && (
              <ErrorTxt>{errors.lessAmount.message}</ErrorTxt>
            )}
          </div>
        </div>{' '}
      </div>
      <div className="line line9">
        <div className="field field1">
          <label htmlFor="price1" className="req">
            견적가
          </label>
          <div className={`box_inp ${errors.price1 ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="price1"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('price1', { required: '필수 입력항목입니다.' })}
              />
              <span className="txt_addition">원(KRW)</span>
            </span>
            {errors.price1 && <ErrorTxt>{errors.price1.message}</ErrorTxt>}
          </div>
        </div>{' '}
      </div>
      <div className="line line10">
        <div className="field field1">
          <label htmlFor="price2" className="req">
            매입가
          </label>
          <div className={`box_inp ${errors.price2 ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="price2"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('price2', { required: '필수 입력항목입니다.' })}
              />
              <span className="txt_addition">원(KRW)</span>
            </span>
            {errors.price2 && <ErrorTxt>{errors.price2.message}</ErrorTxt>}
          </div>
        </div>{' '}
      </div>
      <div className="line line11">
        <div className="field field1">
          <label htmlFor="price3" className="req">
            판매가
          </label>
          <div className={`box_inp ${errors.price3 ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="price3"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('price3', { required: '필수 입력항목입니다.' })}
              />
              <span className="txt_addition">원(KRW)</span>
            </span>
            {errors.price3 && <ErrorTxt>{errors.price3.message}</ErrorTxt>}
          </div>
        </div>{' '}
      </div>
      <div className="line line12">
        <div className="field field1">
          <label htmlFor="taxable" className="req">
            과세 대상
          </label>
          <div className={`box_inp ${errors.taxable ? 'error' : ''}`}>
            <Controller
              name="taxable"
              control={control}
              render={({ field: { onChange, value, ref, ...restField } }) => (
                <RadioGroup
                  {...restField}
                  defaultValue="1"
                  onChange={onChange}
                  options={data8}
                  disabled={isReadOnly}
                />
              )}
            />
            {errors.taxable && <ErrorTxt>{errors.taxable.message}</ErrorTxt>}
          </div>
        </div>

        <div className="field field2">
          <label htmlFor="vat" className="req">
            VAT
          </label>
          <div className={`box_inp ${errors.vat ? 'error' : ''}`}>
            <Controller
              name="vat"
              control={control}
              render={({ field: { onChange, value, ref, ...restField } }) => (
                <RadioGroup
                  {...restField}
                  defaultValue="1"
                  onChange={onChange}
                  options={data9}
                  disabled={isReadOnly}
                />
              )}
            />
            {errors.vat && <ErrorTxt>{errors.vat.message}</ErrorTxt>}
          </div>
        </div>
      </div>
      <div className="line line13">
        <div className="field field1">
          <label htmlFor="company" className="req">
            제조사
          </label>
          <div className={`box_inp ${errors.company ? 'error' : ''}`}>
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <Select
                  options={options}
                  selectedOption={field.value}
                  setSelectedOption={field.onChange}
                  placeholder="예 : 태원"
                />
              )}
            />

            {errors.company && <ErrorTxt>{errors.company.message}</ErrorTxt>}
          </div>
        </div>
        <div className="field field2">
          <label htmlFor="country" className="req">
            원산지
          </label>
          <div className={`box_inp ${errors.country ? 'error' : ''}`}>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  options={options}
                  selectedOption={field.value}
                  setSelectedOption={field.onChange}
                  placeholder="예 : 대한민국"
                />
              )}
            />
            {errors.country && <ErrorTxt>{errors.country.message}</ErrorTxt>}
          </div>
        </div>{' '}
      </div>
      <div className="line line14">
        <div className="field field1">
          <label htmlFor="client" className="req">
            발주처
          </label>
          <div className={`box_inp ${errors.client ? 'error' : ''}`}>
            <input
              type="text"
              id="client"
              className="inp"
              placeholder="발주GO 입력"
              disabled={isReadOnly}
              {...register('client', { required: '필수 입력항목입니다.' })}
            />
            {errors.client && <ErrorTxt>{errors.client.message}</ErrorTxt>}
          </div>
        </div>{' '}
      </div>
      <div className="line line15">
        <div className="field field1">
          <label htmlFor="desc" className="">
            원재료 설명
          </label>
          <div className={`box_inp ${errors.desc ? 'error' : ''}`}>
            <Controller
              name="desc"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Editor
                  value={field.value}
                  onChange={value => field.onChange(value)}
                  disabled={isReadOnly}
                />
              )}
            />
            {errors.desc && <ErrorTxt>{errors.desc.message}</ErrorTxt>}
          </div>
        </div>
      </div>
    </FormWrap>
  );
};

export default Form;
