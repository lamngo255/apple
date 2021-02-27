<template>
  <div class="product-show-3d">
    <div class="container">
      <div class="image-wrapper">
        <transition name="fade">
          <img
            class="processor"
            :src="genLink(`3D/${tabs[selectedId].id}.jpg`)"
            :key="selectedId"
          />
        </transition>
      </div>

      <div class="tabs">
        <div
          v-for="(tab, i) in tabs"
          :class="['tab', { selected: i === selectedId }]"
          :key="i"
          @click="selectedId = i"
        >
          <span>{{ tabs[i].name }}</span>
        </div>
      </div>

      <div class="title">Phenomenally fluid 3D creation.</div>
      <div class="subtitle">
        With the Vega 64X GPU, iMac Pro lets you create 3D environments up to
        two times faster,1 then render them in stunning photorealistic detail.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowProcessor',

  data() {
    return {
      selectedId: 1,
      tabs: [
        { id: 1, name: 'Cinema 4D' },
        { id: 2, name: 'Unity' },
        { id: 3, name: 'Twinmotion' },
        { id: 4, name: 'Unreal Editor' },
      ],
    };
  },

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-3d {
  @include sizeWH(100%, auto);
  text-align: left;
  padding-bottom: 1rem;
  padding-top: 0.4rem;
  background: #0f0f0f;

  .container {
    @include sizeWH(60%, auto);
    margin: 0 auto;
  }

  .image-wrapper {
    @include sizeWH(6rem, 5rem);
    margin: 0 auto 0.7rem;
    position: relative;

    .processor {
      @include sizeWH(100%, 100%);
      position: absolute;
      margin: 0.5rem auto 0;
    }
  }

  .tabs {
    @include flexCenter(row);
    justify-content: space-around;
    margin: 0.2rem auto 0;
    border-bottom: #707070 solid 0.01rem;
    width: 49%;

    .tab {
      @include textMixin(#b1aeae, 0.14rem);
      margin-right: 0.34rem;
      padding-bottom: 0.1rem;
      cursor: pointer;

      &.selected {
        @include position(relative, $top: 0.014rem);
        border-bottom: #707070 solid 0.02rem;
        font-weight: bold;
        color: #bbbbbb;
      }
    }
  }

  .title {
    @include textMixin(#fff, 0.2rem, bold);
    margin-top: 0.4rem;
  }

  .subtitle {
    @include textMixin(#cccccc, 0.12rem);
    width: 50%;
    margin-top: 0.1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
