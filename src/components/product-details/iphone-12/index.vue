<template>
  <BaseLayout>
    <div class="iphone-12-pro">
      <ProductHeader />
      <div class="showcase">
        <ProductShowcase />
        <ProductShowSize />
        <ProductShowShield />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import ProductHeader from './ProductHeader.vue';
import ProductShowcase from './ProductShowcase.vue';
import ProductShowSize from './ProductShowSize.vue';
import ProductShowShield from './ProductShowShield.vue';

export default {
  name: 'Iphone12',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase,
    ProductShowSize,
    ProductShowShield,
  },
};
</script>

<style lang="scss" scoped>
.iphone-12-pro {
  width: 100%;

  .showcase {
    @include sizeWH(100%, auto);
    background: #fff;
  }
}
</style>
