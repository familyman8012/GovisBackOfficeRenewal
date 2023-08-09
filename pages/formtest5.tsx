import React from 'react';
import Formtest from '@ComponentFarm/template/formbuilder/Formtest';

const AlarmHeadOfficeDetail = () => {
  // const router = useRouter();

  // const { data, isLoading, refetch } = useQuery<IAlarmInfoIdxRes, TError>(
  //   [`user-detail`, router.query.id],
  //   () => fetchAlarmInfoIdx(router.query.id),
  //   {
  //     enabled: !!router.query.id,
  //     onError: errorHandlerWithQueryPass,
  //   }
  // );

  // const update = useMutation(fetchAlarmInfoMod, {
  //   onSuccess: async () => {
  //     await alert.success('수정 완료', '알람 정보가 수정되었습니다.');
  //     router.back();
  //     refetch();
  //   },
  // });

  const handlerSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Formtest onSubmit={(data: any) => handlerSubmit(data)} />
    </div>
  );
};

export default AlarmHeadOfficeDetail;
