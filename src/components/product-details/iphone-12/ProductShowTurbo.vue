<template>
  <div class="product-show-turbo">
    <div class="container">
      <div class="title">Turbo chargeable.</div>
      <div class="subtitle">
        Magnets align themselves perfectly every time for faster wireless
        charging.
      </div>
      <img class="turbo" :src="genLink('turbo.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowTurbo',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-turbo {
  @include sizeWH(100%, auto);

  .container {
    @include sizeWH(100%, 6.5rem);
    padding-top: 0.5rem;
    position: relative;
    background: #f2f2f2;

    .title {
      @include textMixin(#000, 0.47rem, bold, $align: left);
      @include position(absolute, $top: 2.7rem, $left: 6.5rem);
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
      @include position(absolute, $top: 4rem, $left: 6.5rem);
      width: 3rem;
    }

    .turbo {
      @include position(absolute, $bottom: 0rem, $left: 0rem);
      @include sizeWH(6rem, 7.4rem);
      object-fit: cover;
      object-position: 10% -250%;
    }
  }
}
</style>
