<template>
  <BaseLayout theme="dark">
    <div class="macbook-pro-13">
      <ProductHeader />
      <div class="showcase">
        <ProductShow1 />
        <ProductShowRetina />
        <ProductShowNanoGlass />
        <ProductShowProcessorMemory />
        <ProductShowGraphics />
        <ProductShowStorage />
        <ProductShowCameraSpeakers />
        <ProductShowSecurityChip />
        <ProductShowConnectivity />
        <ProductShowAccessories />
        <ProductShowBigSur />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import ProductHeader from './ProductHeader.vue';
import ProductShow1 from './ProductShow1.vue';
import ProductShowRetina from './ProductShowRetina.vue';
import ProductShowNanoGlass from './ProductShowNanoGlass.vue';
import ProductShowProcessorMemory from './ProductShowProcessorMemory.vue';
import ProductShowGraphics from './ProductShowGraphics.vue';
import ProductShowStorage from './ProductShowStorage.vue';
import ProductShowCameraSpeakers from './ProductShowCameraSpeakers.vue';
import ProductShowSecurityChip from './ProductShowSecurityChip.vue';
import ProductShowConnectivity from './ProductShowConnectivity.vue';
import ProductShowAccessories from './ProductShowAccessories.vue';
import ProductShowBigSur from './ProductShowBigSur.vue';

export default {
  name: 'iMac',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShow1,
    ProductShowRetina,
    ProductShowNanoGlass,
    ProductShowProcessorMemory,
    ProductShowGraphics,
    ProductShowStorage,
    ProductShowCameraSpeakers,
    ProductShowSecurityChip,
    ProductShowConnectivity,
    ProductShowAccessories,
    ProductShowBigSur,
  },
};
</script>

<style lang="scss" scoped>
.macbook-pro-13 {
  width: 100%;

  .showcase {
    @include sizeWH(100%, auto);
    background: #fff;
    padding-bottom: 0.7rem;
  }
}
</style>
