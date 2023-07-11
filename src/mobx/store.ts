import { observable } from 'mobx';
import router from 'next/router';

export const menuStore = observable({
  currentNav: null,
  currentSubUrl: null,
  sideMenuOpen: false,
  pagerInitNum: 1,
});

export const manageFormStore = observable({
  isEdit: false,
});

interface IStore {
  created_at: string;
  fc_selected: number;
  mus_idx: number;
  store_id: number;
  store_name: string;
  updated_at: string;
  user_id: number;
}

interface IUserinfo {
  email: string;
  id: number;
  is_staff: number;
  name: string;
  security_level: number;
  store_id: number;
  store_name: string;
  store_list: IStore[];
}

interface IPermissionItem {
  perm_code: string;
  perm_group_name: string;
  perm_info_name: string;
}

interface IAuthData {
  token: string;
  info: IUserinfo;
  permission: IPermissionItem[] | null;
  // myStore: null;
}

interface IAuthStore extends Omit<IAuthData, 'info'> {
  user_info: IUserinfo | null;
  init: () => void;
  login: (authData: IAuthData) => void;
  logOut: () => void;
}

export const authStore: IAuthStore = observable({
  token: '',
  user_info: null as IUserinfo | null, // explicitly define as null
  permission: [] as IPermissionItem[],
  myStore: null,
  init() {
    this.token = JSON.parse(String(localStorage.getItem('token')));
    this.permission = JSON.parse(String(localStorage.getItem('permission')));
    this.user_info = JSON.parse(String(localStorage.getItem('user_info')));
    if (localStorage.getItem('myStore') !== null) {
      this.myStore = JSON.parse(String(localStorage.getItem('myStore')));
    }
  },
  login(authData: IAuthData) {
    if (Object.keys(authData).length !== 0) {
      // const { token, permission, info, myStore } = authData;
      const { token, permission, info } = authData;
      this.token = token;

      this.permission = permission !== null ? permission : [];

      this.user_info = info;

      // this.myStore = myStore;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('permission', JSON.stringify(permission));
      localStorage.setItem('user_info', JSON.stringify(info));
      // authData.store &&
      //   localStorage.setItem('myStore', JSON.stringify(authData.store));
    }
    if (this.token && this.user_info) {
      router.push(`${window.location.origin}/dashboard`);
    }
  },
  logOut() {
    ['token', 'user_info', 'myStore'].forEach(item =>
      localStorage.removeItem(item)
    );
    router.replace('/');
  },
});
