import React from 'react';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PermissionList, menuStore } from '@MobxFarm/store';
import { MenuWrap } from './styles';

const Menu = ({ permissionList }: { permissionList: PermissionList }) => {
  const router = useRouter();
  return (
    <MenuWrap>
      <h2>{menuStore.groupMap[menuStore.currentGroup].menuName}</h2>
      <ul>
        {permissionList?.menus
          .filter(
            menu =>
              menuStore.currentGroup === 'Home' ||
              menu.group === menuStore.currentGroup
          )
          .map(menu => {
            const { depth1, depth2, path } = menu;
            const isActive =
              router.asPath.startsWith(String(path)) ||
              depth2?.some(subMenu => router.asPath.startsWith(subMenu.path));
            return (
              <li key={depth1}>
                <Link
                  href={path ? String(path) : String(depth2?.[0]?.path)}
                  className={`link_depth1 ${isActive ? 'on' : ''} ${
                    path ? 'depth1Only' : ''
                  }`}
                >
                  <span className="txt">
                    {depth1 === '홈' ? '대시보드' : depth1}
                  </span>
                </Link>
                {depth2 && (
                  <ul className={`depth2 ${isActive ? 'on' : ''}`}>
                    {depth2.map(subMenu => {
                      return (
                        <li key={subMenu.name}>
                          <Link
                            href={subMenu.path}
                            className={`link_depth2 ${
                              router.asPath.startsWith(subMenu.path) ? 'on' : ''
                            }`}
                          >
                            {subMenu.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
      </ul>
    </MenuWrap>
  );
};

export default observer(Menu);
