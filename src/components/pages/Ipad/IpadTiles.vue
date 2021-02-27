<template>
  <div class="ipad-tiles">
    <div class="row-full">
      <div class="title">Valentine’s Day gifts for what they love.</div>
      <button class="btn-shop">Shop</button>
      <div class="tiles">
        <div class="creativity">
          <img
            class="creativity-img"
            :src="genTileImage('creativity')"
            alt=""
          />
          <div class="text">
            <p>For lovers of</p>
            <p>creativity</p>
          </div>
        </div>
        <div class="entertainment">
          <img
            class="entertainment-img"
            :src="genTileImage('entertainment')"
            alt=""
          />
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
  @include sizeWH(100%, 4.6rem);
  justify-content: flex-start;
  background: #fff;
  padding-top: 0.3rem;

  .title {
    @include textMixin(#000, 0.4rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
  }
  .desc {
    @include textMixin(#000, 0.18rem);
    margin: 0.07rem auto;
  }
  .btn-shop {
    @include textMixin(#0171e3, 0.16rem);
    border: none;
    background: none;
    margin-top: 0.05rem;
  }
  .tiles {
    @include flexCenter(row);
    width: 100%;
    .creativity {
      @include sizeWH(47%, 2.6rem);
      background: #f5f5f7;
      margin-top: 0.2rem;
      margin-right: 0.15rem;
      border-radius: 0.25rem;
      text-align: left;
      padding-left: 0.4rem;
      padding-top: 0.3rem;
      position: relative;

      .text {
        @include position(absolute, $top: 1rem, $right: 0.3rem);
        font-family: 'San Francisco Regular', sans-serif;
        p {
          @include textMixin(#000, 0.23rem, bold);
          &:nth-child(2) {
            color: #8e70ff;
          }
        }
      }

      .creativity-img {
        @include position(absolute, $bottom: 0rem, $left: 0);
        @include sizeWH(auto, 2.4rem);
      }
    }
    .entertainment {
      @extend .creativity;
      margin-right: 0;
      margin-left: 0.15rem;

      .text {
        @include position(absolute, $top: 0.5rem, $left: 0.2rem);
        p:nth-child(2) {
          color: #ff0031;
        }
      }

      .entertainment-img {
        @include position(absolute, $top: 0rem, $right: 0rem);
        @include sizeWH(auto, 100%);
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
      }
    }
  }
}

.row {
  @include flexCenter(row);
  margin-top: 0.3rem;
  justify-content: space-around;

  .cashback {
    @include sizeWH(49%, 5.4rem);
    padding-top: 0.4rem;
    margin-right: 0.3rem;
    background: #fff;
    position: relative;

    img {
      @include position(absolute, $bottom: 0.5rem, $left: 50%);
      @include sizeWH(auto, 2rem);
      transform: translate(-50%, 0);
    }
  }

  .apple-trade {
    @extend .cashback;
    margin-right: 0;

    img {
      @include sizeWH(auto, 2.4rem);
      bottom: 0;
    }
  }

  .cashback,
  .apple-trade {
    .title {
      @include textMixin(#000, 0.37rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0.35rem auto 0;
      width: 70%;
    }
    .subtitle {
      @include textMixin(#000, 0.37rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin: 0 auto;
      width: 70%;
    }
    .desc {
      @include textMixin(#000, 0.17rem);
      margin: 0.15rem auto;
      width: 60%;
    }
    .btn-learn {
      @include textMixin(#0171e3, 0.16rem);
      border: none;
      background: none;
    }
  }
}
</style>
