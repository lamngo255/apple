<template>
  <BaseLayout theme="dark">
    <div class="macbook-pro-16">
      <ProductHeader />
      <div class="showcase">
        <ProductShowcase />
        <ProductShowRetina />
        <ProductShowLED />
        <ProductShowProcessorMemory />
        <ProductShowGraphics />
        <ProductShowThermal />
        <ProductShowGraphics />
        <ProductShowKeyboard />
        <ProductShowAudio />
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
import ProductShowThermal from './ProductShowThermal.vue';
import ProductShowGraphics from './ProductShowGraphics.vue';
import ProductShowKeyboard from './ProductShowKeyboard.vue';
import ProductShowAudio from './ProductShowAudio.vue';

export default {
  name: 'MacbookPro16',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase,
    ProductShowRetina,
    ProductShowLED,
    ProductShowProcessorMemory,
    ProductShowGraphics,
    ProductShowThermal,
    ProductShowKeyboard,
    ProductShowAudio,
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
