import { useState } from 'react';
import styled from '@emotion/styled';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { IcoInput } from '@ComponentFarm/atom/IcoInput/IcoInput';
import { Search } from '@ComponentFarm/atom/icons/Search';
import SearchKeyword from '../SearchKeyword/SearchKeyword';

interface Props {
  onSearch: (value: string) => void;
}

const IngredientSearchWrap = styled.label`
  width: 27rem;
  display: inline-flex;
  flex-direction: column;

  & > span {
    margin-bottom: 1.1rem;
  }
  .search-input {
    width: 27rem;
  }
`;

const IngredientModalContent = styled.div`
  max-width: 60rem;

  .select-button {
    width: 100%;
  }

  table {
    width: 100%;

    border: 1px solid var(--color-neutral90);
    margin-top: 1.5rem;
    margin-bottom: 2.4rem;
  }
`;
const IngredientSearch = ({ onSearch }: Props) => {
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <IngredientSearchWrap>
      <span>원재료명</span>
      <IcoInput
        className="search-input"
        placeholder="원재료 선택"
        TrailingIcon={<Search />}
        readOnly
        onClick={() => setOpen(true)}
      />

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <IngredientModalContent>
          <h3>원재료 선택</h3>
          <SearchKeyword
            handler={value => {
              console.log(value);
            }}
            params={{}}
            // defaultKeyword={{
            //   search_type: '',
            //   search_keyword: searchKeyword,
            // }}
            // selOption={}
          />
          <IcoInput
            className="search-input"
            placeholder="원재료 선택"
            TrailingIcon={<Search />}
            onChange={e => setSearchKeyword(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>원재료명</th>
                <th>제조사명</th>
                <th>원산지명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>
                  <Empty>원재료명을 검색해주세요.</Empty>
                </td>
              </tr>
            </tbody>
          </table>

          <Button className="select-button" disabled>
            선택
          </Button>
        </IngredientModalContent>
      </Modal>
    </IngredientSearchWrap>
  );
};

export default IngredientSearch;
