// utils/convertObject.js

/**
 * 원본 데이터 타입
 */
type SourceObj = {
  code: string;
  environment_variable_idx: number;
  name: string;
  value: string;
};

/**
 * 변환된 데이터 타입
 */
type convertEnvObj = {
  label: string;
  value: string;
};

/**
 * 원본 데이터를 받아서 label, value 구조로 변환하는 함수
 * @param data 원본 데이터
 * @returns 변환된 데이터
 */

export function convertEnv(obj: SourceObj): convertEnvObj {
  return {
    label: obj.name,
    value: obj.code,
  };
}
