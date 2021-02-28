<template>
  <div class="product-show-graphics">
    <div class="wrapper">
      <div class="title">Graphics</div>
      <div class="desc">
        <span>Next-level. At any level.</span>
        <span>
          The graphics on iMac make everything a sight to behold. The 21.5-inch
          model comes with AMD Radeon Pro 500X series graphics, and can be
          configured with an AMD Radeon Pro Vega 20 GPU to power through tasks
          like 3D rendering or complex video effects with ease. And the 27-inch
          model brings AMD Radeon Pro 5000 series graphics with up to 16GB of
          GDDR6 memory for graphics-intensive workflows like editing UHD video
          or developing lifelike game environments.
        </span>
      </div>
      <div class="images">
        <img class="graphics" :src="genLink('graphics.jpg')" />
        <img class="info" :src="genLink('graphics-info.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowGraphics',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-graphics {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1rem;

  .wrapper {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.2rem, bold);
      font-family: 'San Francisco Bold', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.31rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.37rem;
      margin-top: 0.1rem;
      width: 8rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }
    .images {
      margin-top: 0.5rem;

      .graphics {
        @include sizeWH(8.4rem, auto);
        margin-left: -0.5rem;
      }
      .info {
        @include sizeWH(7.7rem, auto);
        margin-top: 0.1rem;
      }
    }
  }
}
</style>
