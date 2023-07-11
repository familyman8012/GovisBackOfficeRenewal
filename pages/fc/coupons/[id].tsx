import React from "react";
import { useRouter } from "next/router";
import { useGoBack } from "@/src/hook/useGoBack";

function CouponDetail() {
  const router = useRouter();
  const handleBack = useGoBack();

  const { id } = router.query;

  return (
    <div>
      <div onClick={handleBack}>뒤로가기</div>
      {id}
    </div>
  );
}

export default CouponDetail;
