export const toPrice = (price: number | string) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getComputedCost = (
  baseCost: number = 0,
  material_quantity_value: number = 0
) => toPrice((baseCost * material_quantity_value).toFixed(2));
