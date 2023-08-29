import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import PartnerForm from '@ComponentFarm/template/ingredient/PartnerForm';

const tabData = [
  {
    title: '물류사 상세정보',
  },
];

const LogisticsDetailPage = () => {
  return (
    <>
      <TitleArea title="물류사 관리" BtnBox={<></>} />
      <Tabs tabs={tabData} activeTabIndex={0} onTabChange={() => {}} />
      <PartnerForm onSubmit={data => console.log('submited Data: ', data)} />
    </>
  );
};

export default LogisticsDetailPage;
