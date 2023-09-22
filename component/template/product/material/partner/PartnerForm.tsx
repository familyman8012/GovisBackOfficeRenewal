/** 협력업체 Form */
import { useEffect, useMemo, useState } from 'react';
import { runInAction } from 'mobx';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { IPartnerSaveReq } from '@InterfaceFarm/material';
import { AddressSearch } from '@ComponentFarm/modules/AddressSearch/AddressSearch';
import { Button } from '@ComponentFarm/atom/Button/Button';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { confirmModalStore } from '@MobxFarm/store';
import { convertEnv } from '@UtilFarm/convertEnvironment';
import { settingsByMode } from './const';

interface FormProps {
  initialData?: IPartnerSaveReq;
  environment: IEnvironmentRes;
  pageMode: string;
  partnerLabel: string;
  submitFunc: (data: IPartnerSaveReq) => void;
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
  environment,
  pageMode,
  submitFunc,
  partnerLabel = '',
}) => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabData = [
    {
      title: `${partnerLabel} 등록`,
    },
    {
      title: '변경내역',
    },
  ];

  const defaultValues = {
    ...initialData,
  } || {
    evi_partner_company_type: '',
    partner_company_name: '',
    business_number: '',
    business_address: '',
    evi_partner_company_status: '',
    partner_company_description: '',
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IPartnerSaveReq>({ defaultValues });

  const envList = environment?.list;

  const initialWatch = useMemo(
    () =>
      envList.find(
        el =>
          String(el.environment_variable_idx) ===
          String(initialData?.evi_partner_company_status)
      ),
    [envList, initialData?.evi_partner_company_status]
  );

  const statusWatch = envList.find(
    el =>
      String(el.environment_variable_idx) ===
      String(watch('evi_partner_company_status'))
  );

  const isReadOnly =
    pageMode === 'view' || statusWatch?.code === 'pcs_discontinuation';

  const changeAlertModal = () => {
    runInAction(() => {
      confirmModalStore.openModal({
        title: '변경 전 주의사항',
        content: (
          <p>
            운영 상태를 중단으로 변경하실 경우,
            <br />
            추후 복구가 불가능합니다.
            <br />
            변경하시겠습니까?
          </p>
        ),
        onFormSubmit: () => {
          confirmModalStore.isOpen = false;
        },
        onCancel: () => {
          setValue(
            'evi_partner_company_status',
            String(initialData?.evi_partner_company_status)
          );
          confirmModalStore.isOpen = false;
        },
        submitButtonText: '확인',
      });
    });
  };

  useEffect(() => {
    if (
      initialWatch?.code !== 'pcs_discontinuation' &&
      statusWatch?.code === 'pcs_discontinuation'
    ) {
      changeAlertModal();
    }
  }, [initialWatch?.code, statusWatch]);

  const onFormSubmit = handleSubmit((data: any) => {
    console.log('submitFunc data', data);
    submitFunc(data);
  });

  const onSubmit = () => {
    if (pageMode !== 'view') {
      onFormSubmit();
    } else {
      router.push({
        pathname: `/material/partner/modify/${
          router.query.id !== undefined && router.query.id[1]
        }`,
        query: router.query,
      });
    }
  };

  const settingsByModeObj = settingsByMode(partnerLabel);
  // 현재 mode에 따른 설정 가져오기
  const currentSettings = settingsByModeObj[pageMode];

  return (
    <FormWrap css={FormStyles}>
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
      <h3>{partnerLabel} 기본 정보</h3>
      <div className="line line1">
        <div className="field field1">
          <label htmlFor="evi_partner_company_type" className="">
            {partnerLabel} 코드
          </label>
          <div className="box_inp">
            <input
              type="text"
              id="evi_partner_company_type"
              className="inp"
              placeholder={`${partnerLabel} 등록 시, 자동 생성`}
              disabled
            />
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
              disabled={isReadOnly}
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
              <option value="">상태 선택</option>
              {convertEnv('partner_company_status', environment.list).map(
                el => (
                  <option key={el.value} value={String(el.value)}>
                    {el.label}
                  </option>
                )
              )}
            </select>
            {errors.evi_partner_company_status && (
              <ErrorTxt>{errors.evi_partner_company_status.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      <div className="line line4">
        <div className="field field1">
          <label htmlFor="partner_company_description" className="">
            {partnerLabel} 설명
          </label>
          <div
            className={`box_inp ${
              errors.partner_company_description ? 'error' : ''
            }`}
          >
            <textarea
              id="partner_company_description"
              placeholder={`${partnerLabel}에 대한 설명 입력`}
              disabled={isReadOnly}
              {...register('partner_company_description')}
            />
            {errors.partner_company_description && (
              <ErrorTxt>{errors.partner_company_description.message}</ErrorTxt>
            )}
          </div>
        </div>
      </div>
      {/* <div className="btn-wrap">
        <Button variant="gostSecondary" onClick={() => onBack()}>
          취소
        </Button>
        <Button type="submit" onClick={onFormSubmit}>
          {isEdit ? '수정' : '등록'}
        </Button>
      </div> */}
    </FormWrap>
  );
};

export default PartnerForm;
