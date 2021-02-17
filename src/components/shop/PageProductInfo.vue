<template>
  <BaseLayout>
    <div class="page-product-info">
      <PageProductInfoHeader :name="productName" :price="600" />
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import PageProductInfoHeader from './PageProductInfoHeader.vue';
import normalizeStr from './mapping';

export default {
  name: 'PageProductInfo',

  components: {
    BaseLayout,
    PageProductInfoHeader,
  },

  computed: {
    productName() {
      const { productId } = this.$route.params;
      return normalizeStr(productId);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-product-info {
  @include sizeWH(100%, auto);
}
</style>
