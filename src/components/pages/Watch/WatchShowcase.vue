<template>
  <div class="watch-showcase">
    <div class="section-1">
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
        <div class="red-shape" />
        <div class="green-shape" />
        <img
          class="front"
          :src="$assetsUrl('pages/watch/black-unity-front.jpg')"
        />
      </div>
    </div>

    <div class="section-2">
      <div class="container">
        <div class="left">
          <div class="title">Apple Watch Series 6 Black Unity</div>
          <div class="price">From $399</div>
          <button class="btn-buy">Buy</button>
          <img class="photo" :src="genLink('unity-black-left.jpg')" />
        </div>
        <div class="right">
          <div class="title">Black Unity Sport Band</div>
          <div class="price">$49</div>
          <button class="btn-buy">Buy</button>
          <img class="photo" :src="genLink('unity-black-right.jpg')" />
        </div>
      </div>
      <div class="watch-face">
        <img class="photo" :src="genLink('watch-face.jpg')" />
        <div class="desc">
          Open this page on your iPhone to download the watch face.
        </div>
      </div>
      <div class="black-shape" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`pages/watch/tiles/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.watch-showcase {
  .section-1 {
    @include sizeWH(100%, 8.5rem);
    @include flexCenter(row);
    background: #000;
    position: relative;

    .left {
      @include flexCenter(column);
      @include position(absolute, $top: 2.2rem);
      margin-right: 6.5rem;

      .logo {
        @include imageCDN('pages/watch/logo.png', 1.21rem, 0.41rem);
      }
      .title {
        @include textMixin(#fff, 0.6rem, bold);
        margin-top: 0.1rem;
      }
      .desc {
        @include textMixin(#fff, 0.18rem);
        width: 4.5rem;
        margin-top: 0.4rem;
      }
      .btn-find {
        background: none;
        margin-top: 0.5rem;
        margin-left: -2rem;
        position: relative;

        span {
          @include position(absolute, $top: 0, $left: 0);
          @include textMixin(#fff, 0.17rem);
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
        @include imageCDN('pages/watch/black-unity.jpg', 5.88rem, 7.68rem);
        @include position(absolute, $top: 0.2rem, $right: 0);
      }
      .front {
        @include sizeWH(2.3rem, 4rem);
        @include position(absolute, $top: 2rem, $right: 3.1rem);
        border-radius: 0.8rem;
        z-index: 2;
      }
    }

    .red-shape {
      @include imageCDN('pages/watch/shape-red.svg', 300%, 1.8rem);
      @include position(absolute, $top: 0, $right: -13rem);
    }
    .green-shape {
      @include imageCDN('pages/watch/shape-green.svg', 300%, 2rem);
      @include position(absolute, $bottom: 0.1rem, $left: -15rem);
      z-index: 1;
    }
  }

  .section-2 {
    @include sizeWH(100%, 7rem);
    position: relative;
    background: #000;
    margin-bottom: 1rem;

    .container {
      @include sizeWH(70%, auto);
      @include flexCenter(row);
      margin: 0 auto;

      .left,
      .right {
        @include sizeWH(49%, 4rem);
        background: #111;
        margin-right: 0.1rem;
        text-align: left;
        padding: 0.25rem 0 0 0.2rem;
        position: relative;

        .title {
          @include textMixin(#fff, 0.22rem, bold);
        }
        .price {
          @include textMixin(#fff, 0.15rem, bold);
          margin-top: 0.05rem;
        }
        .btn-buy {
          @include textMixin(#fff, 0.14rem);
          padding: 0.02rem 0.12rem;
          background: #2d71e3;
          margin-top: 0.2rem;
          border-radius: 0.2rem;
        }
      }

      .left {
        .photo {
          @include position(absolute, $bottom: 0, $left: 50%);
          @include sizeWH(70%, auto);
          transform: translate(-50%, 0);
        }
      }

      .right {
        .photo {
          @include position(absolute, $bottom: 0, $right: 0);
          @include sizeWH(80%, auto);
        }
      }
    }

    .watch-face {
      @include sizeWH(69.2%, 2rem);
      @include flexCenter(row);
      @include position(relative, $left: -0.05rem);
      background: #111;
      margin: 0.1rem auto;

      .photo {
        @include sizeWH(1.2rem, 1.4rem);
      }

      .desc {
        @include textMixin(#fff, 0.19rem, bold, $align: left);
        width: 4rem;
        margin-left: 0.24rem;
      }
    }
  }

  .black-shape {
    @include imageCDN('pages/watch/tiles/black-shape.svg', 300%, 2rem);
    @include position(absolute, $bottom: -1.2rem, $left: -4rem);
  }
}
</style>
