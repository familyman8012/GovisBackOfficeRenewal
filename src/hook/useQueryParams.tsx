import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

// 기본 QueryParams 타입
export type QueryParams = {
  per_num?: number;
  current_num?: number;
  sort_target?: string;
  sort_type?: 'asc' | 'desc';
  [key: string]: any; // 기존 정의를 any로 변경하여 더 많은 타입을 수용 가능하게 함
};

// useQueryParams 훅에 제네릭 추가
function useQueryParams<T extends QueryParams = QueryParams>(
  initialParams: T = {} as T
): [T, (newParams: Partial<T>) => void, () => void] {
  const router = useRouter();
  const isInitialMount = useRef(true);
  const pathname = router.asPath.split('?')[0];

  const getMergedParams = (): T => {
    const queryParamsString = router.asPath.split('?')[1] || '';
    const urlParams = new URLSearchParams(queryParamsString);
    const queryParams: any = {};
    urlParams.forEach((value, key) => {
      queryParams[key] = value;
    });
    return { ...router.query, ...initialParams, ...queryParams } as T;
  };

  const [params, setParams] = useState<T>(getMergedParams);

  useEffect(() => {
    if (!router.isReady) return;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      setParams(getMergedParams());
      // 초기 마운트 시 URL을 갱신하지 않도록 변경
      return;
    }

    // 페이지의 쿼리 변경 시 훅의 상태를 업데이트
    setParams(prevParams => ({ ...prevParams, ...router.query }) as T);
  }, [router.query, router.isReady]);

  const updateParams = (newParams: Partial<T>) => {
    const updatedQuery = { ...params, ...newParams };

    Object.keys(updatedQuery).forEach(key => {
      if (updatedQuery[key] === undefined) {
        delete updatedQuery[key];
      }
    });

    setParams(updatedQuery as T);
    router.push({ pathname, query: updatedQuery }, undefined, {
      shallow: true,
    });
  };

  const resetParams = () => {
    setParams({ ...initialParams } as T);
    router.push({ pathname, query: { ...initialParams } }, undefined, {
      shallow: true,
    });
  };

  return [params, updateParams, resetParams];
}

export default useQueryParams;
