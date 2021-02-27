<template>
  <BaseLayout theme="dark">
    <div class="imac-pro">
      <ProductHeader />
      <div class="showcase">
        <ProductShowcase />
        <ProductShowProcessor />
        <ProductShowSimulation />
        <ProductShowCPU />
        <ProductShowGPU />
        <ProductShowML />
        <ProductShowBigSur />
        <ProductShowSpeedApp />
        <ProductShowBattery />
        <ProductShowExtra />
        <ProductShowRetina />
        <ProductShowDisplay />
        <ProductShowDensityTone />
        <ProductShowCameraMics />
        <ProductShowCameraArray />
        <ProductShowMagicKeyboard />
        <ProductShowScissorTouch />
        <ProductShowTouchId />
        <ProductShowConnectivity />
        <ProductShowConnectivityExtra />
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
import ProductShowCPU from './ProductShowCPU.vue';
import ProductShowGPU from './ProductShowGPU.vue';
import ProductShowBattery from './ProductShowBattery.vue';
import ProductShowML from './ProductShowML.vue';
import ProductShowBigSur from './ProductShowBigSur.vue';
import ProductShowSpeedApp from './ProductShowSpeedApp.vue';
import ProductShowExtra from './ProductShowExtra.vue';
import ProductShowRetina from './ProductShowRetina.vue';
import ProductShowDisplay from './ProductShowDisplay.vue';
import ProductShowDensityTone from './ProductShowDensityTone.vue';
import ProductShowCameraMics from './ProductShowCameraMics.vue';
import ProductShowCameraArray from './ProductShowCameraArray.vue';
import ProductShowMagicKeyboard from './ProductShowMagicKeyboard.vue';
import ProductShowScissorTouch from './ProductShowScissorTouch.vue';
import ProductShowTouchId from './ProductShowTouchId.vue';
import ProductShowConnectivity from './ProductShowConnectivity.vue';
import ProductShowConnectivityExtra from './ProductShowConnectivityExtra.vue';

export default {
  name: 'MacbookPro13',

  components: {
    BaseLayout,
    ProductHeader,
    ProductShowcase,
    ProductShowProcessor,
    ProductShowSimulation,
    ProductShowCPU,
    ProductShowGPU,
    ProductShowBattery,
    ProductShowML,
    ProductShowBigSur,
    ProductShowSpeedApp,
    ProductShowExtra,
    ProductShowRetina,
    ProductShowDisplay,
    ProductShowDensityTone,
    ProductShowCameraMics,
    ProductShowCameraArray,
    ProductShowMagicKeyboard,
    ProductShowScissorTouch,
    ProductShowTouchId,
    ProductShowConnectivity,
    ProductShowConnectivityExtra,
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
