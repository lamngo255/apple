<template>
  <div class="showcase">
    <div class="ip ipad-air">
      <div class="info">
        <div class="new">New</div>
        <div class="name">iPad Air</div>
        <div class="desc">Powerful. Colorful. Wonderful.</div>
        <div class="price">From $599 Buy</div>
        <button class="btn-buy">Buy</button>
        <button class="btn-learn">Learn more</button>
      </div>
      <img :src="genIpadImage('ipad-air')" alt="" />
    </div>

    <div class="ip ipad">
      <img :src="genIpadImage('ipad')" alt="" />
      <div class="info">
        <div class="new">New</div>
        <div class="name">iPad</div>
        <div class="desc">Delightfully capable. Surprisingly affordable.</div>
        <div class="price">From $329</div>
        <button class="btn-buy">Buy</button>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>

    <div class="ip ipad-pro">
      <div class="info">
        <div class="name">iPad Pro</div>
        <div class="desc">The ultimate iPad experience.</div>
        <div class="price">From $799</div>
        <button class="btn-buy">Buy</button>
        <button class="btn-learn">Learn more</button>
      </div>
      <img :src="genIpadImage('ipad-pro')" alt="" />
    </div>

    <div class="ip ipad-mini">
      <img :src="genIpadImage('ipad-mini')" alt="" />
      <div class="info">
        <div class="name">iPad Mini</div>
        <div class="desc">Small in size. Big on capability.</div>
        <div class="price">From $399</div>
        <button class="btn-buy">Buy</button>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IpadShowcase',

  methods: {
    genIpadImage(path) {
      return this.$assetsUrl(`pages/ipad/${path}.jpg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase {
  .ip {
    @include flexCenter(row);
    margin-top: 0.5rem;
    margin-bottom: 1.7rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .new {
    @include textMixin(#c04800, 0.14rem);
    margin-bottom: -0.04rem;
  }
  .name {
    @include textMixin(#000, 0.63rem, bold);
  }
  .desc {
    @include textMixin(#000, 0.24rem, bold, $align: left);
  }
  .price {
    @include textMixin(#000, 0.18rem);
    margin-top: 0.2rem;
  }
  .btn-buy {
    @include sizeWH(auto, 0.35rem);
    @include textMixin(#fff, 0.19rem);
    padding: 0.05rem 0.15rem;
    border-radius: 0.2rem;
    background: #0171e3;
    margin-top: 0.15rem;
  }
  .btn-learn {
    @include textMixin(#0171e3, 0.18rem);
    margin-top: 0.1rem;
    margin-left: -0.05rem;
    border: none;
    background: none;
  }

  .ipad-air {
    .info {
      @include flexCenter(column);
      align-items: flex-start;
      width: 20%;
    }
    img {
      @include sizeWH(5rem, 6rem);
    }
  }

  .ipad {
    @extend .ipad-air;
    .info {
      @include position(relative, $top: -0.5rem);
    }
    img {
      @include sizeWH(8.8rem, 5rem);
      margin-right: 0.1rem;
    }
  }

  .ipad-pro {
    @extend .ipad-air;
    @include position(relative, $left: 1.8rem);
    .info {
      @include position(relative, $top: -0.5rem);
    }
    img {
      @include sizeWH(10rem, 5.5rem);
    }
  }

  .ipad-mini {
    @extend .ipad-air;
    .info {
      @include position(relative, $top: -0.5rem);
    }
    img {
      @include sizeWH(6rem, 5rem);
      margin-right: 0.3rem;
    }
  }
}
</style>
