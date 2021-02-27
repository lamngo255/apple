<template>
  <div class="product-show-processor">
    <div class="title">Up to 18 cores in an iMac. No, that’s not a typo.</div>
    <div class="desc">
      An iMac with 4 cores is remarkable enough. But an iMac with 10, 14, or 18
      cores is an entirely different creature. Add Turbo Boost speeds up to
      4.5GHz, and iMac Pro has the power and flexibility to balance multicore
      processing with single-thread performance. With AVX-512 vector
      instructions and an advanced cache architecture, the processor handles
      even more data — even more quickly. Which means you can render images,
      edit up to 8K video, manipulate photos, create real-time audio effects, or
      compile your next five-star app — all at lightning speed.
    </div>
    <img class="processor" :src="genLink('processor.jpg')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowProcessor',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-processor {
  @include sizeWH(60%, auto);
  margin: 0 auto;
  text-align: left;
  padding-bottom: 1rem;

  .m1-big {
    @include sizeWH(1.5rem, auto);
  }

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
  .processor {
    @include sizeWH(6rem, auto);
    margin: 0.5rem auto 0;
    margin-left: 0.5rem;
  }

  video {
    @include sizeWH(100%, auto);
    margin: 0 auto;
  }
}
</style>
