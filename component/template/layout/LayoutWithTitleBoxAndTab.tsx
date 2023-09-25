import React, { useMemo, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';

export interface LayoutWithTitleBoxAndTabProps {
  id?: string;
  title: string;
  actionButtons?: ReactNode;
  tabs: { title: string; path: string }[];
}

const LayoutTitleBoxWithTab = ({
  id,
  title,
  tabs,
  actionButtons,
  children,
}: React.PropsWithChildren<LayoutWithTitleBoxAndTabProps>) => {
  const router = useRouter();
  const pathname = useMemo(() => router.asPath.split('?')[0], [router]);

  const getMergedDynamicParamPath = useCallback(
    (path: string) =>
      path
        .split('/')
        .map(v => {
          const returnVal =
            v.search(/\[.*\]$/) !== -1
              ? router.query[v.replace(/\[(.*)\]/, '$1')]
              : v;
          return returnVal;
        })
        .join('/'),
    [pathname, router.query]
  );

  const replacedPathTabs = useMemo(
    () =>
      tabs.map(tab => {
        const mergedPath = getMergedDynamicParamPath(tab.path);
        return {
          ...tab,
          path: mergedPath,
        };
      }),
    [tabs, router.query]
  );

  const activeIndex = useMemo(() => {
    return replacedPathTabs.findIndex(({ path }) => {
      return pathname === path;
    });
  }, [pathname, replacedPathTabs]);

  return (
    <div>
      <TitleArea title={title} BtnBox={actionButtons} />
      <Tabs
        id={id ?? ''}
        key={id ?? ''}
        tabs={replacedPathTabs}
        activeTabIndex={activeIndex}
        onTabChange={index => {
          if (activeIndex === index) return;
          router.push(replacedPathTabs[index].path);
        }}
      />
      {children}
    </div>
  );
};

export default LayoutTitleBoxWithTab;