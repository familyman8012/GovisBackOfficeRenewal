import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@ComponentFarm/atom/Button/Button';
import DeviceManage from '@ComponentFarm/template/ai-fqs/DeviceManage';
import DeviceView from '@ComponentFarm/template/ai-fqs/DeviceView';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { useGoMove } from '@HookFarm/useGoMove';

const allowPath = ['view', 'setting'];

const DeviceDetailPage = () => {
  const router = useRouter();
  const { onBack } = useGoMove();
  const path = React.useMemo(
    () => router.query.id?.[0] ?? '',
    [router.isReady, router.asPath]
  );

  useEffect(() => {
    if (router.isReady && !allowPath.includes(path)) {
      router.push('/ai-fqs-device/');
    }
  }, [path, router.isReady]);

  return (
    <>
      <LayoutTitleBoxWithTab
        id="ai-fqs-device-view"
        title="기기관리"
        tabs={[
          {
            title: '기기 정보',
            path: '/ai-fqs-device/view/[id]',
          },
          {
            title: '기기 정보 입력',
            path: '/ai-fqs-device/setting/[id]',
          },
        ]}
        actionButtons={
          <Button variant="gostSecondary" onClick={() => onBack()}>
            이전
          </Button>
        }
      />
      {path === 'view' && <DeviceView />}
      {path === 'setting' && <DeviceManage />}
    </>
  );
};

export default DeviceDetailPage;
