import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { IProductForm, IProductFormField } from '@InterfaceFarm/product';
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
import { settingsByMode } from '@ComponentFarm/template/product/manage/const';
import useEnvironments, {
  EnvironmentKeyMapping,
} from '@HookFarm/useEnviroments';

interface FormProps {
  initialData?: IProductFormField;
  pageMode: string;
  environment: IEnvironmentRes;
  setSelectedImgFile: React.Dispatch<React.SetStateAction<File | null>>;
  submitFunc: (data: IProductForm) => void;
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

const ProductForm: React.FC<FormProps> = ({
  initialData,
  environment,
  pageMode,
  setSelectedImgFile,
  submitFunc,
}) => {
  const router = useRouter();

  const isReadOnly = pageMode === 'view';
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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

  const defaultValues = {
    ...initialData,
    sale_end_date:
      initialData?.sale_end_date === '0000-00-00'
        ? ''
        : initialData?.sale_end_date,
  } || {
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
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductFormField>({ defaultValues });

  const onFormSubmit = handleSubmit((data: any) => {
    console.log('submitFunc data', data);
    submitFunc(data);
  });

  const statusWatch = environment?.list?.find(
    el =>
      String(el.environment_variable_idx) ===
      String(watch('evi_product_status'))
  );

  const onSubmit = () => {
    if (pageMode !== 'view') {
      onFormSubmit();
    } else {
      router.push({
        pathname: `/product/modify/${
          router.query.id !== undefined && router.query.id[1]
        }`,
        query: router.query,
      });
    }
  };

  // 현재 mode에 따른 설정 가져오기
  const currentSettings = settingsByMode[pageMode];

  return (
    <>
      <FormWrap css={productStyles}>
        <TitleArea
          title={currentSettings?.title}
          BtnBox={
            <>
              <Button variant="gostSecondary" onClick={() => router.back()}>
                {currentSettings?.firstButtonText}
              </Button>
              <Button type="button" onClick={onSubmit}>
                {currentSettings?.secondButtonText}
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
              <label className="req" htmlFor="product_img">
                대표 이미지
              </label>
              <div className="box_inp">
                <ImageUploader
                  pageMode={pageMode}
                  product_image={String(initialData?.product_image)}
                  onImageChange={setSelectedImgFile}
                />
              </div>
            </div>
          </div>
          <div className="field field2">
            <div className="box box1">
              <label htmlFor="product_code" className="">
                제품 코드
              </label>
              <div className="box_inp">
                <input
                  type="text"
                  id="product_code"
                  className="inp"
                  placeholder="등록 시, 자동 생성 (입력불가)"
                  disabled
                />
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
                disabled={isReadOnly || pageMode === 'modify'}
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
                    initialCheckedValues={[
                      ...(initialData?.evi_sale_type || []),
                    ]}
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
                  pattern: {
                    value: /^[가-힣0-9\s]+$/,
                    message: '한글만 입력 가능합니다.',
                  },
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
                  pattern: {
                    value: /^[A-Za-z0-9\s]+$/,
                    message: '영문만 입력 가능합니다.',
                  },
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

          {pageMode !== 'add' && (
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
                      disabled={
                        isReadOnly || statusWatch?.code === 'ps_operation'
                      }
                      placeholderText="‘중단’ 또는 ‘폐기’ 상태일 때, 입력 가능"
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
export default ProductForm;
