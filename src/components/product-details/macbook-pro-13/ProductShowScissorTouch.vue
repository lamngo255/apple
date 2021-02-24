<template>
  <div class="showcase-scissor-touch">
    <div class="scissor">
      <div class="content">
        <div class="topic">Scissor mechanism</div>
        <div class="desc">
          Every keystroke, thought, or line of code just feels right.
        </div>
        <img class="image" :src="genLink('scissor.png')" alt="" />
      </div>
    </div>

    <div class="touch">
      <div class="content">
        <div class="topic">Touch Bar</div>
        <div class="desc">
          <span>More shortcuts to success.</span>
          <span
            >Enjoy even more shortcuts and features — like your favorite emoji,
            preferred languages, and quicker access to Siri.
          </span>
          <img class="image" :src="genLink('touch.jpg')" />
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
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
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
    background: linear-gradient(150deg, #124d86 0%, #14204e 100%);
    margin-right: 0.2rem;

    .desc {
      @include textMixin(#fff, 0.25rem, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.2rem;
      width: 2.5rem;
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

    .desc {
      @include textMixin(#a2a1a7, 0.16rem, bold, $align: left);
      font-family: 'San Francisco', sans-serif;
      margin-top: 0.24rem;
      width: 4rem;

      span:first-child {
        color: #fff;
      }
    }

    .image {
      @include sizeWH(4.8rem, auto);
      @include position(absolute, $bottom: 0rem, $left: 0);
      border-bottom-left-radius: 0.3rem;
    }
  }
}
</style>
