<template>
  <div class="mac-tiles">
    <div class="apple-card">
      <img :src="genTileImage('apple-card')" alt="" />
      <div class="details">
        <div class="title">Get 3% Daily Cash back with Apple Card.</div>
        <div class="subtitle">
          And pay for your new Mac over 12 months, interest‑free when you choose
          Apple Card Monthly Installments.
        </div>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>

    <div class="row">
      <div class="accessories">
        <img :src="genTileImage('accessories')" />
        <div class="title">Accessories</div>
        <div class="subtitle">Explore Mac accessories.</div>
        <button class="btn-shop">Shop</button>
      </div>
      <div class="apple-trade">
        <div class="title">Apple Trade In</div>
        <div class="subtitle">Get credit toward a new Mac.</div>
        <div class="desc">
          Just trade in your eligible computer for credit or recycle it for
          free. It’s good for you and the planet.
        </div>
        <button class="btn-trade">Find your trade‑in value</button>
        <img :src="genTileImage('apple-trade')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacTiles',

  methods: {
    genTileImage(path) {
      return this.$assetsUrl(`pages/mac/tiles/${path}.jpg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mac-tiles {
  @include sizeWH(100%, auto);
  margin-top: 0.3rem;
  position: relative;
}

.apple-card {
  @include sizeWH(100%, 5rem);
  @include flexCenter(row);
  background: #f2f2f2;

  img {
    @include sizeWH(5.6rem, auto);
    margin-right: 0.3rem;
    margin-left: 0.2rem;
  }

  .details {
    margin-right: 0.2rem;
    .title {
      @include textMixin(#000, 0.37rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0 auto;
      width: 4rem;
    }
    .subtitle {
      @include textMixin(#000, 0.17rem);
      margin: 0.1rem auto 0;
      width: 4rem;
    }
    .btn-learn {
      @include textMixin(#0171e3, 0.16rem);
      border: none;
      background: none;
    }
  }
}

.row {
  @include flexCenter(row);
  margin-top: 0.3rem;
  justify-content: space-around;

  .accessories {
    @include sizeWH(49%, 7rem);
    margin-right: 0.3rem;
    background: #f2f2f2;
    position: relative;

    img {
      @include position(absolute, $bottom: 0, $left: 0);
      @include sizeWH(100%, 3.1rem);
      object-fit: cover;
      object-position: 28% 0;
    }
  }

  .apple-trade {
    @extend .accessories;
    margin-right: 0;

    img {
      @include sizeWH(auto, 3rem);
      left: 0.75rem;
    }
  }

  .accessories,
  .apple-trade {
    .title {
      @include textMixin(#000, 0.26rem, bold);
      margin-top: 0.5rem;
    }
    .subtitle {
      @include textMixin(#000, 0.53rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0 auto;
      width: 5.3rem;
    }
    .desc {
      @include textMixin(#000, 0.18rem);
      margin: 0.15rem auto;
      width: 5rem;
    }
    .btn-shop {
      @include textMixin(#fff, 0.19rem);
      height: 0.37rem;
      border-radius: 0.2rem;
      padding: 0.05rem 0.14rem;
      background: #0171e3;
      margin-top: 0.1rem;
    }
    .btn-trade {
      @include textMixin(#0171e3, 0.19rem);
      border: none;
      background: none;
    }
  }
}
</style>
