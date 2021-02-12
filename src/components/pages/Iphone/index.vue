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
        Installments.
      </div>

      <IphoneShowcase />

      <!-- <div class="wrapper">
        <IpadCompare />
        <IpadTiles />
        <IpadGetMore />
      </div> -->
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import IphoneShowcase from './IphoneShowcase.vue';

export default {
  name: 'Mac',

  components: {
    BaseLayout,
    IphoneShowcase,
  },

  data() {
    return {
      productIcons: [
        { name: 'Iphone 12 Pro', img: 'ip-12-pro' },
        { name: 'Iphone 12', img: 'ip-12' },
        { name: 'Iphone SE', img: 'ip-se' },
        { name: 'Iphone 11', img: 'ip-11' },
        { name: 'Iphone Xr', img: 'ip-xr' },
        { name: 'Compare', img: 'compare' },
        { name: 'Airpods', img: 'airpods' },
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
    margin-right: 0.35rem;
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
  background: #f5f5f7;
  padding: 0.3rem 0.7rem;
}
</style>
