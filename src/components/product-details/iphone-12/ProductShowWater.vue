<template>
  <div class="product-show-water">
    <div class="container">
      <div class="title">
        <span>H</span>
        <sub>2</sub>
        <span>OK</span>
      </div>
      <div class="subtitle">Even better spill and splash resistance</div>
      <img class="water" :src="genLink('water-resistance.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowWater',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-water {
  @include sizeWH(100%, auto);

  .container {
    @include sizeWH(100%, 8.4rem);
    padding-top: 0.5rem;
    margin-top: 0.4rem;
    position: relative;
    background: #f2f2f2;

    .title {
      @include textMixin(#000, 0.62rem, $align: left);
      @include position(absolute, $top: 2.8rem, $left: 3.5rem);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0 auto;
      width: 4rem;

      sub {
        margin: -0.08rem;
        font-size: 0.3rem;
      }
    }

    .subtitle {
      @include textMixin(#262627, 0.25rem, bold, $align: left);
      @include position(absolute, $top: 3.5rem, $left: 3.5rem);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0.3rem auto;
      width: 2.5rem;
      border-top: #262627 solid 0.02rem;
      padding-top: 0.3rem;
    }

    .water {
      @include position(absolute, $bottom: 0, $right: 2rem);
      @include sizeWH(auto, 8rem);
    }
  }
}
</style>
