import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { GetStaticProps } from 'next';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { fetchPartnerList } from '@ApiFarm/ material';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentRes } from '@InterfaceFarm/environment';
import { IPartnerRes } from '@InterfaceFarm/material';
import { Button } from '@ComponentFarm/atom/Button/Button';
import ErrorTxt from '@ComponentFarm/atom/ErrorTxt/ErrorTxt';
import { Minus } from '@ComponentFarm/atom/icons';
import { IOption, Select } from '@ComponentFarm/atom/Select/Select';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap, Table, TableWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';

type FormFields = {
  [key: string]: string;
};

interface FormProps {
  initialData?: FormFields;
  loading?: boolean;
  shippingListData: IPartnerRes;
  area: IEnvironmentRes;
  //   onSubmit: (data: FormFields) => void;
}

const productStyles = css`
  table label {
    width: auto !important;
  }

  .line1 .field1 {
    label {
      width: 13rem;
    }
    .box_inp {
      display: flex;

      .select_library_control {
        width: 37.2rem;
        height: 4.4rem;
      }

      button {
        min-width: auto;
        width: 5.7rem;
        margin-left: 1.1rem;
      }
    }
  }

  table {
    width: 100%;
    background-color: rgba(247, 249, 252, 0.8);
    .line {
      margin-top: 0;
    }
    thead th {
      display: flex;
      align-items: center;
      padding: 1.1rem 2rem;
      border-bottom: none;

      button {
        min-width: auto;
        margin-right: 1.6rem;
        padding: 1.2rem 1.6rem;
        background: #fff;
      }
    }
    tbody {
      .line td {
        &.td_label {
          display: flex;
          align-items: center;
          width: calc(120 / 1517 * 100%);
          padding: 0.8rem 0 0.8rem 2rem;
          border-right: 1px solid var(--color-neutral90);
          label.req {
            margin-bottom: 0;
            &:after {
              display: none;
            }
          }
        }
        &.td_inp {
          width: calc(133 / 1517 * 100%);
          padding: 0.8rem 1rem 0.8rem;
          background: #fff;
          .box_inp {
            display: flex;
            justify-content: center;
            width: auto;
          }
          .inp {
            width: calc(80 / 130 * 100%);
            margin-right: 0.4rem;
            padding: 0.8rem 1.2rem;
          }
        }
      }
    }
  }
`;

const tabData = [
  {
    title: '원재료 기본 정보',
  },
  {
    title: '원재료 배송 정보',
  },
];

const Form: React.FC<FormProps> = ({
  initialData,
  loading,
  shippingListData,
  area,
}) => {
  const isEdit = !!initialData;
  const router = useRouter();
  const { id } = router.query;
  const isReadOnly = !id?.includes('add') && !!id;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tables, setTables] = useState<Array<string>>([]);
  const [selValue, setSelValue] = useState<IOption | null>(null);

  console.log('area', area, 'shippingListData', shippingListData);

  const regions = [
    { id: 'inp1', name: '서울' },
    { id: 'inp2', name: '경기' },
    { id: 'inp3', name: '인천' },
    { id: 'inp4', name: '강원' },
    { id: 'inp5', name: '세종' },
    { id: 'inp6', name: '대전' },
    { id: 'inp7', name: '충북' },
    { id: 'inp8', name: '충남' },
    { id: 'inp9', name: '대구' },
    { id: 'inp10', name: '울산' },
    { id: 'inp11', name: '전북' },
    { id: 'inp12', name: '전남' },
    { id: 'inp13', name: '광주' },
    { id: 'inp14', name: '경북' },
    { id: 'inp15', name: '경남' },
    { id: 'inp16', name: '부산' },
    { id: 'inp17', name: '제주' },
  ];

  const SelOption: IOption[] = [
    { label: 'CJ', value: 'CJ' },
    { label: '본사 직배송', value: 'DirectDelivery' },
    { label: '대한통운', value: 'DH' },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    unregister,
    setValue,
    formState: { errors },
  } = useForm();

  const addDeliveryMethod = (method: string | undefined) => {
    if (method && !tables.includes(method)) {
      setTables(prevTables => [...prevTables, method]);
    }
  };

  const removeDeliveryMethod = (method: string) => {
    setTables(prevTables =>
      prevTables.filter(tableMethod => tableMethod !== method)
    );

    // 해당 테이블의 모든 관련 항목들을 제거
    regions.forEach(region => {
      unregister(`${method}_${region.id}`);
      if (initialData) {
        // eslint-disable-next-line no-param-reassign
        delete initialData[`${method}_${region.id}`];
      }
    });
  };

  const onFormSubmit = handleSubmit(data => {
    onSubmit(data);
  });

  useEffect(() => {
    console.log('tables', tables);
  }, [tables]);

  useEffect(() => {
    if (initialData) {
      const deliveryMethods = new Set(
        Object.keys(initialData).map(key => key.split('_')[0])
      );
      setTables([...deliveryMethods]);
    }
  }, [initialData]);

  useEffect(() => {
    if (isEdit && initialData) {
      Object.keys(initialData).forEach(key => {
        setValue(key, initialData[key]);
      });
    }
  }, [initialData, setValue, isEdit]);

  return (
    <FormWrap onSubmit={onFormSubmit} css={productStyles}>
      <TitleArea
        title="원재료 등록"
        BtnBox={
          <>
            <Button variant="gostSecondary">취소</Button>
            <Button type="button" onClick={onFormSubmit}>
              등록
            </Button>
          </>
        }
      />
      <Tabs
        tabs={tabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => setActiveTabIndex(index)}
      />
      <h2>배송 정보</h2>
      <div className="line line1">
        <div className="field field1">
          <label htmlFor="method">배송방식</label>
          <div className="box_inp">
            <Select
              options={SelOption}
              selectedOption={selValue}
              setSelectedOption={setSelValue}
            />
            <Button onClick={() => addDeliveryMethod(selValue?.value)}>
              추가
            </Button>
          </div>
        </div>
      </div>

      {tables.length > 0 && <h2>배송 기간 입력</h2>}
      {tables.map(method => (
        <React.Fragment key={method}>
          <TableWrap
            css={css`
              margin-bottom: 3.2rem;
            `}
          >
            <Table>
              <thead>
                <tr>
                  <th colSpan={12}>
                    <Button
                      className="btn_remove"
                      onClick={() => removeDeliveryMethod(method)}
                      variant="gostSecondary"
                      IconOnly={<Minus />}
                    >
                      <span className="hiddenZoneV">제거</span>
                    </Button>
                    {SelOption.find(item => item.value === method)?.label || ''}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.ceil(regions.length / 6) }).map(
                  (_, rowIndex) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <tr className={`line line${rowIndex + 2}`} key={rowIndex}>
                      {regions
                        .slice(rowIndex * 6, rowIndex * 6 + 6)
                        .map((region, colIndex) => (
                          <React.Fragment key={region.name}>
                            <td className="td_label">
                              <label htmlFor={region.id} className="req">
                                {region.name}
                              </label>
                            </td>
                            <td className="td_inp">
                              <div
                                className={`box_inp ${
                                  errors[`${method}_${region.id}`]
                                    ? 'error'
                                    : ''
                                }`}
                              >
                                <input
                                  type="text"
                                  id={`${method}_${region.id}`}
                                  className="inp"
                                  placeholder="0"
                                  disabled={isReadOnly}
                                  {...register(`${method}_${region.id}`, {
                                    required: '필수 입력항목입니다.',
                                  })}
                                />
                                명
                                {errors[`${method}_${region.id}`] && (
                                  <ErrorTxt>
                                    {String(
                                      errors[`${method}_${region.id}`]?.message
                                    )}
                                  </ErrorTxt>
                                )}
                              </div>
                            </td>
                            {rowIndex === Math.ceil(regions.length / 6) - 1 &&
                              colIndex === 4 && (
                                <td
                                  colSpan={2}
                                  style={{ width: 'calc(253 / 1517 * 100%)' }}
                                >
                                  <span className="hiddenZoneV" />
                                </td>
                              )}
                          </React.Fragment>
                        ))}
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </TableWrap>
        </React.Fragment>
      ))}
    </FormWrap>
  );
};

