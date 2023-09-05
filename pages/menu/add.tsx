import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { MenuRegisterForm } from '@ComponentFarm/template/menu/RegisterForm';

const tabs = [
  {
    title: '메뉴 등록',
  },
];

const MenuAddPage = () => {
  return (
    <>
      <TitleArea title="메뉴 관리" BtnBox={<></>} />
      <Tabs tabs={tabs} activeTabIndex={0} onTabChange={() => {}} />
      <MenuRegisterForm />
    </>
  );
};

export default MenuAddPage;
