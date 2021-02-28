<template>
  <div class="product-show-video">
    <div class="container">
      <div class="title">Serious I/O. For serious work.</div>
      <div class="desc">
        As you’d expect from a pro machine, there are plenty of high-speed ports
        to create a high-performance workstation. Four Thunderbolt 3 ports let
        you connect two 5K monitors — for 44 million pixels total — and transfer
        data at a blazing 40Gb/s. And there’s something you probably didn’t
        expect in an iMac: 10Gb Ethernet. So sharing files between desktops, or
        working with high-performance network storage, is up to 10 times faster.
        .
      </div>
      <img class="io" :src="genLink('io.png')" />
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
  background: #1a1a1a;

  .container {
    @include sizeWH(60%, auto);
    margin: 0 auto;
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
  .io {
    @include sizeWH(6rem, auto);
    margin: 0.5rem auto 0;
    margin-left: 0.5rem;
  }
}
</style>
