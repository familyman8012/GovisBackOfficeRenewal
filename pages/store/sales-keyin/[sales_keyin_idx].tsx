import { useMemo, useRef } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { fetchRegisterSales } from '@ApiFarm/sales-keyin';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import SalesDataForm from '@ComponentFarm/template/store/SalesDataForm';
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

  //   const {} = useQuery(
  //     ['store-sales-keyin-list', sales_keyin_idx],
  //     () => fetch({}),
  //     {
  //       onError: () => onBack(),
  //       enabled: !!sales_keyin_idx,
  //     }
  //   );

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
            title: '매출 수기 등록',
          },
        ]}
        activeTabIndex={0}
        onTabChange={() => {}}
      />
      {router.isReady && (
        <SalesDataForm
          ref={formRef}
          id={sales_keyin_idx}
          onSubmit={updateSalesMutation.mutate}
        />
      )}
    </>
  );
};

export default StoreSalesKeyinUpdatePage;
