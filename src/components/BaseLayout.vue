<template>
  <div class="base-layout">
    <BaseHeader />
    <slot></slot>
    <BaseFooter :theme="theme" />
  </div>
</template>

<script>
import BaseHeader from './BaseHeader.vue';
import BaseFooter from './BaseFooter.vue';

export default {
  name: 'BaseLayout',

  props: {
    theme: { type: String, default: 'light' },
  },

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
}
</style>
