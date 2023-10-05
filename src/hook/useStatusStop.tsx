import { useEffect, useMemo } from 'react';
import { runInAction } from 'mobx';
import { confirmModalStore } from '@MobxFarm/store';

interface IEnvironmentRes {
  list: Array<{
    environment_variable_idx: string;
    code?: string;
  }>;
}

interface UseStatusStopProps {
  environment: IEnvironmentRes;
  initialDataKey: string | undefined;
  watchKey: string;
  pageMode: string;
  statusCodes: string[];
  statusType: string;
  setValue: any;
  STATUS: Array<{ label: string; value: string }>;
  watch: (key: string) => string | undefined;
}

const useStatusStop = ({
  environment,
  initialDataKey,
  watchKey,
  pageMode,
  statusCodes, // 배열로 변경
  statusType,
  setValue,
  STATUS,
  watch,
}: UseStatusStopProps) => {
  const envList = environment?.list;

  const initialWatch = useMemo(
    () =>
      envList.find(
        el => String(el.environment_variable_idx) === String(initialDataKey)
      ),
    [envList, initialDataKey]
  );

  const statusWatch = envList.find(
    el => String(el.environment_variable_idx) === String(watch(watchKey))
  );

  const isReadOnly =
    pageMode === 'view' || statusCodes.includes(String(statusWatch?.code)); // 배열 내부에 해당 코드가 있는지 확인

  const changeAlertModal = () => {
    runInAction(() => {
      confirmModalStore.openModal({
        title: '변경 전 주의사항',
        content: (
          <p>
            {statusType} 상태를
            {statusCodes.length === 2 ? '중단 및 폐기' : '중단으'}로 변경하실
            경우,
            <br />
            추후 복구가 불가능합니다.
            <br />
            변경하시겠습니까?
          </p>
        ),
        onFormSubmit: () => {
          confirmModalStore.isOpen = false;
        },
        onCancel: () => {
          setValue(
            watchKey,
            initialDataKey ? String(initialDataKey) : String(STATUS[0].value)
          );
          confirmModalStore.isOpen = false;
        },
        submitButtonText: '확인',
      });
    });
  };

  useEffect(() => {
    if (
      !statusCodes.includes(String(initialWatch?.code)) &&
      statusCodes.some(code => code === statusWatch?.code)
    ) {
      changeAlertModal();
    }
  }, [initialWatch?.code, statusWatch]);

  return { isReadOnly, statusWatch };
};

export default useStatusStop;
