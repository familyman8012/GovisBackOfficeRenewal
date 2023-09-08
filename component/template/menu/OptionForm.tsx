/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IMenuFormFields } from '@InterfaceFarm/menu';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import Plus from '@ComponentFarm/atom/icons/Plus';
import MenuOptionDetail from './OptionDetailForm';
import MenuOptionGroup from './OptionGroupForm';
import { MenuOptionListStyle } from './style';

export const MenuOptionForm = React.forwardRef<
  HTMLElement,
  {
    editable?: boolean;
  }
>(({ editable }, ref) => {
  const { control, watch, setValue } = useFormContext<IMenuFormFields>();
  const { append, fields, remove } = useFieldArray<
    IMenuFormFields,
    'menu_groups'
  >({
    name: 'menu_groups',
    control,
    shouldUnregister: true,
  });

  const groups = watch('menu_groups');
  const view = watch('option_view');

  useEffect(
    () => () => {
      setValue('option_view', undefined);
    },
    []
  );

  return (
    <MenuOptionListStyle ref={ref}>
      <h2>옵션 메뉴 정보</h2>
      <div className="wrap">
        <div className="side">
          {editable && (
            <Button
              disabled={!editable}
              size="lg"
              LeadingIcon={<Plus />}
              onClick={() =>
                append({
                  menu_option_category_name: `${fields.length + 1}`,
                  menu_options: [],
                })
              }
            >
              옵션 추가하기
            </Button>
          )}
          <div className="list">
            {fields.map(({ id }, index) => (
              <MenuOptionGroup
                key={id}
                id={id}
                index={index}
                selectView={view}
                editable={editable}
                onSelectOption={(...args) => setValue('option_view', args)}
                onRemoveGroup={() => {
                  remove(index);
                  setValue('option_view', undefined);
                }}
              />
            ))}
          </div>
        </div>
        <div className="view">
          {!view ? (
            <Empty>
              <b>등록된 정보가 없습니다.</b>
              <br />
              <span className="sub">옵션을 추가해 주세요.</span>
            </Empty>
          ) : (
            groups?.map((field, i) => {
              watch(`menu_groups.${i}.menu_options`);
              return field?.menu_options.map((field2, j) => (
                <MenuOptionDetail
                  editable={editable}
                  key={`${i}_${j}`}
                  currentView={view}
                  groupIndex={i}
                  optionIndex={j}
                />
              ));
            })
          )}
        </div>
      </div>
    </MenuOptionListStyle>
  );
});

MenuOptionForm.displayName = 'MenuOptionForm';
