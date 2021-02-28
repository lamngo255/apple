<template>
  <div class="product-show-memory">
    <div class="title">More memory for massive projects.</div>
    <div class="desc">
      With four channels of memory, iMac Pro can now accommodate up to 256GB. So
      you can visualize, simulate, and render huge 3D models. Create multiple
      test environments for cross-platform development. And keep numerous apps
      open at the same time. It’s all powerful. For all the things you want to
      do.
    </div>
    <img class="memory" :src="genLink('memory.jpg')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowMemory',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-memory {
  @include sizeWH(60%, auto);
  margin: 0 auto;
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;

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
  .memory {
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
