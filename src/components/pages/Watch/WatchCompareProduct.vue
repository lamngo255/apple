<template>
  <div class="watch-product">
    <div class="image">
      <img :src="image" alt="" />
    </div>
    <div class="container">
      <div class="name">{{ name }}</div>
      <div class="price">From {{ price }}$</div>
      <div class="case">{{ watchCase }}</div>
      <div class="gps">{{ gps }}</div>
      <div class="memory">{{ memory }}</div>
      <div class="storage">{{ storage }}</div>
      <div class="battery">{{ battery }}</div>

      <button class="btn-buy">Buy</button>
      <button class="btn-learn">Learn more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchCompareProduct',

  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    watchCase: { type: String, required: true },
    gps: { type: String, required: true },
    memory: { type: String, required: true },
    storage: { type: String, required: true },
    battery: { type: String, required: true },
    big: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.watch-product {
  @include flexCenter(column);
  margin-right: 0.65rem;
  padding-bottom: 1rem;

  .image {
    @include sizeWH(2.2rem, 1.3rem);

    img {
      @include sizeWH(70%, auto);
    }

    &.big {
      img {
        transform: scale(1.25);
        @include position(relative, $top: -0.12rem, $left: 0.2rem);
      }
    }
  }

  .container {
    @include flexCenter(column);
    align-items: flex-start;
    margin-top: 0.7rem;
    margin-left: 0.3rem;

    .name {
      @include textMixin(#000, 0.22rem, bold);
    }
    .price,
    .case,
    .gps,
    .memory,
    .storage,
    .battery {
      @include textMixin(#000, 0.12rem);
      margin-bottom: 0.1rem;
      margin-top: 0.03rem;
    }
    .price {
      font-size: 0.14rem;
      font-weight: bold;
    }
    .btn-buy {
      @include sizeWH(auto, 0.27rem);
      @include textMixin(#fff, 0.14rem);
      padding: 0.02rem 0.15rem;
      border-radius: 0.2rem;
      background: #0171e3;
      margin-top: 0.1rem;
      text-decoration: none;
    }
    .btn-learn {
      @include textMixin(#0171e3, 0.14rem);
      margin-top: 0.1rem;
      margin-left: -0.05rem;
      border: none;
      background: none;
    }
  }
}
</style>
