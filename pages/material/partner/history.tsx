import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import generateHistoryPage2 from '@ComponentFarm/template/history/generateHistoryPage2';
import { tabDataFunc } from '@ComponentFarm/template/product/material/partner/const';
import { EnvStore } from '@MobxFarm/store';

const History = () => {
  const router = useRouter();
  const environment = EnvStore?.getData({
    name: 'partner_company_type,partner_company_status',
  });

  const partnerLabel = useMemo(
    () => environment?.list?.find(el => el.code === router.query.category),
    [environment?.list, router.query.category]
  )?.value;

  const tabData = tabDataFunc(String(partnerLabel), 'view', router?.query);

  const getHistory = generateHistoryPage2({
    idx: String(router?.query?.id),
    endpoint: `/partner_company/history/list`,
    subTitle: '거래처 변경 내역',
    tabData,
    subRoot: true,
  });

  return <>{getHistory({ environment })}</>;
};

export default History;
