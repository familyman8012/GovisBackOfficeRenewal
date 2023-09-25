import { useCallback } from 'react';
import { IRecipeStepFormFields } from '@InterfaceFarm/product-recipe';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { toPrice } from '@UtilFarm/number';
import { RecipeIngreientListStyle } from './style';

interface RecipeIngredientListProps {
  ingredients: IRecipeStepFormFields['recipe_material_list'];
}

const RecipeIngredientList = ({ ingredients }: RecipeIngredientListProps) => {
  const getComputedCost = useCallback(
    (firstCost?: number, recipe_material_quantity_value?: number) => {
      const basePrice = firstCost ?? 0;
      const quantity = recipe_material_quantity_value ?? 0;
      return toPrice(basePrice * quantity);
    },
    []
  );

  return (
    <RecipeIngreientListStyle>
      {!ingredients || ingredients.length === 0 ? (
        <Empty>등록된 원재료 정보가 없습니다.</Empty>
      ) : (
        ingredients.map((ingredient, i) => (
          <li key={ingredient.material_info_idx}>
            {ingredient.material_image && (
              <img
                className="image"
                src={ingredient.material_image}
                alt={ingredient.material_name_ko}
              />
            )}
            <div className="info">
              <h3 className="name">{ingredient.material_name_ko}</h3>
              <div className="amount">
                {ingredient.recipe_material_meterage_value &&
                ingredient.evi_recipe_material_meterage_unit ? (
                  <>
                    <span className="value">{`${ingredient.recipe_material_meterage_value}${ingredient.evi_recipe_material_meterage_unit_str}`}</span>
                    {ingredient.recipe_material_note && (
                      <span className="note">{`(${ingredient.recipe_material_note})`}</span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="value">{`${ingredient.recipe_material_quantity_value}${ingredient.evi_recipe_material_meterage_unit_str}`}</span>
                    {ingredient.recipe_material_note && (
                      <span className="note">{`(${ingredient.recipe_material_note})`}</span>
                    )}
                  </>
                )}
              </div>
              <p className="price">
                {`${getComputedCost(
                  ingredient.first_cost,
                  ingredient.recipe_material_quantity_value
                )}원`}
              </p>
            </div>
          </li>
        ))
      )}
    </RecipeIngreientListStyle>
  );
};

export default RecipeIngredientList;