import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  fetchPartnerFormModify,
  fetchPartnerFormSave,
  fetchPartnerFormView,
} from '@ApiFarm/ material';
import { IPartnerSaveReq } from '@InterfaceFarm/material';
import PartnerForm from '@ComponentFarm/template/product/material/partner/PartnerForm';
import { EnvStore } from '@MobxFarm/store';

const LogisticsDetailPage = () => {
  const router = useRouter();
  const environment = EnvStore?.getData({
    name: 'partner_company_type,partner_company_status',
  });
  const { id } = router.query;
  const queryClient = useQueryClient();
  const [pageMode, setPageMode] = useState('');

  // view 일때, 데이터 불러오기
  const { data: viewData } = useQuery(
    ['partnerFormView', id && id[1]],
    () => fetchPartnerFormView(String(id && id[1])),
    {
      enabled: pageMode === 'view',
    }
  );
  /// /pct_manufacturer : 거래처
  // pct_shipping_company : 물류사
  const partnerCategory = useMemo(
    () => environment?.list?.find(el => el.code === router.query.category),
    [environment?.list, router.query.category]
  );

  // 등록일때, 데이터 저장
  const saveSubmit = useMutation(
    pageMode === 'add' ? fetchPartnerFormSave : fetchPartnerFormModify,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['materialList']);
        router.push({
          pathname: '/material/partner',
          query: router.query,
        });
      },
    }
  );

  const modifySubmit = useMutation(fetchPartnerFormModify, {
    onSuccess: () => {
      queryClient.invalidateQueries(['materialList']);
      router.back();
    },
  });

  const submitFunc = async (submitData: IPartnerSaveReq) => {
    if (pageMode === 'add') {
      submitData.evi_partner_company_type = String(
        partnerCategory?.environment_variable_idx
      );
      saveSubmit.mutate(submitData);
    }
    if (pageMode === 'modify') {
      // eslint-disable-next-line no-unused-vars
      const { evi_partner_company_type, ...sendData } = submitData;
      modifySubmit.mutate({
        params: viewData.partner_company_idx,
        data: {
          ...sendData,
        },
      });
    }
  };

  // Form 상태 변화.
  useEffect(() => {
    setPageMode(
      id?.includes('view')
        ? 'view'
        : id?.includes('add')
        ? 'add'
        : id?.includes('modify')
        ? 'modify'
        : ''
    );
  }, [id]);

  return (
    <>
      {(pageMode === 'add' ||
        (pageMode === 'view' && viewData) ||
        (pageMode === 'modify' && viewData)) && (
        <PartnerForm
          initialData={pageMode !== 'add' ? viewData : undefined}
          isSubmitLoading={
            pageMode === 'add'
              ? saveSubmit.isLoading
              : pageMode === 'modify'
              ? modifySubmit.isLoading
              : false
          }
          pageMode={pageMode}
          environment={environment}
          partnerLabel={String(partnerCategory?.value)}
          submitFunc={submitFunc}
        />
      )}
    </>
  );
};

export default LogisticsDetailPage;
