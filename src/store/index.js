import Vue from 'vue';
import Vuex from 'vuex';

import Game from './Game';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Game },
  strict: process.env.NODE_ENV !== 'production',
});
