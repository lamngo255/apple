<template>
  <div class="showcase-speedapp">
    <div class="speed">
      <img class="overlay" :src="genLink('speed-bg.jpg')" />
      <div class="content">
        <div class="topic">Speed and responsiveness</div>
        <div class="desc">
          The M1 chip and macOS Big Sur work together to make the entire system
          snappier. MacBook Air wakes instantly from sleep. Everyday tasks from
          flipping through photos to browsing Safari are faster. And your
          hardest-working apps all have access to the power they need.
        </div>
        <div class="title">More power. Wakes instantly.</div>
      </div>
    </div>

    <div class="app">
      <img class="overlay" :src="genLink('app-bg.jpg')" />
      <div class="content">
        <div class="topic">Biggest collection of apps ever</div>
        <div class="desc">
          Run powerful apps built for M1. All your existing apps work thanks to
          Rosetta 2. And for the first time, you can use your favorite iPhone
          and iPad apps directly on macOS Big Sur. Altogether you’ll have access
          to the biggest collection of apps ever for Mac.
        </div>
        <img class="image" :src="genLink('apps.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowSpeedApp',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-speedapp {
  @include sizeWH(80%, 5.3rem);
  @include flexCenter(row);

  margin: 0.2rem auto 0;
  text-align: left;
  position: relative;

  // common
  .content {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    z-index: 1;
    padding: 0.3rem;

    .topic {
      @include textMixin(#fff, 0.19rem, bold);
    }
  }

  .speed {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: linear-gradient(to bottom, #203025 0%, #151516 100%);
    margin-right: 0.2rem;

    .overlay {
      @include sizeWH(100%, 100%);
      @include position(absolute, 0, 0, 0, 0);
      border-radius: 0.3rem;
    }

    .desc {
      @include textMixin(#fff, 0.16rem, bold, $align: left);
      font-family: 'San Francisco', sans-serif;
      margin: 0.24rem auto 0;
    }

    .title {
      @include textMixin(#fff, 0.58rem, bold, $align: center);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0.2rem auto 0;
      width: 2.3rem;
    }
  }

  .app {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: linear-gradient(
      225deg,
      #1623a6 0%,
      #3343d4 29%,
      #175eac 73%,
      #176682 100%
    );

    .overlay {
      @include sizeWH(100%, 100%);
      @include position(absolute, 0, 0, 0, 0);
      border-radius: 0.3rem;
    }

    .desc {
      @include textMixin(#fff, 0.17rem, bold, $align: left);
      font-family: 'San Francisco', sans-serif;
      margin: 0.24rem auto 0;
    }

    .image {
      @include sizeWH(3.5rem, auto);
      @include position(absolute, $bottom: 0.4rem, $left: 50%);
      transform: translate(-50%, 0);
    }
  }
}
</style>
