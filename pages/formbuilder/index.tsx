import React, { ReactElement } from 'react';
import FormBuilder from '@ComponentFarm/modules/FormBuilder/FormBuilder';

const Index = () => {
  return <FormBuilder />;
};

export default Index;
Index.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
