<template>
  <div class="product-show-retina">
    <div class="title">
      <div>Retina display</div>
      <div>Lifelike colors</div>
      <div>for unreal beauty.</div>
    </div>
    <div class="desc">
      Images take on new levels of detail and realism on the brilliant
      13.3‑inch, 2560‑by‑1600-resolution Retina display. Text is sharp and
      clear. Colors are more vibrant than ever. And the glass goes right to the
      edge of the enclosure, so nothing takes away from your gorgeous view.
    </div>
    <img class="image" :src="genLink('retina1.png')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowRetina',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
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
    width: 70%;
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
