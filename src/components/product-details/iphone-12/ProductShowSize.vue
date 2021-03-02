<template>
  <div class="product-show-size">
    <div class="container">
      <div class="title">Size them up.</div>
      <div class="subtitle">Compare all features</div>
      <img class="compare" :src="genLink('compare.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowSize',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-size {
  @include sizeWH(100%, auto);
  background: #f2f2f2;
  padding-bottom: 0.1rem;
  margin-top: 0.3rem;

  .container {
    @include sizeWH(100%, auto);
    margin: 0.5rem 0.3rem 0;
    padding-top: 0.5rem;

    .title {
      @include textMixin(#000, 0.55rem, bold);
      font-family: 'San Francisco Bold', sans-serif;
      width: 60%;
      margin: 0 auto;
    }

    .subtitle {
      @include textMixin(#2866cc, 0.18rem);
      margin: 0.3rem auto;
    }
  }
}
</style>
