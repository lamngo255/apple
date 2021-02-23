<template>
  <div class="showcase-scissor-touch">
    <div class="scissor">
      <div class="content">
        <div class="topic">Scissor mechanism</div>
        <div class="desc">
          The refined scissor mechanism delivers the best typing experience ever
          on a Mac notebook.
        </div>
        <img class="image" :src="genLink('scissor.png')" alt="" />
      </div>
    </div>

    <div class="touch">
      <img class="overlay" :src="genLink('touch.jpg')" />
      <div class="content">
        <div class="topic">Force Touch trackpad</div>
        <div class="desc">
          Precise control with plenty of room to swipe, pinch, or zoom.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowScissorTouch',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-scissor-touch {
  @include sizeWH(80%, 5.2rem);
  @include flexCenter(row);

  margin: -1.1rem auto 0;
  text-align: left;
  position: relative;

  // common
  .content {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    z-index: 1;
    padding: 0.3rem;

    .topic {
      @include textMixin(#fff, 0.18rem, bold);
    }
  }

  .scissor {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: linear-gradient(215deg, #c52d47 0%, #a5325c 30%, #8b366d 100%);
    margin-right: 0.2rem;

    .desc {
      @include textMixin(#fff, 0.24rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.2rem;
      width: 4rem;
    }

    .image {
      @include sizeWH(2.5rem, auto);
      @include position(absolute, $bottom: 0.8rem, $left: 50%);
      transform: translate(-50%, 0);
    }
  }

  .touch {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: #151516;

    .overlay {
      @include sizeWH(100%, 100%);
      @include position(absolute, 0, 0, 0, 0);
      border-radius: 0.3rem;
    }

    .desc {
      @include textMixin(#fff, 0.39rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.24rem;
      width: 4rem;
    }

    .image {
      @include sizeWH(3.8rem, auto);
      @include position(absolute, $bottom: 0.24rem, $left: 50%);
      transform: translate(-50%, 0);
    }
  }
}
</style>
