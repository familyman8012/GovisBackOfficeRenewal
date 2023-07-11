import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type QueryParams = {
  search_inspection_status?: string;
  search_is_used?: string;
  sort_field?: string;
  sort_type?: string;
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
  const [params, setParams] = useState<QueryParams>({
    ...initialParams,
    ...router.query,
  });

  useEffect(() => {
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
      // Toggle between 'asc' and 'desc' if the sort field is already set
      updateParams({
        sort_field: sortField,
        sort_type: currentSortType === "asc" ? "desc" : "asc",
      });
    } else {
      // Set the sort field and default the sort type to 'asc'
      updateParams({
        sort_field: sortField,
        sort_type: "asc",
      });
    }
  };

  return [params, updateParams, toggleSort];
}

export default useQueryParams;
