import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

export type QueryParams = {
  per_num?: number; // 페이지별 표시 아이템 갯수
  current_num?: number; // 현재 페이지 번호
  sort_target?: string; // 정렬 - 대상 항목
  sort_type?: 'asc' | 'desc'; // 정렬 - 방법
  [key: string]: number | string | string[] | undefined;
};

function useQueryParams(
  initialParams: QueryParams = {}
): [
  QueryParams,
  (newParams: QueryParams) => void,
  () => void,
  (sortField: string) => void,
] {
  const router = useRouter();
  const isInitialMount = useRef(true);

  const [params, setParams] = useState<QueryParams>(() => {
    // Merge the query parameters with the initial parameters.
    return { ...initialParams, ...router.query };
  });

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      const queryStringIndex = router.asPath.indexOf('?');
      const hasQueryParams = queryStringIndex !== -1;

      if (!hasQueryParams) {
        // If there are no query parameters in the URL, set the initial parameters.
        router.replace(
          {
            pathname: router.pathname,
            query: { ...initialParams },
          },
          undefined,
          { shallow: true }
        );
      } else {
        // Parse the query string and merge with initialParams
        const queryParamsString = router.asPath.slice(queryStringIndex + 1);
        const urlParams = new URLSearchParams(queryParamsString);
        const queryParams: { [key: string]: string } = {};
        urlParams.forEach((value, key) => {
          queryParams[key] = value;
        });
        setParams({ ...initialParams, ...queryParams });
      }
      return;
    }

    setParams(prevParams => ({ ...prevParams, ...router.query }));
  }, [router.query]);

  const updateParams = (newParams: QueryParams) => {
    // 빈 문자열("") 값을 가진 키는 undefined로 설정
    Object.keys(newParams).forEach(key => {
      if (newParams[key] === '') {
        // eslint-disable-next-line no-param-reassign
        newParams[key] = undefined;
      }
    });

    // 현재의 router.query와 newParams를 병합
    const updatedQuery = { ...router.query, ...newParams };

    // undefined 값을 가진 키 제거
    Object.keys(updatedQuery).forEach(key => {
      if (updatedQuery[key] === undefined) {
        delete updatedQuery[key];
      }
    });

    setParams(prevParams => ({ ...prevParams, ...newParams }));
    router.push(
      {
        pathname: router.pathname,
        query: updatedQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  const resetParams = () => {
    setParams({ ...initialParams });
    router.push(
      {
        pathname: router.pathname,
        query: { ...initialParams },
      },
      undefined,
      { shallow: true }
    );
  };

  const toggleSort = (sortField: string) => {
    const currentSortField = params.sort_field;
    const currentSortType = params.sort_type;

    if (currentSortField === sortField) {
      updateParams({
        sort_field: sortField,
        sort_type: currentSortType === 'asc' ? 'desc' : 'asc',
      });
    } else {
      updateParams({
        sort_field: sortField,
        sort_type: 'asc',
      });
    }
  };

  return [params, updateParams, resetParams, toggleSort];
}

export default useQueryParams;
