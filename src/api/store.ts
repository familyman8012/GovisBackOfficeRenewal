import { Store, StoreTransferInterface } from '@InterfaceFarm/store';
import { BoRequest } from '.';

export const fetchGetOpenStoreAll = async () => {
  const answer = await BoRequest.get('/stores');
  return answer.data.data;
};

export const fetchFindAllStore = async (params = {}) => {
  const response = await BoRequest.get('/stores', {
    params,
  });

  return response.data.data;
};

export const fetchGetCloseSTOREALL = async () => {
  const answer = await BoRequest.get(`${'/stores'}?status=CLOSED`);
  return answer.data.data;
};

export const fetchPostCreateStore = async (store: Store): Promise<number> => {
  const answer = await BoRequest.post('/stores', store);
  return answer.data.status;
};

export const fetchCloseStore = async (storeId: number) => {
  const answer = await BoRequest.put(`${'/stores'}/${storeId}`);
  return answer.data.status;
};

export const fetchDeleteStore = async (storeId: number) => {
  const answer = await BoRequest.delete(`${'/stores'}/${storeId}`);
  return answer.data.status;
};

export const fetchUpdateStore = async (store: StoreTransferInterface) => {
  const answer = await BoRequest.patch(`${'/stores'}/${store.id}`, store);
  return answer.data.status;
};

export const fetchUser = async (id: number) => {
  const result = await BoRequest.get(`/user/${id}`);

  return result.data.data;
};
