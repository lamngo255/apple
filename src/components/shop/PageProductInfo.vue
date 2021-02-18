<template>
  <BaseLayout>
    <div class="page-product-info">
      <PageProductInfoHeader :name="productName" :price="productPrice" />
      <PageProductOptions
        v-if="product"
        v-bind="product"
        :colors="colors"
        :productPrice="productPrice"
        :productImages="productImages"
        :productName="productName"
        @setPrice="setPrice"
      />
    </div>
  </BaseLayout>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BaseLayout from '@/components/BaseLayout.vue';
import PageProductInfoHeader from './PageProductInfoHeader.vue';
import PageProductOptions from './PageProductOptions.vue';
import { normalizeStr, colorPicker } from './mapping';

export default {
  name: 'PageProductInfo',

  components: {
    BaseLayout,
    PageProductInfoHeader,
    PageProductOptions,
  },

  data() {
    return {
      currentPrice: -1,
    };
  },

  computed: {
    ...mapState('Product', ['product']),
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
  },

  methods: {
    ...mapActions('Product', ['getProduct']),

    setPrice(price) {
      this.currentPrice = price;
    },
  },

  mounted() {
    this.currentPrice = -1;
  },

  async created() {
    this.$nextTick(async () => {
      await this.getProduct({ id: this.productId });
    });
  },
};
</script>

<style lang="scss" scoped>
.page-product-info {
  @include sizeWH(100%, auto);
}
</style>
