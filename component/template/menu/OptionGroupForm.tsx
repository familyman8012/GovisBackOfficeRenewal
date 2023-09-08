import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IMenuFormFields } from '@InterfaceFarm/menu';
import { Button } from '@ComponentFarm/atom/Button/Button';
import More from '@ComponentFarm/atom/icons/More';
import Plus from '@ComponentFarm/atom/icons/Plus';
import Up from '@ComponentFarm/atom/icons/Up';
import { MenuOptionGroupStyle } from './style';

interface MenuOptionGroupProps {
  id: string;
  index: number;
  editable?: boolean;
  selectView?: [number, number];
  onRemoveGroup: () => void;
  onSelectOption: (i: number, j: number) => void;
}

const MenuOptionGroup = ({
  id,
  index,
  selectView,
  editable,
  onRemoveGroup,
  onSelectOption,
}: MenuOptionGroupProps) => {
  const { control, register, getValues, watch, getFieldState, formState } =
    useFormContext<IMenuFormFields>();

  const [canEditName, setCanEditName] = React.useState(
    !getValues(`menu_groups.${index}.menu_option_category_idx`)
  );
  const [dropDown, setDropDown] = React.useState(false);

  const groupFormData = watch(`menu_groups.${index}`);

  const { append, fields } = useFieldArray<
    IMenuFormFields,
    `menu_groups.${number}.menu_options`
  >({
    control,
    name: `menu_groups.${index}.menu_options`,
    rules: {
      required: true,
    },
  });

  useEffect(() => {
    if (!dropDown) return () => {};

    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown')) {
        setDropDown(false);
      }
    };

    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  }, [dropDown]);

  const handleEnterKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setCanEditName(false);
    }
  };

  return (
    <MenuOptionGroupStyle>
      <div className="header">
        {canEditName ? (
          <input
            type="text"
            {...register(`menu_groups.${index}.menu_option_category_name`)}
            className="inp"
            placeholder="옵션 분류명을 입력해 주세요."
            autoComplete="off"
            onKeyDown={handleEnterKeydown}
            onBlur={() => setCanEditName(false)}
          />
        ) : (
          <span className="title">
            {groupFormData.menu_option_category_name}
          </span>
        )}

        <div className="dropdown">
          <button
            type="button"
            className="icon-btn"
            onClick={() => setDropDown(val => !val)}
          >
            <More />
          </button>
          {dropDown && (
            <div className="dropdown-list">
              <button
                type="button"
                onClick={() => {
                  setCanEditName(true);
                  setDropDown(false);
                }}
              >
                편집
              </button>
              <button
                type="button"
                onClick={() => {
                  onRemoveGroup();
                  setDropDown(false);
                }}
              >
                삭제
              </button>
            </div>
          )}
        </div>
        {/** @TODO Content dropdown */}
        <button type="button" className="icon-btn">
          <Up />
        </button>
      </div>

      <div className="content">
        {fields.map((field, j) => (
          <button
            key={field.id}
            className={`option ${
              selectView?.[0] === index && selectView?.[1] === j ? 'active' : ''
            }
            ${
              getFieldState(`menu_groups.${index}.menu_options.${j}`, formState)
                ?.invalid
                ? 'invalid'
                : ''
            }
            `}
            type="button"
            onClick={() => onSelectOption(index, j)}
          >
            {JSON.stringify(watch(`menu_groups.${index}.menu_options.${j}`))}
            {groupFormData.menu_options[j]?.menu_option_name
              ? getValues(
                  `menu_groups.${index}.menu_options.${j}.menu_option_name`
                )
              : '옵션 메뉴명을 입력해주세요'}
          </button>
        ))}
        {editable && (
          <Button
            variant="transparent"
            LeadingIcon={<Plus />}
            onClick={() => {
              append({
                menu_option_name: undefined,
                delivery_discount_price: 0,
                delivery_normal_price: 0,
                takeout_discount_price: 0,
                takeout_normal_price: 0,
                visit_discount_price: 0,
                visit_normal_price: 0,
              });
              onSelectOption(index, fields.length);
            }}
          >
            옵션 메뉴명 추가
          </Button>
        )}
      </div>
    </MenuOptionGroupStyle>
  );
};

export default MenuOptionGroup;
