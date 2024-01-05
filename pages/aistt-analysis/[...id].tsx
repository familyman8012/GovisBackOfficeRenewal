import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchInspectionInfo } from '@ApiFarm/aistt';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import AnalysisView from '@ComponentFarm/template/aistt/analysis/AnalysisView';
import { useGoMove } from '@HookFarm/useGoMove';

const AnalysisViewPage = () => {
  const { onBack } = useGoMove();

  const router = useRouter();

  const path = useMemo(() => router.query.id?.[0] ?? 'view', [router.isReady]);
  const id = useMemo(() => router.query.id?.[1] ?? '', [router.isReady]);

  const { data, isLoading, isError } = useQuery(
    ['fqs-analysis-view', id],
    () => fetchInspectionInfo(Number(id)),
    {
      enabled: router.isReady,
    }
  );

  useEffect(() => {
    if (router.isReady && path !== 'view') {
      onBack(id ? 2 : 1);
    }
  }, [path, router.isReady]);

  useEffect(() => {
    if (isError) {
      onBack(1);
    }
  }, [isError]);

  return (
    <>
      <TitleArea
        title="제품 분석"
        BtnBox={
          <Button variant="gostSecondary" onClick={() => router.back()}>
            이전
          </Button>
        }
      />
      <Tabs
        id="aistt-state-view"
        tabs={[
          {
            title: '상세 정보',
          },
        ]}
        activeTabIndex={0}
        onTabChange={() => {}}
      />
      <AnalysisView
        loading={isLoading || !router.isReady}
        data={data}
        inspectionId={id}
      />
    </>
  );
};

export default AnalysisViewPage;
