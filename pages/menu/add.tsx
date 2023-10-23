import { useRef } from 'react';
import { NextPage } from 'next';
import { useMutation } from 'react-query';
import { createMenu } from '@ApiFarm/menu';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { MenuForm } from '@ComponentFarm/template/menu/MenuForm';
import { useGoMove } from '@HookFarm/useGoMove';
import { formRequestSubmit } from '@UtilFarm/form';

const tabs = [
  {
    title: '메뉴 등록',
  },
];

const MenuAddPage: NextPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { onBack } = useGoMove();

  const createMutate = useMutation(createMenu, {
    onSuccess: () => {
      onBack();
    },
  });

  return (
    <>
      <TitleArea
        title="메뉴 관리"
        BtnBox={
          <>
            <Button variant="gostSecondary" onClick={() => onBack()}>
              이전
            </Button>
            <Button
              disabled={createMutate.isLoading}
              onClick={() => formRequestSubmit(formRef.current)}
            >
              저장
            </Button>
          </>
        }
      />
      <Tabs id="" tabs={tabs} activeTabIndex={0} onTabChange={() => {}} />
      <MenuForm ref={formRef} onSubmit={createMutate.mutate} />
    </>
  );
};

export default MenuAddPage;
