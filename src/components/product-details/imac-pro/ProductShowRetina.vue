<template>
  <div class="product-show-retina">
    <div class="title">
      <div>Retina display</div>
      <div>See the better picture.</div>
    </div>
    <div class="desc">
      With the brilliant Retina display, images take on an incredible level of
      detail and realism. Text is sharp and clear. Bright LED backlighting
      delivers deep blacks and bright whites. P3 wide color brings even more
      vibrant greens and reds than sRGB. And every MacBook Pro features True
      Tone technology, so the white balance automatically adjusts to match the
      color temperature of the light around you — for a more natural viewing
      experience.
    </div>
    <img class="image" :src="genLink('retina1.png')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowRetina',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-retina {
  @include sizeWH(60%, auto);
  background: #000;
  margin: 1rem auto 0;

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
    width: 80%;
    margin-top: 0.25rem;
  }

  .image {
    @include sizeWH(9.5rem, auto);
    text-align: left;
    margin-top: 0.2rem;
    margin-left: -1rem;
  }
}
</style>
