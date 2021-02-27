<template>
  <div class="product-nano-glass">
    <div class="wrapper">
      <div class="title">Nano-Texture Glass</div>
      <div class="desc">
        <span>Minimum glare. Maximum detail.</span>
        <span>
          First seen on the Pro Display XDR, the nano-texture glass option on
          the 27‑inch iMac is a game-changer for workspaces with sunlight,
          direct light, or changing lighting conditions. Unlike typical matte
          display coatings, the nano-texture is etched into the glass at the
          nanometer level. This reduces glare while preserving contrast, for
          jaw-dropping image quality.
        </span>
      </div>
      <video autoplay playsinline muted>
        <source :src="genLink('nano-glass.mp4')" />
      </video>
      <div class="note">
        <span>Nano-texture glass</span>
        <span>
          scatters inbound light to minimize glare — while reducing the unwanted
          haze and sparkle of typical matte coatings.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowNanoGlass',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-nano-glass {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 0.2rem;

  .wrapper {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.2rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.31rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.37rem;
      margin-top: 0.2rem;
      width: 7rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }

    video {
      @include sizeWH(100%, auto);
      margin-top: 0.5rem;
    }

    .note {
      @include textMixin(#86868b, 0.15rem, bold);
      margin-top: 0.35rem;

      span:first-child {
        color: #000;
      }
    }
  }
}
</style>
