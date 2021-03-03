<template>
  <div class="product-nano-design">
    <div class="wrapper">
      <div class="title">ALL-NEW DESIGN</div>
      <div class="desc">
        <span>Function defines form.</span>
        <span>
          Every aspect of Mac Pro is designed in pursuit of performance. Built
          around a stainless steel space frame, an aluminum housing lifts off,
          allowing 360‑degree access to every component and vast configuration.
          From there anything is possible.
        </span>
      </div>
    </div>

    <div class="container">
      <video class="d1" autoplay playsinline muted>
        <source :src="genLink('design-1.mp4')" />
      </video>
      <img class="d2" :src="genLink('design-2.png')" />
      <img class="d3" :src="genLink('design-3.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowDesign',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/mac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-nano-design {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1.2rem;

  .wrapper {
    @include sizeWH(100%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.14rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.3rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.37rem;
      margin-top: 0.2rem;
      width: 7rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }
  }

  .container {
    position: relative;
    video {
      @include sizeWH(94%, auto);
      margin: 0.5rem auto 0;
    }

    .d2 {
      @include sizeWH(94%, auto);
      @include position(relative, $top: -1.5rem);
    }
    .d3 {
      @include sizeWH(94%, auto);
      @include position(relative, $top: -1.6rem);
    }
  }
}
</style>
