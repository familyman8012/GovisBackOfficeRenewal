import React from 'react';
import { runInAction } from 'mobx';
import { Controller, useFormContext } from 'react-hook-form';
import { ISalesKeyInFormFields } from '@InterfaceFarm/store-sales-keyin';
import DatePicker from '@ComponentFarm/modules/DatePicker/DatePicker';
import { confirmModalStore } from '@MobxFarm/store';
import { SalesDataDailyItemStyle } from './style';
import OptionDropdown from '../menu/TabDropdown';

interface MenuOptionGroupProps {
  index: number;
  selectView?: number;
  onRemoveCategory: () => void;
  onSelectOption: (view?: number) => void;
}

const SalesDataDailyItem = ({
  index,
  selectView,
  onRemoveCategory,
  onSelectOption,
}: MenuOptionGroupProps) => {
  const { watch, getFieldState } = useFormContext<ISalesKeyInFormFields>();

  const [canEdit, setCanEdit] = React.useState(true);

  const formKey = `key_in.${index}` as `key_in.${number}`;
  const categoryFormData = watch(formKey);

  const checkSaveHandler = () => {
    setCanEdit(false);
    onSelectOption(index);
  };

  return (
    <SalesDataDailyItemStyle
      className={`option ${selectView === index ? 'active' : ''} ${
        getFieldState(formKey).invalid ? 'invalid' : ''
      }`}
      onClick={() => onSelectOption(index)}
    >
      <div className={`header ${canEdit ? 'editable' : ''}`}>
        {canEdit ? (
          <Controller
            name={`${formKey}.date`}
            render={({ field: { value, onChange } }) => (
              <DatePicker
                autoFocus
                selectedDate={value}
                onChange={(date: string) => {
                  onChange(date);
                  checkSaveHandler();
                }}
                onBlur={checkSaveHandler}
                portalId="modal-root"
              />
            )}
          />
        ) : (
          <span className="title">{categoryFormData?.date}</span>
        )}
        {canEdit ? (
          <button
            className="save-button"
            type="button"
            onClick={checkSaveHandler}
          >
            저장
          </button>
        ) : (
          <OptionDropdown
            actions={
              <>
                <button
                  type="button"
                  onClick={() => {
                    setCanEdit(true);
                  }}
                >
                  편집
                </button>
                <button
                  type="button"
                  onClick={() => {
                    runInAction(() => {
                      confirmModalStore.openModal({
                        title: '매출 삭제',
                        content: <p>매출 항목을 삭제하시겠습니까?</p>,
                        onFormSubmit: () => {
                          onRemoveCategory();
                          confirmModalStore.isOpen = false;
                        },
                        onCancel: () => {
                          confirmModalStore.isOpen = false;
                        },
                      });
                    });
                  }}
                >
                  삭제
                </button>
              </>
            }
          />
        )}
      </div>
    </SalesDataDailyItemStyle>
  );
};

export default SalesDataDailyItem;
