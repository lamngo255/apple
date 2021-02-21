<template>
  <div class="showcase">
    <div class="m1" />
    <div class="welcome">
      <div>Welcome to the</div>
      <div>future of Mac.</div>
    </div>
    <button class="btn-learn-m1">Learn more about M1</button>
    <div class="mac macbook-air">
      <div class="info">
        <div class="new">New</div>
        <div class="name">MacBook Air</div>
        <div class="desc">Power. It’s in the Air.</div>
        <div class="price">
          <div>From $999</div>
          <div>or $83.25/mo. for 12 mo.**</div>
        </div>
        <button class="btn-buy">Buy</button>
        <button class="btn-learn">Learn more</button>
      </div>
      <img :src="genMacImage('macbook-air')" alt="" />
    </div>

    <div class="mac macbook-pro">
      <img :src="genMacImage('macbook-pro-13')" alt="" />
      <div class="info">
        <div class="new">New</div>
        <div class="name">MacBook Pro</div>
        <div class="desc">All systems Pro.</div>
        <div class="price">
          <div>From $1299 or</div>
          <div>$108.25/mo. for 12 mo.**</div>
        </div>
        <button class="btn-buy">Buy</button>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>

    <div class="mac mac-mini">
      <div class="info">
        <div class="new">New</div>
        <div class="name">Mac Mini</div>
        <div class="desc">New guts. More glory.</div>
        <div class="price">
          <div>From $699 or</div>
          <div>$58.25/mo. for 12 mo.**</div>
        </div>
        <button class="btn-buy">Buy</button>
        <button class="btn-learn">Learn more</button>
      </div>
      <img :src="genMacImage('mac-mini')" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacShowcase',

  methods: {
    genMacImage(path) {
      return this.$assetsUrl(`pages/mac/${path}.jpg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase {
  background: #000;
  padding-top: 0.4rem;
  padding-bottom: 1.4rem;

  .m1 {
    @include imageCDN('pages/mac/logo-m1.jpg', 0.72rem, 0.72rem);
    margin: 0 auto;
  }

  .welcome {
    line-height: 0.62rem;
    font-size: 0.6rem;
    font-weight: bold;
    background: #eff1ff;
    background: radial-gradient(#eff1ff, #000);
    background-size: 54% 156%;
    background-position: center center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'San Francisco Bold', sans-serif;
    margin-top: 0.1rem;
  }

  .btn-learn-m1 {
    @include textMixin(#2a97ff, 0.15rem);
    margin-top: 0.2rem;
    margin-left: -0.05rem;
    border: none;
    background: none;
  }

  .mac {
    @include flexCenter(row);
    margin-top: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .new {
    @include textMixin(#f56301, 0.18rem, bold);
    margin-bottom: -0.04rem;
  }
  .name {
    @include textMixin(#fff, 0.45rem, bold);
    font-family: 'San Francisco Bold', sans-serif;
  }
  .desc {
    @include textMixin(#fff, 0.23rem, bold);
  }
  .price {
    @include textMixin(#fff, 0.14rem);
    margin-top: 0.2rem;
  }
  .btn-buy {
    @include sizeWH(auto, 0.37rem);
    @include textMixin(#fff, 0.15rem);
    padding: 0rem 0.17rem;
    border-radius: 0.2rem;
    background: #0171e3;
    margin-top: 0.15rem;
  }
  .btn-learn {
    @include textMixin(#2a97ff, 0.14rem);
    margin-top: 0.1rem;
    margin-left: -0.05rem;
    border: none;
    background: none;
  }

  .macbook-air {
    .info {
      @include flexCenter(column);
      @include position(relative, $top: -1rem, $left: 2.5rem);
      align-items: flex-start;
      width: 30%;
      text-align: left;
    }
    img {
      @include sizeWH(9.8rem, 4.5rem);
    }
  }

  .macbook-pro {
    @extend .macbook-air;
    margin-top: -0.1rem;
    .info {
      @include position(relative, $top: -0.5rem, $left: -0.5rem);
    }
    img {
      @include sizeWH(8.3rem, 4.5rem);
      @include position(relative, $top: -0.4rem);
      margin-right: 0.1rem;
    }
  }

  .mac-mini {
    @extend .macbook-air;
    @include position(relative, $left: 1.8rem);
    .info {
      @include position(relative, $top: 0rem, $left: -0.3rem);
    }
    img {
      @include sizeWH(8rem, 4.46rem);
      @include position(relative, $left: -1.8rem);
    }
  }
}
</style>
