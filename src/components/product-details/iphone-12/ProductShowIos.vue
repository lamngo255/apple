<template>
  <div class="product-show-ios">
    <div class="container">
      <img class="wallpaper" :src="genLink('wallpaper.jpg')" />

      <div class="wrapper">
        <img class="logo" :src="genLink('logo-ios.png')" />
        <div class="title">Get right to the good stuff.</div>
        <div class="subtitle">
          iOS 14 is packed with shortcuts that get you just what you want, right
          when you want it.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowIos',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-ios {
  @include sizeWH(100%, auto);
  position: relative;

  .container {
    @include sizeWH(100%, 6.5rem);
    padding-top: 0.5rem;
    position: relative;

    .wallpaper {
      @include sizeWH(100%, 100%);
      @include position(absolute, 0, 0, 0, 0);
    }

    .wrapper {
      @include flexCenter(column);
      @include position(absolute, $top: 1rem, $left: 50%);
      transform: translate(-50%, 0);

      .logo {
        @include sizeWH(1rem, 1rem);
      }
      .title {
        @include textMixin(#fff, 0.6rem, bold);
        font-family: 'San Francisco Bold', sans-serif;
        margin: 0.3rem auto 0;
        width: 4rem;
        z-index: 1;

        div:first-child {
          color: #86868b;
        }
      }

      .subtitle {
        @include textMixin(#fff, 0.2rem, bold);
        width: 5rem;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
