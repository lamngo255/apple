<template>
  <BaseLayout>
    <div class="page-watch">
      <div class="container">
        <transition name="fade">
          <div class="products" v-if="show">
            <li
              class="product"
              v-for="(product, i) in productIcons"
              :key="i"
              @click="product.path && $router.push(product.path)"
            >
              <img class="icon" :src="genIcon(product.img)" />
              <div class="name">{{ product.name }}</div>
              <div class="new" v-if="product.new">New</div>
            </li>
          </div>
        </transition>
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

      <div class="wrapper">
        <WatchCompare />
        <WatchFitness />
        <WatchWhy />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import WatchShowcase from './WatchShowcase.vue';
import WatchCompare from './WatchCompare.vue';
import WatchFitness from './WatchFitness.vue';
import WatchWhy from './WatchWhy.vue';

export default {
  name: 'Watch',

  components: {
    BaseLayout,
    WatchShowcase,
    WatchCompare,
    WatchFitness,
    WatchWhy,
  },

  data() {
    return {
      show: false,
      productIcons: [
        {
          name: 'Apple Watch Series 6',
          img: 'apple-watch-series-6',
          path: 'shop/apple-watch-series-6',
          new: true,
        },
        {
          name: 'Apple Watch SE',
          img: 'apple-watch-se',
          path: 'shop/apple-watch-se',
          new: true,
        },
        {
          name: 'Apple Watch Series 3',
          img: 'apple-watch-series-3',
          path: 'shop/apple-watch-series-3',
        },
        {
          name: 'Apple Watch Nike',
          img: 'apple-watch-nike',
          path: 'shop/apple-watch-nike',
          new: true,
        },
        {
          name: 'Apple Watch Hermes',
          img: 'apple-watch-hermes',
          path: 'shop/apple-watch-hermes',
          new: true,
        },
        { name: 'Bands', img: 'bands', path: 'shop/watch-bands' },
        { name: 'Airpods', img: 'airpods', path: 'shop/airpods' },

        // { name: 'Apple Watch Studio', img: 'apple-watch-studio' },
        // { name: 'Compare', img: 'compare' },
        // {
        //   name: 'Apple Fitness+',
        //   img: 'apple-fitness',
        //   new: true,
        // },
        // { name: 'Accessories', img: 'accessories' },
        // { name: 'Watch OS', img: 'watch-os' },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/watch/${path}.svg`);
    },
  },

  mounted() {
    document.title = 'Watch - Apple';
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.show = true;
    }, 150);
  },
};
</script>

<style lang="scss" scoped>
.page-watch {
  @include sizeWH(100%, auto);
  position: relative;

  .container {
    @include sizeWH(100%, 1.2rem);
    background: #000;
    padding-left: 0.2rem;
  }

  .products {
    @include flexCenter(row);

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
    @include textMixin(#000, 0.14rem);
    padding-top: 0.11rem;
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
  background: #fff;
  padding: 0.3rem 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, margin-right 0.3s;
}
.fade-enter {
  opacity: 0;
  margin-right: -1rem;
}
.fade-leave-to {
  opacity: 0;
  margin-right: 1rem;
}
</style>
