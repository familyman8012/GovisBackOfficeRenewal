import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { updateUpdateAisttInfo } from '@ApiFarm/aistt';
import { Button } from '@ComponentFarm/atom/Button/Button';
import DeviceManageForm from '@ComponentFarm/template/aistt/device/DeviceManageForm';
import DeviceView from '@ComponentFarm/template/aistt/device/DeviceView';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { useGoMove } from '@HookFarm/useGoMove';
import { formRequestSubmit } from '@UtilFarm/form';

const allowPath = ['view', 'setting'];

const DeviceDetailPage = () => {
  const router = useRouter();
  const { onBack } = useGoMove();
  const formRef = useRef<HTMLFormElement>(null);

  const path = React.useMemo(
    () => router.query.id?.[0] ?? '',
    [router.isReady, router.asPath]
  );
  const storeId = React.useMemo(
    () => router.query.id?.[1] ?? '',
    [router.isReady]
  );

  const updateStoreInfo = useMutation(updateUpdateAisttInfo, {
    onSuccess: () => router.push(`/aistt-device/view/${storeId}`),
  });

  useEffect(() => {
    if (router.isReady && !allowPath.includes(path)) {
      router.push('/aistt-device/');
    }
  }, [path, router.isReady]);

  return (
    <>
      <LayoutTitleBoxWithTab
        id="ai-fqs-device-view"
        title="매장 모니터링"
        tabs={[
          {
            title: '기기 정보',
            path: '/aistt-device/view/[id]',
          },
          {
            title: '기기 정보 입력',
            path: '/aistt-device/setting/[id]',
          },
        ]}
        actionButtons={
          <>
            <Button variant="gostSecondary" onClick={() => onBack()}>
              이전
            </Button>
            {path === 'setting' && (
              <Button
                disabled={updateStoreInfo.isLoading}
                onClick={() => formRequestSubmit(formRef.current)}
              >
                수정
              </Button>
            )}
          </>
        }
      />
      {path === 'view' && <DeviceView />}
      {path === 'setting' && (
        <DeviceManageForm
          ref={formRef}
          storeId={storeId}
          onSubmit={data => updateStoreInfo.mutate(data)}
        />
      )}
    </>
  );
};

export default DeviceDetailPage;
