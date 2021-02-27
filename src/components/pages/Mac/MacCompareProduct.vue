<template>
  <div class="mac-product">
    <div :class="['image', { big }]">
      <img :src="image" alt="" />
    </div>
    <div class="container">
      <div class="name">{{ name }}</div>
      <div class="price">From {{ price }}$</div>
      <div class="screen">{{ screen }}</div>
      <div class="chip">{{ chip }}</div>
      <div class="memory">{{ memory }}</div>
      <div class="storage">{{ storage }}</div>
      <div class="battery">{{ battery }}</div>

      <button class="btn-buy" @click="$router.push(`shop/${slug}`)">Buy</button>
      <button class="btn-learn" @click="$router.push(slug)">Learn more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacCompareProduct',

  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    screen: { type: String, required: true },
    chip: { type: String, required: true },
    memory: { type: String, required: true },
    storage: { type: String, required: true },
    battery: { type: String, required: true },
    big: { type: Boolean, default: false },
    slug: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.mac-product {
  @include flexCenter(column);
  margin-right: 0.8rem;
  padding-bottom: 0.7rem;

  .image {
    @include sizeWH(2rem, 1.2rem);

    img {
      @include sizeWH(100%, auto);
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
    margin-right: 0.2rem;

    .name {
      @include textMixin(#000, 0.22rem, bold);
      margin-top: 0.2rem;
    }
    .price {
      font-weight: bold;
    }
    .price,
    .screen,
    .chip,
    .memory,
    .storage,
    .battery {
      @include textMixin(#000, 0.12rem);
      margin-bottom: 0.1rem;
      margin-top: 0.03rem;
    }
    .btn-buy {
      @include sizeWH(auto, 0.21rem);
      @include textMixin(#fff, 0.11rem);
      padding: 0.02rem 0.1rem;
      border-radius: 0.2rem;
      background: #0171e3;
      margin-top: 0.1rem;
      text-decoration: none;
    }
    .btn-learn {
      @include textMixin(#0171e3, 0.12rem);
      margin-top: 0.1rem;
      margin-left: -0.05rem;
      border: none;
      background: none;
    }
  }
}
</style>
