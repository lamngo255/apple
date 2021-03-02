<template>
  <div class="product-show-edges">
    <div class="container">
      <img class="edges" :src="genLink('edges.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowEdges',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-edges {
  @include sizeWH(100%, auto);
  padding: 0 0.3rem;

  .container {
    @include sizeWH(100%, 5rem);
    padding-top: 0.5rem;
    margin-top: 0.4rem;
    position: relative;
    background: #fc9e9e;

    .edges {
      @include position(absolute, $bottom: 0, $left: 50%);
      transform: translate(-50%, 0);
    }
  }
}
</style>
