<template>
  <div class="iphone-showcase">
    <div class="iphone-12">
      <img :src="$assetsUrl('pages/iphone/ip-12.jpg')" />
      <div class="content">
        <div class="title">iPhone 12 and iPhone 12 mini</div>
        <div class="subtitle">Blast past fast.</div>
        <div class="desc">From $29.12/mo. or $699 before trade‑in</div>
        <div class="buttons">
          <button class="btn-buy" @click="$router.push('shop/iphone-12')">
            Buy
          </button>
          <a class="btn-learn">Learn more</a>
        </div>
      </div>
    </div>

    <div class="iphone-12-pro">
      <img :src="$assetsUrl('pages/iphone/ip-12-pro.jpg')" />
      <div class="content">
        <div class="title">iPhone 12 Pro and iPhone 12 Pro Max</div>
        <div class="subtitle">It's a leap year.</div>
        <div class="desc">From $41.62/mo. or $999 before trade‑in2</div>
        <div class="buttons">
          <button class="btn-buy" @click="$router.push('shop/iphone-12-pro')">
            Buy
          </button>
          <a class="btn-learn">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IphoneShowcase',
};
</script>

<style lang="scss" scoped>
.iphone-12 {
  @include sizeWH(100%, 11.4rem);
  position: relative;
  background: #f2f2f2;

  img {
    @include sizeWH(8rem, 7rem);
    margin-top: 3.7rem;
    z-index: 0;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);
    margin-top: 0.4rem;

    .title {
      @include textMixin(#000, 0.27rem, bold);
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#000, 0.54rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#1e1e1f, 0.21rem);
      margin-top: 0.14rem;
    }
    .buttons {
      @include flexCenter(column);
      margin-top: 0.1rem;

      .btn-buy {
        @include position(relative, $top: 0.1rem);
        @include textMixin(#fff, 0.2rem);
        @include sizeWH(auto, 0.35rem);
        background: #0171e3;
        border-radius: 0.2rem;
        padding: 0.06rem 0.2rem;
        margin-top: 0.1rem;
      }
      .btn-learn {
        margin-top: 0.3rem;
        font-size: 0.2rem;
      }
    }
  }
}

.iphone-12-pro {
  @include sizeWH(100%, 10rem);
  position: relative;
  background: #000;

  img {
    @include sizeWH(12rem, 5rem);
    @include position(absolute, $top: 4rem, $right: 0);
  }

  .content {
    @include position(absolute, $top: 0.5rem, $left: 50%);
    transform: translate(-50%, 0);

    .title {
      @include textMixin(#fff, 0.27rem, bold);
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#fff, 0.54rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#fff, 0.24rem);
      margin-top: 0.16rem;
    }
    .buttons {
      @include flexCenter(column);
      margin-top: 0.1rem;

      .btn-buy {
        @include position(relative, $top: 0.1rem);
        @include textMixin(#fff, 0.2rem);
        @include sizeWH(auto, 0.35rem);
        background: #0171e3;
        border-radius: 0.2rem;
        padding: 0.06rem 0.2rem;
        margin-top: 0.1rem;
      }
      .btn-learn {
        margin-top: 0.3rem;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
