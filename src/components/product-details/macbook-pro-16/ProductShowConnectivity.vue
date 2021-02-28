<template>
  <div class="product-show-connectivity">
    <div class="wrapper">
      <div class="title">Connectivity</div>
      <div class="desc">
        <span>Packed with ports. And possibilities.</span>
        <span>
          Every iMac features two superfast Thunderbolt 3 (USB-C) ports and four
          USB-A ports, giving you plenty of high-performance options for
          connecting external drives, cameras, displays, and more. All iMac
          models come with a 1Gb Ethernet port, and now you can configure the
          27‑inch iMac with 10Gb Ethernet for up to 10 times the throughput of
          the previous generation. Ultrafast Wi-Fi and Bluetooth are standard on
          every iMac, and the 27‑inch model features Bluetooth 5.0, so you’re
          instantly connected to your favorite content and wireless devices.
        </span>
      </div>
      <div class="images">
        <img class="back" :src="genLink('connectivity-back.jpg')" />
        <img class="front" :src="genLink('connectivity-front.jpg')" />
      </div>
      <div class="note">
        <span>Turn your workspace into a showcase.</span>
        <span>
          Thunderbolt 3 lets you add up to two 6K displays for the ultimate
          workspace setup.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowConnectivity',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-connectivity {
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

      .back,
      .front {
        @include sizeWH(7.8rem, auto);
        margin-top: 0.1rem;
      }
    }
    .note {
      @include textMixin(#86868b, 0.15rem, bold);
      line-height: 0.23rem;
      margin-top: 0.1rem;
      width: 5rem;

      span:first-child {
        color: #000;
      }
    }
  }
}
</style>
