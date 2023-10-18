import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/TabLink';
import {
  PageModeSettings,
  Tab,
} from '@ComponentFarm/template/product/manage/const';
import TitleArea from '../TitleArea';

interface ILayout {
  tabData: Tab[];
  backUrl?: string;
  currentSettings?: PageModeSettings;
  title?: string;
  isSubmitLoading?: boolean;
  onSubmit?: () => void;
  children: React.ReactNode;
}

const DetailPageLayout: React.FC<ILayout> = ({
  tabData,
  backUrl,
  currentSettings,
  title,
  isSubmitLoading = false,
  onSubmit,
  children,
}) => {
  const router = useRouter();
  const currentCategory = useMemo(
    () => router?.asPath?.split('/')[1],
    [router?.asPath]
  );

  const handlerMoveBack = () => {
    // eslint-disable-next-line no-unused-vars
    const { id, ...newObj } = router.query;
    router.push({
      pathname: backUrl ? `/${backUrl}` : `/${currentCategory}`,
      query: { ...newObj },
    });
  };

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
                <Button
                  type="button"
                  onClick={onSubmit}
                  disabled={isSubmitLoading}
                >
                  {currentSettings?.secondButtonText}
                </Button>
              )}
            </>
          </>
        }
      />
      <Tabs tabs={tabData} />
      {children}
    </>
  );
};

export default DetailPageLayout;
