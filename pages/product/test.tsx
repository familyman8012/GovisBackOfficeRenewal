import React, { useState } from 'react';
import Select from 'react-select';

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

const MultiSelectWithBadges = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleRemoveBadge = valueToRemove => {
    const updatedOptions = selectedOptions.filter(
      option => option.value !== valueToRemove
    );
    setSelectedOptions(updatedOptions);
  };

  return (
    <div>
      <div style={{ width: 300 }}>
        <Select
          isMulti
          options={options}
          value={selectedOptions} // react-select의 value prop을 업데이트
          onChange={options => setSelectedOptions(options)}
          components={{
            MultiValue: () => null, // 선택된 항목들을 숨김
          }}
        />
      </div>
      <div className="badges">
        {selectedOptions.map(option => (
          <span key={option.value} className="badge">
            {option.label}
            <span
              className="remove-badge"
              onClick={() => handleRemoveBadge(option.value)}
            >
              x
            </span>
          </span>
        ))}
      </div>
      <style jsx>{`
        .badge {
          display: inline-block;
          padding: 5px 10px;
          margin: 5px;
          background-color: #eee;
          border-radius: 5px;
          position: relative;
        }
        .remove-badge {
          margin-left: 5px;
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: 5px;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
};

export default MultiSelectWithBadges;
