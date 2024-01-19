import { useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { fetchRegisterSales } from '@ApiFarm/store-sales-keyin';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import SalesDataForm from '@ComponentFarm/template/store-sales-keyin/SalesDataForm';
import { useGoMove } from '@HookFarm/useGoMove';
import { formRequestSubmit } from '@UtilFarm/form';

const StoreSalesKeyinUpdatePage = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const { onBack } = useGoMove();

  const sales_keyin_idx = useMemo(
    () => parseInt(router.query.sales_keyin_idx as string, 10),
    [router]
  );

  const updateSalesMutation = useMutation(fetchRegisterSales, {
    onSuccess: () => onBack(),
  });

  return (
    <>
      <TitleArea
        title="매장 매출 수기입력"
        BtnBox={
          <>
            <Button variant="gostSecondary" onClick={() => onBack()}>
              이전
            </Button>
            <Button
              disabled={updateSalesMutation.isLoading}
              onClick={() => formRequestSubmit(formRef.current)}
            >
              수정
            </Button>
          </>
        }
      />
      <Tabs
        id=""
        tabs={[
          {
            title: '매출 입력 수정',
          },
        ]}
        activeTabIndex={0}
        onTabChange={() => {}}
      />
      {router.isReady && (
        <SalesDataForm
          id={sales_keyin_idx}
          ref={formRef}
          onSubmit={updateSalesMutation.mutate}
        />
      )}
    </>
  );
};

export default StoreSalesKeyinUpdatePage;
