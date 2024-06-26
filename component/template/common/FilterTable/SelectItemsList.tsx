import { Dispatch, SetStateAction } from 'react';
import { BtnDelete, Button } from '@ComponentFarm/atom/Button/Button';
import Sync from '@ComponentFarm/atom/icons/Sync';
import { checkedItemType } from '@ComponentFarm/modal/SearchPopup/SearchPopup';

interface SelectItemsListProps {
  title: string;
  items: checkedItemType[];
  itemsSetting: Dispatch<SetStateAction<checkedItemType[]>>;
  openModal: () => void;
  deleteItem: (itemIdx: string) => void;
}

const SelectItemsList = ({
  title,
  items,
  itemsSetting,
  openModal,
  deleteItem,
}: SelectItemsListProps) => {
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>
        <div className="inner">
          <span className="btn_box">
            <Button variant="gostSecondary" onClick={openModal}>
              검색
            </Button>
            <Button
              className="btn_reset"
              variant="transparent"
              onClick={() => itemsSetting([])}
              LeadingIcon={<Sync />}
            >
              초기화
            </Button>
          </span>
          <div className="list_select_item">
            {items.length > 4 ? (
              <Button
                variant="selectItem"
                onClick={openModal}
                TrailingIcon={<BtnDelete onClick={() => itemsSetting([])} />}
              >
                {`${items[0].name}외 ${items.length - 1}개`}
              </Button>
            ) : (
              items.map(el => (
                <Button
                  key={el.idx}
                  variant="selectItem"
                  TrailingIcon={
                    <BtnDelete onClick={() => deleteItem(el.idx)} />
                  }
                >
                  {el.name}
                </Button>
              ))
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SelectItemsList;
