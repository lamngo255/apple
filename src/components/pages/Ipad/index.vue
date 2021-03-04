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
        Installments.* Learn more
      </div>

      <IpadShowcase />

      <div class="wrapper">
        <IpadCompare />
        <IpadTiles />
        <IpadGetMore />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import IpadShowcase from './IpadShowcase.vue';
import IpadCompare from './IpadCompare.vue';
import IpadTiles from './IpadTiles.vue';
import IpadGetMore from './IpadGetMore.vue';

export default {
  name: 'Mac',

  components: {
    BaseLayout,
    IpadShowcase,
    IpadCompare,
    IpadTiles,
    IpadGetMore,
  },

  data() {
    return {
      show: false,
      productIcons: [
        { name: 'iPad Pro', img: 'ipad-pro', path: 'shop/ipad-pro' },
        { name: 'iPad Air', img: 'ipad-air', path: 'shop/ipad-air', new: true },
        { name: 'iPad', img: 'ipad-light', path: 'shop/ipad-light', new: true },
        { name: 'iPad Mini', img: 'ipad-mini', path: 'shop/ipad-mini' },
        { name: 'Compare', img: 'ipad-compare' },
        {
          name: 'Apple Pencil',
          img: 'apple-pencil',
          path: 'shop/apple-pencil',
        },
        { name: 'Keyboards', img: 'keyboard', path: 'shop/magic-keyboard' },
        { name: 'Airpods', img: 'airpods', path: 'shop/airpods' },
        { name: 'Accessories', img: 'accessories' },
        { name: 'iPadOS', img: 'ipad-os' },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/ipad/${path}.svg`);
    },
  },

  mounted() {
    document.title = 'iPad - Apple';
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
    background: #fbfbfd;
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
        @include textMixin(#000, 0.1rem);
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

  .cashback {
    @include sizeWH(100%, 0.27rem);
    @include textMixin(#000, 0.1rem);
    padding-top: 0.07rem;
    background: #f5f5f7;
  }

  .wrapper {
    @include sizeWH(100%, auto);
    background: #f5f5f7;
    padding: 0.25rem 1.24rem;
  }
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
