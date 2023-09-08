import { useRef } from 'react';
import { NextPage } from 'next';
import { useMutation } from 'react-query';
import { EnvRow, fetchEnvironment } from '@ApiFarm/environment';
import { createMenu } from '@ApiFarm/menu';
import { IMenuFormFields } from '@InterfaceFarm/menu';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { MenuRegisterForm } from '@ComponentFarm/template/menu/RegisterForm';
import { useGoMove } from '@HookFarm/useGoMove';

const tabs = [
  {
    title: '메뉴 등록',
  },
];

const MenuAddPage: NextPage<{
  envs: EnvRow[];
}> = ({ envs }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { onBack } = useGoMove();

  const createMutate = useMutation(createMenu, {
    onSuccess: () => {
      onBack();
    },
  });

  const handleSubmit = (formData: IMenuFormFields) => {
    createMutate.mutate(formData);
  };

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
              onClick={() => formRef.current?.requestSubmit()}
            >
              등록하기
            </Button>
          </>
        }
      />
      <Tabs tabs={tabs} activeTabIndex={0} onTabChange={() => {}} />
      <MenuRegisterForm ref={formRef} envs={envs} onSubmit={handleSubmit} />
    </>
  );
};

export const getStaticProps = async () => {
  const props = await fetchEnvironment({
    name: [
      'menu_group',
      'menu_type',
      'menu_status',
      'menu_category_status',
    ].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
    revalidate: 10,
  };
};

export default MenuAddPage;
