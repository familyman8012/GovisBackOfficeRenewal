import React from 'react';
import { useGoBack } from '@HookFarm/useGoBack';

const Add = () => {
  const handleBack = useGoBack();

  return (
    <button type="button" onClick={handleBack}>
      뒤로가기
    </button>
  );
};

export default Add;
