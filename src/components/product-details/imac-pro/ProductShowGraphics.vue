<template>
  <div class="product-show-graphics">
    <div class="title">Vega graphics. The beast behind the beauty.</div>
    <div class="desc">
      <div class="left">
        Featuring Radeon Pro Vega graphics, iMac Pro delivers stunningly
        powerful graphics standard. The Vega graphics architecture features up
        to 16GB of on-package High Bandwidth Memory, which helps deliver a major
        jump in performance. This translates to higher frame rates, real-time 3D
        rendering, more lifelike special effects, and gameplay at max settings.
        It also supports both single- and half-precision computing, so
        operations that don’t require a full 32 bits of precision can be
        performed twice as fast. How fast? Up to 24 teraflops fast.
      </div>
      <div class="right">
        <img class="architecture" :src="genLink('graphics-architecture.png')" />
        <div class="note">
          On-package HBM2 replaces external VRAM, so the GPU can fetch data at
          up to 512GB/s.
        </div>
      </div>
    </div>
    <img class="processor" :src="genLink('graphics.png')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowProcessor',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-graphics {
  @include sizeWH(60%, auto);
  margin: 0 auto;
  text-align: left;
  padding-bottom: 1rem;
  padding-top: 1rem;

  .m1-big {
    @include sizeWH(1.5rem, auto);
  }

  .title {
    @include textMixin(#fff, 0.3rem, bold);
    border-bottom: #515151 solid 0.015rem;
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .desc {
    @include textMixin(#fff, 0.17rem, bold);
    @include flexCenter(row);
    line-height: 0.26rem;

    .left {
      margin-right: 0.3rem;
    }
    .right {
      margin-left: 1rem;
      margin-right: 0.2rem;

      .architecture {
        @include sizeWH(1.1rem, auto);
      }
      .note {
        @include textMixin(#bbbcbb, 0.11rem);
        line-height: 0.17rem;
        margin-top: 0.1rem;
      }
    }
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
</style>
