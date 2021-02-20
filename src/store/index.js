import Vue from 'vue';
import Vuex from 'vuex';

import Apple from './Apple';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Apple },
  strict: process.env.NODE_ENV !== 'production',
});
