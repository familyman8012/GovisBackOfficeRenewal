import { useRef } from 'react';
import { NextPage } from 'next';
import { useMutation } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { createMenu } from '@ApiFarm/menu';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { MenuForm } from '@ComponentFarm/template/menu/MenuForm';
import { useGoMove } from '@HookFarm/useGoMove';

const tabs = [
  {
    title: '메뉴 등록',
  },
];

const MenuAddPage: NextPage<{
  envs: IEnvironmentResItem[];
}> = ({ envs }) => {
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
              onClick={() => formRef.current?.requestSubmit()}
            >
              저장
            </Button>
          </>
        }
      />
      <Tabs id="" tabs={tabs} activeTabIndex={0} onTabChange={() => {}} />
      <MenuForm ref={formRef} envs={envs} onSubmit={createMutate.mutate} />
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
