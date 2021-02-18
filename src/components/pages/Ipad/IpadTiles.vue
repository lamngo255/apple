<template>
  <div class="ipad-tiles">
    <div class="row-full">
      <div class="title">Valentine’s Day gifts for what they love.</div>
      <button class="btn-shop">Shop</button>
      <div class="tiles">
        <div class="creativity">
          <img :src="genTileImage('creativity')" alt="" />
          <div class="text">
            <p>For lovers of</p>
            <p>creativity</p>
          </div>
        </div>
        <div class="entertainment">
          <img :src="genTileImage('entertainment')" alt="" />
          <div class="text">
            <p>For lovers of</p>
            <p>entertainment</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="cashback">
        <img :src="genTileImage('cashback')" />
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
        <img :src="genTileImage('tradein')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IpadTiles',

  methods: {
    genTileImage(path) {
      return this.$assetsUrl(`pages/ipad/tiles/${path}.jpg`);
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

.row-full {
  @include flexCenter(column);
  @include sizeWH(100%, 5rem);
  justify-content: flex-start;
  background: #fff;
  padding-top: 0.3rem;

  .title {
    @include textMixin(#000, 0.5rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
  }
  .btn-shop {
    @include textMixin(#0171e3, 0.23rem);
    font-family: 'San Francisco Regular', sans-serif;
    border: none;
    background: none;
    margin-top: 0.05rem;
  }
  .tiles {
    @include flexCenter(row);
    width: 100%;
    .creativity {
      @include sizeWH(47%, 3.2rem);
      background: #f5f5f7;
      margin-top: 0.2rem;
      margin-right: 0.15rem;
      border-radius: 0.25rem;
      text-align: left;
      padding-left: 0.4rem;
      padding-top: 0.3rem;
      position: relative;

      .text {
        @include position(absolute, $top: 0.3rem, $left: 0.4rem);
        p {
          @include textMixin(#000, 0.32rem, bold);
          &:nth-child(2) {
            color: #0086e6;
          }
        }
      }

      img {
        @include position(absolute, $top: 0, $right: 0);
        @include sizeWH(auto, 3.2rem);
      }
    }
    .entertainment {
      @extend .creativity;
      margin-right: 0;
      margin-left: 0.15rem;

      .text {
        p:nth-child(2) {
          color: #fe8f04;
        }
      }
    }
  }
}

.row {
  @include flexCenter(row);
  margin-top: 0.3rem;
  justify-content: space-around;

  .cashback {
    @include sizeWH(49%, 7rem);
    padding-top: 0.4rem;
    margin-right: 0.3rem;
    background: #fff;
    position: relative;

    img {
      @include position(absolute, $bottom: 0.5rem, $left: 50%);
      @include sizeWH(auto, 3.1rem);
      transform: translate(-50%, 0);
    }
  }

  .apple-trade {
    @extend .cashback;
    margin-right: 0;

    img {
      @include sizeWH(auto, 3rem);
      bottom: 0;
    }
  }

  .cashback,
  .apple-trade {
    .title {
      @include textMixin(#000, 0.26rem, bold);
    }
    .subtitle {
      @include textMixin(#000, 0.5rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
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
