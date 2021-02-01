import services from '@/services';
import utils from '@/utils';
import { withLoading, withErrorHandling } from './hooks';
import { loadLocale } from '../i18n';

const initialState = {
  profile: {
    accountId: 12343243,
    balances: null,
    region: null,
  },
  config: null,
  loots: [],
  gameState: {},
  fallbackSeq: null,
  prizeSeq: null,
  timeLeft: 0,
  language: 'en',
  history: null,
  error: null,
  loading: false,
  openedPopup: null,
  rememberMe: localStorage.getItem('rememberMe') === '1',
};

const UPDATE_PROFILE = 'UPDATE_PROFILE';
const UPDATE_PROFILE_BALANCE = 'UPDATE_PROFILE_BALANCE';
const UPDATE_CONFIG = 'UPDATE_CONFIG';
const UPDATE_ALL_ITEMS = 'UPDATE_ALL_ITEMS';
const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
const UPDATE_DRAW_HISTORY = 'UPDATE_DRAW_HISTORY';
const UPDATE_PRIZE_SEQ = 'UPDATE_PRIZE_SEQ';
const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';
const DEDUCT_BALANCE = 'DEDUCT_BALANCE';
const TICK = 'TICK';

// common actions
const SET_REMEMBER_ME = 'SET_REMEMBER_ME';
const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';
const OPEN_POPUP = 'OPEN_POPUP';
const CLEAR_WON_ITEMS = 'CLEAR_WON_ITEMS';

async function loadLanguage() {
  const [fallbackLanguage] = navigator.language.split('-');
  const language = localStorage.getItem('LANGUAGE') || fallbackLanguage;
  const region = utils.getRegion();
  await loadLocale(`${region}_${language}`.toLowerCase());

  return language;
}

const actions = {
  initData: withLoading(withErrorHandling(async ({ commit }) => {
    const language = await loadLanguage();
    const [profile, balances, config, loots, [gameState]] = await Promise.all([
      services.getProfile(),
      services.getBalances(),
      services.getConfig(),
      services.getAllItems(),
      services.getGameState(),
    ]);

    commit(UPDATE_LANGUAGE, language);
    commit(UPDATE_PROFILE, profile);
    commit(UPDATE_PROFILE_BALANCE, balances);
    commit(UPDATE_CONFIG, config);
    commit(UPDATE_ALL_ITEMS, loots);
    commit(UPDATE_GAME_STATE, gameState);
  })),

  getDrawHistory: withLoading(withErrorHandling(async ({ commit }) => {
    const history = await services.getDrawHistory();
    commit(UPDATE_DRAW_HISTORY, history);
  })),

  openPopup({ commit }, openedPopup) {
    commit(OPEN_POPUP, openedPopup);
  },

  closePopup({ commit, state }) {
    if (utils.includes(['prosperity', 'result', 'packet'], state.openedPopup)) {
      commit(CLEAR_WON_ITEMS);
    }
    commit(OPEN_POPUP, null);
    commit(SET_ERROR, null);
  },

  setError({ commit }, error) {
    commit(SET_ERROR, error && utils.camelizeStr(error));
  },

  setRememberMe({ commit }, rememberMe) {
    commit(SET_REMEMBER_ME, rememberMe);
  },

  tick({ commit }) {
    commit(TICK);
  },
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [UPDATE_PROFILE](state, profile) {
    state.profile = profile;
  },
  [UPDATE_PROFILE_BALANCE](state, balances) {
    state.profile.balances = balances;
  },
  [UPDATE_CONFIG](state, config) {
    state.config = config;
  },
  [UPDATE_ALL_ITEMS](state, loots) {
    const language = utils.capitalize(utils.getParam('language') || 'en');
    state.loots = loots.map((loot) => ({
      ...loot,
      name: loot[`name${language}`],
      fallbackName: loot[`fallbackName${language}`],
    }));
  },
  [UPDATE_GAME_STATE](state, gameState) {
    state.gameState = gameState;
  },
  [UPDATE_PRIZE_SEQ](state, prizeSeq) {
    state.prizeSeq = prizeSeq;
  },
  [UPDATE_DRAW_HISTORY](state, history) {
    state.history = history;
  },
  [UPDATE_LANGUAGE](state, language) {
    state.language = language;
  },
  [DEDUCT_BALANCE](state, amount) {
    const { balances } = state.profile;
    state.profile.balances = { ...balances, gems: balances.gems - amount };
  },
  [TICK](state) {
    state.timeLeft = Math.max(0, state.timeLeft - 1);
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [SET_LOADING](state, loading) {
    state.loading = loading;
  },
  [OPEN_POPUP](state, openedPopup) {
    state.openedPopup = openedPopup;
  },
  [SET_REMEMBER_ME](state, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('rememberMe', '1');
    } else {
      localStorage.setItem('rememberMe', '');
    }
    state.rememberMe = rememberMe;
  },
};

const getters = {
  balance(state) {
    return state.profile.balances.gems;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
};
