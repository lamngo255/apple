<template>
  <BaseLayout>
    <div class="page-watch">
      <div class="products">
        <a
          class="product"
          v-for="(product, i) in productIcons"
          :key="i"
          :href="product.path"
        >
          <img class="icon" :src="genIcon(product.img)" />
          <div class="name">{{ product.name }}</div>
          <div class="new" v-if="product.new">New</div>
        </a>
      </div>
      <div class="trade-in">
        Get extra trade‑in savings on Apple Watch during Heart Month. Shop
        Series 6 from $239 or SE from $199.
      </div>
      <div class="cashback">
        Get 3% Daily Cash back with Apple Card. And pay for your new Apple Watch
        over 24 months, interest‑free when you choose Apple Card Monthly
        Installments.
      </div>

      <WatchShowcase />
      <!-- 
      <div class="wrapper">
        <MacCompare />
        <MacTiles />
        <MacMaking />
        <MacGetMore />
      </div> -->
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import WatchShowcase from './WatchShowcase.vue';
// import MacCompare from './MacCompare.vue';
// import MacTiles from './MacTiles.vue';
// import MacMaking from './MacMaking.vue';
// import MacGetMore from './MacGetMore.vue';

export default {
  name: 'Watch',

  components: {
    BaseLayout,
    WatchShowcase,
    // MacCompare,
    // MacTiles,
    // MacMaking,
    // MacGetMore,
  },

  data() {
    return {
      productIcons: [
        {
          name: 'Apple Watch Series 6',
          img: 'apple-watch-series-6',
          path: 'apple-watch-series-6',
          new: true,
        },
        {
          name: 'Apple Watch SE',
          img: 'apple-watch-se',
          path: 'apple-watch-se',
          new: true,
        },
        {
          name: 'Apple Watch Series 3',
          img: 'apple-watch-series-3',
          path: 'apple-watch-series-3',
        },
        {
          name: 'Apple Watch Nike',
          img: 'apple-watch-nike',
          path: 'apple-watch-nike',
          new: true,
        },
        {
          name: 'Apple Watch Hermes',
          img: 'apple-watch-hermes',
          path: 'apple-watch-hermes',
          new: true,
        },
        {
          name: 'Apple Watch Studio',
          img: 'apple-watch-studio',
          path: 'apple-watch-studio',
        },
        { name: 'Compare', img: 'compare', path: 'watch/compare' },
        { name: 'Bands', img: 'bands', path: 'bands' },
        { name: 'Airpods', img: 'airpods', path: 'airpods' },
        { name: 'Accessories', img: 'accessories', path: 'accessories' },
        {
          name: 'Apple Fitness+',
          img: 'apple-fitness',
          path: 'apple-fitness',
          new: true,
        },
        { name: 'Watch OS', img: 'watch-os', path: 'watch-os' },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/watch/${path}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-watch {
  @include sizeWH(100%, auto);
  position: relative;

  .products {
    @include sizeWH(100%, 1.2rem);
    @include flexCenter(row);
    background: #151515;
    padding-left: 0.2rem;

    .product {
      @include position(relative, $top: 0.1rem);
      @include flexCenter(column);
      align-self: flex-start;
      margin-right: 0.2rem;
      position: relative;
      text-decoration: none;
      cursor: pointer;

      .icon {
        @include sizeWH(0.5rem, 0.5rem);
      }
      .name {
        @include textMixin(#fff, 0.13rem);
        width: 0.8rem;
      }
      .new {
        @include textMixin(#e46917, 0.11rem);
      }

      &:hover {
        .name {
          color: #1976d2;
        }
      }
    }
  }

  .trade-in {
    @include sizeWH(100%, 0.38rem);
    @include textMixin(#000, 0.13rem);
    padding-top: 0.12rem;
    background: #f5f5f7;
  }

  .cashback {
    @include sizeWH(100%, 0.35rem);
    @include textMixin(#fff, 0.13rem);
    padding-top: 0.1rem;
    background: #1d1d20;
  }
}

.wrapper {
  @include sizeWH(100%, auto);
  background: #f5f5f7;
  padding: 0.3rem 0.7rem;
}
</style>
