<template>
  <div class="ipad-tiles">
    <div class="row">
      <div class="accessories">
        <img :src="genTileImage('accessories')" />
        <div class="subtitle">
          <div>Get 3% Daily Cash</div>
          <div>back with Apple Card.</div>
        </div>
        <div class="desc">
          And pay for your new iPad over 12 months, interest‑free when you
          choose Apple Card Monthly Installments.
        </div>
        <button class="btn-learn">Learn more</button>
      </div>
      <div class="apple-trade">
        <div class="subtitle">
          <div>Get up to</div>
          <div>$535 toward a</div>
          <div>new iPad Pro.</div>
        </div>
        <div class="desc">
          With Apple Trade In, just give us your eligible iPad and get credit
          for a new one. It’s good for you and the planet.
        </div>
        <button class="btn-learn">Learn more</button>
        <img :src="genTileImage('apple-trade')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IpadTiles',

  methods: {
    genTileImage(path) {
      return this.$assetsUrl(`pages/mac/tiles/${path}.jpg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.ipad-tiles {
  @include sizeWH(100%, auto);
  margin-top: 0.3rem;
  position: relative;
}

.row {
  @include flexCenter(row);
  margin-top: 0.3rem;
  justify-content: space-around;

  .accessories {
    @include sizeWH(49%, 7rem);
    padding-top: 0.4rem;
    margin-right: 0.3rem;
    background: #fff;
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
    }
    .subtitle {
      @include textMixin(#000, 0.5rem, bold);
      margin: 0 auto;
      width: 5rem;
    }
    .desc {
      @include textMixin(#000, 0.21rem);
      margin: 0.15rem auto;
      width: 4.5rem;
    }
    .btn-learn {
      @include textMixin(#0171e3, 0.21rem);
      border: none;
      background: none;
    }
  }
}
</style>
