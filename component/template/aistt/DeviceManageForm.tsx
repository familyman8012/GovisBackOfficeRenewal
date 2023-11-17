import React from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useQuery } from 'react-query';
import { fetchAisttStoreInfo } from '@ApiFarm/aistt';
import { IFqsStoreInfoResponse } from '@InterfaceFarm/ai-fqs';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { FormWrap } from '@ComponentFarm/common';
import TimeHourInput from '@ComponentFarm/molecule/TimeInput/TimeHourInput';
import CameraForm from './CameraForm';
import { StoreFormStyle } from './style';

export type FormFields = IFqsStoreInfoResponse & {
  store_idx: string;
};

interface Props {
  storeId: string;
  onSubmit: (data: FormFields) => void;
}
const DeviceManage = React.forwardRef<HTMLFormElement, Props>(
  ({ storeId, onSubmit }, ref) => {
    const methods = useForm<FormFields>();
    const { register, handleSubmit, reset, control } = methods;

    useQuery(['aistt-store-info'], () => fetchAisttStoreInfo(Number(storeId)), {
      onSuccess: data => reset(data),
    });

    return (
      <FormProvider {...methods}>
        <FormWrap css={StoreFormStyle}>
          <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
            <input {...register('store_idx')} type="hidden" value={storeId} />
            <section className="first-section">
              <h2 className="border-none">기기 기본 정보</h2>
            </section>
            <div className="line">
              <div className="field">
                <label htmlFor="name">매장명</label>
                <div className="box_inp">
                  <input
                    {...register('info.store_name')}
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
                  <Controller
                    name="info.opening_time"
                    defaultValue="00:00"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TimeHourInput value={value} onChange={onChange} />
                    )}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="name">기기 종료 시간</label>
                <div className="box_inp">
                  <Controller
                    name="info.closeing_time"
                    defaultValue="00:00"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TimeHourInput value={value} onChange={onChange} />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="line">
              <div className="field">
                <label htmlFor="name">Wi-fi SSID</label>
                <div className="box_inp">
                  <input
                    {...register('info.wifi_ssid')}
                    className="inp"
                    type="text"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="name">Wi-fi Password</label>
                <div className="box_inp">
                  <input
                    {...register('info.wifi_pwd')}
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
                    {...register('info.host_ip')}
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
                  <Controller
                    control={control}
                    name="info.is_use_stt"
                    defaultValue="0"
                    render={({ field: { value, onChange } }) => (
                      <RadioGroup
                        defaultValue={`${value ?? 0}`}
                        options={[
                          { label: '사용', value: '1' },
                          { label: '사용 안함', value: '0' },
                        ]}
                        onChange={onChange}
                      />
                    )}
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
                    {...register('camera_table.shutter_speed')}
                    className="inp"
                    type="text"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="name">ISO 대비 민감도 (Sensiso)</label>
                <div className="box_inp">
                  <input
                    {...register('camera_table.iso')}
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
                    {...register('camera_table.fps')}
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
                  <Controller
                    control={control}
                    name="camera_table.is_use"
                    render={({ field: { value, onChange } }) => (
                      <RadioGroup
                        defaultValue={`${value}`}
                        options={[
                          { label: '사용', value: '1' },
                          { label: '사용 안함', value: '0' },
                        ]}
                        onChange={val => onChange(Number(val))}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <CameraForm
              type="camera_face"
              title="얼굴 카메라"
              subTitle="Face camera"
            />
            <CameraForm
              type="camera_vat_left"
              title="왼쪽 바트 카메라"
              subTitle="Vat Camera-Left"
            />
            <CameraForm
              type="camera_vat_right"
              title="오른쪽 바트 카메라"
              subTitle="Vat Camera-Right"
            />
          </form>
        </FormWrap>
      </FormProvider>
    );
  }
);

DeviceManage.displayName = 'DeviceManage';

export default DeviceManage;
