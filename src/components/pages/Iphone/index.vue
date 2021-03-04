<template>
  <BaseLayout>
    <div class="page-mac">
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

      <div class="cashback">
        Get 3% Daily Cash back with Apple Card. And pay for your new iPad over
        12 months, interest‑free when you choose Apple Card Monthly
        Installments.
      </div>

      <IphoneShowcase />
      <IphoneCompare />

      <div class="wrapper">
        <IphoneTiles />
        <IphoneGetMore />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import IphoneShowcase from './IphoneShowcase.vue';
import IphoneCompare from './IphoneCompare.vue';
import IphoneTiles from './IphoneTiles.vue';
import IphoneGetMore from './IphoneGetMore.vue';

export default {
  name: 'Mac',

  components: {
    BaseLayout,
    IphoneShowcase,
    IphoneCompare,
    IphoneTiles,
    IphoneGetMore,
  },

  data() {
    return {
      show: false,
      productIcons: [
        {
          name: 'iPhone 12 Pro',
          img: 'ip-12-pro',
          path: 'iphone-12-pro',
          new: true,
        },
        { name: 'iPhone 12', img: 'ip-12', path: 'iphone-12', new: true },
        { name: 'iPhone SE', img: 'ip-se', path: 'shop/iphone-se' },
        { name: 'iPhone 11', img: 'ip-11', path: 'shop/iphone-11' },
        { name: 'iPhone XR', img: 'ip-xr', path: 'shop/iphone-xr' },
        { name: 'Airpods', img: 'airpods', path: 'shop/airpods' },
        { name: 'Compare', img: 'compare' },
        { name: 'Accessories', img: 'accessories' },
        { name: 'Apple Card', img: 'apple-card' },
        { name: 'iOs 14', img: 'ios-14' },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/iphone/${path}.svg`);
    },
  },

  async mounted() {
    document.title = 'iPhone - Apple';
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.show = true;
    }, 150);
  },
};
</script>

<style lang="scss" scoped>
.page-mac {
  @include sizeWH(100%, auto);
  position: relative;

  .container {
    @include sizeWH(100%, 0.9rem);
    background: #000;
    padding-left: 0.2rem;
  }

  .products {
    @include flexCenter(row);

    .product {
      @include position(relative, $top: 0.08rem);
      margin-right: 0.3rem;
      text-decoration: none;
      position: relative;
      cursor: pointer;

      .icon {
        @include sizeWH(0.42rem, 0.42rem);
      }
      .name {
        @include textMixin(#fff, 0.1rem);
      }
      .new {
        @include textMixin(#e46917, 0.09rem, bold);
        @include position(absolute, $top: 0.6rem, $left: 50%);
        transform: translate(-50%, 0);
      }

      &:hover {
        .name {
          color: #1976d2;
        }
      }
    }
  }
}

.cashback {
  @include sizeWH(100%, 0.27rem);
  @include textMixin(#fff, 0.1rem);
  padding-top: 0.07rem;
  background: #151515;
}

.wrapper {
  @include sizeWH(100%, auto);
  background: #f2f2f2;
  padding: 0.25rem 1.2rem;
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
