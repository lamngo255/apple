<template>
  <div class="product-show-connectivity">
    <div class="title">
      <div>Connectivity</div>
      <div>Charges, chats, streams, works, and plays well with others.</div>
    </div>
    <img class="image" :src="genLink('connectivity.jpg')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowMacgicKeyboard',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-connectivity {
  @include sizeWH(60%, 5rem);
  background: #000;
  margin: 1rem auto 0;
  position: relative;

  .title {
    @include textMixin(#fff, 0.58rem, bold, $align: left);
    font-family: 'San Francisco Bold', sans-serif;

    div:first-child {
      color: #a1a1a6;
    }
  }

  .subtitle {
    @include textMixin(#fff, 0.7rem, bold);
    margin-top: 0.1rem;
    background: radial-gradient(#eff1ff, #000);
    background-size: 54% 156%;
    background-position: center center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'San Francisco Bold', sans-serif;
  }

  .desc {
    @include textMixin(#a1a1a6, 0.22rem, bold, $align: left);
    width: 70%;
    margin-top: 0.25rem;
  }

  .image {
    @include sizeWH(10rem, 2.7rem);
    @include position(absolute, $top: 3rem, $left: -1rem);
    text-align: left;
    object-fit: cover;
  }
}
</style>
