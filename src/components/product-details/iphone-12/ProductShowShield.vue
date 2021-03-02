<template>
  <div class="product-show-shield">
    <div class="container">
      <div class="title">
        Ceramic Shield. Clearly tougher than any smartphone glass.
      </div>
      <div class="subtitle">4x better drop performance</div>
      <img class="shield" :src="genLink('shield.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowShield',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-shield {
  @include sizeWH(100%, auto);
  padding: 0 0.3rem;

  .container {
    @include sizeWH(100%, 6rem);
    padding-top: 0.5rem;
    margin-top: 0.4rem;
    position: relative;
    background: #e2f4de;

    .title {
      @include textMixin(#50976a, 0.44rem, $align: left);
      @include position(absolute, $top: 1.2rem, $left: 1.5rem);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0 auto;
      width: 4rem;
      border-bottom: #50976a solid 0.03rem;
      padding-bottom: 0.4rem;
    }

    .subtitle {
      @include textMixin(#50976a, 0.25rem, bold);
      @include position(absolute, $top: 3.8rem, $left: 1.5rem);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0.3rem auto;
    }

    .shield {
      @include position(absolute, $bottom: 0, $right: 0);
    }
  }
}
</style>
