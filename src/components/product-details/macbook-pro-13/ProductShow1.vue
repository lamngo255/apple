<template>
  <div class="product-showcase">
    <div class="section-1 leap-year">
      <video autoplay playsinline muted>
        <source :src="genLink('hero.mp4')" />
      </video>
      <div class="title">MacBook Pro</div>
      <div class="subtitle">All systems Pro.</div>
      <div class="desc">
        The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond
        belief. With up to 2.8x CPU performance. Up to 5x the graphics speed.
        Our most advanced Neural Engine for up to 11x faster machine learning.
        And up to 20 hours of battery life — the longest of any Mac ever. It’s
        our most popular pro notebook, taken to a whole new level.
      </div>
      <div class="chip-m1">
        <img class="img" :src="genLink('chip-m1.jpg')" />
        <div class="text">Supercharged by the Apple M1 chip</div>
      </div>
      <div class="buttons">
        <div class="price">From 1299$</div>
        <button class="btn-watch">Watch the event</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShow1',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-showcase {
  @include sizeWH(100%, auto);
  background: #000;
  padding-bottom: 2rem;

  .section-1 {
    padding-top: 0.7rem;
    .title {
      @include textMixin(#fff, 0.23rem, bold);
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
      @include textMixin(#a1a1a6, 0.25rem, bold);
      width: 55%;
      margin: 0.3rem auto 0;
    }
    .chip-m1 {
      @include textMixin(#a1a1a6, 0.23rem, bold);
      @include flexCenter(row);
      margin-top: 0.4rem;

      .img {
        @include sizeWH(0.75rem, 0.75rem);
      }
    }
    .buttons {
      @include flexCenter(row);
      margin-top: 0.45rem;

      .price {
        @include textMixin(#f5f5f7, 0.23rem);
        position: relative;
        margin-right: 0.5rem;

        &::before {
          @include position(absolute, $right: -0.3rem);
          content: '|';
        }
      }

      button {
        @include textMixin(#f5f5f7, 0.23rem);
        border: none;
        background: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
