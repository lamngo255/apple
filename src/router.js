import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'MainPage',
      },
    },
    {
      path: '/home',
      name: 'MainPage',
      component: MainPage,
    },
  ],
});
