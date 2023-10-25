import { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from '@ComponentFarm/modules/DatePicker/DatePicker';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { aisttStateListTabData } from '@ComponentFarm/template/aistt/const';
import FilterTableForm from '@ComponentFarm/template/aistt/FilterTableForm';
import StateInfoBox from '@ComponentFarm/template/common/StateInfoBox';
import TitleBox from '@ComponentFarm/template/common/TitleBox';

const AisttState = () => {
  const router = useRouter();
  //   const environment = EnvStore?.getData({
  //     name: 'material_storage_type,material_status',
  //   });
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const [params, updateParams, resetParams] = useQueryParams({
  //   current_num: 1,
  //   per_num: 10,
  // });

  //   const { isLoading, data } = useQuery(['materialList', router.asPath], () =>
  //     fetchMaterialList(params)
  //   );

  const hanldeTabMove = (index: number) => {
    setActiveTabIndex(index);
    router.push(aisttStateListTabData[index].url);
  };

  const StateItems = [
    { title: '전체 매장 수', txt1: '5', txt2: '개', txt3: '( +4 )' },
    { title: '제품 제조 수', txt1: '1,425', txt2: '개', txt3: '( +4 )' },
  ];

  const data = [
    {
      item_label: '00',
      base_value_data: {
        value_list: [
          {
            value_label: '피자',
            value: 104,
          },
          {
            value_label: '파스타',
            value: 22,
          },
        ],
        total_value: 126,
      },
      compare_value_data: {
        value_list: [
          {
            value_label: '피자',
            value: 114,
          },
          {
            value_label: '파스타',
            value: 23,
          },
        ],
        total_value: 137,
      },
      increase_decrease_number: -9,
      increase_decrease_rate: -8,
    },
  ];

  const [selectedDate, setSelectedDate] = useState('2023-08-05');
  const handleSubmit = () => {
    console.log(selectedDate);
  };

  return (
    <>
      <TitleArea title="현황" />
      <Tabs
        id="material"
        tabs={aisttStateListTabData}
        activeTabIndex={activeTabIndex}
        onTabChange={index => hanldeTabMove(index)}
      />
      <TitleBox
        title="제조 품질 통계"
        desc="분류, 기간 유형별 통계를 확인할 수 있습니다."
      />
      <FilterTableForm />
      <StateInfoBox items={StateItems} />

      <DatePicker
        selectedDate={selectedDate}
        onChange={(newDate: string) => setSelectedDate(newDate)}
      />
    </>
  );
};

export default AisttState;
