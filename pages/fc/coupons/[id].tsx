import React from 'react';
import { useRouter } from 'next/router';

const CouponDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <button type="button">뒤로가기</button>
      {id}
    </div>
  );
};

export default CouponDetail;
