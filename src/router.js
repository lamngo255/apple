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
import MacbookAir from '@/components/product-details/macbook-air';
import MacbookPro13 from '@/components/product-details/macbook-pro-13';
import MacbookPro16 from '@/components/product-details/macbook-pro-16';
import iMac from '@/components/product-details/imac';
import iMacPro from '@/components/product-details/imac-pro';
import MacPro from '@/components/product-details/mac-pro';

import PageMyBag from '@/components/shop/PageMyBag';
import PageLogin from '@/components/pages/PageLogin';
import PageProductInfo from '@/components/shop/PageProductInfo';

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

    // ---------- FUNCTIONS -------------
    {
      path: '/shop/bag',
      name: 'PageMyBag',
      component: PageMyBag,
      exact: true,
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: PageLogin,
    },
    {
      path: '/shop/:productId',
      name: 'PageProductInfo',
      component: PageProductInfo,
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

    // Macbook + iMac + MacPro
    {
      path: '/macbook-air',
      name: 'MacbookAir',
      component: MacbookAir,
    },
    {
      path: '/macbook-pro-13',
      name: 'MacbookPro13',
      component: MacbookPro13,
    },
    {
      path: '/macbook-pro-16',
      name: 'MacbookPro16',
      component: MacbookPro16,
    },
    {
      path: '/imac',
      name: 'iMac',
      component: iMac,
    },
    {
      path: '/imac-pro',
      name: 'iMacPro',
      component: iMacPro,
    },
    {
      path: '/mac-pro',
      name: 'MacPro',
      component: MacPro,
    },
  ],
});
