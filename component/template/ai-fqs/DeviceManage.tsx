import React from 'react';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { FormWrap } from '@ComponentFarm/common';
import TimeSecondInput from '@ComponentFarm/molecule/TimeSecondInput/TimeSecondInput';
import { SectionStyle } from './style';

const FormCss = css`
  .line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  // half width
  .field {
    width: calc(50% - 3.3rem);
    margin-right: 6.6rem;
  }
`;

const DeviceManage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      type: '',
      status: '',
    },
  });

  return (
    <FormWrap css={FormCss}>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <SectionStyle>
          <h2>기기 기본 정보</h2>
          <Button variant="gostPrimary">프로그램 재부팅</Button>
        </SectionStyle>
        <div className="line">
          <div className="field">
            <label htmlFor="name">매장 코드</label>
            <div className="box_inp combined">
              <input
                {...register('name', {
                  required: true,
                })}
                className="inp"
                type="text"
              />
              {/* <ErrorTxt error={errors.evi_menu_group || errors.menu_name} /> */}
            </div>
          </div>
          <div />
          <div />
        </div>
        <div className="line">
          <div className="field">
            <label htmlFor="name">매장명</label>
            <div className="box_inp combined">
              <input
                {...register('name', {
                  required: true,
                })}
                className="inp"
                type="text"
              />
              {/* <ErrorTxt error={errors.evi_menu_group || errors.menu_name} /> */}
            </div>
          </div>
          <div />
          <div />
        </div>
        <div className="line">
          <div className="field">
            <label htmlFor="name">기기 시작 시간</label>
            <div className="box_inp combined">
              <TimeSecondInput value={0} onChange={() => {}} />
              {/* <ErrorTxt error={errors.evi_menu_group || errors.menu_name} /> */}
            </div>
          </div>
          <div className="field">
            <label htmlFor="name">기기 종료 시간</label>
            <div className="box_inp combined">
              <TimeSecondInput value={0} onChange={() => {}} />
              {/* <ErrorTxt error={errors.evi_menu_group || errors.menu_name} /> */}
            </div>
          </div>
        </div>
        {/* <h2>메뉴 상세 정보</h2>
        <div className="line2">
          <div className="field2" />
        </div>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={config.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={config.type}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={config.status}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button> */}
      </form>
    </FormWrap>
  );
};

export default DeviceManage;
