<template>
  <div class="product-show-storage">
    <div class="wrapper">
      <div class="title">Storage</div>
      <div class="desc">
        <span>More space. More speed.</span>
        <span>
          All-flash SSD storage is now standard on all iMac models, bringing
          high capacity and lightning speed. And the 27‑inch iMac can now be
          configured up to a whopping 8TB SSD13 with up to 3.4GB/s sequential
          read and write speeds, for screaming-fast access to all of your photo
          and video libraries, massive files, and pro apps.
        </span>
      </div>
      <div class="images">
        <img class="display" :src="genLink('storage.jpg')" />
        <img class="info" :src="genLink('storage-info.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowStorage',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-storage {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1rem;

  .wrapper {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.2rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.32rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin-top: 0.1rem;
      letter-spacing: 0.005rem;
      width: 7rem;

      span:first-child {
        color: #000;
      }
    }
    .images {
      margin-top: 0.5rem;

      .display {
        @include sizeWH(8.4rem, auto);
        margin-left: -0.5rem;
      }
      .info {
        @include sizeWH(8rem, auto);
      }
    }
  }
}
</style>
