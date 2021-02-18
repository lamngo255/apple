<template>
  <div class="mac-compare">
    <div class="title">Which Mac notebook is right for you?</div>
    <div class="compare">Compare all Mac models</div>

    <div class="products">
      <MacCompareProduct
        v-for="(product, i) in products"
        :key="i"
        :big="i === 2"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import MacCompareProduct from './MacCompareProduct.vue';

export default {
  name: 'MacCompare',

  components: {
    MacCompareProduct,
  },

  data() {
    return {
      products: [
        {
          image: this.$assetsUrl('pages/mac/compare/macbook-air.jpg'),
          name: 'Macbook Air',
          price: 999,
          screen: '13.3” Retina display',
          chip: 'Apple M1 chip',
          memory: 'Up to 16GB memory',
          storage: 'Up to 2TB storage',
          battery: 'Up to 18 hours battery life',
        },
        {
          image: this.$assetsUrl('pages/mac/compare/macbook-pro-13.jpg'),
          name: 'MacBook Pro 13”',
          price: 1299,
          screen: '13.3” Retina display',
          chip: 'Apple M1 chip',
          memory: 'Up to 16GB memory',
          storage: 'Up to 2TB storage',
          battery: 'Up to 20 hours battery life',
        },
        {
          image: this.$assetsUrl('pages/mac/compare/macbook-pro-16.jpg'),
          name: 'MacBook Pro 16”',
          price: 2399,
          screen: '16” Retina display',
          chip: 'Intel Core i7 or i9 processor',
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
.mac-compare {
  @include sizeWH(100%, auto);
  padding-top: 1rem;
  background: #f2f2f2;
  position: relative;

  .title {
    @include textMixin(#000, 0.6rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
    margin: 0 auto;
    width: 50%;
  }
  .compare {
    @include textMixin(#0266cc, 0.21rem);
    margin-top: 0.35rem;
  }

  .products {
    @include flexCenter(row);
    margin-top: 0.5rem;
  }
}
</style>
