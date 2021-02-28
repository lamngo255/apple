<template>
  <div class="product-show-big-screen">
    <div class="container">
      <div class="title">See your work on the big screens.</div>
      <div class="desc">
        <div class="left">
          Create a powerful workstation by connecting two RAID systems and two
          5K displays to the four Thunderbolt 3 ports. Then see your work on a
          44-million-pixel canvas.
        </div>
        <div class="right">
          <img class="big-screen" :src="genLink('big-screen.png')" />
        </div>
      </div>
    </div>
    <img class="video-perf" :src="genLink('video-perf.png')" />
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
.product-show-big-screen {
  @include sizeWH(100%, auto);
  text-align: left;
  padding-bottom: 1rem;
  padding-top: 1rem;
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
      @include flexCenter(row);
      line-height: 0.26rem;

      .left {
        margin-right: 0.3rem;
        border-right: #515151 solid 0.015rem;
        padding-right: 0.5rem;
      }
      .right {
        margin-right: 0.2rem;
        margin-left: 0.3rem;

        .big-screen {
          @include sizeWH(2rem, auto);
        }
      }
    }
  }

  .video-perf {
    @include sizeWH(100%, auto);
    margin: 0.5rem auto 0;
  }
}
</style>
