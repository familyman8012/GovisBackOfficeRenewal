import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import Plus from '@ComponentFarm/atom/icons/Plus';
import MenuOptionDetail from './OptionDetailForm';
import MenuOptionGroup from './OptionGroupForm';
import type { FormFields } from './RegisterForm';
import { MenuOptionListStyle } from './style';

export const MenuOptionForm = () => {
  const { control } = useFormContext<FormFields>();
  const { append, fields, remove } = useFieldArray<FormFields>({
    name: 'menu_groups',
    control,
  });

  const [view, setView] = useState<[number, number] | undefined>(undefined);

  return (
    <MenuOptionListStyle>
      <h2>옵션 메뉴 정보</h2>
      <div className="wrap">
        <div className="side">
          <Button
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
          <div className="list">
            {fields.map(({ id }, index) => (
              <MenuOptionGroup
                key={id}
                id={id}
                index={index}
                selectView={view}
                onSelectOption={(...args) => setView(args)}
                onRemoveGroup={() => {
                  remove(index);
                  setView(undefined);
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
            <MenuOptionDetail
              key={`${view[0]}_${view[1]}`}
              groupIndex={view[0]}
              optionIndex={view[1]}
            />
          )}
        </div>
      </div>
    </MenuOptionListStyle>
  );
};
