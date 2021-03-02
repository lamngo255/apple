<template>
  <div class="product-show-camera">
    <div class="container">
      <div class="title">
        <div>Dual‑camera system</div>
        <div>Welcome to the dark side.</div>
      </div>
      <img class="camera" :src="genLink('camera.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowCamera',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-camera {
  @include sizeWH(100%, auto);

  .container {
    @include sizeWH(100%, 6.4rem);
    padding-top: 0.5rem;
    margin-top: 0.4rem;
    position: relative;
    background: #f2f2f2;

    .title {
      @include textMixin(#000, 0.6rem, bold, $align: left);
      @include position(absolute, $top: 0.8rem, $left: 3rem);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0 auto;
      width: 3rem;

      div:first-child {
        color: #86868b;
      }
    }

    .camera {
      @include position(absolute, $bottom: 0.5rem, $right: -1rem);
      @include sizeWH(7rem, auto);
    }
  }
}
</style>
