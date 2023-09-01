import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import CheckBoxGroup from '@ComponentFarm/modules/CheckBoxGroup/CheckBoxGroup';
import DatePicker, {
  NewDate,
} from '@ComponentFarm/modules/DatePicker/DatePicker';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Divider } from '@ComponentFarm/atom/Divider/Divider';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';

type FormFields = {
  code: string; // TODO: replace with the actual value
  status: string; // TODO: replace with the actual value
  group: string; // TODO: replace with the actual value
  kind: string; // TODO: replace with the actual value
  paykind: string[]; // TODO: replace with the actual value
  name_ko: string; // TODO: replace with the actual value
  name_en: string; // TODO: replace with the actual value
  desc: string; // TODO: replace with the actual value
  startDate: string; // TODO: replace with the actual value
  endDate: string; // TODO: replace with the actual value
};

interface FormProps {
  initialData?: FormFields;
  loading?: boolean;
  onSubmit: (data: FormFields) => void;
}

const sampleData = [
  {
    label: '배달',
    value: '1',
  },
  {
    label: '포장',
    value: '2',
  },
  {
    label: '내점',
    value: '3',
  },
];

const productStyles = css`
  .line1 {
    .field {
      display: block;
    }
    .box {
      display: flex;

      &:first-of-type {
        margin-bottom: 2.4rem;
      }
    }
  }
  .line1,
  .line3,
  .line5 {
    .field {
      width: 100%;
    }
  }
  .line1,
  .line2,
  .line4,
  .line6 {
    .field {
      width: 50%;
    }
  }
`;

