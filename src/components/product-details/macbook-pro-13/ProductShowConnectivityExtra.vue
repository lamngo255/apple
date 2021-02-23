<template>
  <div class="showcase-connectivity-extra">
    <div class="wifi">
      <div class="content">
        <div class="topic">Wi-Fi 6</div>
        <div class="desc">
          The next generation of Wi‑Fi isn’t just faster — it keeps MacBook Air
          going strong even as more and more devices join the network.
        </div>

        <div class="wrapper">
          <img class="image" :src="genLink('wifi.png')" alt="" />
          <div class="title">Wi-Fi 6</div>
          <div class="subtitle">up to 1.2Gb/s throughput</div>
        </div>
      </div>
    </div>

    <div class="usb">
      <div class="content">
        <div class="topic">Thunderbolt / USB 4</div>
        <div class="desc">
          Ultra‑high bandwidth meets ultra‑versatility. Thunderbolt enables data
          transfer, charging, and video output all through a single port — and
          MacBook Air has two of them.
        </div>
        <div class="wrapper">
          <div class="item">
            <img class="image" :src="genLink('usb/charging.png')" />
            <div class="name">Charging</div>
          </div>
          <div class="item">
            <img class="image" :src="genLink('usb/display.png')" />
            <div class="name">External display</div>
          </div>
          <div class="item">
            <img class="image" :src="genLink('usb/data-transfer.png')" />
            <div class="name">Data transfer up to 40Gb/s</div>
          </div>
          <div class="item">
            <img class="image" :src="genLink('usb/devices.png')" />
            <div class="name">Connecting your devices</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowConnectivityExtra',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-connectivity-extra {
  @include sizeWH(80%, 5.5rem);
  @include flexCenter(row);

  margin: -0.8rem auto 0;
  text-align: left;
  position: relative;

  // common
  .content {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    z-index: 1;
    padding: 0.3rem;

    .topic {
      @include textMixin(#fff, 0.18rem, bold);
    }
  }

  .wifi {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background-image: linear-gradient(
      30deg,
      #214079 1%,
      #663a7e 55%,
      #a82b7d 100%
    );

    margin-right: 0.2rem;

    .desc {
      @include textMixin(#fff, 0.17rem, $align: left);
      font-family: 'San Francisco Medium', sans-serif;
      margin-top: 0.2rem;
      width: 4rem;
    }

    .wrapper {
      @include position(absolute, $bottom: 1rem, $left: 50%);
      @include flexCenter(column);
      transform: translate(-50%, 0);

      .image {
        @include sizeWH(2.2rem, auto);
      }
      .title {
        @include textMixin(#fff, 0.6rem, bold);
        font-family: 'San Francisco Bold', sans-serif;
      }
      .subtitle {
        @include textMixin(#fff, 0.2rem, bold);
      }
    }
  }

  .usb {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background-image: linear-gradient(
      201deg,
      #ef278e 0%,
      #81347f 47%,
      #43407a 100%
    );

    .desc {
      @include textMixin(#fff, 0.17rem, bold, $align: left);
      font-family: 'San Francisco', sans-serif;
      margin-top: 0.24rem;
    }

    .wrapper {
      @include position(absolute, $top: 2rem, $left: 0rem);
      @include flexCenter(row);
      flex-wrap: wrap;

      .item {
        @include flexCenter(column);
        margin-right: 0.5rem;
        margin-bottom: 0.6rem;

        .image {
          @include sizeWH(auto, 0.6rem);
        }
        .name {
          @include textMixin(#fff, 0.17rem, bold);
          @include position(relative, $top: 0.1rem, $left: 0.4rem);
          width: 1.5rem;
        }
      }
    }
  }
}
</style>
