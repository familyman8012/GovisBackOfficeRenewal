import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import CheckBoxGroup from '@ComponentFarm/modules/CheckBoxGroup/CheckBoxGroup';
import DatePicker, {
  NewDate,
} from '@ComponentFarm/modules/DatePicker/DatePicker';
import ImageUploader from '@ComponentFarm/modules/ImageUploader/ImageUploader';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Divider } from '@ComponentFarm/atom/Divider/Divider';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import useEnvironments, {
  EnvironmentKeyMapping,
} from '@HookFarm/useEnviroments';
import useImageUploader from '@HookFarm/useMediaUp';

type FormFields = {
  product_code: string;
  evi_product_status: string;
  evi_product_group: string;
  evi_product_category: string;
  evi_sale_type: string[];
  product_name_ko: string;
  product_name_en: string;
  product_description: string;
  sale_start_date: string;
  sale_end_date: string;
};

interface FormProps {
  initialData?: FormFields;
  environment: IEnvironmentRes;
  loading?: boolean;
  onSubmit: (data: FormFields) => void;
}

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

const Form: React.FC<FormProps> = ({
  initialData,
  loading,
  environment,
  onSubmit,
}) => {
  const isEdit = !!initialData;
  const router = useRouter();
  const { id } = router.query;
  const isReadOnly = !id?.includes('add') && !!id;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [data, status, errorMessage, handler] = useImageUploader();

  const handleUpload = async () => {
    if (selectedFile) {
      const event = { target: { files: [selectedFile] } };
      await handler(event as any);
    }
  };

  console.log('data, status, errorMessage', data, status, errorMessage);

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

  const envKeys: EnvironmentKeyMapping[] = [
    ['product_status', 'STATUS'],
    ['product_group', 'GROUP'],
    ['product_category', 'CATEGORY'],
    ['sale_type', 'SALETYPE'],
  ];

  const { STATUS, GROUP, CATEGORY, SALETYPE } = useEnvironments(
    environment.list,
    envKeys
  );

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
        product_code: '',
        evi_product_status: '',
        evi_product_group: '',
        evi_product_category: '',
        evi_sale_type: [],
        product_name_ko: '',
        product_name_en: '',
        product_description: '',
        sale_start_date: '',
        sale_end_date: '',
      };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues });
  const onFormSubmit = handleSubmit(data => {
    // onSubmit(data);
    console.log(data);
  });

  return (
    <>
      <FormWrap css={productStyles}>
        <TitleArea
          title="제품 상세 정보 수정"
          BtnBox={
            <>
              <Button variant="gostSecondary">취소</Button>
              <Button type="button" onClick={handleUpload}>
                등록
              </Button>
            </>
          }
        />
        <Tabs
          id="tab_product_detail"
          tabs={tabData}
          activeTabIndex={activeTabIndex}
          onTabChange={index => setActiveTabIndex(index)}
        />
        <h2>제품 기본 정보</h2>
        <div className="line line1">
          <div className="field field1">
            <div className="box_upload_image">
              <h4>제품 이미지</h4>
              <div className="box_inp">
                <ImageUploader onImageChange={setSelectedFile} />
              </div>
            </div>
          </div>
          <div className="field field2">
            <div className="box box1">
              <label htmlFor="product_code" className="">
                제품 코드
              </label>
              <div className={`box_inp ${errors.product_code ? 'error' : ''}`}>
                <input
                  type="text"
                  id="product_code"
                  className="inp"
                  placeholder="등록 시, 자동 생성 (입력불가)"
                  disabled
                  {...register('product_code')}
                />
                {errors.product_code && (
                  <ErrorTxt>{errors.product_code.message}</ErrorTxt>
                )}
              </div>
            </div>
            <div className="box box2">
              <label htmlFor="evi_product_status" className="req">
                제품 상태
              </label>
              <div
                className={`box_inp ${
                  errors.evi_product_status ? 'error' : ''
                }`}
              >
                <select
                  id="evi_product_status"
                  disabled={isReadOnly}
                  {...register('evi_product_status', {
                    required: '필수 입력항목입니다.',
                  })}
                >
                  <option value="">전체</option>
                  {STATUS.map(el => (
                    <option key={el.value} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </select>
                {errors.evi_product_status && (
                  <ErrorTxt>{errors.evi_product_status.message}</ErrorTxt>
                )}
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="line line2">
          <div className="field field1">
            <label htmlFor="evi_product_group" className="req">
              제품 그룹
            </label>
            <div
              className={`box_inp ${errors.evi_product_group ? 'error' : ''}`}
            >
              <select
                id="evi_product_group"
                disabled={isReadOnly}
                {...register('evi_product_group', {
                  required: true,
                })}
              >
                <option value="">전체</option>
                {GROUP.map(el => (
                  <option key={el.value} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </select>
              {errors.evi_product_group && (
                <ErrorTxt>{errors.evi_product_group.message}</ErrorTxt>
              )}
            </div>
          </div>
          <div className="field field2">
            <label htmlFor="evi_product_category" className="req">
              제품 분류
            </label>
            <div
              className={`box_inp ${
                errors.evi_product_category ? 'error' : ''
              }`}
            >
              <select
                id="evi_product_category"
                disabled={isReadOnly}
                {...register('evi_product_category', {
                  required: '필수 입력항목입니다.',
                })}
              >
                <option value="">전체</option>
                {CATEGORY.map(el => (
                  <option key={el.value} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </select>
              {errors.evi_product_category && (
                <ErrorTxt>{errors.evi_product_category.message}</ErrorTxt>
              )}
            </div>
          </div>
        </div>
        <div className="line line3">
          <div className="field field1">
            <label htmlFor="evi_sale_type" className="req">
              판매 분류 (중복 가능)
            </label>
            <div className={`box_inp ${errors.evi_sale_type ? 'error' : ''}`}>
              <Controller
                name="evi_sale_type"
                control={control}
                defaultValue={[]}
                render={({ field: { value, ref, ...restField } }) => (
                  <CheckBoxGroup
                    {...restField}
                    options={SALETYPE}
                    initialCheckedValues={[]}
                    disabled={isReadOnly}
                  />
                )}
              />
              {errors.evi_sale_type && (
                <ErrorTxt>{errors.evi_sale_type.message}</ErrorTxt>
              )}
            </div>
          </div>
        </div>
        <div className="line line4">
          <div className="field field1">
            <label htmlFor="product_name_ko" className="req">
              제품명 (한글)
            </label>
            <div className={`box_inp ${errors.product_name_ko ? 'error' : ''}`}>
              <input
                type="text"
                id="product_name_ko"
                className="inp"
                placeholder="한글 입력만 가능"
                disabled={isReadOnly}
                {...register('product_name_ko', {
                  required: '필수 입력항목입니다.',
                })}
              />
              {errors.product_name_ko && (
                <ErrorTxt>{errors.product_name_ko.message}</ErrorTxt>
              )}
            </div>
          </div>
          <div className="field field2">
            <label htmlFor="product_name_en" className="req">
              제품명 (영어)
            </label>
            <div className={`box_inp ${errors.product_name_en ? 'error' : ''}`}>
              <input
                type="text"
                id="product_name_en"
                className="inp"
                placeholder="영문 입력만 가능"
                disabled={isReadOnly}
                {...register('product_name_en', {
                  required: '필수 입력항목입니다.',
                })}
              />
              {errors.product_name_en && (
                <ErrorTxt>{errors.product_name_en.message}</ErrorTxt>
              )}
            </div>
          </div>
        </div>

        <div className="line line5">
          <div className="field field1">
            <label htmlFor="product_description" className="">
              제품 설명
            </label>
            <div
              className={`box_inp ${errors.product_description ? 'error' : ''}`}
            >
              <textarea
                id="product_description"
                placeholder="제품에 대한 설명 입력"
                disabled={isReadOnly}
                {...register('product_description')}
              />
              {errors.product_description && (
                <ErrorTxt>{errors.product_description.message}</ErrorTxt>
              )}
            </div>
          </div>
        </div>
        <h2>제품 판매 정보</h2>
        <div className="line line6">
          <div className="field field1">
            <label htmlFor="sale_start_date" className="req">
              판매 시작일
            </label>
            <div className={`box_inp ${errors.sale_start_date ? 'error' : ''}`}>
              <Controller
                control={control}
                name="sale_start_date"
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
              {errors.sale_start_date && (
                <ErrorTxt>{errors.sale_start_date.message}</ErrorTxt>
              )}
            </div>
          </div>

          {!id?.includes('add') && (
            <div className="field field2">
              <label htmlFor="sale_end_date" className="">
                판매 종료일
              </label>
              <div className={`box_inp ${errors.sale_end_date ? 'error' : ''}`}>
                <Controller
                  control={control}
                  name="sale_end_date"
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
                {errors.sale_end_date && (
                  <ErrorTxt>{errors.sale_end_date.message}</ErrorTxt>
                )}
              </div>
            </div>
          )}
        </div>
      </FormWrap>
    </>
  );
};

export default Form;

export async function getStaticPaths() {
  // 기본 경로들
  const basePaths = [
    { params: { id: ['add'] } },
    { params: { id: ['modify'] } },
    { params: { id: ['view'] } },
  ];

  return {
    paths: basePaths,
    fallback: 'blocking',
  };
}

export const getStaticProps = async () => {
  const environment = await fetchEnvironment({
    name: 'product_status,product_group,product_category,sale_type',
  });

  return {
    props: {
      environment,
    },
    revalidate: 10,
  };
};
