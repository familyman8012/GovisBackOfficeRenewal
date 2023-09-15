import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import {
  IMaterial,
  IMaterialCategoryItem,
  IMaterialCategoryRes,
  IPartnerRes,
} from '@InterfaceFarm/material';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import ImageUploader from '@ComponentFarm/modules/ImageUploader/ImageUploader';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { Button } from '@ComponentFarm/atom/Button/Button';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { Select } from '@ComponentFarm/atom/Select/Select';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import useEnvironments, {
  EnvironmentKeyMapping,
} from '@HookFarm/useEnviroments';
import { settingsByMode } from './const';

interface FormProps {
  initialData?: IMaterial;
  pageMode: string;
  environment: IEnvironmentRes;
  materialCategory: IMaterialCategoryRes;
  materialPatner: IPartnerRes;
  setSelectedImgFile: React.Dispatch<React.SetStateAction<File | null>>;
  submitFunc: (data: any) => void;
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

const MaterialForm: React.FC<FormProps> = ({
  initialData,
  environment,
  materialCategory,
  materialPatner,
  pageMode,
  setSelectedImgFile,
  submitFunc,
}) => {
  const router = useRouter();
  // const { id } = router.query;

  const isReadOnly = pageMode === 'view';
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const envKeys: EnvironmentKeyMapping[] = [
    ['material_product_type', 'PRODUCT_TYPE'],
    ['material_storage_type', 'STORAGE_TYPE'],
    ['material_trade_unit', 'TRADE_UNIT'],
    ['material_spec_unit', 'SPEC_UNIT'],
    ['taxable', 'TAXABLE'],
    ['vat', 'VAT'],
    ['country', 'COUNTRY'],
    ['material_sale_brand', 'SALE_BRAND'],
  ];

  const {
    PRODUCT_TYPE,
    STORAGE_TYPE,
    TRADE_UNIT,
    SPEC_UNIT,
    TAXABLE,
    VAT,
    COUNTRY,
    SALE_BRAND,
  } = useEnvironments(environment.list, envKeys);

  const tabData = [
    {
      title: '원재료 기본 정보',
    },
    {
      title: '원재료 배송 정보',
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

  // // 제조사 변환
  const PARTNER = useMemo(
    () =>
      materialPatner.list.map(item => ({
        label: item.partner_company_name,
        value: item.partner_company_idx,
      })),
    [materialPatner]
  );

  const PartnerDefaultValue = useMemo(
    () =>
      PARTNER.find(
        el => String(el.value) === String(initialData?.pci_manufacturer)
      ),
    [PARTNER, initialData?.pci_manufacturer]
  );

  const CountryDefaultValue = useMemo(
    () =>
      COUNTRY.find(el => String(el.value) === String(initialData?.evi_country)),
    [COUNTRY, initialData?.evi_country]
  );

  const defaultValues = {
    ...initialData,
    pci_manufacturer: PartnerDefaultValue,
    evi_country: CountryDefaultValue,
  } || {
    external_code: '', // replaced innercode
    evi_material_status: '', // replaced status
    evi_material_product_type: '', // replaced product_category
    mci_large: '', // replaced sel_category1
    mci_middle: '', // replaced sel_category2
    mci_small: '', // replaced sel_category3
    evi_material_storage_type: '', // replaced save_dd
    material_name_ko: '', // replaced name_ko
    material_name_en: '', // replaced name_en
    material_trade_qty: '', // replaced quanity
    evi_material_trade_unit: '', // replaced quanity2
    material_spec_qty: '', // replaced spec
    evi_material_spec_unit: '', // replaced spec2
    material_config_qty: '', // replaced amount
    minimal_purchase_qty: '', // replaced lessAmount
    estimate_price: '', // replaced price1
    purchase_price: '', // replaced price2
    sale_price: '', // replaced price3
    evi_taxable: '', // replaced taxable
    evi_vat: '', // replaced vat
    pci_manufacturer: { value: '', label: '' }, // replaced company
    evi_country: { value: '', label: '' }, // replaced country
    ordering_place: '', // replaced client
    material_description: '', // replaced desc
    evi_material_sale_brand: '',
  };

  // useEffect(() => {
  //   if (initialData?.pci_manufacturer) {
  //     console.log(
  //       PARTNER.find(el => el.value === initialData.pci_manufacturer)
  //     );
  //     setValue('pci_manufacturer', { label: '테스트 제조사-03', value: 5 });
  //   } // Set the default value on mount
  // }, [PARTNER, initialData?.pci_manufacturer, setValue]);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IMaterial>({ defaultValues });

  // 카테고리 변환
  const transformCategoryByDepth = (
    list: IMaterialCategoryItem[],
    depth: number
  ) => {
    return list
      ?.filter(el => el.depth === depth)
      .map(item => ({
        label: item.material_category_name,
        value: item.material_category_idx,
      }));
  };

  const CATEGORY1 = useMemo(
    () => transformCategoryByDepth(materialCategory?.list, 1),
    [materialCategory?.list]
  );
  const CATEGORY2 = useMemo(
    () => transformCategoryByDepth(materialCategory?.list, 2),
    [materialCategory?.list]
  );
  const CATEGORY3 = useMemo(
    () => transformCategoryByDepth(materialCategory?.list, 3),
    [materialCategory?.list]
  );

  // 원재료 규격 (단위)
  const materialSpecUnitWatch = watch('evi_material_spec_unit');
  const materialSpecUnit = environment?.list?.find(
    el => String(el?.environment_variable_idx) === String(materialSpecUnitWatch)
  )?.value;

  console.log('enviroment', environment);
  // 원재료 규격 (양)
  const materialSpecQty = watch('material_spec_qty');

  // 입수량
  const materialConfigQty = watch('material_config_qty');

  // 판매가
  const salePrice = watch('sale_price');

  const isCostDisable =
    !materialSpecUnit || !materialSpecQty || !materialConfigQty || !salePrice;

  useEffect(() => {
    if (materialSpecUnit && materialSpecQty && materialConfigQty && salePrice) {
      // 원재료 규격을 g로 변환
      let firstCost = 0;

      if (materialSpecUnit === 'kg' || materialSpecUnit === 'L') {
        firstCost = salePrice / (materialSpecQty * 1000 * materialConfigQty);
      } else if (materialSpecUnit === 'g') {
        firstCost = salePrice / (materialSpecQty * materialConfigQty);
      } else {
        firstCost = salePrice / (1 * materialConfigQty);
      }

      // 원가 필드에 값을 설정
      setValue('first_cost', firstCost);
    }
  }, [
    materialSpecUnit,
    materialSpecQty,
    materialConfigQty,
    salePrice,
    setValue,
  ]);

  const onFormSubmit = handleSubmit(data => {
    console.log('submitFunc data', data);
    submitFunc(data);
  });

  const onSubmit = () => {
    if (pageMode !== 'view') {
      onFormSubmit();
    } else {
      router.push({
        pathname: `/material/modify/${
          router.query.id !== undefined && router.query.id[1]
        }`,
        query: router.query,
      });
    }
  };

  // console.log(
  //   'initialData.pci_manufacturer',
  //   initialData.pci_manufacturer,
  //   'PARTNER',
  //   PARTNER,
  // PARTNER.find(
  //   el => el.value === initialData.pci_manufacturer
  // )
  // );

  // 현재 mode에 따른 설정 가져오기
  const currentSettings = settingsByMode[pageMode];

  return (
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
        id="tab_material_detail"
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <h2>원재료 기본 정보</h2>
      <div className="line line1">
        <div className="field field1">
          <div className="box_upload_image">
            <label className="req" htmlFor="product_img">
              대표 이미지
            </label>
            <div className="box_inp">
              <ImageUploader
                pageMode={pageMode}
                product_image={String(initialData?.material_image)}
                onImageChange={setSelectedImgFile}
              />
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
            <label htmlFor="external_code" className="">
              내부 코드
            </label>
            <div className={`box_inp ${errors.external_code ? 'error' : ''}`}>
              <input
                type="text"
                id="code"
                className="inp"
                placeholder="기존 발주GO에 등록된 상품이면 코드 입력 필수"
                disabled={isReadOnly}
                {...register('external_code')}
              />
              {errors.external_code && (
                <ErrorTxt>{errors.external_code.message}</ErrorTxt>
              )}
            </div>
          </div>
          <div className="box box3">
            <label htmlFor="evi_material_status" className="req">
              원재료 상태
            </label>
            <div
              className={`box_inp ${errors.evi_material_status ? 'error' : ''}`}
            >
              <select
                id="evi_material_status"
                disabled={isReadOnly}
                {...register('evi_material_status', {
                  required: '필수 입력항목입니다.',
                })}
              >
                <option value="">전체</option>
                {data0.map(el => (
                  <option key={el.value} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </select>
              {errors.evi_material_status && (
                <ErrorTxt>{errors.evi_material_status.message}</ErrorTxt>
              )}
            </div>
          </div>
        </div>
      </div>
      <h2>원재료 유형</h2>
      <div className="line line3">
        <div className="field field1">
          <label htmlFor="mci_large" className="req">
            분류 선택
          </label>
          <div className={`box_inp ${errors.mci_large ? 'error' : ''}`}>
            <select
              id="mci_large"
              disabled={isReadOnly}
              {...register('mci_large', { required: '필수 입력항목입니다.' })}
            >
              <option value="">대분류 전체</option>
              {CATEGORY1?.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.mci_large && (
              <ErrorTxt>{errors.mci_large.message}</ErrorTxt>
            )}
          </div>
          <div className={`box_inp ${errors.mci_middle ? 'error' : ''}`}>
            <select
              id="mci_middle"
              disabled={isReadOnly}
              {...register('mci_middle', { required: '필수 입력항목입니다.' })}
            >
              <option value="">중분류 전체</option>
              {CATEGORY2?.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.mci_middle && (
              <ErrorTxt>{errors.mci_middle.message}</ErrorTxt>
            )}
          </div>
          <div className={`box_inp ${errors.mci_small ? 'error' : ''}`}>
            <select
              id="mci_small"
              disabled={isReadOnly}
              {...register('mci_small', { required: '필수 입력항목입니다.' })}
            >
              <option value="">소분류 전체</option>
              {CATEGORY3?.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.mci_small && (
              <ErrorTxt>{errors.mci_small.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line2">
        <div className="field field1">
          <label htmlFor="evi_material_product_type" className="req">
            상품 구분
          </label>
          <div
            className={`box_inp ${
              errors.evi_material_product_type ? 'error' : ''
            }`}
          >
            <select
              id="evi_material_product_type"
              disabled={isReadOnly}
              {...register('evi_material_product_type', {
                required: '필수 입력항목입니다.',
              })}
            >
              <option value="">전체</option>
              {PRODUCT_TYPE.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>

            {errors.evi_material_product_type && (
              <ErrorTxt>{errors.evi_material_product_type.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>

      <div className="line line4">
        <div className="field field1">
          <label htmlFor="evi_material_storage_type" className="req">
            보관 구분
          </label>
          <div
            className={`box_inp ${
              errors.evi_material_storage_type ? 'error' : ''
            }`}
          >
            <select
              id="evi_material_storage_type"
              disabled={isReadOnly}
              {...register('evi_material_storage_type', {
                required: '필수 입력항목입니다.',
              })}
            >
              <option value="">전체</option>
              {STORAGE_TYPE.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.evi_material_storage_type && (
              <ErrorTxt>{errors.evi_material_storage_type.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line4">
        <div className="field field1">
          <label htmlFor="evi_material_sale_brand" className="req">
            판매브랜드(매장별)
          </label>
          <div
            className={`box_inp ${
              errors.evi_material_sale_brand ? 'error' : ''
            }`}
          >
            <select
              id="evi_material_sale_brand"
              disabled={isReadOnly}
              {...register('evi_material_sale_brand', {
                required: '필수 입력항목입니다.',
              })}
            >
              {SALE_BRAND.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.evi_material_sale_brand && (
              <ErrorTxt>{errors.evi_material_sale_brand.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line5">
        <div className="field field1">
          <label htmlFor="material_name_ko" className="req">
            원재료명 (한글)
          </label>
          <div className={`box_inp ${errors.material_name_ko ? 'error' : ''}`}>
            <input
              type="text"
              id="material_name_ko"
              className="inp"
              placeholder="한글 입력만 가능"
              disabled={isReadOnly}
              {...register('material_name_ko', {
                required: '필수 입력항목입니다.',
              })}
            />
            {errors.material_name_ko && (
              <ErrorTxt>{errors.material_name_ko.message}</ErrorTxt>
            )}
          </div>
        </div>
        <div className="field field2">
          <label htmlFor="material_name_en" className="">
            원재료명 (영어)
          </label>
          <div className={`box_inp ${errors.material_name_en ? 'error' : ''}`}>
            <input
              type="text"
              id="material_name_en"
              className="inp"
              placeholder="영문 입력만 가능"
              disabled={isReadOnly}
              {...register('material_name_en')}
            />
            {errors.material_name_en && (
              <ErrorTxt>{errors.material_name_en.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>

      <h2>상세 정보</h2>
      <div className="line line6">
        <div className="field field1">
          <label htmlFor="evi_material_trade_unit" className="req">
            거래 수량
          </label>
          <div
            className={`box_inp ${
              errors.evi_material_trade_unit ? 'error' : ''
            }`}
          >
            <select
              id="evi_material_trade_unit"
              disabled={isReadOnly}
              {...register('evi_material_trade_unit', {
                required: '필수 입력항목입니다.',
              })}
            >
              {TRADE_UNIT.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.evi_material_trade_unit && (
              <ErrorTxt>{errors.evi_material_trade_unit.message}</ErrorTxt>
            )}
          </div>
          <div
            className={`box_inp ${errors.material_trade_qty ? 'error' : ''}`}
          >
            <input
              type="text"
              id="material_trade_qty"
              className="inp"
              placeholder="0"
              disabled={isReadOnly}
              {...register('material_trade_qty', {
                required: '필수 입력항목입니다.',
              })}
            />
            {errors.material_trade_qty && (
              <ErrorTxt>{errors.material_trade_qty.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>

      <div className="line line7">
        <div className="field field1">
          <label htmlFor="evi_material_spec_unit" className="req">
            원재료 규격
          </label>
          <div
            className={`box_inp ${
              errors.evi_material_spec_unit ? 'error' : ''
            }`}
          >
            <select
              id="evi_material_spec_unit"
              disabled={isReadOnly}
              {...register('evi_material_spec_unit', {
                required: '필수 입력항목입니다.',
              })}
            >
              <option value="">전체</option>
              {SPEC_UNIT.map(el => (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {errors.evi_material_spec_unit && (
              <ErrorTxt>{errors.evi_material_spec_unit.message}</ErrorTxt>
            )}
          </div>
          <div className={`box_inp ${errors.material_spec_qty ? 'error' : ''}`}>
            <input
              type="text"
              id="material_spec_qty"
              className="inp"
              placeholder="0"
              disabled={isReadOnly}
              {...register('material_spec_qty', {
                required: '필수 입력항목입니다.',
              })}
            />
            {errors.material_spec_qty && (
              <ErrorTxt>{errors.material_spec_qty.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line8">
        <div className="field field1">
          <label htmlFor="material_config_qty" className="req">
            입수량
          </label>
          <div
            className={`box_inp ${errors.material_config_qty ? 'error' : ''}`}
          >
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="material_config_qty"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('material_config_qty', {
                  required: '필수 입력항목입니다.',
                })}
              />
              <span className="txt_addition">개</span>
            </span>
            {errors.material_config_qty && (
              <ErrorTxt>{errors.material_config_qty.message}</ErrorTxt>
            )}
          </div>
        </div>
        <div className="field field2">
          <label htmlFor="minimal_purchase_qty" className="req">
            최소 구매수량
          </label>
          <div
            className={`box_inp ${errors.minimal_purchase_qty ? 'error' : ''}`}
          >
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="minimal_purchase_qty"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('minimal_purchase_qty', {
                  required: '필수 입력항목입니다.',
                })}
              />
              <span className="txt_addition">BOX</span>
            </span>
            {errors.minimal_purchase_qty && (
              <ErrorTxt>{errors.minimal_purchase_qty.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line9">
        <div className="field field1">
          <label htmlFor="estimate_price" className="req">
            견적가
          </label>
          <div className={`box_inp ${errors.estimate_price ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="estimate_price"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('estimate_price', {
                  required: '필수 입력항목입니다.',
                })}
              />
              <span className="txt_addition">원(KRW)</span>
            </span>
            {errors.estimate_price && (
              <ErrorTxt>{errors.estimate_price.message}</ErrorTxt>
            )}
          </div>
        </div>
        <div className="field field2">
          <label htmlFor="first_cost" className="req">
            원가
          </label>
          <div className={`box_inp ${errors.first_cost ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="first_cost"
                className="inp"
                placeholder=""
                disabled={pageMode === 'view' || isCostDisable}
                {...register('first_cost', {
                  required: '필수 입력항목입니다.',
                })}
              />
              <span className="txt_addition">원(KRW)</span>
            </span>
            {errors.first_cost && (
              <ErrorTxt>{errors.first_cost.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line10">
        <div className="field field1">
          <label htmlFor="purchase_price" className="req">
            매입가
          </label>
          <div className={`box_inp ${errors.purchase_price ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="purchase_price"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('purchase_price', {
                  required: '필수 입력항목입니다.',
                })}
              />
              <span className="txt_addition">원(KRW)</span>
            </span>
            {errors.purchase_price && (
              <ErrorTxt>{errors.purchase_price.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line11">
        <div className="field field1">
          <label htmlFor="sale_price" className="req">
            판매가
          </label>
          <div className={`box_inp ${errors.sale_price ? 'error' : ''}`}>
            <span className="wrap_txt_inp">
              <input
                type="text"
                id="sale_price"
                className="inp"
                placeholder=""
                disabled={isReadOnly}
                {...register('sale_price', {
                  required: '필수 입력항목입니다.',
                })}
              />
              <span className="txt_addition">원(KRW)</span>
            </span>
            {errors.sale_price && (
              <ErrorTxt>{errors.sale_price.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>

      <div className="line line12">
        <div className="field field1">
          <label htmlFor="evi_taxable" className="req">
            과세 대상
          </label>
          <div className={`box_inp ${errors.evi_taxable ? 'error' : ''}`}>
            <Controller
              name="evi_taxable"
              control={control}
              rules={{ required: '필수 입력항목입니다.' }}
              render={({ field: { onChange, value, ref, ...restField } }) => (
                <RadioGroup
                  {...restField}
                  defaultValue={initialData?.evi_taxable || '1'}
                  onChange={onChange}
                  options={TAXABLE}
                  disabled={isReadOnly}
                />
              )}
            />
            {errors.evi_taxable && (
              <ErrorTxt>{errors.evi_taxable.message}</ErrorTxt>
            )}
          </div>
        </div>

        <div className="field field2">
          <label htmlFor="evi_vat" className="req">
            VAT
          </label>
          <div className={`box_inp ${errors.evi_vat ? 'error' : ''}`}>
            <Controller
              name="evi_vat"
              control={control}
              rules={{ required: '필수 입력항목입니다.' }}
              render={({ field: { onChange, value, ref, ...restField } }) => (
                <RadioGroup
                  {...restField}
                  defaultValue={initialData?.evi_vat || '1'}
                  onChange={onChange}
                  options={VAT}
                  disabled={isReadOnly}
                />
              )}
            />
            {errors.evi_vat && <ErrorTxt>{errors.evi_vat.message}</ErrorTxt>}
          </div>
        </div>
      </div>

      <div className="line line13">
        <div className="field field1">
          <label htmlFor="pci_manufacturer" className="req">
            제조사
          </label>
          <div className={`box_inp ${errors.pci_manufacturer ? 'error' : ''}`}>
            <Controller
              name="pci_manufacturer"
              control={control}
              rules={{ required: '필수 입력항목입니다.' }}
              render={({ field }) => {
                return (
                  <Select
                    options={PARTNER}
                    selectedOption={field.value}
                    setSelectedOption={field.onChange}
                    placeholder="예 : 태원"
                  />
                );
              }}
            />
            {/* <Controller
              name="pci_manufacturer"
              control={control}
              render={({ field }) => (
                <Select
                  options={PARTNER}
                  selectedOption={field.value}
                  setSelectedOption={field.onChange}
                />
              )}
            /> */}
            {errors.pci_manufacturer && (
              <ErrorTxt>{String(errors.pci_manufacturer.message)}</ErrorTxt>
            )}
          </div>
        </div>

        <div className="field field2">
          <label htmlFor="evi_country" className="req">
            원산지
          </label>
          <div className={`box_inp ${errors.evi_country ? 'error' : ''}`}>
            <Controller
              name="evi_country"
              control={control}
              rules={{ required: '필수 입력항목입니다.' }}
              render={({ field }) => (
                <Select
                  options={COUNTRY}
                  selectedOption={field.value}
                  setSelectedOption={field.onChange}
                  placeholder="예 : 대한민국"
                />
              )}
            />
            {errors.evi_country && (
              <ErrorTxt>{String(errors.evi_country.message)}</ErrorTxt>
            )}
          </div>
        </div>
      </div>

      <div className="line line14">
        <div className="field field1">
          <label htmlFor="ordering_place" className="req">
            발주처
          </label>
          <div className={`box_inp ${errors.ordering_place ? 'error' : ''}`}>
            <input
              type="text"
              id="ordering_place"
              className="inp"
              placeholder="발주GO 입력"
              disabled={isReadOnly}
              {...register('ordering_place', {
                required: '필수 입력항목입니다.',
              })}
            />
            {errors.ordering_place && (
              <ErrorTxt>{errors.ordering_place.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>

      <div className="line line15">
        <div className="field field1">
          <label htmlFor="material_description" className="">
            원재료 설명
          </label>
          <div
            className={`box_inp ${errors.material_description ? 'error' : ''}`}
          >
            <textarea
              id="material_description"
              placeholder="원재료에 대한 설명 입력"
              disabled={isReadOnly}
              {...register('material_description')}
            />
            {errors.material_description && (
              <ErrorTxt>{errors.material_description.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
    </FormWrap>
  );
};

export default MaterialForm;
