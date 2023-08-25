import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import styled from '@emotion/styled';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { IcoInput } from '@ComponentFarm/atom/IcoInput/IcoInput';
import Search from '@ComponentFarm/atom/icons/Search';
import Radio from '@ComponentFarm/atom/PlainRadio/Radio';
import { InnerTable } from '@ComponentFarm/common';
import { Alert } from './style';

interface Props {
  /**
   * @TODO type setting
   */
  onSelect: (value: any) => void;
}

const RecipeImportContent = styled.div`
  width: 55.2rem;

  .search-input {
    margin: 1.5rem 0;
  }

  table {
    border: 1px solid var(--color-neutral90);

    th {
      font-weight: 500;
    }

    td {
      font-weight: 400;
    }

    td,
    th {
      /* vertical-align: middle; */
      /* font-weight: 400; */
      text-align: left;

      &:nth-of-type(1) {
        padding-left: 0;
        padding-right: 0;
        text-align: center;
      }
    }
  }
`;

const RecipeImport = ({ onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <>
      <Alert>
        <FiAlertCircle />
        레시피 정보는 기존에 있는 정보를 불러와서 사용 가능합니다.
        <button type="button" onClick={() => setOpen(true)}>
          가져오기
        </button>
      </Alert>
      <Modal
        title="레시피 선택"
        showCloseButton
        isOpen={open}
        onClose={() => setOpen(false)}
        showCancelButton={false}
      >
        <RecipeImportContent>
          <IcoInput
            className="search-input"
            placeholder="레시피명 검색"
            TrailingIcon={<Search />}
            onChange={e => setSearchKeyword(e.target.value)}
          />
          <InnerTable>
            <colgroup>
              <col width={46} />
              <col />
              <col width={206} />
            </colgroup>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>레시피명</th>
                <th>레시피 사용상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Radio />
                </td>
                <td>오리지널 페퍼로니 피자 ver 3.0</td>
                <td>
                  <Badge color="green" dot fill="transparent">
                    사용
                  </Badge>
                </td>
              </tr>
            </tbody>
          </InnerTable>
        </RecipeImportContent>
      </Modal>
    </>
  );
};

export default RecipeImport;
