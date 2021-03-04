<template>
  <BaseLayout theme="dark">
    <div class="imac">
      <ProductHeader />
      <div class="showcase">
        <ProductShow1 />
        <ProductShow2 />
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
import ProductShow2 from './ProductShow2.vue';
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
    ProductShow2,
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

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.imac {
  width: 100%;

  .showcase {
    @include sizeWH(100%, auto);
    background: #fff;
    padding-bottom: 0.7rem;
  }
}
</style>
