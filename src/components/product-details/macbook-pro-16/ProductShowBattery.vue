<template>
  <div class="product-show-battery">
    <div class="container">
      <div class="title">
        <div>Battery</div>
        <div>A battery with a strong</div>
        <div>work ethic.</div>
      </div>

      <div class="note">
        The 16-inch MacBook Pro has the highest-capacity battery we’ve ever put
        in a notebook. The <b>100-Wh lithium-polymer battery</b> not only powers
        the larger display and delivers higher maximum sustained power, it also
        provides longer battery life — <b>up to 11 hours</b> of wireless web
        browsing and video playback. So you’ll have more time to work between
        charges — whether you’re on or off the grid.
      </div>

      <div class="images">
        <img :src="genLink('battery.png')" />
        <img :src="genLink('battery-stats.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowBattery',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-battery {
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

    .images {
      img {
        @include sizeWH(8rem, auto);
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
