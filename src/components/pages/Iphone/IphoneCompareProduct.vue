<template>
  <div class="ipad-product">
    <div class="image">
      <img :src="image" alt="" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="price">From {{ price }}$</div>
    <div class="color" />
    <div class="sep" />
    <div class="screen-size">{{ screenSize }}</div>
    <div class="screen-desc">{{ screenDesc }}</div>
    <div class="chip">
      <img class="chip-img" :src="chip.image" alt="" />
      <div class="chip-name">{{ chip.name }}</div>
    </div>
    <div class="keyboard">
      <img class="keyboard-img" :src="$assetsUrl('keyboard.png')" alt="" />
      <div class="keyboard-name">{{ keyboard }}</div>
    </div>
    <div class="pencil">
      <img class="pencil-img" :src="$assetsUrl('pencil.png')" alt="" />
      <div class="pencil-name">{{ pencil }}</div>
    </div>
    <div class="sep" />

    <button class="btn-buy" @click="$router.push(pathBuy)">Buy</button>
    <button class="btn-learn" @click="$router.push(pathView)">
      Learn more
    </button>
  </div>
</template>

<script>
export default {
  name: 'IphoneCompareProduct',

  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    screenSize: { type: String, required: true },
    screenDesc: { type: String, required: true },
    chip: { type: Object, required: true },
    keyboard: { type: String, required: true },
    pencil: { type: String, required: true },
    pathBuy: { type: String, required: true },
    pathView: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.ipad-product {
  @include flexCenter(column);
  margin-right: 0.1rem;
  padding-bottom: 1rem;

  .image {
    @include sizeWH(1.5rem, 1.5rem);

    img {
      @include sizeWH(auto, 100%);
    }
  }

  .name {
    @include textMixin(#000, 0.2rem, bold);
    margin-top: 0.2rem;
  }
  .price {
    @include textMixin(#000, 0.12rem);
    margin-top: 0.03rem;
  }
  .color {
    @include imageCDN('color.jpg', 1.2rem, 0.13rem);
    margin-top: 0.08rem;
  }
  .sep {
    @include sizeWH(1.4rem, 0.01rem);
    border-top: 0.01rem solid #d2d2d7;
    margin-top: 0.25rem;
    margin-bottom: 0.23rem;
  }
  .screen-size {
    @include textMixin(#000, 0.16rem, bold);
  }
  .screen-desc {
    @include textMixin(#000, 0.12rem);
    width: 1.7rem;
    margin-top: 0.08rem;
    height: 0.3rem;
  }
  .chip {
    .chip-img {
      @include sizeWH(0.35rem, auto);
      margin: 0.15rem auto 0.1rem;
    }
    .chip-name {
      @include textMixin(#000, 0.12rem);
    }
  }
  .keyboard {
    height: 1.45rem;
    .keyboard-img {
      @include sizeWH(0.5rem, auto);
      margin: 0.2rem auto 0.1rem;
    }
    .keyboard-name {
      @include textMixin(#000, 0.12rem);
      width: 1.2rem;
    }
  }
  .pencil {
    .pencil-img {
      @include sizeWH(0.5rem, auto);
      margin: 0.2rem auto 0.05rem;
    }
    .pencil-name {
      @include textMixin(#000, 0.12rem);
      width: 1rem;
    }
  }

  .btn-buy {
    @include sizeWH(auto, 0.2rem);
    @include textMixin(#fff, 0.12rem);
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
</style>
