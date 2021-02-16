<template>
  <div class="my-bag"></div>
</template>

<script>
export default {
  name: 'MyBag',
};
</script>

<style lang="scss" scoped>
.my-bag {
  @include sizeWH(2.8rem, 3.4rem);
  @include position(absolute, $top: 0.5rem, $left: -1.2rem);
  background: #fff;
  border-radius: 0.2rem;
  border: #d2d2d7 solid 0.01rem;
}
</style>
