import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { i18n } from './i18n';
import './filters';
import './preloader';
import './styles/global.scss';
import setupLayout from './layout';

setupLayout();
Vue.config.productionTip = false;

window.vue = new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: (h) => h(App),
});
