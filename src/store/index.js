import Vue from 'vue';
import Vuex from 'vuex';

import Product from './Product';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Product },
  strict: process.env.NODE_ENV !== 'production',
});
