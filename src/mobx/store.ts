import { observable } from 'mobx';
import router from 'next/router';
import secureLocalStorage from 'react-secure-storage';
import { ILoginUserResponse } from '@InterfaceFarm/auth';
import { IUserPermission } from '@InterfaceFarm/user';
import {
  Franchise,
  HeadOffice,
  Home,
  Homepage,
} from '@ComponentFarm/atom/icons';
import { TotalMenu } from '@ComponentFarm/layout/MenuData';

export const menuStore: any = observable({
  currentGroup: 'Home',
  currentUrl: null,
  groupMap: {
    Home: { component: Home, menuName: '홈' },
    HeadOffice: { component: HeadOffice, menuName: '본사 관리' },
    Franchise: { component: Franchise, menuName: '프랜차이즈 관리' },
    Homepage: { component: Homepage, menuName: '홈페이지 관리' },
  },
});

export type PermissionList = {
  iconMenus: string[];
  menus: {
    depth1: string;
    group: string;
    path?: string;
    perm_info_idx?: number;
    depth2?: {
      name: string;
      path: string;
      perm_code: string;
      perm_info_idx: number;
    }[];
  }[];
};

interface IAuthStore {
  token: string | null;
  user_info: ILoginUserResponse['user_info'] | null;
  store_info: ILoginUserResponse['store'] | null;
  permissionCodes?: string[];
  isLoggedIn: boolean;
  is_staff?: number;
  init: () => void;
  login: (authData: any) => void;
  logOut: () => void;
  MenuGeneration: () => void;
  permissionList: PermissionList | null;
}

const TOKEN_KEY = 'BO_AUTH_TOKEN';
const USER_INFO = 'BO_USER_INFO';
const STORE_INFO = 'BO_USER_STORE';
const PERMISSION_LIST = 'BO_PERMISSION_STORE';

export const authStore = observable<IAuthStore>({
  token: null,
  user_info: null,
  store_info: null,
  permissionCodes: undefined,
  is_staff: undefined,
  permissionList: null,
  init() {
    try {
      this.token = String(secureLocalStorage.getItem(TOKEN_KEY)) ?? null;
      this.user_info = JSON.parse(
        String(secureLocalStorage.getItem(USER_INFO))
      );
      this.store_info = JSON.parse(
        String(secureLocalStorage.getItem(STORE_INFO)) ?? 'null'
      );
      this.permissionList = JSON.parse(
        String(secureLocalStorage.getItem(PERMISSION_LIST)) ?? 'null'
      );
    } catch (e) {
      this.token = null;
      this.user_info = null;
      this.store_info = null;
      this.permissionCodes = undefined;
      this.permissionList = null;
    }
    console.log(' this.token', this.token);
  },
  login(authData: ILoginUserResponse) {
    if (Object.keys(authData).length !== 0) {
      this.token = String(authData.token);
      this.user_info = authData.user_info;
      this.store_info = authData.store;
      const permCodes = authData.permission?.perm_list?.map(
        (perm: IUserPermission) => perm.perm_code
      );
      this.permissionCodes = permCodes;

      secureLocalStorage.setItem(TOKEN_KEY, String(authData.token));
      secureLocalStorage.setItem(USER_INFO, JSON.stringify(authData.user_info));
      // eslint-disable-next-line no-unused-expressions
      authData.store &&
        secureLocalStorage.setItem(STORE_INFO, JSON.stringify(authData.store));
      this.MenuGeneration();
    }
  },
  logOut() {
    this.token = null;
    this.user_info = null;
    this.store_info = null;
    this.permissionCodes = undefined;
    this.permissionList = null;

    secureLocalStorage.removeItem(TOKEN_KEY);
    secureLocalStorage.removeItem(USER_INFO);
    secureLocalStorage.removeItem(STORE_INFO);
    secureLocalStorage.removeItem(PERMISSION_LIST);

    // 마이그레이션 목적으로 이전에 사용 값 삭제
    if (
      localStorage.getItem('token') ||
      localStorage.getItem('user_info') ||
      localStorage.getItem('myStore')
    ) {
      localStorage.clear();
    }

    router.replace('/');
  },
  get isLoggedIn() {
    return !!this.user_info && !!this.token;
  },
  MenuGeneration() {
    // 2depth 항목 중 permList에 포함된 항목만 남김
    let customizedMenu = TotalMenu.map(menu => {
      if (menu.depth2) {
        return {
          ...menu,
          depth2: menu.depth2.filter(
            item => this.permissionCodes?.includes(item.perm_code)
          ),
        };
      }
      return menu;
    });

    // 2depth 항목이 모두 삭제된 1depth 항목 삭제
    customizedMenu = customizedMenu.filter(
      menu => !menu.depth2 || menu.depth2.length > 0
    );

    const iconMenus = customizedMenu
      .map(item => {
        return item.group;
      })
      .filter((group, index, self) => {
        // 자신의 권한이 없는 그룹은 보이지 않게 (-1로 필터링)
        return self.indexOf(group) === index;
      });

    this.permissionList = { iconMenus, menus: customizedMenu };

    secureLocalStorage.setItem(
      PERMISSION_LIST,
      JSON.stringify({ iconMenus, menus: customizedMenu })
    );
  },
});

interface ModalState {
  isOpen: boolean;
  title?: string;
  content?: React.ReactNode;
  onFormSubmit?: () => void;
  onCancel?: () => void;
  submitButtonText?: string;
  cancelButtonText?: string;
  showCloseButton?: boolean;
  showCancelButton?: boolean;
}

interface ModalActions {
  openModal: (options: Omit<ModalState, 'isOpen'>) => void;
  closeModal: () => void;
}

export type ModalStore = ModalState & ModalActions;

export const confirmModalStore = observable({
  isOpen: false,
  title: '',
  content: null,
  onFormSubmit: () => {},
  onCancel() {
    this.isOpen = false;
  },
  submitButtonText: '확인',
  cancelButtonText: '취소',
  onCancle: null,
  showCloseButton: false,
  showCancelButton: true,
  openModal(options: Omit<ModalState, 'isOpen'>) {
    this.isOpen = true;
    Object.assign(this, options);
  },
  closeModal() {
    this.isOpen = false;
  },
});

export const manageFormStore = observable({
  isEdit: false,
});
