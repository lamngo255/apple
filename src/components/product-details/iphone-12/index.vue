<template>
  <BaseLayout>
    <div class="iphone-12-pro">
      <ProductHeader />
      <div class="showcase">
        <ProductShowcase />
        <ProductShowSize />
        <ProductShowShield />
        <ProductShowEdges />
        <ProductShowWater />
        <ProductShow5G />
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
import ProductShowEdges from './ProductShowEdges.vue';
import ProductShowWater from './ProductShowWater.vue';
import ProductShow5G from './ProductShow5G.vue';

export default {
  name: 'Iphone12',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase,
    ProductShowSize,
    ProductShowShield,
    ProductShowEdges,
    ProductShowWater,
    ProductShow5G,
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
