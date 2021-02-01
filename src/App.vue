<template>
  <div id="app">
    <div class="main" v-if="isInitialized">
      <GameBanner />
      <GameBoard />
    </div>

    <ModalContainer />
    <Loading v-if="loading" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import GameBoard from '@/components/GameBoard.vue';
import GameBanner from '@/components/GameBanner.vue';
import ModalContainer from '@/components/ModalContainer.vue';
import Loading from '@/components/loading/Loading.vue';

export default {
  name: 'App',

  components: {
    GameBoard,
    GameBanner,
    ModalContainer,
    Loading,
  },

  data() {
    return {
      isInitialized: false,
    };
  },

  computed: {
    ...mapState('Game', ['profile', 'loading']),
  },

  async created() {
    await this.initData();
    this.isInitialized = true;
  },

  methods: {
    ...mapActions('Game', ['initData']),
  },
};
</script>

<style lang="scss">
/* setup app container */
#app {
  @include textMixin(#212121, 0.24rem, $align: center);
  @include flexCenter(row);
  background: #fbfbfd;

  position: relative;
  font-family: refrigerator-deluxe, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.main {
  @include sizeWH(13.34rem, 100%, $pos: relative);
}
</style>
