import { FiCircle, FiGrid, FiList } from 'react-icons/fi';

export const options1 = [
  { value: 'Leading', content: 'Leading' },
  { value: 'Middle', content: 'Middle' },
  { value: 'Trailing', content: 'Trailing' },
];

export const options2 = [
  {
    value: 'First',
    content: (
      <>
        <FiCircle size={20} className="mr-2" />
        First
      </>
    ),
  },
  {
    value: 'Second',
    content: (
      <>
        <FiCircle size={20} className="mr-2" />
        Second
      </>
    ),
  },
  {
    value: 'Third',
    content: (
      <>
        <FiCircle size={20} className="mr-2" />
        Third
      </>
    ),
  },
];

export const options3 = [
  { value: 'list', content: <FiList size={20} /> },
  { value: 'grid', content: <FiGrid size={20} /> },
];
