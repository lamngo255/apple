<template>
  <BaseLayout>
    <div class="page-product-info">
      <PageProductInfoHeader :name="productName" :price="productPrice" />
      <PageProductTradeIn />
      <PageProductOptions
        v-if="product"
        v-bind="product"
        :colors="colors"
        :carriers="carriers"
        :productId="productId"
        :productPrice="productPrice"
        :productImages="productImages"
        :productName="productName"
        @setPrice="setPrice"
      />
    </div>
  </BaseLayout>
</template>

<script>
import { mapState } from 'vuex';
import { normalizeStr, colorPicker, carrierPicker } from '@/mapping';
import BaseLayout from '@/components/BaseLayout.vue';
import PageProductInfoHeader from './PageProductInfoHeader.vue';
import PageProductTradeIn from './PageProductTradeIn.vue';
import PageProductOptions from './PageProductOptions.vue';

export default {
  name: 'PageProductInfo',

  components: {
    BaseLayout,
    PageProductInfoHeader,
    PageProductTradeIn,
    PageProductOptions,
  },

  data() {
    return {
      currentPrice: -1,
    };
  },

  computed: {
    ...mapState('Apple', ['allProducts']),
    product() {
      return this.allProducts[this.productId];
    },
    productId() {
      return this.$route.params.productId;
    },
    productName() {
      return normalizeStr(this.productId);
    },
    productImages() {
      return this.product.images;
    },
    productPrice() {
      if (!this.product) return 0;
      if (this.currentPrice === -1) return this.product.prices[0];
      return this.currentPrice;
    },
    specs() {
      return this.product?.specs;
    },
    colors() {
      if (this.specs && this.specs.colors)
        return this.specs.colors.map((color) => colorPicker(color));
      return [];
    },
    carriers() {
      if (this.specs && this.specs.carriers)
        return this.specs.carriers.map((color) => carrierPicker(color));
      return [];
    },
  },

  methods: {
    setPrice(price) {
      this.currentPrice = price;
    },
  },

  mounted() {
    this.currentPrice = -1;
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.page-product-info {
  @include sizeWH(100%, auto);

  .info {
    @include sizeWH(7.2rem, auto);
    margin-top: 0.05rem;
  }
}
</style>
