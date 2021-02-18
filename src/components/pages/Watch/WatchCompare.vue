<template>
  <div class="watch-compare">
    <div class="title">Which Apple Watch is right for you?</div>
    <div class="compare">Compare all models</div>

    <div class="products">
      <WatchCompareProduct
        v-for="(product, i) in products"
        :key="i"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import WatchCompareProduct from './WatchCompareProduct.vue';

export default {
  name: 'WatchCompare',

  components: {
    WatchCompareProduct,
  },

  data() {
    return {
      products: [
        {
          image: this.$assetsUrl('pages/watch/compare/aw-series-6.jpg'),
          name: 'Apple Watch Series 6',
          price: 399,
          watchCase: '44mm or 40mm case size',
          gps: 'GPS + Cellular',
          memory: 'Up to 16GB memory',
          storage: 'Up to 2TB storage',
          battery: 'Up to 18 hours battery life',
        },
        {
          image: this.$assetsUrl('pages/watch/compare/aw-se.jpg'),
          name: 'Apple Watch SE',
          price: 279,
          watchCase: '44mm or 40mm case size',
          gps: 'GPS + Cellular',
          memory: 'Up to 16GB memory',
          storage: 'Up to 2TB storage',
          battery: 'Up to 20 hours battery life',
        },
        {
          image: this.$assetsUrl('pages/watch/compare/aw-series-3.jpg'),
          name: 'Apple Watch Series 3',
          price: 199,
          watchCase: '42mm or 38mm case size',
          gps: 'GPS',
          memory: 'Up to 64GB memory',
          storage: 'Up to 8TB storage',
          battery: 'Up to 11 hours battery life',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.watch-compare {
  @include sizeWH(100%, auto);
  position: relative;
  margin-top: 0.4rem;

  .title {
    @include textMixin(#000, 0.5rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
    margin: 0 auto;
  }
  .compare {
    @include textMixin(#0266cc, 0.21rem);
    margin-top: 0.2rem;
  }

  .products {
    @include flexCenter(row);
    margin-top: 0.5rem;
  }
}
</style>
