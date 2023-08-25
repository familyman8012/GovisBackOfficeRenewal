import { observable } from 'mobx';
import router from 'next/router';
import { ILoginUserResponse } from '@InterfaceFarm/auth';
import { IUserPermission } from '@InterfaceFarm/user';

export const menuStore: any = observable({
  currentNav: null,
  currentSubUrl: null,
  sideMenuOpen: false,
  pagerInitNum: 1,
});

export const manageFormStore = observable({
  isEdit: false,
});

interface IAuthStore {
  token: string | null;
  user_info: ILoginUserResponse['user_info'] | null;
  permission?: IUserPermission[];
  store_info: ILoginUserResponse['store'] | null;
  isLoggedIn: boolean;
  is_staff?: number;
  init: () => void;
  login: (authData: any) => void;
  logOut: () => void;
}

const TOKEN_STORAGE_KEY = 'BO_AUTH_TOKEN';
const USER_STORAGE_KEY = 'BO_USER_INFO';
const STORE_STORAGE_KEY = 'BO_USER_STORE';

export const authStore = observable<IAuthStore>({
  token: null,
  user_info: null,
  store_info: null,
  permission: undefined,
  is_staff: undefined,
  init() {
    try {
      this.token = localStorage.getItem(TOKEN_STORAGE_KEY) ?? null;
      this.user_info = JSON.parse(
        String(localStorage.getItem(USER_STORAGE_KEY))
      );
      this.store_info = JSON.parse(
        localStorage.getItem(STORE_STORAGE_KEY) ?? 'null'
      );
    } catch (e) {
      this.token = null;
      this.user_info = null;
      this.store_info = null;
    }
  },
  login(authData: ILoginUserResponse & { token: string }) {
    if (Object.keys(authData).length !== 0) {
      this.token = authData.token;
      this.user_info = authData.user_info;
      this.store_info = authData.store;
      this.permission = authData.permission?.perm_list;

      localStorage.setItem(TOKEN_STORAGE_KEY, authData.token);
      localStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify(authData.user_info)
      );
      // eslint-disable-next-line no-unused-expressions
      authData.store &&
        localStorage.setItem(STORE_STORAGE_KEY, JSON.stringify(authData.store));
    }
  },
  logOut() {
    this.token = null;
    this.permission = undefined;
    this.user_info = null;
    this.store_info = null;

    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(STORE_STORAGE_KEY);

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