// 임의의 initialData 생성
// const mockInitialData: FormFields = {
//   CJ_inp1: '5',
//   CJ_inp2: '7',
//   CJ_inp3: '3',
//   CJ_inp4: '8',
//   CJ_inp5: '2',
//   CJ_inp6: '4',
//   CJ_inp7: '6',
//   CJ_inp8: '9',
//   CJ_inp9: '1',
//   CJ_inp10: '10',
//   CJ_inp11: '11',
//   CJ_inp12: '12',
//   CJ_inp13: '13',
//   CJ_inp14: '14',
//   CJ_inp15: '15',
//   CJ_inp16: '16',
//   CJ_inp17: '17',
//   DirectDelivery_inp1: '6',
//   DirectDelivery_inp2: '9',
//   DirectDelivery_inp3: '8',
//   DirectDelivery_inp4: '7',
//   DirectDelivery_inp5: '5',
//   DirectDelivery_inp6: '4',
//   DirectDelivery_inp7: '3',
//   DirectDelivery_inp8: '2',
//   DirectDelivery_inp9: '1',
//   DirectDelivery_inp10: '10',
//   DirectDelivery_inp11: '11',
//   DirectDelivery_inp12: '12',
//   DirectDelivery_inp13: '13',
//   DirectDelivery_inp14: '14',
//   DirectDelivery_inp15: '15',
//   DirectDelivery_inp16: '16',
//   DirectDelivery_inp17: '17',
// };

const Shipping = ({ environment }: { environment: IEnvironmentRes }) => {
  const partnerCategory = useMemo(
    () => environment?.list?.find(el => el.code === 'pct_shipping_company'),
    [environment.list]
  );

  const area = useMemo(
    () => environment?.list?.filter(el => el.name === 'area'),
    [environment.list]
  );

  const { data: shippingListData } = useQuery(
    ['shippingList'],
    () => fetchPartnerList(String(partnerCategory?.environment_variable_idx)),
    { enabled: !!partnerCategory }
  );

  // Form 컴포넌트 사용 예시
  return (
    <>
      {environment && shippingListData && (
        <Form
          environment={environment}
          shippingListData={shippingListData}
          area={area}
        />
      )}
    </>
  );
};

export default Shipping;

export async function getStaticPaths() {
  // 기본 경로들
  const basePaths = [
    { params: { id: ['add'] } },
    { params: { id: ['modify'] } },
    { params: { id: ['view'] } },
  ];

  return {
    paths: basePaths,
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async context => {
  const environment = await fetchEnvironment({
    name: 'partner_company_type,area',
  });

  return {
    props: {
      environment,
    },
    revalidate: 10,
  };
};
