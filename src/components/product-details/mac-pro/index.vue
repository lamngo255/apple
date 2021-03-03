<template>
  <BaseLayout theme="dark">
    <div class="mac-pro">
      <ProductHeader />
      <div class="showcase">
        <ProductShowcase />
        <ProductShowDesign />
        <ProductShowProcessorMemory />
        <ProductShowGraphics />
        <ProductShowVideo />
        <ProductShowSecurity />
        <ProductShowConnections />
        <ProductShowRackMount />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import ProductHeader from './ProductHeader.vue';
import ProductShowcase from './ProductShowcase.vue';
import ProductShowDesign from './ProductShowDesign.vue';
import ProductShowProcessorMemory from './ProductShowProcessorMemory.vue';
import ProductShowGraphics from './ProductShowGraphics.vue';
import ProductShowVideo from './ProductShowVideo.vue';
import ProductShowSecurity from './ProductShowSecurity.vue';
import ProductShowConnections from './ProductShowConnections.vue';
import ProductShowRackMount from './ProductShowRackMount.vue';

export default {
  name: 'MacPro',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase,
    ProductShowDesign,
    ProductShowProcessorMemory,
    ProductShowGraphics,
    ProductShowVideo,
    ProductShowSecurity,
    ProductShowConnections,
    ProductShowRackMount,
    // ProductShowStorage,
    // ProductShowCameraSpeakers,
    // ProductShowSecurityChip,
    // ProductShowConnectivity,
    // ProductShowAccessories,
    // ProductShowBigSur,
  },
};
</script>

<style lang="scss" scoped>
.mac-pro {
  width: 100%;

  .showcase {
    @include sizeWH(100%, auto);
    background: #fff;
    padding: 0 0.7rem 0.7rem;
  }
}
</style>
