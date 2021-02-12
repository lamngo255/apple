import services from '@/services';
import utils from '@/utils';
import { withLoading, withErrorHandling } from './hooks';

const initialState = {
  profile: {
    accountId: 12343243,
    balances: null,
    region: null,
  },
  error: null,
  loading: false,
  openedPopup: null,
};

const UPDATE_PROFILE = 'UPDATE_PROFILE';
const UPDATE_PROFILE_BALANCE = 'UPDATE_PROFILE_BALANCE';

// common actions
const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';
const OPEN_POPUP = 'OPEN_POPUP';

const actions = {
  initData: withLoading(
    withErrorHandling(async ({ commit }) => {
      const [profile, balances] = await Promise.all([
        services.getProfile(),
        services.getBalances(),
      ]);

      commit(UPDATE_PROFILE, profile);
      commit(UPDATE_PROFILE_BALANCE, balances);
    }),
  ),

  openPopup({ commit }, openedPopup) {
    commit(OPEN_POPUP, openedPopup);
  },

  closePopup({ commit }) {
    commit(OPEN_POPUP, null);
    commit(SET_ERROR, null);
  },

  setError({ commit }, error) {
    commit(SET_ERROR, error && utils.camelizeStr(error));
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
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [SET_LOADING](state, loading) {
    state.loading = loading;
  },
  [OPEN_POPUP](state, openedPopup) {
    state.openedPopup = openedPopup;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
