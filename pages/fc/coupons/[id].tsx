import React from 'react';
import { useRouter } from 'next/router';
import { useGoBack } from '@HookFarm/useGoMove';

const CouponDetail = () => {
  const router = useRouter();
  const handleBack = useGoBack();

  const { id } = router.query;

  return (
    <div>
      <button type="button" onClick={handleBack}>
        뒤로가기
      </button>
      {id}
    </div>
  );
};

export default CouponDetail;
