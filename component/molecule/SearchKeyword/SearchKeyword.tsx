import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Search } from '@ComponentFarm/atom/icons';
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

export const SearchKeywordWrap = styled.div`
  display: flex;
  width: fit-content;
  border: 1px solid var(--color-neutral90);
  border-radius: 0.4rem;

  &:focus {
    border: red;
  }

  .select_library_control,
  .inp {
    min-height: auto;
    height: 3.8rem;
    border-radius: 0;
    border: none !important;
    border-radius: 0.4rem;
  }
  button {
    height: 3.8rem;
    padding: 0 1.2rem;
  }
  .select_library_control {
    border-right: 0 !important;
  }
  .inp {
    width: auto;
  }
`;

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

  const searchKeywordRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const inputs = searchKeywordRef.current?.querySelectorAll('input');

    const handleFocus = () => {
      if (searchKeywordRef.current) {
        searchKeywordRef.current.style.border =
          '1px solid var(--color-neutral10)';
      }
    };

    const handleBlur = () => {
      if (searchKeywordRef.current) {
        searchKeywordRef.current.style.border = '';
      }
    };

    inputs?.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });

    // Cleanup 함수: 이펙트가 끝날 때 (언마운트나 리렌더링 될 때) 이벤트 리스너를 제거합니다.
    return () => {
      inputs?.forEach(input => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  return (
    <SearchKeywordWrap ref={searchKeywordRef} className="box_searchkeyword">
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
      <Button
        type="button"
        variant="transparent"
        IconOnly={<Search />}
        onClick={handleSearch}
      >
        <span className="hiddenZoneV">검색</span>
      </Button>
    </SearchKeywordWrap>
  );
};

export default SearchKeyword;
