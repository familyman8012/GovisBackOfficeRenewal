import { useGoBack } from "@/src/hook/useGoBack";
import React from "react";

function Add() {
  const handleBack = useGoBack();

  return <div onClick={handleBack}>뒤로가기</div>;
}

export default Add;
