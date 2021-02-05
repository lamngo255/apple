import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage.vue';
// import Mac from '@/components/pages/Mac.vue';
import Ipad from '@/components/pages/Ipad/index.vue';

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
    // {
    //   path: '/mac',
    //   name: 'Mac',
    //   component: Mac,
    // },
    {
      path: '/ipad',
      name: 'Ipad',
      component: Ipad,
    },
  ],
});