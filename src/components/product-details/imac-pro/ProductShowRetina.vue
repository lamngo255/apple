<template>
  <div class="product-show-retina">
    <div class="container">
      <div class="title">Retina 5K display. Dream in a billion colors.</div>
      <div class="desc">
        It almost goes without saying: If it’s an iMac, it will have a gorgeous
        display. And iMac Pro doesn’t disappoint. Its 27-inch Retina screen is
        crisp and bright, with 500 nits of brightness across its 14.7 million
        pixels. It’s as if the sleek, all-in-one design disappears behind the
        stunning screen — so you can focus on your content. Along with P3 color
        and support for a billion colors, iMac Pro delivers spectacular,
        true-to-life images.
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
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-retina {
  @include sizeWH(100%, auto);
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #1a1a1a;

  .container {
    @include sizeWH(60%, auto);
    margin: 0 auto;
  }

  .title {
    @include textMixin(#fff, 0.3rem, bold);
    border-bottom: #515151 solid 0.015rem;
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .desc {
    @include textMixin(#fff, 0.17rem, bold);
    width: 6rem;
    line-height: 0.26rem;
  }
  .retina {
    @include sizeWH(6rem, auto);
    margin: 0.5rem auto 0;
    margin-left: 0.5rem;
  }
}
</style>
