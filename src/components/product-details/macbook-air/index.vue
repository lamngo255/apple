<template>
  <BaseLayout theme="dark">
    <div class="macbook-air">
      <ProductHeader />
      <div class="showcase">
        <ProductShowcase1 />
        <ProductShowcase2 />
        <ProductShowcaseCPU />
        <ProductShowcaseGPU />
        <ProductShowcaseBattery />
        <ProductShowcaseML />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import ProductHeader from './ProductHeader.vue';
import ProductShowcase1 from './ProductShowcase1.vue';
import ProductShowcase2 from './ProductShowcase2.vue';
import ProductShowcaseCPU from './ProductShowcaseCPU.vue';
import ProductShowcaseGPU from './ProductShowcaseGPU.vue';
import ProductShowcaseBattery from './ProductShowcaseBattery.vue';
import ProductShowcaseML from './ProductShowcaseML.vue';

export default {
  name: 'MacbookAir',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase1,
    ProductShowcase2,
    ProductShowcaseCPU,
    ProductShowcaseGPU,
    ProductShowcaseBattery,
    ProductShowcaseML,
  },
};
</script>

<style lang="scss" scoped>
.macbook-air {
  width: 100%;

  .showcase {
    @include sizeWH(100%, auto);
    background: #000;
    padding-bottom: 0.5rem;
  }
}
</style>
