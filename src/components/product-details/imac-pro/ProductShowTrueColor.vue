<template>
  <div class="product-show-true-color">
    <div class="container">
      <div class="title">Reveal your true colors.</div>
      <div class="desc">
        A billion colors on your display means every photo appears just the way
        it was shot, with supersmooth gradients and vastly reduced banding.
      </div>
      <img class="true-color" :src="genLink('true-color.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowTrueColor',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-true-color {
  @include sizeWH(100%, auto);
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #0f0f0f;

  .container {
    @include sizeWH(60%, auto);
    margin: 0 auto;

    .title {
      @include textMixin(#fff, 0.3rem, bold);
      border-bottom: #515151 solid 0.015rem;
      padding-bottom: 0.2rem;
      margin-bottom: 0.2rem;
    }
    .desc {
      @include textMixin(#fff, 0.17rem, bold);
      width: 6rem;
      line-height: 0.26rem;
    }
    .true-color {
      @include sizeWH(6rem, auto);
      margin: 0.5rem auto 0;
      margin-left: 0.5rem;
    }
  }
}
</style>
