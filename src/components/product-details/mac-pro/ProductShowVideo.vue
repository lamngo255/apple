<template>
  <div class="product-show-video">
    <div class="wrapper">
      <div class="title">VIDEO EDITING</div>
      <div class="desc">
        <span>Apple Afterburner. Blaze through 8K video.</span>
        <span>
          Created to transform the workflow for film and video professionals,
          Afterburner allows you to go straight from camera to timeline and work
          natively with 4K and even 8K files from the start. No more
          time-consuming transcoding, storage overhead, or errors during output.
          Proxy workflows, RIP.
        </span>
      </div>
    </div>

    <div class="container">
      <img class="video" :src="genLink('video.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowVideo',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/mac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-video {
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
      width: 8rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }
  }

  .container {
    @include sizeWH(100%, auto);
    background: #f2f2f2;
    margin-top: 0.6rem;
    padding-top: 1rem;

    .video {
      @include sizeWH(100%, auto);
    }
  }
}
</style>
