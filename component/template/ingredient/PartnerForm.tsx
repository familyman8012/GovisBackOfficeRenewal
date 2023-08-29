/** 협력업체 Form */
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { AddressSearch } from '@ComponentFarm/modules/AddressSearch/AddressSearch';
import { Button } from '@ComponentFarm/atom/Button/Button';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { FormWrap } from '@ComponentFarm/common';
import { useGoMove } from '@HookFarm/useGoMove';

type FormFields = {
  partner_company_code: string; // TODO: replace with the actual value
  partner_company_name: string; // TODO: replace with the actual value
  business_number: string; // TODO: replace with the actual value
  business_address: string; // TODO: replace with the actual value
  evi_partner_company_status: string; // TODO: replace with the actual value
  partner_company_descriptionType: string; // TODO: replace with the actual value
};

interface FormProps {
  initialData?: FormFields;
  loading?: boolean;
  partnerLabel: string;
  onSubmit: (data: FormFields) => void;
}

const FormStyles = css`
  h3 {
    font-weight: 700;
    padding: 3.2rem 0;
    margin: 0;
    font-size: var(--font-size6);
    border-bottom: 1px solid var(--color-neutral90);
  }

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

  .btn-wrap {
    margin-top: 10rem;
    display: flex;
    justify-content: flex-end;
    gap: 0 1.6rem;
    padding-right: 5.6rem;
  }
`;

const PartnerForm: React.FC<FormProps> = ({
  initialData,
  loading,
  onSubmit,
  partnerLabel = '',
}) => {
  const { onBack } = useGoMove();
  const isEdit = !!initialData;
  const isReadOnly = !!initialData;

  const defaultValues = isEdit
    ? initialData
    : {
        partner_company_code: '', // TODO: replace with the actual value
        partner_company_name: '', // TODO: replace with the actual value
        business_number: '', // TODO: replace with the actual value
        business_address: '', // TODO: replace with the actual value
        evi_partner_company_status: '', // TODO: replace with the actual value
        partner_company_descriptionType: '', // TODO: replace with the actual value
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ defaultValues });

  const onFormSubmit = handleSubmit(onSubmit);

  return (
    <FormWrap onSubmit={onFormSubmit} css={FormStyles}>
      <h3>{partnerLabel} 기본 정보</h3>
      <div className="line line1">
        <div className="field field1">
          <label htmlFor="partner_company_code" className="">
            {partnerLabel} 코드
          </label>
          <div
            className={`box_inp ${errors.partner_company_code ? 'error' : ''}`}
          >
            <input
              type="text"
              id="partner_company_code"
              className="inp"
              placeholder={`${partnerLabel} 등록 시, 자동 생성`}
              disabled
              {...register('partner_company_code')}
            />
            {errors.partner_company_code && (
              <ErrorTxt>{errors.partner_company_code.message}</ErrorTxt>
            )}
          </div>
        </div>
        <div className="field field2">
          <label htmlFor="partner_company_name" className="req">
            {partnerLabel} 명(한글)
          </label>
          <div
            className={`box_inp ${errors.partner_company_name ? 'error' : ''}`}
          >
            <input
              type="text"
              id="partner_company_name"
              className="inp"
              placeholder={`${partnerLabel} 명 (한글)`}
              disabled={isReadOnly}
              {...register('partner_company_name', {
                required: '필수 입력항목입니다.',
              })}
            />
            {errors.partner_company_name && (
              <ErrorTxt>{errors.partner_company_name.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line2">
        <div className="field field1">
          <label htmlFor="business_number" className="req">
            사업자 번호
          </label>
          <div className={`box_inp ${errors.business_number ? 'error' : ''}`}>
            <input
              type="text"
              id="business_number"
              className="inp"
              placeholder=""
              disabled={isReadOnly}
              {...register('business_number', {
                required: '필수 입력항목입니다.',
              })}
            />
            {errors.business_number && (
              <ErrorTxt>{errors.business_number.message}</ErrorTxt>
            )}
          </div>
        </div>
        <div className="field field2">
          <label htmlFor="business_address" className="req">
            사업자 주소
          </label>
          <div className={`box_inp ${errors.business_address ? 'error' : ''}`}>
            <AddressSearch
              {...register('business_address', {
                required: '필수 입력 항목입니다.',
              })}
              onSelect={address => {
                console.log('onSelect', address);
              }}
            />

            {errors.business_address && (
              <ErrorTxt>{errors.business_address.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line3">
        <div className="field field1">
          <label htmlFor="evi_partner_company_status" className="req">
            상태
          </label>
          <div
            className={`box_inp ${
              errors.evi_partner_company_status ? 'error' : ''
            }`}
          >
            <select
              id="evi_partner_company_status"
              disabled={isReadOnly}
              {...register('evi_partner_company_status', {
                required: '필수 입력항목입니다.',
              })}
            >
              <option value="">상태 전체</option>
            </select>
            {errors.evi_partner_company_status && (
              <ErrorTxt>{errors.evi_partner_company_status.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line4">
        <div className="field field1">
          <label htmlFor="partner_company_descriptionType" className="">
            {partnerLabel} 설명
          </label>
          <div
            className={`box_inp ${
              errors.partner_company_descriptionType ? 'error' : ''
            }`}
          >
            <textarea
              id="partner_company_descriptionType"
              placeholder={`${partnerLabel}에 대한 설명 입력`}
              disabled={isReadOnly}
              {...register('partner_company_descriptionType')}
            />
            {errors.partner_company_descriptionType && (
              <ErrorTxt>
                {errors.partner_company_descriptionType.message}
              </ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <Button variant="gostSecondary" onClick={() => onBack()}>
          취소
        </Button>
        <Button type="submit" onClick={onFormSubmit}>
          {isEdit ? '수정' : '등록'}
        </Button>
      </div>
    </FormWrap>
  );
};

export default PartnerForm;
