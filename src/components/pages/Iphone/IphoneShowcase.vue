<template>
  <div class="iphone-showcase">
    <div class="iphone-12">
      <img :src="$assetsUrl('pages/iphone/ip-12.jpg')" />
      <div class="content">
        <div class="title">iPhone 12 and iPhone 12 mini</div>
        <div class="subtitle">Blast past fast.</div>
        <div class="desc">From $29.12/mo. or $699 before trade‑in</div>
        <div class="buttons">
          <button class="btn-buy" @click="redirect('shop/iphone-12')">
            Buy
          </button>
          <a class="btn-learn" @click="redirect('iphone-12')">Learn more</a>
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
          <button class="btn-buy" @click="redirect('shop/iphone-12-pro')">
            Buy
          </button>
          <a class="btn-learn" @click="redirect('iphone-12-pro')">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IphoneShowcase',

  methods: {
    redirect(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.iphone-12 {
  @include sizeWH(100%, auto);
  position: relative;
  background: #f2f2f2;
  padding-bottom: 0.7rem;

  img {
    @include sizeWH(6rem, auto);
    margin-top: 3.2rem;
    z-index: 0;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);
    margin-top: 0.4rem;

    .title {
      @include textMixin(#000, 0.21rem, bold);
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#000, 0.44rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#1e1e1f, 0.17rem);
      margin-top: 0.14rem;
    }
    .buttons {
      @include flexCenter(column);
      margin-top: 0.1rem;

      .btn-buy {
        @include position(relative, $top: 0.1rem);
        @include textMixin(#fff, 0.15rem);
        @include sizeWH(auto, 0.3rem);
        background: #0171e3;
        border-radius: 0.2rem;
        padding: 0.06rem 0.12rem;
        margin-top: 0.1rem;
      }
      .btn-learn {
        margin-top: 0.2rem;
        font-size: 0.16rem;
      }
    }
  }
}

.iphone-12-pro {
  @include sizeWH(100%, 7.8rem);
  position: relative;
  background: #000;

  img {
    @include sizeWH(10rem, auto);
    @include position(absolute, $top: 3.4rem, $right: 0.7rem);
  }

  .content {
    @include position(absolute, $top: 0.5rem, $left: 50%);
    transform: translate(-50%, 0);

    .title {
      @include textMixin(#fff, 0.21rem, bold);
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#fff, 0.44rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#fff, 0.17rem);
      margin-top: 0.16rem;
    }
    .buttons {
      @include flexCenter(column);
      margin-top: 0.1rem;

      .btn-buy {
        @include position(relative, $top: 0.1rem);
        @include textMixin(#fff, 0.15rem);
        @include sizeWH(auto, 0.3rem);
        background: #0171e3;
        border-radius: 0.2rem;
        padding: 0.06rem 0.1rem;
        margin-top: 0.1rem;
      }
      .btn-learn {
        margin-top: 0.2rem;
        font-size: 0.16rem;
      }
    }
  }
}
</style>
