<template>
  <div class="showcase-battery">
    <div class="thermal">
      <div class="content">
        <div class="topic">Thermal Efficiency</div>
        <div class="title">
          Active cooling sustains blazing-fast performance.
        </div>
        <div class="btn-learn" @click="$router.push('mac/m1')">
          Get the M1 thermal story
        </div>
      </div>
    </div>
    <div class="battery">
      <div class="content">
        <div class="topic">All-day battery life</div>
        <div class="title">
          Up to 20 hours of battery life — the longest in any Mac ever.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowBattery',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-battery {
  @include sizeWH(80%, 5rem);
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

  .battery {
    @include sizeWH(70%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: linear-gradient(to bottom, #203025 0%, #151516 100%);

    .title {
      @include textMixin(#4cd265, 0.58rem, bold, $align: center);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0.5rem auto 0;
    }
  }

  .thermal {
    @include sizeWH(30%, 100%);
    margin-right: 0.2rem;
    position: relative;
    border-radius: 0.3rem;
    background: #151516;

    .title {
      @include textMixin(#fff, 0.3rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.13rem;
    }

    .btn-learn {
      @include textMixin(#fff, 0.15rem, bold);
      @include position(absolute, $bottom: 0.3rem, $left: 0.3rem);
      border: #fff solid 0.02rem;
      margin-top: 0.3rem;
      padding: 0.04rem 0.2rem;
      display: inline-block;
      border-radius: 0.2rem;
      cursor: pointer;
    }
  }
}
</style>
