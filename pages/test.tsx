import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import MultiSelectWithBadges from '@ComponentFarm/modules/MultiSelectWithBadges/MultiSelectWithBadges';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'mango', label: 'Mango' },
  { value: 'nectarine', label: 'Nectarine' },
  { value: 'orange', label: 'Orange' },
  { value: 'papaya', label: 'Papaya' },
  { value: 'quince', label: 'Quince' },
  { value: 'raspberry', label: 'Raspberry' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'tangerine', label: 'Tangerine' },
  { value: 'uglifruit', label: 'Uglifruit' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'watermelon', label: 'Watermelon' },
  { value: 'xigua', label: 'Xigua' },
  { value: 'yellowpassionfruit', label: 'Yellow Passion Fruit' },
  { value: 'zucchini', label: 'Zucchini' },
  { value: 'fruit25', label: 'Fruit 25' },
  { value: 'fruit26', label: 'Fruit 26' },
  { value: 'fruit27', label: 'Fruit 27' },
  { value: 'fruit28', label: 'Fruit 28' },
  { value: 'fruit29', label: 'Fruit 29' },
  { value: 'fruit30', label: 'Fruit 30' },
  { value: 'fruit31', label: 'Fruit 31' },
  { value: 'fruit32', label: 'Fruit 32' },
  { value: 'fruit33', label: 'Fruit 33' },
  { value: 'fruit34', label: 'Fruit 34' },
  { value: 'fruit35', label: 'Fruit 35' },
  { value: 'fruit36', label: 'Fruit 36' },
  { value: 'fruit37', label: 'Fruit 37' },
  { value: 'fruit38', label: 'Fruit 38' },
  { value: 'fruit39', label: 'Fruit 39' },
  { value: 'fruit40', label: 'Fruit 40' },
  { value: 'fruit41', label: 'Fruit 41' },
  { value: 'fruit42', label: 'Fruit 42' },
  { value: 'fruit43', label: 'Fruit 43' },
  { value: 'fruit44', label: 'Fruit 44' },
  { value: 'fruit45', label: 'Fruit 45' },
  { value: 'fruit46', label: 'Fruit 46' },
  { value: 'fruit47', label: 'Fruit 47' },
  { value: 'fruit48', label: 'Fruit 48' },
  { value: 'fruit49', label: 'Fruit 49' },
  { value: 'fruit50', label: 'Fruit 50' },
];

const ParentComponent: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fruits"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <MultiSelectWithBadges
            options={options}
            selectedOptions={options.filter(opt =>
              field.value.includes(opt.value)
            )}
            onChange={selected =>
              field.onChange(selected.map(opt => opt.value))
            }
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ParentComponent;
