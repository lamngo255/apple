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
              @click="$router.push(product.path)"
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
        Installments.* Learn more
      </div>

      <MacShowcase />

      <div class="wrapper">
        <MacCompare />
        <MacTiles />
        <MacMaking />
        <MacGetMore />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import MacShowcase from './MacShowcase.vue';
import MacCompare from './MacCompare.vue';
import MacTiles from './MacTiles.vue';
import MacMaking from './MacMaking.vue';
import MacGetMore from './MacGetMore.vue';

export default {
  name: 'Mac',

  components: {
    BaseLayout,
    MacShowcase,
    MacCompare,
    MacTiles,
    MacMaking,
    MacGetMore,
  },

  data() {
    return {
      show: false,
      productIcons: [
        {
          name: 'Macbook Air',
          img: 'macbook-air',
          path: 'shop/macbook-air',
          new: true,
        },
        {
          name: 'Macbook Pro 13”',
          img: 'macbook-pro-13',
          path: 'shop/macbook-pro-13',
          new: true,
        },
        {
          name: 'Macbook Pro 16”',
          img: 'macbook-pro-16',
          path: 'shop/macbook-pro-16',
        },
        { name: 'iMac', img: 'imac', path: 'shop/imac' },
        { name: 'iMac Pro', img: 'imac-pro', path: 'shop/imac-pro' },
        { name: 'Mac Pro', img: 'mac-pro', path: 'shop/mac-pro' },
        { name: 'Mac Mini', img: 'mac-mini', path: 'shop/mac-mini', new: true },
        { name: 'Compare', img: 'compare' },
        { name: 'Accessories', img: 'accessories' },
        { name: 'Big Sur', img: 'bigsur' },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/mac/${path}.svg`);
    },
  },

  mounted() {
    document.title = 'Mac - Apple';
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
    @include sizeWH(100%, 1.15rem);
    background: #000;
    padding-left: 0.2rem;
  }

  .products {
    @include flexCenter(row);

    .product {
      @include position(relative, $top: 0.08rem);
      margin-right: 0.3rem;
      position: relative;
      text-decoration: none;
      cursor: pointer;

      .icon {
        @include sizeWH(0.5rem, 0.5rem);
      }
      .name {
        @include textMixin(#fff, 0.13rem);
      }
      .new {
        @include textMixin(#e46917, 0.11rem);
        @include position(absolute, $top: 0.73rem, $left: 50%);
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
  @include sizeWH(100%, 0.3rem);
  @include textMixin(#fff, 0.13rem);
  padding-top: 0.05rem;
  background: #151515;
}

.wrapper {
  @include sizeWH(100%, auto);
  background: #fff;
  padding: 0.3rem 0.7rem;
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
