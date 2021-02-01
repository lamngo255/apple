import axios from 'axios';
import utils from '../utils';

const API = 'api/v1';

// store access_token
let token = utils.getParam('access_token');
if (token) localStorage.setItem('TOKEN', token);
else token = localStorage.getItem('TOKEN');

let language = utils.getParam('language');
if (language) localStorage.setItem('LANGUAGE', language);
else language = localStorage.getItem('LANGUAGE') || 'en';

window.history.replaceState(
  {},
  '',
  `${window.location.pathname}?language=${language}`,
);

function api(method, svc, data = {}) {
  const url = `${API}/${svc}`;
  const TOKEN = localStorage.getItem('TOKEN');

  const params = {
    method,
    url,
    data: utils.snakifyKeys(data),
    headers: {
      'Content-Type': 'application/json',
      'Sso-Token': TOKEN,
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
