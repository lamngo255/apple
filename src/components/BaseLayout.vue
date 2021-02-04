<template>
  <div class="base-layout">
    <BaseHeader />
    <slot></slot>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from './BaseHeader.vue';
import BaseFooter from './BaseFooter.vue';

export default {
  name: 'BaseLayout',

  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>

<style lang="scss" scoped>
.base-layout {
  @include flexCenter(column);
  @include sizeWH(100%, 100vh);
  justify-content: flex-start;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
