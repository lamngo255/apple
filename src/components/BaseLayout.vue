<template>
  <div class="base-layout">
    <Header />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'BaseLayout',

  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.base-layout {
  @include flexCenter(column);
  @include sizeWH(100%, auto);
  position: relative;
}
</style>
