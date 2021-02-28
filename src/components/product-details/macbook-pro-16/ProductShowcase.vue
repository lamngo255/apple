<template>
  <div class="product-showcase">
    <div class="subtitle">MacBook Pro</div>
    <div class="title">The best for the brightest</div>
    <img class="hero" :src="genLink('hero.png')" />
    <div class="desc">
      Designed for those who defy limits and change the world, the 16-inch
      MacBook Pro is by far the most powerful notebook we have ever made. With
      an immersive Retina display, superfast processors, advanced graphics, the
      largest battery capacity ever in a MacBook Pro, Magic Keyboard, and
      massive storage, it's the ultimate pro notebook for the ultimate user.
    </div>
    <div class="buttons">
      <button class="btn-watch">
        <span class="text">Watch the film</span>
        <img class="play" :src="genLink('btn-play.png')" />
      </button>
    </div>
    <img class="specs" :src="genLink('specs.png')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-showcase {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 0.2rem;
  padding-bottom: 0.1rem;

  .subtitle {
    @include textMixin(#000, 0.3rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
  }

  .title {
    @include textMixin(#000, 0.8rem, bold);
    font-family: 'San Francisco Bold', sans-serif;
    line-height: 0.84rem;
    width: 60%;
    margin: 0 auto 0.1rem;
  }

  .hero {
    @include sizeWH(9rem, auto);
  }

  .specs {
    @include sizeWH(10rem, auto);
    margin-top: 1rem;
  }

  .desc {
    @include textMixin(#86868b, 0.3rem, bold, $align: left);
    font-family: 'San Francisco Regular', sans-serif;
    width: 60%;
    line-height: 0.35rem;
    margin: 0.5rem auto 0;
    letter-spacing: 0.007rem;
  }

  .buttons {
    width: 60%;
    margin: 0 auto;
    text-align: left;

    .btn-watch {
      @include textMixin(#000, 0.19rem, bold);
      @include flexCenter(row);
      margin-top: 0.2rem;
      background: none;

      .play {
        @include sizeWH(0.23rem, 0.23rem);
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
