import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

export type QueryParams = {
  per_num?: number;
  current_num?: number;
  sort_target?: string;
  sort_type?: 'asc' | 'desc';
  [key: string]: number | string | string[] | undefined;
};

function useQueryParams(
  initialParams: QueryParams = {}
): [QueryParams, (newParams: QueryParams) => void, () => void] {
  const router = useRouter();
  const isInitialMount = useRef(true);

  const getMergedParams = () => {
    const queryParamsString = router.asPath.split('?')[1] || '';
    const urlParams = new URLSearchParams(queryParamsString);
    const queryParams: { [key: string]: string } = {};
    urlParams.forEach((value, key) => {
      queryParams[key] = value;
    });
    return { ...initialParams, ...queryParams };
  };

  const [params, setParams] = useState<QueryParams>(getMergedParams);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      const mergedParams = getMergedParams();
      setParams(mergedParams);
      router.replace(
        {
          pathname: router.pathname,
          query: mergedParams,
        },
        undefined,
        { shallow: true }
      );
      return;
    }
    setParams(prevParams => ({ ...prevParams, ...router.query }));
  }, [router.query]);

  const updateParams = (newParams: QueryParams) => {
    Object.keys(newParams).forEach(key => {
      if (newParams[key] === '') {
        newParams[key] = undefined;
      }
    });

    const updatedQuery = { ...router.query, ...newParams };

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

  return [params, updateParams, resetParams];
}

export default useQueryParams;
