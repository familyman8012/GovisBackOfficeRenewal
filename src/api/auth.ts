import { CommonRequest } from '.';

export const login = async (params: any) => {
  const response = await CommonRequest.post<any>(`/account/login/bo`, params);

  return response.data.data;
};

export const fetchMyInfo = async (token: string) => {
  const response = await CommonRequest.get<any>(`/account/auth_user_info`, {
    headers: {
      'GO-AUTH': token,
    },
  });

  return response.data.data;
};

export const fetchMyPermissions = async () => {
  const response = await CommonRequest.get<any>(`/account/auth_user_info`);

  return {
    permission: response.data.data?.permission?.perm_list ?? [],
    is_staff: response.data.data?.user_info?.is_staff ?? 0,
  };
};
