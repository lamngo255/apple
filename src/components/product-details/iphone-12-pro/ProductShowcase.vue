<template>
  <div class="product-showcase">
    <div class="section-1">
      <div class="title">iPhone 12 Pro and iPhone 12 Pro Max</div>
      <div class="subtitle">It’s a leap year.</div>
      <video autoplay playsinline muted>
        <source :src="genLink('leap-year.mp4')" />
      </video>
      <div class="desc">
        5G goes Pro. A14 Bionic rockets past every other smartphone chip. The
        Pro camera system takes low-light photography to the next level — with
        an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers
        four times better drop performance. Let’s see what this thing can do.
      </div>
      <div class="price">From $41.62/mo. or $999 before trade‑in</div>
      <div class="buttons">
        <button class="btn-watch">Watch the event</button>
        <button class="btn-film">Watch the film</button>
      </div>
    </div>

    <div class="section-2">
      <div class="title">Less bezel, more screen.</div>
      <div class="pro-max">
        <div class="pro-max-title">iPhone 12 Pro Max</div>
        <div class="pro-max-subtitle">
          <div>6.7” Super Retina</div>
          <div>XDR display</div>
        </div>
      </div>
      <div class="pro">
        <div class="pro-title">iPhone 12 Pro</div>
        <div class="pro-subtitle">
          <div>6.1” Super Retina</div>
          <div>XDR display</div>
        </div>
      </div>
      <video autoplay playsinline muted>
        <source :src="genLink('compare.mp4')" />
      </video>
      <button class="btn-compare">Compare sizes to iPhone 11 Pro</button>
    </div>

    <div class="section-3">
      <div class="title">Kicks glass.</div>
      <img :src="genLink('tougher-glass.jpg')" />
      <div class="desc">Ceramic Shield, tougher than any smartphone glass</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-showcase {
  @include sizeWH(100%, auto);
  background: #000;
  padding-bottom: 2rem;

  .section-1 {
    padding-top: 0.7rem;
    .title {
      @include textMixin(#fff, 0.23rem, bold);
    }
    .subtitle {
      @include textMixin(#fff, 0.8rem, bold);
      margin-top: 0.1rem;
    }
    video {
      @include sizeWH(90%, auto);
      margin: 0 auto;
      margin-left: 2.9rem;
    }
    .desc {
      @include textMixin(#a1a1a6, 0.26rem, bold);
      width: 46%;
      margin: 1rem auto 0;
    }
    .price {
      @include textMixin(#a1a1a6, 0.24rem, bold);
      margin-top: 0.4rem;
    }
    .buttons {
      @include flexCenter(row);
      margin-top: 0.45rem;

      button {
        @include textMixin(#f5f5f7, 0.23rem, bold);
        margin-right: 0.4rem;
        border: none;
        background: none;
      }
    }
  }

  .section-2 {
    @include flexCenter(column);
    margin-top: 3rem;
    position: relative;
    .title {
      @include textMixin(#fff, 0.5rem, bold);
    }
    video {
      @include sizeWH(auto, 5.7rem);
      margin: 0.4rem auto;
    }

    .pro-max {
      @include position(absolute, $top: 3.6rem, $left: 3.2rem);
      text-align: right;

      &-title {
        @include textMixin(#fff, 0.23rem, bold);
      }
      &-subtitle {
        @include textMixin(#8f8f93, 0.2rem, bold);
      }
    }

    .pro {
      @include position(absolute, $top: 3.6rem, $right: 3.6rem);
      text-align: left;

      &-title {
        @include textMixin(#fff, 0.23rem, bold);
      }
      &-subtitle {
        @include textMixin(#8f8f93, 0.2rem, bold);
      }
    }

    .btn-compare {
      @include textMixin(#d4d4d4, 0.19rem);
      background: none;
      border: #fff solid 0.01rem;
      border-radius: 0.2rem;
      padding: 0.05rem 0.2rem;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        background: #d4d4d4;
        color: rgb(26, 25, 25);
      }
    }
  }

  .section-3 {
    @include flexCenter(column);
    margin-top: 4rem;

    .title {
      @include textMixin(#d4d4d4, 0.6rem, bold);
    }
    img {
      @include sizeWH(auto, 2.4rem);
      margin-top: 0.6rem;
    }
  }
}
</style>
