import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { authStore } from '@MobxFarm/store';
import Group from './Group';
import Menu from './Menu';
import { LeftMenuWrap } from './styles';

const LeftMenu = () => {
  const permissionList = toJS(authStore.permissionList);
  return (
    <LeftMenuWrap>
      {permissionList && (
        <>
          <Group permissionList={permissionList} />
          <Menu permissionList={permissionList} />
        </>
      )}
    </LeftMenuWrap>
  );
};

export default observer(LeftMenu);
