import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchUser } from '@ApiFarm/store';
import StoreList from '@ComponentFarm/modules/StorePopup/StoreList';
import StorePopup from '@ComponentFarm/modules/StorePopup/StorePopup';
import { Button } from '@ComponentFarm/atom/Button/Button';

const Store = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [listStore, setListStore] = useState<{ id: number; name: string }[]>(
    []
  );

  const { data } = useQuery<any, any>([`user-detail`, '325'], () =>
    fetchUser(325)
  );

  useEffect(() => {
    if (data) {
      setListStore(data.store_list);
    }
  }, [data]);

  const handlerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Store Modal
        </Button>
      </div>
      <StorePopup
        // singleSelect
        listStore={listStore}
        setListStore={setListStore}
        isOpen={isOpen}
        onClose={handlerClose}
      />
      <StoreList listStore={listStore} setListStore={setListStore} />
    </>
  );
};

export default Store;
