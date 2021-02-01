<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>

    <ModalContainer />
    <Loading v-if="loading" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ModalContainer from '@/components/ModalContainer.vue';
import Loading from '@/components/loading/Loading.vue';

export default {
  name: 'App',

  components: {
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
  width: 100%;
  background: #fbfbfd;
  position: relative;
  font-family: 'San Francisco', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
