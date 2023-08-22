import { useState } from 'react';
import styled from '@emotion/styled';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import { Button } from '@ComponentFarm/atom/Button/Button';
import Empty from '@ComponentFarm/atom/Empty/Empty';
import { IcoInput } from '@ComponentFarm/atom/IcoInput/IcoInput';
import { Search } from '@ComponentFarm/atom/icons/Search';
import { InnerTable } from '@ComponentFarm/common';

interface Props {
  onSelect: (value: string) => void;
}

const IngredientModalContent = styled.div`
  margin: -1em;
  padding: 2.4rem;

  .search {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      flex: 1;
      margin-bottom: 2.4rem;
    }

    h3 {
      display: flex;
      align-items: center;
      padding: 0.8rem 2rem;
      color: var(--color-gray500);
      font-weight: 500;
      width: 32%;
      min-width: 13.3rem;
      border-right: inherit;
      border-bottom: 0;
      background-color: var(--table-headerBackground);
      height: 6.4rem;
    }

    > div {
      flex: 1;
      padding: 1rem;
    }
  }

  section {
    border: 1px solid var(--color-neutral90);
    border-radius: 0.4rem;
    width: 100%;
    overflow: auto;

    h3 {
      display: flex;
      align-items: center;
      height: 5.5rem;
      font-weight: 600;
      font-size: 1.4rem;
      padding: 0 2rem;
      border-bottom: inherit;
    }
    & + section {
      margin-top: 1.5rem;
    }
  }

  .btn-wrap {
    display: flex;
    gap: 1.2rem;
    padding: 2.4rem 2.4rem 0;
    margin: 2.4rem -2.4rem 0;
    border-top: 1px solid var(--color-neutral90);
    button {
      flex: 1;
    }
  }

  table {
    img {
      border: 1px solid var(--color-neutral90);
      border-radius: 0.8rem;
      width: 5.6rem;
      height: 5.6rem;
    }

    td,
    th {
      vertical-align: middle;
      font-weight: 400;

      &:nth-of-type(4),
      &:nth-of-type(5) {
        text-align: center;
      }

      &:nth-of-type(1) > div {
        display: flex;
        align-items: center;
      }

      img + span {
        margin-left: 1.6rem;
        vertical-align: middle;
      }
    }
  }
`;

const IngredientRow = ({
  data,
  action,
}: {
  data: any;
  action: React.ReactNode;
}) => {
  return (
    <tr>
      <td>
        <div className="">
          <img src="/images/mock/ingredient-1.png" />
          <span>포크토핑</span>
        </div>
      </td>
      <td>8</td>
      <td>EA</td>
      <td>
        <span>포크토핑</span>
      </td>
      <td>
        <span>포크토핑</span>
      </td>
      <td>{action}</td>
    </tr>
  );
};

const IngredientSelect = ({ onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <>
      <Button variant="gostSecondary" onClick={() => setOpen(true)}>
        등록하기
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <IngredientModalContent>
          <section className="search">
            <h3>원재료명</h3>
            <IcoInput
              className="search-input"
              placeholder="검색"
              TrailingIcon={<Search />}
              onChange={e => setSearchKeyword(e.target.value)}
            />
          </section>
          <section>
            <h3>검색 결과</h3>
            <InnerTable>
              <colgroup>
                <col width={226} />
                <col width={100} />
                <col width={100} />
                <col width={120} />
                <col width={120} />
                <col width={120} />
              </colgroup>
              <thead>
                <tr>
                  <th>원재료명</th>
                  <th>수량</th>
                  <th>단위</th>
                  <th>제조사명</th>
                  <th>원산지명</th>
                  <th>설정</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <Empty>
                      {`검색된 목록이 없습니다.\n상단에서 '원재료명'을 검색해주세요.`}
                    </Empty>
                  </td>
                </tr>
              </tbody>
            </InnerTable>
          </section>
          <section>
            <h3>선택 항목</h3>
            <InnerTable>
              <colgroup>
                <col width={226} />
                <col width={100} />
                <col width={100} />
                <col width={120} />
                <col width={120} />
                <col width={120} />
              </colgroup>
              <thead>
                <tr>
                  <th>원재료명</th>
                  <th>수량</th>
                  <th>단위</th>
                  <th>제조사명</th>
                  <th>원산지명</th>
                  <th>설정</th>
                </tr>
              </thead>
              <tbody>
                <IngredientRow
                  data={{}}
                  action={
                    <Button
                      variant="gostSecondary"
                      style={{ width: '100%', minWidth: 'auto' }}
                    >
                      삭제
                    </Button>
                  }
                />
              </tbody>
            </InnerTable>
          </section>
          <div className="btn-wrap">
            <Button className="select-button" variant="gostSecondary">
              취소
            </Button>
            <Button className="select-button">등록</Button>
          </div>
        </IngredientModalContent>
      </Modal>
    </>
  );
};

export default IngredientSelect;
