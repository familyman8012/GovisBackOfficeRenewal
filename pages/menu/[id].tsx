import { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useMutation } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { updateMenuInfo } from '@ApiFarm/menu';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { MenuForm } from '@ComponentFarm/template/menu/MenuForm';
import { useGoMove } from '@HookFarm/useGoMove';

const tabs = [
  {
    title: '메뉴 상세 정보',
  },
  {
    title: '변경내역',
  },
];

const MenuDetailPage: NextPage<{
  envs: IEnvironmentResItem[];
}> = ({ envs }) => {
  const router = useRouter();
  const { onBack } = useGoMove();
  const formRef = useRef<HTMLFormElement>(null);

  const id = useMemo(() => parseInt(router.query?.id as string, 10), [router]);
  const [editable, setEditable] = useState(false);

  const updateMutate = useMutation(updateMenuInfo, {
    onSuccess: () => {
      onBack();
      if (editable) setEditable(false);
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
              disabled={updateMutate.isLoading}
              onClick={() => {
                if (!editable) setEditable(true);
                else formRef.current?.requestSubmit();
              }}
            >
              {editable ? '저장' : '수정'}
            </Button>
          </>
        }
      />
      <Tabs id="" tabs={tabs} activeTabIndex={0} onTabChange={() => {}} />
      <MenuForm
        ref={formRef}
        id={id}
        editable={editable}
        envs={envs}
        onSubmit={updateMutate.mutate}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: ':id',
        },
      },
    ],
    fallback: 'blocking',
  };
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

export default MenuDetailPage;
