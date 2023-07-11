import { observable } from "mobx";
import router from "next/router";
import { toast } from "react-toastify";

export const menuStore: any = observable({
  currentNav: null,
  currentSubUrl: null,
  sideMenuOpen: false,
  pagerInitNum: 1,
});

export const manageFormStore = observable({
  isEdit: false,
});

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

interface IStore {
  created_at: string;
  fc_selected: number;
  mus_idx: number;
  store_id: number;
  store_name: string;
  updated_at: string;
  user_id: number;
}

interface IAuthStore {
  token: string;
  user_info: IUserinfo | null;
  permission: any;
  myStore: null;
  init: () => void;
  login: (authData: any) => void;
  logOut: () => void;
}

export const authStore: IAuthStore = observable({
  token: "",
  user_info: null,
  permission: null,
  myStore: null,
  init() {
    this.token = JSON.parse(String(localStorage.getItem("token")));
    this.permission = JSON.parse(String(localStorage.getItem("permission")));
    this.user_info = JSON.parse(String(localStorage.getItem("user_info")));
    if (localStorage.getItem("myStore") !== null) {
      this.myStore = JSON.parse(String(localStorage.getItem("myStore")));
    }
  },
  login(authData: any) {
    if (Object.keys(authData).length !== 0) {
      const { token, permission, info, myStore } = authData;
      this.token = token;
      this.permission = permission;
      this.user_info = info;
      this.myStore = myStore;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("permission", JSON.stringify(permission));
      localStorage.setItem("user_info", JSON.stringify(info));
      authData.store &&
        localStorage.setItem("myStore", JSON.stringify(authData.store));
    }
    if (this.token && this.user_info) {
      router.push(`${window.location.origin}/dashboard`);
    }
  },
  logOut() {
    ["token", "user_info", "myStore"].forEach((item) =>
      localStorage.removeItem(item)
    );
    router.replace("/");
  },
});
