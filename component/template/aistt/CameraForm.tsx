import { useFormContext } from 'react-hook-form';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';

interface Props {
  type: 'face' | 'left-vat' | 'right-vat';
  title?: string;
  subTitle?: string;
}

const CameraForm = ({ type, title, subTitle }: Props) => {
  const { register } = useFormContext<any>();

  return (
    <>
      <h2>
        {title}
        <span className="sub-text">{subTitle}</span>
      </h2>
      <div className="line">
        <div className="field">
          <label htmlFor="name">고유값 (ID)</label>
          <div className="box_inp">
            <input
              {...register(`${type}_camera_id`, {
                required: true,
              })}
              placeholder="숫자만 입력 가능"
              className="inp"
              type="text"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="name">해상도 가로값 (Width)</label>
          <div className="box_inp">
            <input
              {...register(`${type}_camera_width`, {
                required: true,
              })}
              placeholder="숫자만 입력 가능"
              className="inp"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="line">
        <div className="field">
          <label htmlFor="name">해상도 세로값 (Height)</label>
          <div className="box_inp">
            <input
              {...register(`${type}_camera_height`, {
                required: true,
              })}
              placeholder="숫자만 입력 가능"
              className="inp"
              type="text"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="name">영상 프레임 (FPS)</label>
          <div className="box_inp">
            <input
              {...register(`${type}_camera_fps`, {
                required: true,
              })}
              placeholder="숫자만 입력 가능"
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
    </>
  );
};

export default CameraForm;
