import React, { useEffect } from 'react';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { IconViewArea } from '@ComponentFarm/common';
import { PermissionList, menuStore } from '@MobxFarm/store';
import { GroupWrap } from './styles';

const Group = ({ permissionList }: { permissionList: PermissionList }) => {
  const router = useRouter();

  // url 에 따라 적절한 그룹탭을 보여준다.
  useEffect(() => {
    const currentPath = router.asPath;
    // url 이 어느 그룹에 있는지 찾기
    const currentGroup = permissionList?.menus.find(menu => {
      return (
        menu.path === currentPath ||
        menu.depth2?.some(subMenu => subMenu.path === currentPath)
      );
    })?.group;

    // mobx 에 전달
    if (currentGroup) {
      runInAction(() => {
        menuStore.currentGroup = currentGroup;
      });
    }
  }, [router.asPath, permissionList]);

  const handleGroupClick = (group: string) => {
    runInAction(() => {
      // 필터링
      menuStore.currentGroup = group;
      // 첫번째 메뉴로 이동
      const firstMenu = permissionList.menus.find(menu => menu.group === group);
      if (firstMenu) {
        const path =
          firstMenu.path || (firstMenu.depth2 && firstMenu.depth2[0].path);
        if (path) {
          router.push(path);
        }
      }
    });
  };

  return (
    <GroupWrap>
      <h1>
        <span className="hiddenZoneV">GOPIZZA</span>
      </h1>
      <ul>
        {permissionList?.iconMenus?.map(el => {
          const { component: Icon, menuName } = menuStore.groupMap[el];
          return (
            <li key={el} className={menuStore.currentGroup === el ? 'on' : ''}>
              <button type="button" onClick={() => handleGroupClick(el)}>
                <span className="box_svg">
                  <IconViewArea size={24}>
                    <Icon size={24} />
                  </IconViewArea>
                </span>
                <span className="hiddenZoneV">{menuName}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </GroupWrap>
  );
};

export default observer(Group);
