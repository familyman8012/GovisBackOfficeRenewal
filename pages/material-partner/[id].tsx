import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import PartnerForm from '@ComponentFarm/template/material-partner/PartnerForm';

const tabData = [
  {
    title: '제조사 상세정보',
  },
];

const PartnerDetailPage = () => {
  return (
    <>
      <TitleArea title="제조사 관리" BtnBox={<></>} />
      <Tabs tabs={tabData} activeTabIndex={0} onTabChange={() => {}} />
      <PartnerForm
        initialData={{
          partner_company_code: '123',
          business_address: '123',
          business_number: '123',
          partner_company_name: 'cj프레시웨이',
          partner_company_descriptionType: '1',
          evi_partner_company_status: '1',
        }}
        partnerLabel="제조사"
        onSubmit={data => console.log('submited Data: ', data)}
      />
    </>
  );
};

export default PartnerDetailPage;
