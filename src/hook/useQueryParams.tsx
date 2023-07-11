import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

type QueryParams = {
  [key: string]: any;
};

function useQueryParams(
  initialParams: QueryParams = {}
): [
  QueryParams,
  (newParams: QueryParams) => void,
  (sortField: string) => void
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

      const queryStringIndex = router.asPath.indexOf("?");
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
        for (let [key, value] of urlParams) {
          queryParams[key] = value;
        }
        setParams({ ...initialParams, ...queryParams });
      }
      return;
    }

    setParams((prevParams) => ({ ...prevParams, ...router.query }));
  }, [router.query]);

  const updateParams = (newParams: QueryParams) => {
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, ...newParams },
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
        sort_type: currentSortType === "asc" ? "desc" : "asc",
      });
    } else {
      updateParams({
        sort_field: sortField,
        sort_type: "asc",
      });
    }
  };

  return [params, updateParams, toggleSort];
}

export default useQueryParams;
