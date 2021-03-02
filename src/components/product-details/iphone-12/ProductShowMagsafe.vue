<template>
  <div class="product-show-magsafe">
    <div class="container">
      <div class="title">
        <div>MagSafe accessories</div>
        <div>Everything just clicks.</div>
      </div>
      <img class="magsafe" :src="genLink('magsafe.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowMagsafe',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-magsafe {
  @include sizeWH(100%, auto);

  .container {
    @include sizeWH(100%, 7rem);
    padding-top: 0.5rem;
    position: relative;
    background: #f2f2f2;

    .title {
      @include textMixin(#000, 0.6rem, bold, $align: left);
      @include position(absolute, $top: 1.5rem, $left: 2.5rem);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0 auto;
      width: 3.5rem;
      line-height: 0.7rem;
      z-index: 1;

      div:first-child {
        color: #86868b;
      }
    }

    .magsafe {
      @include position(absolute, $bottom: 0, $right: 0rem);
      @include sizeWH(9rem, 8rem);
      object-fit: cover;
      object-position: 10% -300%;
    }
  }
}
</style>
