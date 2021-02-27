<template>
  <div class="product-showcase">
    <div class="title">iMac Pro</div>
    <div class="subtitle">Power to the pro.</div>
    <div class="desc">
      Pros love iMac. So we created one just for you. It’s packed with powerful
      graphics and processors, along with the most advanced storage, memory, and
      I/O — all behind a breathtaking Retina 5K display in a sleek, all-in-one
      design. For everyone from photographers to video editors to 3D animators
      to musicians to software developers to scientists, iMac Pro is ready to
      turn your biggest ideas into your greatest work.
    </div>
    <img class="intro" :src="genLink('intro.jpg')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-showcase {
  @include sizeWH(100%, auto);
  background: #1a1a1a;
  padding-bottom: 1.2rem;
  padding-top: 0.3rem;

  .intro {
    @include sizeWH(6rem, auto);
    margin-top: 0.5rem;
  }
  .title {
    @include textMixin(#fff, 0.23rem, bold);
    margin-top: 0.2rem;
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
  video {
    @include sizeWH(70%, auto);
    margin: 0 auto;
    z-index: 0;
  }
  .desc {
    @include textMixin(#fff, 0.21rem, bold);
    width: 50%;
    margin: 0.3rem auto 0;
  }
}
</style>
