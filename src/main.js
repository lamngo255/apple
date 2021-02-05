import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './filters';
import './preloader';
import './styles/global.scss';
import plugin from './plugin';
import setupLayout from './layout';

setupLayout();
Vue.config.productionTip = false;
Vue.use(plugin, { cdn: process.env.CDN });

window.vue = new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
});
