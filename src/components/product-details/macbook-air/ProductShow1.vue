<template>
  <div class="product-showcase">
    <div class="section-1 leap-year">
      <video autoplay playsinline muted>
        <source :src="genLink('hero.mp4')" />
      </video>
      <div class="title">MacBook Air</div>
      <div class="subtitle">Power. It’s in the Air.</div>
      <div class="desc">
        Our thinnest, lightest notebook, completely transformed by the Apple M1
        chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most
        advanced Neural Engine for up to 9x faster machine learning. The longest
        battery life ever in a MacBook Air. And a silent, fanless design. This
        much power has never been this ready to go.
      </div>
      <div class="chip-m1">
        <img class="img" :src="genLink('chip-m1.jpg')" />
        <div class="text">Supercharged by the Apple M1 chip</div>
      </div>
      <div class="buttons">
        <div class="price">From 999$</div>
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
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
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
      @include sizeWH(90%, auto);
      margin: 0 auto;
      margin-left: 2.9rem;
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
