<template>
  <BaseLayout theme="dark">
    <div class="imac-pro">
      <ProductHeader />
      <div class="showcase">
        <ProductShowcase />
        <ProductShowProcessor />
        <ProductShowSimulation />
        <ProductShowGraphics />
        <ProductShow3DCreation />
        <ProductShowStrength />
        <ProductShowMemory />
        <ProductShowVideoPerf />
        <ProductShowIO />
        <ProductShowBigScreen />
        <ProductShowRetina />
        <ProductShowTrueColor />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import ProductHeader from './ProductHeader.vue';
import ProductShowcase from './ProductShowcase.vue';
import ProductShowProcessor from './ProductShowProcessor.vue';
import ProductShowSimulation from './ProductShowSimulation.vue';
import ProductShowGraphics from './ProductShowGraphics.vue';
import ProductShow3DCreation from './ProductShow3DCreation.vue';
import ProductShowStrength from './ProductShowStrength.vue';
import ProductShowMemory from './ProductShowMemory.vue';
import ProductShowVideoPerf from './ProductShowVideoPerf.vue';
import ProductShowIO from './ProductShowIO.vue';
import ProductShowBigScreen from './ProductShowBigScreen.vue';
import ProductShowRetina from './ProductShowRetina.vue';
import ProductShowTrueColor from './ProductShowTrueColor.vue';

export default {
  name: 'MacbookPro13',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase,
    ProductShowProcessor,
    ProductShowSimulation,
    ProductShowGraphics,
    ProductShow3DCreation,
    ProductShowStrength,
    ProductShowMemory,
    ProductShowVideoPerf,
    ProductShowIO,
    ProductShowBigScreen,
    ProductShowRetina,
    ProductShowTrueColor,
  },
};
</script>

<style lang="scss" scoped>
.imac-pro {
  width: 100%;

  .showcase {
    @include sizeWH(100%, auto);
    background: #1a1a1a;
    padding-bottom: 0.7rem;
  }
}
</style>
