<template>
  <div class="product-showcase">
    <div class="wrapper">
      <img class="hero" :src="genLink('hero.jpg')" />
      <div class="title">iPhone 12 and iPhone 12 mini</div>
      <div class="subtitle">Blast past fast.</div>
      <div class="desc">
        5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge
        OLED display. Ceramic Shield with four times better drop performance.
        And Night mode on every camera. iPhone 12 has it all — in two perfect
        sizes.
      </div>
      <div class="note">From $29.12/mo. or $699 before trade‑in</div>
    </div>

    <div class="container-1">
      <img class="pic1" :src="genLink('hero1.png')" />
    </div>

    <div class="container-2">
      <div class="note">The world’s smallest, thinnest, lightest 5G phone.</div>
      <img class="pic2" :src="genLink('hero2.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-showcase {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-bottom: 0.1rem;

  .wrapper {
    background: #f2f2f2;
    padding-bottom: 0.7rem;
    .hero {
      @include sizeWH(9rem, auto);
    }

    .title {
      @include textMixin(#000, 0.23rem, bold);
      margin-top: -0.5rem;
    }
    .subtitle {
      @include textMixin(#000, 0.6rem, bold);
      margin-top: 0.1rem;
      background-size: 54% 156%;
      background-position: center center;
      background-clip: text;
      font-family: 'San Francisco Bold', sans-serif;
    }

    .desc {
      @include textMixin(#000, 0.22rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      width: 45%;
      line-height: 0.35rem;
      margin: 0.2rem auto 0;
      letter-spacing: 0.007rem;
    }

    .note {
      @include textMixin(#86868b, 0.21rem, bold);
      margin-top: 0.2rem;
    }
  }

  .container-1 {
    @include sizeWH(100%, auto);
    padding-top: 0.5rem;
    background: #fcf6f0;

    .pic1 {
      @include sizeWH(8rem, auto);
    }
  }

  .container-2 {
    @include sizeWH(100%, auto);
    margin: 0.5rem 0.3rem 0;
    padding-top: 1rem;
    background: #aecbd9;

    .note {
      @include textMixin(#3948b1, 0.5rem, bold);
      width: 60%;
      margin: 0 auto;
    }
  }
}
</style>
