<template>
  <div class="product-show-video">
    <img class="video" :src="genLink('video.jpg')" />

    <div class="container">
      <div class="title">
        <div>And boom.</div>
        <div>You own a film studio.</div>
      </div>
      <div class="subtitle">
        Now you can record 4K HDR video with Dolby Vision. Edit in Photos or
        iMovie. Then zap it to your TV using AirPlay to see all that color and
        detail. It’s a start-to-finish cinematic experience — found only on
        iPhone. Which comes in handy when your dog does something adorable.
      </div>
      <div class="note">First camera ever to record in Dolby Vision</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowVideo',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-video {
  @include sizeWH(100%, auto);
  background: #000;
  padding-top: 0.7rem;
  padding-bottom: 1rem;

  .video {
    @include sizeWH(7rem, auto);
  }

  .container {
    width: 40%;
    margin: 0 auto;

    .title {
      @include textMixin(#fff, 0.5rem, bold, $align: left);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0.3rem auto;
    }
    .subtitle {
      @include textMixin(#86868b, 0.22rem, bold, $align: left);
      width: 5rem;
    }

    .note {
      @include textMixin(#fff, 0.22rem, bold, $align: left);
      width: 3rem;
      margin-top: 0.4rem;
      border-top: #fff solid 0.02rem;
      padding-top: 0.3rem;
    }
  }
}
</style>
