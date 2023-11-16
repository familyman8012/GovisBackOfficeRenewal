import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { MailSendContentWrap } from './mailSendPopup_style';

interface MailSendPopupProps {
  viewData: { label: string; value: string }[];
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

const MailSendPopup = ({
  viewData,
  title = '레포트',
  isOpen,
  onClose,
}: MailSendPopupProps) => {
  const {
    formState: { errors },
    control,
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      recipient: null,
      title: '',
      link: '',
      content: '',
    },
  });

  const onSubmit = (data: any) => {
    // Handle the POST request with the form data
    console.log(data);
  };

  return (
    <Modal
      title={`${title}  메일 발송`}
      isOpen={isOpen}
      onFormSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
      showCloseButton
    >
      <MailSendContentWrap>
        {viewData && (
          <form>
            <div className={`box_inp ${errors.recipient ? 'error' : ''}`}>
              <div className="field">
                <label htmlFor="recipient">받는 사람</label>
                <Controller
                  name="recipient"
                  control={control}
                  rules={{ required: '받는 사람을 입력해야 합니다.' }}
                  render={({ field }) => (
                    <CreatableSelect
                      classNamePrefix="input_mail_send"
                      isMulti
                      placeholder=""
                      noOptionsMessage={() => '검색 결과가 없습니다.'}
                      formatCreateLabel={userInput => `"${userInput}"`}
                      options={viewData}
                      value={field.value}
                      // @ts-ignore
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              {errors.recipient && (
                <ErrorTxt>{String(errors.recipient.message)}</ErrorTxt>
              )}
            </div>
            <div className={`box_inp ${errors.title ? 'error' : ''}`}>
              <div className="field">
                <label htmlFor="title">제목</label>
                <input
                  id="title"
                  type="text"
                  {...register('title', {
                    required: '필수 입력항목입니다.',
                  })}
                />
              </div>
              {errors.title && <ErrorTxt>{errors.title.message}</ErrorTxt>}
            </div>
            <div className={`box_inp ${errors.link ? 'error' : ''}`}>
              <div className="field">
                <label htmlFor="link">링크</label>
                <input
                  id="link"
                  type="text"
                  {...register('link', {
                    required: '필수 입력항목입니다.',
                  })}
                />
              </div>
              {errors.link && <ErrorTxt>{errors.link.message}</ErrorTxt>}
            </div>
            <div className={`box_inp ${errors.content ? 'error' : ''}`}>
              <div className="field">
                <label htmlFor="content">내용</label>
                <textarea
                  id="content"
                  {...register('content', {
                    required: '필수 입력항목입니다.',
                  })}
                />
              </div>
              {errors.content && <ErrorTxt>{errors.content.message}</ErrorTxt>}
            </div>
          </form>
        )}
      </MailSendContentWrap>
    </Modal>
  );
};

export default MailSendPopup;
