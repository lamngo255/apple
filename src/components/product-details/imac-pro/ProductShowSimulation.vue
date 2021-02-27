<template>
  <div class="product-show-simulation">
    <div class="intro">
      <div class="title">Particle simulation? Elementary.</div>
      <div class="desc">
        Billowing smoke. Torrential rain. A wheat field in the wind. With up to
        18 cores and Hyper-Threading, iMac Pro lets you build and render
        particle systems of all kinds — static or animated, 2D or 3D — with
        ease.
      </div>
      <img class="processor" :src="genLink('simulation.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowSimulation',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-simulation {
  background: #0f0f0f;
  padding-top: 0.8rem;
  .intro {
    @include sizeWH(60%, auto);
    margin: 0 auto;
    text-align: left;
    padding-bottom: 0.5rem;

    .m1-big {
      @include sizeWH(1.5rem, auto);
    }

    .title {
      @include textMixin(#fff, 0.2rem, bold);
    }
    .desc {
      @include textMixin(#cccccc, 0.12rem, bold);
      line-height: 0.19rem;
      margin-top: 0.1rem;
      width: 50%;
    }
    .processor {
      @include sizeWH(6rem, auto);
      margin: 0.5rem auto 0;
      margin-left: 0.5rem;
    }
  }

  video {
    @include sizeWH(100%, auto);
    margin: 0 auto;
  }
}
</style>
