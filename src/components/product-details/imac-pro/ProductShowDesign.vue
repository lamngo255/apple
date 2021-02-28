<template>
  <div class="product-show-video">
    <div class="container">
      <div class="title">Video performance artist.</div>
      <div class="desc">
        iMac Pro has the bandwidth to effortlessly handle multiple streams of
        video. And with up to 4TB of all-flash storage, saving and loading
        humongous projects is all in a moment’s work.
      </div>
      <img class="video" :src="genLink('video.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowVideoPerf',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-video {
  @include sizeWH(100%, auto);
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #0f0f0f;

  .container {
    @include sizeWH(60%, auto);
    margin: 0 auto;

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
    .video {
      @include sizeWH(6rem, auto);
      margin: 0.5rem auto 0;
      margin-left: 0.5rem;
    }
  }
}
</style>
