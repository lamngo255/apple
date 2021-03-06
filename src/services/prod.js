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
  getAllProducts() {
    return api('get', 'products');
  },
  getProduct(payload) {
    return api('get', 'products', payload);
  },
  login() {
    return api('post', 'login');
  },
  logout() {
    return api('post', 'logout');
  },
};
