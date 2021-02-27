<template>
  <div class="product-show2">
    <div class="wrapper">
      <div class="title">Retina Display</div>
      <div class="desc">
        <span>Draws you in. Blows you away.</span>
        <span>
          Everything looks better on a Retina display, with its one billion
          colors and 500 nits of brightness. Photos and graphics leap off the
          screen. Text is supersharp. And for the first time, the 27‑inch iMac
          features True Tone technology for a more natural viewing experience
          and a nano-texture glass option to reduce glare to the barest minimum.
        </span>
      </div>
      <div class="images">
        <img class="display" :src="genLink('display-retina.png')" />
        <img class="info" :src="genLink('display-retina-info.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShow2',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show2 {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .wrapper {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.2rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.32rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin-top: 0.1rem;
      letter-spacing: 0.005rem;
      width: 7rem;

      span:first-child {
        color: #000;
      }
    }
    .images {
      margin-top: 0.5rem;

      .display {
        @include sizeWH(8.4rem, auto);
        margin-left: -0.5rem;
      }
      .info {
        @include sizeWH(8rem, auto);
      }
    }
  }
}
</style>
