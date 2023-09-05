import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '@ComponentFarm/modules/Modal/Modal';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { InnerTable } from '@ComponentFarm/common';

interface Props {
  show: boolean;
  onClose: () => void;
  onRegister: (id: number) => void;
}

/**
 * @TODO type define

 */
const RegisterModal = ({ show, onClose, onRegister }: Props) => {
  const {} = useForm<any>({
    defaultValues: {},
  });

  return (
    <Modal
      isOpen={show}
      title="카테고리 등록"
      showCloseButton
      onClose={onClose ?? (() => {})}
    >
      <InnerTable
        bordered
        style={{
          width: '552px',
        }}
      >
        <colgroup>
          <col width={157} />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>카테고리명</th>
            <td>
              <input type="text" className="inp" />
            </td>
          </tr>
          <tr>
            <th>카테고리 상태</th>
            <td>
              <RadioGroup
                options={[
                  {
                    label: '사용',
                    value: '1',
                  },
                  {
                    label: '미사용',
                    value: '2',
                  },
                ]}
                onChange={() => {}}
              />
            </td>
          </tr>
        </tbody>
        <tr />
      </InnerTable>
      {/* <div>unknown</div> */}
    </Modal>
  );
};

export default RegisterModal;
