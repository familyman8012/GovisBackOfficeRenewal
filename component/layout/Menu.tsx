import React, { useState } from 'react';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PermissionList, menuStore } from '@MobxFarm/store';
import { MenuWrap } from './styles';

const Menu = ({ permissionList }: { permissionList: PermissionList }) => {
  const router = useRouter();
  const currentUrl = `/${router.asPath.split('/')[1].split('?')[0]}`;
  const [hostTxt, setHostTxt] = useState('');

  const isPathActive = (path: string) => {
    return currentUrl === path;
  };

  const Goivs2Menu = ['/product', '/material', '/menu', '/product-recipes'];

  if (typeof window !== 'undefined') {
    const { hostname } = window.location;
    setHostTxt(hostname); // dev.govis.gopizza.kr 혹은 govis.gopizza.kr
  }

  console.log('hostTxt', hostTxt);

  return (
    <MenuWrap>
      <h2>{menuStore.groupMap[menuStore.currentGroup].menuName}</h2>
      <ul>
        {permissionList?.menus
          ?.filter(
            menu =>
              menuStore.currentGroup === 'Home' ||
              menu.group === menuStore.currentGroup
          )
          .map(menu => {
            const { depth1, depth2, path } = menu;

            const isActive =
              isPathActive(String(path)) ||
              (depth2 && depth2.some(subMenu => isPathActive(subMenu.path)));

            return (
              <li key={depth1}>
                <Link
                  href={
                    path
                      ? Goivs2Menu.some(el => el === path)
                        ? String(path)
                        : `https://.gopizza.kr${path}`
                      : Goivs2Menu.some(el => el === depth2?.[0]?.path)
                      ? String(depth2?.[0]?.path)
                      : `https://govis.gopizza.kr${depth2?.[0]?.path}`
                  }
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
                            href={
                              Goivs2Menu.some(el => el === currentUrl)
                                ? subMenu.path
                                : `https://govis.gopizza.kr${subMenu.path}`
                            }
                            className={`link_depth2 ${
                              isPathActive(subMenu.path) ? 'on' : ''
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
