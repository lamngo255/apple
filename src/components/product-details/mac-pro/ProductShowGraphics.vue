<template>
  <div class="product-show-graphics">
    <div class="wrapper">
      <div class="title">GRAPHICS</div>
      <div class="desc">
        <span>Extreme performance. By design.</span>
        <span>
          For many pros, a high-performance graphics architecture is critical to
          their workflows. Especially for tasks like animating 3D film assets,
          compositing 8K scenes, and building lifelike gaming environments. To
          give them the highest possible performance and take graphics
          capabilities to a new level, something groundbreaking was required.
          Introducing the Mac Pro Expansion Module, or MPX Module.
        </span>
      </div>
    </div>

    <div class="container">
      <img class="graphics" :src="genLink('graphics.png')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowGraphics',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/mac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-graphics {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1.2rem;

  .wrapper {
    @include sizeWH(100%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.14rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.3rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.37rem;
      margin-top: 0.2rem;
      width: 8rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }
  }

  .container {
    @include sizeWH(100%, auto);
    background: #f2f2f2;
    margin-top: 0.6rem;
    padding-top: 1rem;

    .graphics {
      @include sizeWH(100%, auto);
    }
  }
}
</style>
