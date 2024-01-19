import React, { forwardRef, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import {
  FieldErrors,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetchStoreSearchModal } from '@ApiFarm/search-modal';
import { fetchStoreSalesView } from '@ApiFarm/store-sales-keyin';
import { ISaleskeyInRegisterParams } from '@InterfaceFarm/store-sales-keyin';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import Plus from '@ComponentFarm/atom/icons/Plus';
import { FormWrap } from '@ComponentFarm/common';
import StoreSearchPopup from '@ComponentFarm/modal/SearchPopup/StoreSearchPopup';
import { useGoMove } from '@HookFarm/useGoMove';
import SalesDataDailyForm from './SalesDataDailyForm';
import SalesDataDailyItem from './SalesDataDailyItem';
import { SalesDataFormStyle } from './style';
import useSelectItems from '../common/FilterTable/useFilterHandler';
import { FormStyle, MenuOptionListStyle } from '../menu/style';

interface SalesDataFormProps {
  id?: number;
  onSubmit: (formData: ISaleskeyInRegisterParams) => void;
}

const SalesDataForm = forwardRef<HTMLFormElement, SalesDataFormProps>(
  ({ id, onSubmit }, ref) => {
    const { onBack } = useGoMove();
    const saleRef = React.useRef<HTMLDivElement>(null);
    const isUpdate = useMemo(() => !!id, [id]);

    const [view, setView] = React.useState<number | undefined>(
      isUpdate ? 0 : undefined
    );

    const methods = useForm<
      ISaleskeyInRegisterParams & {
        store_name: string;
        isUpdate: boolean;
      }
    >({});

    const {
      register,
      watch,
      formState: { errors },
      handleSubmit,
      reset,
    } = methods;

    useEffect(() => {
      if (id) {
        fetchStoreSalesView(id)
          .then(res =>
            reset({
              isUpdate: true,
              store_id: res.store_id,
              store_name: res.store_name,
              key_in: [
                {
                  date: dayjs(res.date).format('YYYY-MM-DD'),
                  total_price: res.total_price,
                  items: res.order_item_list.map(item => ({
                    ...item,
                    price: Number(item.amount),
                    quantity: Number(item.quantity),
                  })),
                },
              ],
            })
          )
          .catch(onBack);
      }
    }, [id]);

    const { fields, append, remove } = useFieldArray({
      name: 'key_in',
      control: methods.control,
    });

    // Store Popup setup
    const storeSelect = useSelectItems('store_name', []);

    const { data: storeModalData } = useQuery(
      ['searchModal', 'store', storeSelect.filters],
      () => fetchStoreSearchModal(storeSelect.filters),
      { enabled: storeSelect.isOpen }
    );

    const storeSelectForParmas = useMemo(
      () => ({
        ...storeSelect,
        type: 'radio',
        setSelectItems: (items: any) => {
          methods.setValue('store_id', items[0].idx);
          methods.setValue('store_name', items[0].name);
          storeSelect.setSelectItems([items[0]]);
        },
      }),
      [storeSelect]
    );

    const handleValidateError = React.useCallback((error: FieldErrors) => {
      if (Object.keys(error).length === 1 && error.key_in) {
        saleRef?.current?.scrollIntoView();
        toast.error('입력 매출 정보를 확인해주세요.');
      }
    }, []);

    const replaceNumberedFormData =
      (submitFn: typeof onSubmit) => (formData: ISaleskeyInRegisterParams) => {
        const replaceFormData = {
          ...formData,
          key_in: formData.key_in.map(item => ({
            ...item,
            items: item.items.map(menu => ({
              ...menu,
              price: Number(menu.price),
              quantity: Number(menu.quantity),
            })),
            total_price: Number(item.total_price),
          })),
        };

        submitFn(replaceFormData);
      };

    return (
      <FormProvider {...methods}>
        <SalesDataFormStyle
          ref={ref}
          autoComplete="off"
          onSubmit={handleSubmit(
            replaceNumberedFormData(onSubmit),
            handleValidateError
          )}
        >
          <FormWrap css={FormStyle}>
            <h2>매장 정보</h2>
            <div className="line1">
              <div className="field1">
                <label htmlFor="select-store" className="req">
                  매장
                </label>
                <div
                  className={`box_inp combined ${
                    errors.store_id ? 'error' : ''
                  }`}
                >
                  <input
                    type="hidden"
                    {...register('store_id', {
                      required: true,
                    })}
                  />
                  {!isUpdate && (
                    <>
                      <Button
                        variant="gostSecondary"
                        disabled={isUpdate}
                        onClick={() => storeSelect.setIsOpen(true)}
                      >
                        매장 선택
                      </Button>
                      <StoreSearchPopup
                        setConfig={storeSelectForParmas}
                        data={storeModalData}
                      />
                    </>
                  )}

                  <input
                    id="select-store"
                    {...register('store_name', {
                      required: true,
                    })}
                    readOnly
                    disabled={isUpdate}
                    className="inp"
                    type="text"
                    placeholder="매장 입력"
                    onClick={() => storeSelect.setIsOpen(true)}
                  />
                  <ErrorTxt error={errors.store_id} />
                </div>
              </div>
            </div>
            <MenuOptionListStyle ref={saleRef}>
              <h2>일자별 매출</h2>
              <div className="wrap">
                <div className="side">
                  {!isUpdate && (
                    <Button
                      size="lg"
                      LeadingIcon={<Plus />}
                      onClick={() => {
                        const lastDailyItem = watch(
                          `key_in.${fields.length - 1}`
                        );
                        append({
                          date:
                            fields.length > 0
                              ? dayjs(lastDailyItem.date)
                                  .add(1, 'd')
                                  .format('YYYY-MM-DD')
                              : dayjs().format('YYYY-MM-DD'),
                          total_price: 0,
                          items: [],
                        });
                      }}
                    >
                      매출 추가하기
                    </Button>
                  )}
                  <div className="list">
                    {fields.map((item, index) => (
                      <SalesDataDailyItem
                        key={item.id}
                        index={index}
                        selectView={view}
                        onSelectOption={setView}
                        onRemoveCategory={() => {
                          remove(index);
                          setView(undefined);
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="view">
                  {fields.length === 0 ? (
                    <Empty>
                      <b>등록된 매출이 없습니다.</b>
                      <br />
                      <span className="sub">매출을 추가해 주세요.</span>
                    </Empty>
                  ) : view !== undefined ? (
                    fields.map((item, i) => (
                      <SalesDataDailyForm
                        key={i}
                        index={i}
                        active={view === i}
                      />
                    ))
                  ) : (
                    <Empty>
                      <b>매출을 선택해 주세요.</b>
                      <br />
                      <span className="sub">
                        날짜를 선택하면 상세 정보를 확인할 수 있습니다.
                      </span>
                    </Empty>
                  )}
                </div>
              </div>
            </MenuOptionListStyle>
          </FormWrap>
        </SalesDataFormStyle>
      </FormProvider>
    );
  }
);

SalesDataForm.displayName = 'SalesDataForm';

export default SalesDataForm;
