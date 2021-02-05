import axios from 'axios';
import utils from '../utils';

const API = 'api';

function api(method, svc, data = {}) {
  const url = `${API}/${svc}`;

  const params = {
    method,
    url,
    data: utils.snakifyKeys(data),
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };
  return axios(params).then((resp) => utils.camelizeKeys(resp.data));
}

export default {
  getProfile() {
    return api('get', 'profile');
  },
  getBalances() {
    return api('get', 'profile/bal/');
  },
  getConfig() {
    return api('get', 'events/');
  },
  getAllItems() {
    return api('get', 'items/');
  },
  getGameState() {
    return api('get', 'state/');
  },
  getDrawHistory() {
    return api('get', 'profile/txns/');
  },
};
