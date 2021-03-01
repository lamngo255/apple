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
        <ProductShowStorage />
        <ProductShowBattery />
        <ProductShowSecurity />
        <ProductShowThunderbolt />
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
import ProductShowStorage from './ProductShowStorage.vue';
import ProductShowBattery from './ProductShowBattery.vue';
import ProductShowSecurity from './ProductShowSecurity.vue';
import ProductShowThunderbolt from './ProductShowThunderbolt.vue';

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
    ProductShowStorage,
    ProductShowBattery,
    ProductShowSecurity,
    ProductShowThunderbolt,
  },
};
</script>

<style lang="scss" scoped>
.macbook-pro-16 {
  width: 100%;

  .showcase {
    @include sizeWH(100%, auto);
    background: #fff;
  }
}
</style>
