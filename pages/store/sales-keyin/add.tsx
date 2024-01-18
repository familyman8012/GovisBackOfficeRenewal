import { useRef } from 'react';
import { useMutation } from 'react-query';
import { fetchRegisterSales } from '@ApiFarm/sales-keyin';
import { ISaleskeyInRegisterParams } from '@InterfaceFarm/store-sales-keyin';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import SalesDataForm from '@ComponentFarm/template/store/SalesDataForm';
import { useGoMove } from '@HookFarm/useGoMove';
import { formRequestSubmit } from '@UtilFarm/form';

const StoreSalesKeyinAddPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { onBack } = useGoMove();

  const addSalesMutation = useMutation(
    (formData: ISaleskeyInRegisterParams) => {
      //
      const replaceFormData = {
        ...formData,
        key_in: formData.key_in.map(item => ({
          ...item,
          total_price:
            Number(item.total_price) === 0
              ? item.items.reduce((acc, cur) => acc + Number(cur.price), 0)
              : Number(item.total_price),
        })),
      };

      return fetchRegisterSales(replaceFormData);
    },
    {
      onSuccess: () => onBack(),
    }
  );

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
              disabled={addSalesMutation.isLoading}
              onClick={() => formRequestSubmit(formRef.current)}
            >
              저장
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
      <SalesDataForm ref={formRef} onSubmit={addSalesMutation.mutate} />
    </>
  );
};

export default StoreSalesKeyinAddPage;
