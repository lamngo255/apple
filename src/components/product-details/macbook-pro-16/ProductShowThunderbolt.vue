<template>
  <div class="product-show-thunderbolt">
    <div class="container">
      <div class="title">
        <div>Thunderbolt 3</div>
        <div>The most powerful and</div>
        <div>versatile port ever.</div>
      </div>

      <div class="note">
        <b>Thunderbolt 3</b> combines ultra‑high bandwidth with the
        ultra‑versatility of the USB‑C industry standard to create one revved‑up
        universal port. It integrates data transfer, charging, and video output
        in a single connector, delivering up to <b>40Gb/s of throughput</b> for
        twice the bandwidth of Thunderbolt 2. MacBook Pro is equipped with four
        ports, so you can do all of that from either side. Existing devices are
        easily connected with a cable or adapter. And Thunderbolt 3 is
        reversible, so no matter how you plug in, it’s always right side up.
      </div>
    </div>

    <img class="stats" :src="genLink('thunderbolt-stats.png')" />
    <img class="image" :src="genLink('thunderbolt.jpg')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowThunderbolt',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-thunderbolt {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 0.3rem;
  padding-bottom: 1rem;

  .container {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.6rem, bold);
      display: flex;
      flex-flow: column wrap;
      font-family: 'San Francisco Medium', sans-serif;

      div:first-child {
        color: #acacac;
      }
    }

    .note {
      @include textMixin(#86868b, 0.29rem, bold, $align: left);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin: 0.5rem auto 0.1rem;
      letter-spacing: 0.007rem;

      b {
        color: #000;
        font-weight: bold;
      }
    }
  }

  .image {
    @include sizeWH(100%, auto);
    margin-top: 0.1rem;
  }

  .stats {
    @include sizeWH(60%, auto);
    margin-top: 0.2rem;
  }
}
</style>
