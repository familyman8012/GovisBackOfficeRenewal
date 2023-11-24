import LayoutTitleBoxWithTab from '@ComponentFarm/template/layout/LayoutWithTitleBoxAndTab';
import { menuListLayoutConfig } from '@ComponentFarm/template/menu/const';

const MenuLinkPage = () => {
  return (
    <div>
      <LayoutTitleBoxWithTab
        {...menuListLayoutConfig}
        // actionButtons={
        //   //   <>
        //   //     <Button
        //   //       variant="gostSecondary"
        //   //       LeadingIcon={<Export />}
        //   //       onClick={() => downloadMenuList(params)}
        //   //     >
        //   //       내보내기
        //   //     </Button>
        //   //     <Button
        //   //       variant="primary"
        //   //       LeadingIcon={<Plus />}
        //   //       onClick={() => router.push(`${pathname}/add`)}
        //   //     >
        //   //       메뉴 생성
        //   //     </Button>
        //   //   </>
        // }
      />
    </div>
  );
};

export default MenuLinkPage;
