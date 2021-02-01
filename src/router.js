import Vue from 'vue';
import Router from 'vue-router';
import GameBoard from '@/components/GameBoard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'GameBoard',
      },
    },
    {
      path: '/home',
      name: 'GameBoard',
      component: GameBoard,
    },
  ],
});
