<template>
  <div class="product-show-bigsur">
    <div class="frame-banner">
      <img class="banner" :src="genLink('bigsur.jpg')" />
      <img class="logo" :src="genLink('logo-bigsur.png')" />
      <div class="tagline">Doing it all, in all new ways.</div>
      <div class="buttons">
        <button class="btn-learn">Learn more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowBigSur',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.frame-banner {
  @include sizeWH(80%, 4.8rem);
  margin: 0.5rem auto 0;
  position: relative;

  .banner {
    @include sizeWH(100%, 100%);
    object-fit: fill;
  }
  .logo {
    @include alignCenter();
    @include sizeWH(1.4rem, auto);
    margin-top: -0.6rem;
  }
  .tagline {
    @include alignCenter();
    @include textMixin(#fff, 0.4rem, bold);
    margin-top: -0.15rem;
    width: 7rem;
  }
  .buttons {
    @include alignCenter();
    margin-top: 0.3rem;

    .btn-update,
    .btn-learn {
      @include textMixin(#fff, 0.18rem);
      border: none;
      background: none;
      margin-right: 0.15rem;
    }
  }
}
</style>
