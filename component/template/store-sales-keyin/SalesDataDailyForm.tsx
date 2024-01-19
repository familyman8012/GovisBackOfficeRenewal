import { useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { IMenuListItem } from '@InterfaceFarm/menu';
import {
  ISalesKeyInFormFields,
  ISaleskeyInRegisterParams,
} from '@InterfaceFarm/store-sales-keyin';
import DatePicker from '@ComponentFarm/modules/DatePicker/DatePicker';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import Ellipse from '@ComponentFarm/atom/icons/Ellipse';
import { Table, TableWrap } from '@ComponentFarm/common';
import MenuSelectModal from '@ComponentFarm/molecule/MenuSelect';
import { getTableWidthPercentage } from '@UtilFarm/calcSize';
import { replaceNumber } from '@UtilFarm/number';
import { MenuOptionDetailStyle } from '../menu/style';

interface SalesDastaDailyFormProps {
  index: number;
  active?: boolean;
}

const SalesDataDailyForm = ({ index, active }: SalesDastaDailyFormProps) => {
  const {
    register,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext<ISaleskeyInRegisterParams & { isUpdate: boolean }>();

  const [menuSearchOpen, setMenuSearchOpen] = useState(false);

  const formKey = `key_in.${index}` as `key_in.${number}`;
  const formData = watch(`${formKey}`);
  const error = errors.key_in?.[index];

  const { append, remove, fields } = useFieldArray<
    ISalesKeyInFormFields,
    `key_in.${number}.items`
  >({
    name: `${formKey}.items`,
  });

  const appendMenu = (selectedMenuList: IMenuListItem[]) => {
    append(
      selectedMenuList
        .filter(
          item =>
            !fields.find(field => field.menu_info_idx === item.menu_info_idx)
        )
        .map(item => ({
          menu_info_idx: item.menu_info_idx,
          menu_name: item.menu_name,
          menu_code: item.menu_code,
          quantity: 0,
          price: 0,
        }))
    );
  };

  return (
    <MenuOptionDetailStyle style={{ display: !active ? 'none' : '' }}>
      <div className="header">
        <Controller
          name={`${formKey}.date`}
          rules={{ required: true }}
          control={control}
          render={({ field: { value, onChange } }) => (
            <div className={`box_inp ${error?.date ? 'error' : ''}`}>
              <DatePicker
                disabled={!!getValues('isUpdate')}
                selectedDate={value}
                placeholderText="날짜를 선택해주세요."
                onChange={(date: string) => onChange(date)}
              />
              <ErrorTxt error={error?.date} />
            </div>
          )}
        />
      </div>
      <section>
        <h3>총 매출액</h3>
        <div
          className={`box_inp inline_box ${error?.total_price ? 'error' : ''}`}
        >
          <div className="price">
            <input
              {...register(`${formKey}.total_price`, {
                required: true,
                setValueAs: replaceNumber,
              })}
              type="text"
              className="inp"
              value={formData.total_price}
            />
            <span>원</span>
          </div>
          <ErrorTxt error={error?.total_price} />
        </div>
      </section>

      <TableWrap>
        <div className="caption">
          <h3 className="title">판매 메뉴 정보</h3>
          <Button variant="gostPrimary" onClick={() => setMenuSearchOpen(true)}>
            판매 메뉴 추가
          </Button>
          <MenuSelectModal
            type="checkbox"
            open={menuSearchOpen}
            onSelect={appendMenu}
            onClose={() => setMenuSearchOpen(false)}
          />
        </div>
        <Table className="basic">
          <colgroup>
            <col width={getTableWidthPercentage(48, 1181)} />
            <col width={getTableWidthPercentage(502, 1181)} />
            <col width={getTableWidthPercentage(248, 1181)} />
            <col width={getTableWidthPercentage(248, 1181)} />
          </colgroup>

          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>판매 메뉴명</th>
              <th>판매 수량</th>
              <th>판매 금액</th>
            </tr>
          </thead>
          <tbody>
            {fields.length === 0 && (
              <tr className="empty">
                <td colSpan={4}>
                  <Empty>추가된 메뉴가 없습니다.</Empty>
                </td>
              </tr>
            )}
            {fields.map((item, i) => (
              <tr key={item.menu_info_idx} className="empty">
                <td className="center">
                  <Ellipse className="remove-icon" onClick={() => remove(i)} />
                </td>
                <td>{item.menu_name}</td>
                <td className="right">
                  <div
                    className={`box_inp ${
                      error?.items?.[i]?.quantity ? 'error' : ''
                    }`}
                  >
                    <input
                      {...register(`${formKey}.items.${i}.quantity`, {
                        required: true,
                        setValueAs: replaceNumber,
                      })}
                      type="text"
                      className="inp"
                      value={getValues(`${formKey}.items.${i}.quantity`)}
                    />
                    <ErrorTxt error={error?.items?.[i]?.quantity} />
                  </div>
                </td>
                <td className="right">
                  <div
                    className={`box_inp ${
                      error?.items?.[i]?.price ? 'error' : ''
                    }`}
                  >
                    <input
                      {...register(`${formKey}.items.${i}.price`, {
                        required: true,
                        setValueAs: replaceNumber,
                      })}
                      type="text"
                      className="inp"
                      value={getValues(`${formKey}.items.${i}.price`)}
                    />
                    <ErrorTxt error={error?.items?.[i]?.price} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
    </MenuOptionDetailStyle>
  );
};

export default SalesDataDailyForm;
