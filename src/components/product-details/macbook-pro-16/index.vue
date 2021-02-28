<template>
  <BaseLayout theme="dark">
    <div class="macbook-pro-16">
      <ProductHeader />
      <div class="showcase">
        <ProductShowcase />
        <ProductShowRetina />
        <ProductShowLED />
        <ProductShowProcessorMemory />
        <ProductShowNanoGlass />
        <ProductShowGraphics />
        <ProductShowStorage />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import ProductHeader from './ProductHeader.vue';
import ProductShowcase from './ProductShowcase.vue';
import ProductShowRetina from './ProductShowRetina.vue';
import ProductShowLED from './ProductShowLED.vue';
import ProductShowProcessorMemory from './ProductShowProcessorMemory.vue';
import ProductShowNanoGlass from './ProductShowNanoGlass.vue';
import ProductShowGraphics from './ProductShowGraphics.vue';
import ProductShowStorage from './ProductShowStorage.vue';

export default {
  name: 'MacbookPro16',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase,
    ProductShowRetina,
    ProductShowLED,
    ProductShowProcessorMemory,
    ProductShowNanoGlass,
    ProductShowGraphics,
    ProductShowStorage,
  },
};
</script>

<style lang="scss" scoped>
.macbook-pro-16 {
  width: 100%;

  .showcase {
    @include sizeWH(100%, auto);
    background: #fff;
    padding-bottom: 0.7rem;
  }
}
</style>
