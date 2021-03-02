<template>
  <div class="product-show-retina">
    <div class="container">
      <div class="title">
        <div>Super Retina XDR display</div>
        <div>Behold OLED.</div>
      </div>
      <img class="retina" :src="genLink('retina.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowRetina',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-retina {
  @include sizeWH(100%, auto);

  .container {
    @include sizeWH(100%, 6.4rem);
    padding-top: 0.5rem;
    margin-top: 0.4rem;
    position: relative;
    background: #aecbd9;

    .title {
      @include textMixin(#000, 0.6rem, bold, $align: left);
      @include position(absolute, $top: 0.8rem, $left: 3rem);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0 auto;

      div:first-child {
        color: #3948b1;
      }
    }

    .retina {
      @include position(absolute, $bottom: 0.5rem, $right: 0rem);
      @include sizeWH(8rem, auto);
    }
  }
}
</style>
