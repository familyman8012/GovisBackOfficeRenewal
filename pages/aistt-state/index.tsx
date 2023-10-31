/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useRouter } from 'next/router';
import DateRangePicker from '@ComponentFarm/modules/DateRange/DateRange';
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

  const columnName = {
    searchBoxTitle: ['제품 상태', '제품 분류'],
    th: ['제품 분류', '제품명', '제품 상태'],
    col: [46, 180, 240, 180],
  };

  const ResultTempArr = [
    {
      id: 0,
      kind: '피자',
      name: '오리지널 페페로니 피자',

      state: 'op',
    },
    {
      id: 1,
      kind: '피자',
      name: '베이컨 포테이토 피자',

      state: 'op',
    },
    {
      id: 2,
      kind: '피자',
      name: '매니악 페로니 피자',

      state: 'st',
    },
    {
      id: 3,
      kind: '피자',
      name: '매니악 페로니 피자',

      state: 'st',
    },
    {
      id: 4,
      kind: '피자',
      name: '매니악 페로니 피자',

      state: 'st',
    },
  ];

  const [selectedDate, setSelectedDate] = useState('2023-08-05');
  const [selectedDateRange, setSelectedDateRange] = useState<any>([null, null]);
  const handleSubmit = () => {
    console.log(selectedDate);
  };

  const handleDateRangeChange = (update: any) => {
    setSelectedDateRange(update);
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

      <DateRangePicker onDateRangeChange={handleDateRangeChange} />
      {/* <SearchPopup
        title="제품 상세 설정"
        type="checkbox"
        columnName={columnName}
        data={ResultTempArr}
      /> */}
      {/* <p>
        Selected range: {selectedDateRange[0]?.toLocaleDateString()} -{' '}
        {selectedDateRange[1]?.toLocaleDateString()}
      </p> */}
    </>
  );
};

export default AisttState;
