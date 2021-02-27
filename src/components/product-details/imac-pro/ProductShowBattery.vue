<template>
  <div class="showcase-battery">
    <div class="thermal">
      <img class="overlay" :src="genLink('thermal-bg.jpg')" />
      <div class="content">
        <div class="topic">Thermal Efficiency</div>
        <div class="title">
          Active cooling sustains blazing-fast performance.
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
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-battery {
  @include sizeWH(80%, 5.7rem);
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
    @include sizeWH(65%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: linear-gradient(to bottom, #203025 0%, #151516 100%);

    .title {
      @include textMixin(#4cd265, 0.63rem, bold, $align: center);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0.5rem auto 0;
    }
  }

  .thermal {
    @include sizeWH(35%, 100%);
    margin-right: 0.2rem;
    position: relative;
    border-radius: 0.3rem;
    background: #151516;

    .overlay {
      @include sizeWH(100%, 100%);
      @include position(absolute, 0, 0, 0, 0);
      border-radius: 0.3rem;
    }

    .title {
      @include textMixin(#fff, 0.28rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.13rem;
    }
  }
}
</style>
