<template>
  <div class="product-show-strength">
    <div class="container">
      <div class="title">Strength in numbers.</div>
      <div class="desc">
        iMac Pro is optimized for performance across the board. Here’s how it
        compares to the quad-core 27-inch iMac with Radeon Pro 580 graphics.
      </div>

      <div class="strengths">
        <img class="s1" :src="genLink('autodesk.png')" />
        <img class="s2" :src="genLink('maxon.png')" />
        <img class="s3" :src="genLink('build-time.png')" />
        <img class="s4" :src="genLink('osiri.png')" />
        <img class="s5" :src="genLink('wolfram.png')" />
        <img class="s6" :src="genLink('photoshop.png')" />
        <img class="s7" :src="genLink('pixelmator.png')" />
        <img class="s8" :src="genLink('logic-pro-x.png')" />
        <img class="s9" :src="genLink('final-cut.png')" />
        <img class="s10" :src="genLink('compressor.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowStrength',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac-pro/strengths/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-strength {
  background: #222222;
  padding-top: 0.8rem;

  .container {
    @include sizeWH(60%, auto);
    margin: 0 auto;
    text-align: left;
    padding-bottom: 0.5rem;

    .title {
      @include textMixin(#fff, 0.3rem, bold);
      border-bottom: #515151 solid 0.015rem;
      padding-bottom: 0.2rem;
      margin-bottom: 0.2rem;
    }
    .desc {
      @include textMixin(#fff, 0.17rem, bold);
      @include flexCenter(row);
      line-height: 0.26rem;
      width: 80%;
    }
  }
}

.strengths {
  display: flex;
  flex-flow: column wrap;
  margin-top: 0.5rem;
  margin-left: -0.1rem;

  .s1 {
    @include sizeWH(7rem, auto);
  }
  .s2 {
    @include sizeWH(7rem, auto);
    margin-left: -0.05rem;
    margin-top: 0.5rem;
  }
  .s3,
  .s4,
  .s5,
  .s6 {
    @include sizeWH(7.54rem, auto);
    margin-left: -0.07rem;
    margin-top: 0.5rem;
  }

  .s7 {
    @include sizeWH(7.54rem, auto);
    margin-left: -0.14rem;
    margin-top: 0.5rem;
  }
  .s8 {
    @include sizeWH(7.54rem, auto);
    margin-left: -0.25rem;
    margin-top: 0.5rem;
  }
  .s9 {
    @include sizeWH(7.54rem, auto);
    margin-left: -0.2rem;
    margin-top: 0.5rem;
  }
  .s10 {
    @include sizeWH(7.54rem, auto);
    margin-left: -0.2rem;
    margin-top: 0.5rem;
  }
}
</style>
