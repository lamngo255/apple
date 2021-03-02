<template>
  <div class="product-show-stackable">
    <div class="container">
      <div class="title">Beautifully stackable.</div>
      <div class="subtitle">
        Snap on a new MagSafe case, wallet, or both. (Fear not, the wallet is
        shielded so it’s safe for credit cards.)
      </div>
      <img class="stackable" :src="genLink('stackable.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowStackable',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-stackable {
  @include sizeWH(100%, auto);

  .container {
    @include sizeWH(100%, 7rem);
    padding-top: 0.5rem;
    position: relative;
    background: #ffffff;

    .title {
      @include textMixin(#000, 0.47rem, bold, $align: left);
      @include position(absolute, $top: 2.7rem, $left: 2.5rem);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0 auto;
      width: 2rem;
      z-index: 1;

      div:first-child {
        color: #86868b;
      }
    }

    .subtitle {
      @include textMixin(#000, 0.18rem, bold, $align: left);
      @include position(absolute, $top: 4rem, $left: 2.5rem);
      width: 3rem;
    }

    .stackable {
      @include position(absolute, $bottom: 0.2rem, $right: 4rem);
      @include sizeWH(auto, 6.7rem);
    }
  }
}
</style>
