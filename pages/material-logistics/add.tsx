import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import PartnerForm from '@ComponentFarm/template/material-partner/PartnerForm';

const tabData = [
  {
    title: '물류사 등록',
  },
];

const LogisticsAddPage = () => {
  return (
    <>
      <TitleArea title="물류사 관리" BtnBox={<></>} />
      <Tabs tabs={tabData} activeTabIndex={0} onTabChange={() => {}} />
      <PartnerForm
        partnerLabel="물류사"
        onSubmit={data => console.log('submited Data: ', data)}
      />
    </>
  );
};

export default LogisticsAddPage;
