<template>
  <div class="bag-popup">
    <div class="message">Your Bag is empty!</div>
    <ul class="list">
      <li class="item" @click="$router.push('/shop/bag')">
        <img :src="genIcon('bag')" />
        <span>Bag</span>
      </li>
      <li class="item">
        <img :src="genIcon('favorites')" />
        <span>Favorites</span>
      </li>
      <li class="item">
        <img :src="genIcon('orders')" />
        <span>Orders</span>
      </li>
      <li class="item">
        <img :src="genIcon('account')" />
        <span>Account</span>
      </li>
      <li class="item" @click="$router.push('/login')">
        <img :src="genIcon('signin')" />
        <span>Sign in</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BagPopup',

  methods: {
    genIcon(icon) {
      return this.$assetsUrl(`icons/${icon}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.bag-popup {
  @include sizeWH(2.8rem, auto);
  @include position(absolute, $top: 0.5rem, $left: -1.2rem);
  padding-bottom: 0.2rem;
  background: #fff;
  border-radius: 0.2rem;
  border: #d2d2d7 solid 0.01rem;
  z-index: 2;

  .message {
    @include textMixin(#767679, 0.15rem);
    margin-top: 0.24rem;
  }

  .list {
    @include flexCenter(column);
    align-items: flex-start;
    padding: 0.17rem 0.2rem 0;

    .item {
      @include flexCenter(row);
      justify-content: flex-start;
      border-top: #d2d2d7 solid 0.01rem;
      margin-top: 0.1rem;
      padding-top: 0.07rem;
      width: 100%;
      cursor: pointer;

      img {
        @include sizeWH(0.3rem, 0.3rem);
      }
      span {
        @include textMixin(#2866cc, 0.15rem);
        margin-left: 0.06rem;
      }

      &:hover {
        span {
          filter: brightness(1.3);
        }
      }
    }
  }
}
</style>
