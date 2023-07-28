// ParentComponent.tsx
import React, { useState } from 'react';
import Editor from '@ComponentFarm/modules/Editor/Editor';
import ChkMark from '@ComponentFarm/atom/ChkMark/ChkMark';

const ParentComponent: React.FC = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value: string) => {
    setText(value);
    // 여기에서 텍스트가 변경될 때마다 수행할 작업을 추가할 수 있습니다.
  };

  return (
    <>
      <ChkMark check />
      <ChkMark />
      <Editor value={text} onChange={handleTextChange} />
    </>
  );
};

export default ParentComponent;
