import services from '@/services';
import utils from '@/utils';
import Vue from 'vue';
import { withLoading, withErrorHandling } from './hooks';

const initialState = {
  profile: null,
  allProducts: {},
  myBag: [
    {
      id: 'iphone-12-pro',
      colorId: 1,
      modelId: 2,
      sizeId: -1,
      capacityId: 2,
      quantity: 2,
      basePrice: 1600,
    },
    {
      id: 'iphone-12',
      colorId: 1,
      modelId: 2,
      sizeId: -1,
      capacityId: 1,
      quantity: 3,
      basePrice: 799,
    },
  ],
  product: null,
  error: null,
  loading: false,
  openedPopup: null,
};

const UPDATE_PROFILE = 'UPDATE_PROFILE';
const UPDATE_CURRENT_PRODUCT = 'UPDATE_CURRENT_PRODUCT';
const UPDATE_ALL_PRODUCTS = 'UPDATE_ALL_PRODUCTS';
const UPDATE_BAG_ADD = 'UPDATE_BAG_ADD';
const UPDATE_BAG_QTY = 'UPDATE_BAG_QTY';
const UPDATE_BAG_REMOVE = 'UPDATE_BAG_REMOVE';
const CLEAR_BAG = 'CLEAR_BAG';

// common actions
const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';
const OPEN_POPUP = 'OPEN_POPUP';

const actions = {
  initData: withLoading(
    withErrorHandling(async ({ commit }) => {
      const [profile, allProducts] = await Promise.all([
        services.getProfile(),
        services.getAllProducts(),
      ]);

      commit(UPDATE_PROFILE, profile);
      commit(UPDATE_ALL_PRODUCTS, allProducts);
    }),
  ),

  loginApple: withLoading(
    withErrorHandling(async ({ commit }, { username, password }) => {
      const profile = await services.login({ username, password });
      commit(UPDATE_PROFILE, profile);
    }),
  ),

  logoutApple: withLoading(
    withErrorHandling(async ({ commit }) => {
      await services.logout();
      commit(UPDATE_PROFILE, null);
      commit(CLEAR_BAG);
    }),
  ),

  addProductToBag({ commit }, product) {
    commit(UPDATE_BAG_ADD, product);
  },

  removeProductFromBag({ commit }, product) {
    commit(UPDATE_BAG_REMOVE, product);
  },

  clearBag({ commit }) {
    commit(CLEAR_BAG);
  },

  updateBagQty({ commit }, product) {
    commit(UPDATE_BAG_QTY, product);
  },

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

const compareProducts = (itemA, itemB) => {
  if (itemA.id === itemB.id) {
    return (
      itemA.colorId === itemB.colorId &&
      itemA.modelId === itemB.modelId &&
      itemA.capacityId === itemB.capacityId &&
      itemA.sizeId === itemB.sizeId
    );
  }
  return false;
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [UPDATE_PROFILE](state, profile) {
    state.profile = profile;
  },
  [UPDATE_ALL_PRODUCTS](state, products) {
    state.allProducts = products;
  },
  [UPDATE_CURRENT_PRODUCT](state, product) {
    state.product = product;
  },
  [UPDATE_BAG_ADD](state, product) {
    let exist = false;
    state.myBag.forEach((item, i) => {
      if (compareProducts(item, product)) {
        state.myBag[i].quantity += 1;
        exist = true;
      }
    });

    if (!exist) {
      state.myBag.push({ ...product, quantity: 1 });
    }
  },
  [UPDATE_BAG_QTY](state, product) {
    let exist = -1;
    state.myBag.forEach((item, i) => {
      if (compareProducts(item, product)) {
        exist = i;
      }
    });

    if (exist >= 0) {
      Vue.set(state.myBag, exist, product);
    } else {
      state.myBag.push({ ...product, quantity: 1 });
    }
  },
  [UPDATE_BAG_REMOVE](state, product) {
    let exist = -1;
    state.myBag.forEach((item, i) => {
      if (compareProducts(item, product)) {
        exist = i;
      }
    });

    if (exist >= 0) {
      Vue.delete(state.myBag, exist);
    }
  },
  [CLEAR_BAG](state) {
    state.myBag = [];
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

const getters = {
  isLoggedIn(state) {
    return state.profile !== null;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
};
