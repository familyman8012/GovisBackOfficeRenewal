import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import {
  PageModeSettings,
  Tab,
} from '@ComponentFarm/template/product/manage/const';
import TitleArea from '../TitleArea';

interface ILayout {
  tabData: Tab[];
  currentSettings?: PageModeSettings;
  title?: string;
  onSubmit?: () => void;
  children: React.ReactNode;
}

const DetailPageLayout: React.FC<ILayout> = ({
  tabData,
  currentSettings,
  title,
  onSubmit,
  children,
}) => {
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabIndex = useMemo(
    () => tabData?.findIndex(tab => router?.asPath.includes(tab.url)),
    [router, tabData]
  );
  const tabId = useMemo(() => router?.asPath?.split('?')[0], [router?.asPath]);
  const currentCategory = useMemo(
    () => router?.asPath?.split('/')[1],
    [router?.asPath]
  );

  const handlerMoveTab = (index: number) => {
    // eslint-disable-next-line no-unused-vars
    const { id, ...newObj } = router.query;
    router.push({
      pathname: `${tabData[index].url}`,
      query: tabData[index].query
        ? { ...tabData[index].query, ...newObj }
        : { ...newObj },
    });
  };

  const handlerMoveBack = () => {
    // eslint-disable-next-line no-unused-vars
    const { id, ...newObj } = router.query;
    router.push({
      pathname: `/${currentCategory}`,
      query: { ...newObj },
    });
  };

  useEffect(() => {
    if (tabIndex) {
      setActiveTabIndex(tabIndex);
    }
  }, [tabIndex]);

  return (
    <>
      <TitleArea
        title={currentSettings ? currentSettings?.title : String(title)}
        BtnBox={
          <>
            <>
              <Button variant="gostSecondary" onClick={handlerMoveBack}>
                {currentSettings ? currentSettings?.firstButtonText : '이전'}
              </Button>
              {currentSettings && (
                <Button type="button" onClick={onSubmit}>
                  {currentSettings?.secondButtonText}
                </Button>
              )}
            </>
          </>
        }
      />
      <Tabs
        id={String(tabId)}
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => handlerMoveTab(index)}
      />
      {children}
    </>
  );
};

export default DetailPageLayout;
