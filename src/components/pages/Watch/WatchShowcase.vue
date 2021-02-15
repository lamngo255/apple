<template>
  <div class="watch-showcase">
    <div class="section-1">
      <div class="red-shape" />
      <div class="green-shape" />
      <div class="left">
        <div class="logo" />
        <div class="title">Black Unity</div>
        <div class="desc">
          Inspired by the colors of the Pan‑African flag, the Black Unity
          Collection celebrates a symbol that unites people across the African
          Diaspora. Apple supports organizations dedicated to advancing racial
          equity and justice.
        </div>
        <button class="btn-find">
          <span>Find out more</span>
        </button>
      </div>
      <div class="right">
        <div class="black-unity"></div>
        <img
          class="front"
          :src="$assetsUrl('pages/watch/black-unity-front.jpg')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchShowcase',
};
</script>

<style lang="scss" scoped>
.watch-showcase {
  .section-1 {
    @include sizeWH(100%, 10rem);
    @include flexCenter(row);
    background: #000;
    position: relative;

    .red-shape {
      @include imageCDN('pages/watch/shape-red.svg', 300%, 1.8rem);
      @include position(absolute, $top: 0, $left: -15rem);
      z-index: 1;
    }
    .green-shape {
      @include imageCDN('pages/watch/shape-green.svg', 300%, 2rem);
      @include position(absolute, $bottom: 0.1rem, $left: -16rem);
      z-index: 1;
    }

    .left {
      @include flexCenter(column);
      @include position(absolute, $top: 2.2rem);
      margin-right: 6.5rem;

      .logo {
        @include imageCDN('pages/watch/logo.png', 1.51rem, 0.71rem);
      }
      .title {
        @include textMixin(#fff, 0.7rem, bold);
        margin-top: 0.1rem;
      }
      .desc {
        @include textMixin(#fff, 0.23rem);
        width: 4.7rem;
        margin-top: 0.4rem;
      }
      .btn-find {
        background: none;
        margin-top: 0.5rem;
        margin-left: -2rem;
        position: relative;

        span {
          @include position(absolute, $top: 0, $left: 0);
          @include textMixin(#fff, 0.2rem);
          padding-top: 0.08rem;
          z-index: 1;
          width: 2rem;
        }

        &::before {
          content: '';
          background: #000;
          border-radius: 0.2rem;
          @include position(absolute, $top: 0.02rem, $left: 0.02rem);
          @include sizeWH(1.96rem, 0.36rem);
          z-index: 1;
        }

        &::after {
          content: '';
          background: linear-gradient(185deg, #f0232c 45%, #20783c 55%);
          border-radius: 0.2rem;
          @include position(absolute, $top: 0, $left: 0);
          @include sizeWH(2rem, 0.4rem);
        }
      }
    }

    .right {
      .black-unity {
        @include imageCDN('pages/watch/black-unity.jpg', 6.88rem, 9.68rem);
        @include position(absolute, $top: 0, $right: 0);
      }
      .front {
        @include sizeWH(2.9rem, 5rem);
        @include position(absolute, $top: 2.3rem, $right: 3.7rem);
        border-radius: 0.8rem;
        z-index: 2;
      }
    }
  }
}
</style>
