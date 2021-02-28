<template>
  <div class="product-show-accessories">
    <div class="container">
      <div class="title">Accessories with a dark side.</div>
      <div class="desc">
        You even get space gray accessories to match your iMac Pro — all
        wireless, rechargeable, and beautiful. The Magic Keyboard includes a
        numeric keypad, and to go with it you can choose either the Magic Mouse
        2 or the Magic Trackpad 2.
      </div>
      <img class="accessories" :src="genLink('accessories.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowAccessories',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-accessories {
  @include sizeWH(100%, auto);
  text-align: left;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  background: #1a1a1a;

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
    .accessories {
      @include sizeWH(8rem, auto);
      margin: 0.5rem auto 0;
    }
  }
}
</style>
