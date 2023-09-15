import React, { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { IRecipeFormFields } from '@InterfaceFarm/product-recipe';
import More from '@ComponentFarm/atom/icons/More';
import { MenuOptionGroupStyle } from '../menu/style';

interface RecipeStepCategoryProps {
  index: number;
  editable?: boolean;
  selectedView?: number;
  onRemoveCategory: () => void;
  onSelectStep: (view?: number) => void;
}

const RecipeStepCategory = ({
  index,
  editable,
  selectedView,
  onRemoveCategory,
  onSelectStep,
}: RecipeStepCategoryProps) => {
  const {
    register,
    getValues,
    watch,
    setValue,
    // formState: { errors },
  } = useFormContext<IRecipeFormFields>();

  const recipe_info_idx = watch('recipe_info_idx');
  const formKey = `recipe_steps.${index}` as `recipe_steps.${number}`;

  const [canEditName, setCanEditName] = React.useState(
    !getValues(`${formKey}.recipe_step_idx`)
  );

  const [dropDown, setDropDown] = React.useState(false);

  const stepFormData = watch(`${formKey}`);

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

  // const createMenuCategory = useMutation(() => {}, {
  //   onSuccess: data => {
  //     toast.info('옵션 그룹이 생성되었습니다.');
  //     setValue(`${formKey}.recipe_step_idx`, undefined);
  //     setCanEditName(false);
  //   },
  // });

  // const updateMenuCategory = useMutation(() => {}, {
  //   onSuccess: () => {
  //     toast.info('옵션 그룹이 수정되었습니다.');
  //     setCanEditName(false);
  //   },
  // });

  // const removeMenuCategory = useMutation(() => {}, {
  //   onSuccess: () => {
  //     toast.info('옵션 그룹이 삭제되었습니다.');
  //     onRemoveCategory();
  //   },
  // });

  // const isLoading =
  //   createMenuCategory.isLoading || updateMenuCategory.isLoading;
  const isLoading = false;

  const checkSaveHandler = useCallback(() => {
    if (isLoading) return;
    if (!recipe_info_idx) {
      setCanEditName(false);
      onSelectStep(index);
      return;
    }

    if (stepFormData.recipe_step_idx) {
      // updateMenuCategory.mutate({
      //   menu_option_category_idx: categoryFormData.menu_option_category_idx,
      //   menu_option_category_name: categoryFormData.menu_option_category_name,
      // });
    } else {
      // createMenuCategory.mutateAsync({
      //   menu_info_idx: menu_info_idx ?? -1,
      //   menu_option_category_name: categoryFormData.menu_option_category_name,
      // });
    }
  }, [stepFormData, recipe_info_idx, isLoading, index]);

  const checkRemoveHandler = useCallback(async () => {
    if (isLoading) return;
    if (!recipe_info_idx || !stepFormData.recipe_step_idx) {
      onRemoveCategory();
    }

    // removeMenuCategory.mutate(stepFormData.recipe_step_idx ?? -1);
  }, [stepFormData, recipe_info_idx, isLoading, onRemoveCategory]);

  const handleEnterKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkSaveHandler();
    }
  };

  return (
    <MenuOptionGroupStyle
      className={`option ${selectedView === index ? 'active' : ''}`}
    >
      <button
        type="button"
        className="header"
        onClick={() => onSelectStep(index)}
      >
        {canEditName ? (
          <input
            type="text"
            {...register(`${formKey}.recipe_step_name`)}
            className="inp"
            placeholder="레시피 단계명을 입력해주세요."
            autoComplete="off"
            onKeyDown={handleEnterKeydown}
            onBlur={checkSaveHandler}
          />
        ) : (
          <span className="title">{stepFormData?.recipe_step_name}</span>
        )}

        <div className="dropdown">
          {editable && (
            <button
              type="button"
              className="icon-btn"
              onClick={() => setDropDown(val => !val)}
            >
              <More />
            </button>
          )}
          {dropDown && (
            <div className="dropdown-list">
              <button
                type="button"
                disabled={isLoading}
                onClick={() => {
                  setDropDown(false);
                  setCanEditName(true);
                }}
              >
                편집
              </button>
              <button
                type="button"
                disabled={isLoading}
                onClick={() => {
                  setDropDown(false);
                  checkRemoveHandler();
                }}
              >
                삭제
              </button>
            </div>
          )}
        </div>
      </button>
    </MenuOptionGroupStyle>
  );
};

export default RecipeStepCategory;
