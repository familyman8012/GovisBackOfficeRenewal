import { useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import { useMutation } from 'react-query';
import { fetchEnvironment } from '@ApiFarm/environment';
import { updateMenuInfo } from '@ApiFarm/menu';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import AlertModal from '@ComponentFarm/modules/Modal/AlertModal';
import { Button } from '@ComponentFarm/atom/Button/Button';
import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { menuDetailLayoutConfig } from '@ComponentFarm/template/menu/const';
import { MenuForm } from '@ComponentFarm/template/menu/MenuForm';
import { useGoMove } from '@HookFarm/useGoMove';

const MenuDetailPage: NextPage<{
  envs: IEnvironmentResItem[];
}> = ({ envs }) => {
  const router = useRouter();
  const { onBack } = useGoMove();
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const id = useMemo(
    () => parseInt(router.query?.menu_info_idx as string, 10),
    [router]
  );

  const [editable, setEditable] = useState(false);

  const updateMutate = useMutation(updateMenuInfo, {
    onSuccess: () => {
      setShowAlert(true);
      if (editable) setEditable(false);
    },
  });

  return (
    <div>
      <LayoutTitleBoxWithTab
        {...menuDetailLayoutConfig}
        actionButtons={
          editable ? (
            <>
              <Button
                variant="gostSecondary"
                onClick={() => setEditable(false)}
              >
                취소
              </Button>
              <Button
                disabled={updateMutate.isLoading}
                onClick={() => formRef.current?.requestSubmit()}
              >
                저장
              </Button>
            </>
          ) : (
            <>
              <Button variant="gostSecondary" onClick={() => onBack()}>
                이전
              </Button>
              <Button
                disabled={updateMutate.isLoading}
                onClick={() => {
                  if (!editable) setEditable(true);
                }}
              >
                수정
              </Button>
            </>
          )
        }
      />
      <MenuForm
        ref={formRef}
        id={id}
        editable={editable}
        envs={envs}
        onSubmit={updateMutate.mutate}
      />
      <AlertModal
        isOpen={showAlert}
        title="메뉴 수정"
        content="메뉴 정보가 수정 완료되었습니다."
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${60 * 60 * 24 * 2}, stale-while-revalidate=59`
  );

  const props = await fetchEnvironment({
    name: [
      'menu_group',
      'menu_type',
      'menu_status',
      'menu_category_status',
      'menu_classification',
    ].join(','),
  });

  return {
    props: {
      envs: props.list,
      // cacheTime: 3600,
    },
  };
};

export default MenuDetailPage;
