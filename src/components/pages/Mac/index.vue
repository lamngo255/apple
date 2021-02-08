<template>
  <BaseLayout>
    <div class="page-mac">
      <div class="products">
        <div class="product" v-for="(product, i) in productIcons" :key="i">
          <img class="icon" :src="genIcon(product.img)" />
          <div class="name">{{ product.name }}</div>
        </div>
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
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import MacShowcase from './MacShowcase.vue';
import MacCompare from './MacCompare.vue';
import MacTiles from './MacTiles.vue';

export default {
  name: 'Mac',

  components: {
    BaseLayout,
    MacShowcase,
    MacCompare,
    MacTiles,
  },

  data() {
    return {
      productIcons: [
        { name: 'Macbook Air', img: 'macbook-air' },
        { name: 'Macbook Pro 13”', img: 'macbook-pro-13' },
        { name: 'Macbook Pro 16”', img: 'macbook-pro-16' },
        { name: 'iMac', img: 'imac' },
        { name: 'iMac Pro', img: 'imac-pro' },
        { name: 'Mac Pro', img: 'macpro' },
        { name: 'Mac Mini', img: 'mac-mini' },
        { name: 'Compare', img: 'compare' },
        { name: 'Pro Display XDR', img: 'pro-display-xdr' },
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
};
</script>

<style lang="scss" scoped>
.page-mac {
  @include sizeWH(100%, auto);
  position: relative;
}

.products {
  @include sizeWH(100%, 1.15rem);
  @include flexCenter(row);
  background: #151515;
  padding-left: 0.2rem;

  .product {
    @include position(relative, $top: -0.08rem);
    margin-right: 0.3rem;
    cursor: pointer;

    .icon {
      @include sizeWH(0.5rem, 0.5rem);
    }
    .name {
      @include textMixin(#fff, 0.13rem);
    }

    &:hover {
      .name {
        color: #1976d2;
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
</style>
