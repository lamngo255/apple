<template>
  <BaseLayout theme="dark">
    <div class="iphone-12-pro">
      <ProductHeader />
      <ProductShowcase />
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import ProductHeader from './ProductHeader.vue';
import ProductShowcase from './ProductShowcase.vue';

export default {
  name: 'Iphone12Pro',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.iphone-12-pro {
  width: 100%;
}
</style>
