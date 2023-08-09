import React, { useEffect, useState } from 'react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Select } from '@ComponentFarm/atom/Select/Select';
import { QueryParams } from '@HookFarm/useQueryParams';

interface ISearchKeyword {
  params: QueryParams;
  selOption?: {
    label: string;
    value: string;
  }[];
  handler: (keyword: { search_type?: string; search_keyword: string }) => void;
  defaultKeyword?: {
    search_type: string;
    search_keyword: string;
  };
}

const SearchKeyword = ({
  params,
  selOption,
  handler,
  defaultKeyword = { search_type: '0', search_keyword: '' },
}: ISearchKeyword) => {
  const [keyword, setKeyword] = useState(defaultKeyword);

  useEffect(() => {
    setKeyword({
      search_type: String(params.search_type ?? ''),
      search_keyword: String(params.search_keyword ?? ''),
    });
  }, [params.search_keyword, params.search_type]);

  const handleSearch = () => {
    if (selOption) {
      handler(keyword);
    } else {
      handler({ search_keyword: keyword.search_keyword }); // selOption이 없을 경우 이렇게 호출
    }
  };

  return (
    <span style={{ display: 'flex' }}>
      {selOption && ( // selOption이 있다면 Select 컴포넌트를 렌더링
        <Select
          options={selOption}
          selectedOption={keyword.search_type}
          setSelectedOption={({ value }: { value: string }) =>
            setKeyword({ ...keyword, search_type: value })
          }
        />
      )}
      <input
        type="text"
        className="inp"
        value={keyword.search_keyword}
        onChange={e =>
          setKeyword({ ...keyword, search_keyword: e.target.value })
        }
      />
      <Button variant="primary" onClick={handleSearch}>
        검색
      </Button>
    </span>
  );
};

export default SearchKeyword;
