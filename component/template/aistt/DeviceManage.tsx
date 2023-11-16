import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { css } from '@emotion/react';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { FormWrap } from '@ComponentFarm/common';
import TimeHourInput from '@ComponentFarm/molecule/TimeInput/TimeHourInput';
import CameraForm from './CameraForm';

const FormCss = css`
  .line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h2 {
    display: flex;
    align-items: center;
    margin-bottom: 0;

    .sub-text {
      margin-left: 1.6rem;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.4;
      color: var(--color-neutral30);
    }
  }

  .first-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .border-none {
    border: 0 !important;
  }

  // half width
  .field {
    display: inline-flex;
    align-items: center;
    width: calc(50% - 3.3rem);
    padding: 0;

    &:first-of-type {
      margin-right: 6.6rem;
    }
  }

  label:not(.label_radio):not(.label_check) {
    width: 40%;
    color: var(--color-gray500);
  }
`;

const DeviceManage = () => {
  const methods = useForm({
    defaultValues: {
      name: '',
      type: '',
      status: '',
    },
  });

  const { register, handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <FormWrap css={FormCss}>
        <form onSubmit={handleSubmit(data => console.log(data))}>
          <section className="first-section">
            <h2 className="border-none">기기 기본 정보</h2>
            {/* <Button variant="gostPrimary">프로그램 재부팅</Button> */}
          </section>

          <div className="line">
            <div className="field">
              <label htmlFor="name">매장명</label>
              <div className="box_inp">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  disabled
                  className="inp"
                  type="text"
                />
              </div>
            </div>
            <div />
            <div />
          </div>
          <div className="line">
            <div className="field">
              <label htmlFor="name">기기 시작 시간</label>
              <div className="box_inp">
                <TimeHourInput value={0} onChange={() => {}} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="name">기기 종료 시간</label>
              <div className="box_inp">
                <TimeHourInput value={0} onChange={() => {}} />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="field">
              <label htmlFor="name">Wi-fi SSID</label>
              <div className="box_inp">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  className="inp"
                  type="text"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="name">Wi-fi Password</label>
              <div className="box_inp">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  className="inp"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="field">
              <label htmlFor="name">Host IP</label>
              <div className="box_inp">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  className="inp"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="field">
              <label htmlFor="name">Smart Topping table</label>
              <div className="box_inp">
                <RadioGroup
                  defaultValue="1"
                  options={[
                    { label: '사용', value: '1' },
                    { label: '사용 안함', value: '0' },
                  ]}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <h2>
            테이블 카메라
            <span className="sub-text">Table Camera</span>
          </h2>
          <div className="line">
            <div className="field">
              <label htmlFor="name">노출 시간 설정 (Exptime)</label>
              <div className="box_inp">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  className="inp"
                  type="text"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="name">ISO 대비 민감도 (Sensiso)</label>
              <div className="box_inp">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  className="inp"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="field">
              <label htmlFor="name">영상 프레임 (FPS)</label>
              <div className="box_inp">
                <input
                  {...register('name', {
                    required: true,
                  })}
                  className="inp"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="line">
            <div className="field">
              <label htmlFor="name">카메라 사용</label>
              <div className="box_inp">
                <RadioGroup
                  defaultValue="1"
                  options={[
                    { label: '사용', value: '1' },
                    { label: '사용 안함', value: '0' },
                  ]}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <CameraForm type="face" title="얼굴 카메라" subTitle="Face camera" />
          <CameraForm
            type="left-vat"
            title="왼쪽 바트 카메라"
            subTitle="Vat Camera-Left"
          />
          <CameraForm
            type="right-vat"
            title="오른쪽 바트 카메라"
            subTitle="Vat Camera-Right"
          />
        </form>
      </FormWrap>
    </FormProvider>
  );
};

export default DeviceManage;