const Form: React.FC<FormProps> = ({ initialData, loading, onSubmit }) => {
  const isEdit = !!initialData;
  const router = useRouter();
  const { id } = router.query;
  const isReadOnly = !id?.includes('add') && !!id;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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

  const tabData = [
    {
      title: '제품등록',
    },
    {
      title: '채널별 제품 이미지',
    },
  ];

  const defaultValues = isEdit
    ? initialData
    : {
        code: '', // TODO: replace with the actual value
        status: '', // TODO: replace with the actual value
        group: '', // TODO: replace with the actual value
        kind: '', // TODO: replace with the actual value
        paykind: [], // TODO: replace with the actual value
        name_ko: '', // TODO: replace with the actual value
        name_en: '', // TODO: replace with the actual value
        desc: '', // TODO: replace with the actual value
        startDate: '', // TODO: replace with the actual value
        endDate: '', // TODO: replace with the actual value
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
    <>
      <FormWrap css={productStyles}>
        <TitleArea
          title="제품 상세 정보 수정"
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
        <h2>제품 기본 정보</h2>
        <div className="line line1">
          <div className="field field1">
            <div className="box_upload_image">
              <h4>제품 이미지</h4>
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
                제품 코드
              </label>
              <div className={`box_inp ${errors.code ? 'error' : ''}`}>
                <input
                  type="text"
                  id="code"
                  className="inp"
                  placeholder="등록 시, 자동 생성 (입력불가)"
                  disabled
                  {...register('code')}
                />
                {errors.code && <ErrorTxt>{errors.code.message}</ErrorTxt>}
              </div>
            </div>
            <div className="box box2">
              <label htmlFor="status" className="req">
                제품 상태
              </label>
              <div className={`box_inp ${errors.status ? 'error' : ''}`}>
                <select
                  id="status"
                  disabled={isReadOnly}
                  {...register('status', { required: '필수 입력항목입니다.' })}
                >
                  <option value="">전체</option>
                  {/*   {data.status.map(el => (
            <option key={el.value} value={el.value}>{el.label}</option> 
          ))}   */}
                </select>
                {errors.status && <ErrorTxt>{errors.status.message}</ErrorTxt>}
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="line line2">
          <div className="field field1">
            <label htmlFor="group" className="req">
              제품 그룹
            </label>
            <div className={`box_inp ${errors.group ? 'error' : ''}`}>
              <select
                id="group"
                disabled={isReadOnly}
                {...register('group', { required: '필수 입력항목입니다.' })}
              >
                {/*   {data.group.map(el => (
            <option key={el.value} value={el.value}>{el.label}</option> 
          ))}   */}
              </select>
              {errors.group && <ErrorTxt>{errors.group.message}</ErrorTxt>}
            </div>
          </div>
          <div className="field field2">
            <label htmlFor="kind" className="req">
              제품 분류
            </label>
            <div className={`box_inp ${errors.kind ? 'error' : ''}`}>
              <select
                id="kind"
                disabled={isReadOnly}
                {...register('kind', { required: '필수 입력항목입니다.' })}
              >
                {/*   {data.kind.map(el => (
            <option key={el.value} value={el.value}>{el.label}</option> 
          ))}   */}
              </select>
              {errors.kind && <ErrorTxt>{errors.kind.message}</ErrorTxt>}
            </div>
          </div>{' '}
        </div>
        <div className="line line3">
          <div className="field field1">
            <label htmlFor="paykind" className="req">
              판매 분류 (중복 가능)
            </label>
            <div className={`box_inp ${errors.paykind ? 'error' : ''}`}>
              <Controller
                name="paykind"
                control={control}
                defaultValue={[]}
                render={({ field: { value, ref, ...restField } }) => (
                  <CheckBoxGroup
                    {...restField}
                    options={sampleData}
                    allChechkHandler={sampleData}
                    initialCheckedValues={value}
                    disabled={isReadOnly}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="line line4">
          <div className="field field1">
            <label htmlFor="name_ko" className="req">
              제품명 (한글)
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
            <label htmlFor="name_en" className="req">
              제품명 (영어)
            </label>
            <div className={`box_inp ${errors.name_en ? 'error' : ''}`}>
              <input
                type="text"
                id="name_en"
                className="inp"
                placeholder="영문 입력만 가능"
                disabled={isReadOnly}
                {...register('name_en', { required: '필수 입력항목입니다.' })}
              />
              {errors.name_en && <ErrorTxt>{errors.name_en.message}</ErrorTxt>}
            </div>
          </div>
        </div>
        <div className="line line5">
          <div className="field field1">
            <label htmlFor="desc" className="">
              제품 설명
            </label>
            <div className={`box_inp ${errors.desc ? 'error' : ''}`}>
              <textarea
                id="desc"
                placeholder="제품에 대한 설명 입력"
                disabled={isReadOnly}
                {...register('desc')}
              />
              {errors.desc && <ErrorTxt>{errors.desc.message}</ErrorTxt>}
            </div>
          </div>
        </div>
        <h2>제품 판매 정보</h2>
        <div className="line line6">
          <div className="field field1">
            <label htmlFor="startDate" className="req">
              판매 시작일
            </label>
            <div className={`box_inp ${errors.startDate ? 'error' : ''}`}>
              <Controller
                control={control}
                name="startDate"
                rules={{ required: '필수 입력 항목입니다.' }}
                render={({ field }) => (
                  <DatePicker
                    selectedDate={field.value}
                    onChange={(newDate: NewDate) => {
                      field.onChange(String(newDate));
                    }}
                    disabled={isReadOnly}
                  />
                )}
              />
              {errors.startDate && (
                <ErrorTxt>{errors.startDate.message}</ErrorTxt>
              )}
            </div>
          </div>

          <div className="field field2">
            <label htmlFor="startDate" className="">
              판매 종료일
            </label>
            <div className={`box_inp ${errors.endDate ? 'error' : ''}`}>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <DatePicker
                    selectedDate={field.value}
                    onChange={(newDate: NewDate) => {
                      field.onChange(String(newDate));
                    }}
                    disabled={isReadOnly}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </FormWrap>
    </>
  );
};

export default Form;
