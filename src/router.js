import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage.vue';
import Mac from '@/components/pages/Mac';
import Ipad from '@/components/pages/Ipad';
import Iphone from '@/components/pages/Iphone';
import Watch from '@/components/pages/Watch';
import Tv from '@/components/pages/Tv';
import Music from '@/components/pages/Music';

import Iphone12Pro from '@/components/product-details/iphone-12-pro';
import Iphone12 from '@/components/product-details/iphone-12';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // ----------- NAVIGATION ------------
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
    {
      path: '/mac',
      name: 'Mac',
      component: Mac,
    },
    {
      path: '/ipad',
      name: 'Ipad',
      component: Ipad,
    },
    {
      path: '/iphone',
      name: 'Iphone',
      component: Iphone,
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch,
    },
    {
      path: '/tv',
      name: 'Tv',
      component: Tv,
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
    },

    // ---------- PRODUCTS ------------
    // iPhone
    {
      path: '/iphone-12-pro',
      name: 'Iphone-12-Pro',
      component: Iphone12Pro,
    },
    {
      path: '/iphone-12',
      name: 'Iphone-12',
      component: Iphone12,
    },
  ],
});
