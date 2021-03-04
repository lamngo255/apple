<template>
  <div class="bag-popup">
    <div class="message" v-if="bagSize === 0">Your Bag is empty!</div>
    <div class="products" v-else>
      <div class="product" v-for="(product, i) in parsedBag" :key="i">
        <img class="left" :src="product.image" alt="" />
        <div class="right">
          <div class="name">{{ product.name }}</div>
          <div class="quantity">x{{ product.quantity }}</div>
        </div>
      </div>
    </div>
    <div class="remaining" v-if="remaining">
      {{ remaining }} more items in your Bag
    </div>
    <button
      class="btn-checkout"
      @click="$router.push('/shop/bag').catch((err) => {})"
    >
      Checkout
    </button>
    <ul class="list">
      <li class="item" @click="$router.push('/shop/bag').catch((err) => {})">
        <img :src="genIcon('bag')" />
        <span v-if="bagSize === 0">Bag</span>
        <span v-else>Bag ({{ bagSize }})</span>
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
        <span v-if="!isLoggedIn">Sign in</span>
        <span v-else>Sign out {{ profile.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { colorPicker } from '@/mapping';

export default {
  name: 'BagPopup',

  computed: {
    ...mapState('Apple', ['myBag', 'allProducts', 'profile']),
    ...mapGetters('Apple', ['isLoggedIn']),

    bagList() {
      return this.myBag.slice(0, 3).map((item) => {
        return {
          ...this.allProducts[item.id],
          ...item,
        };
      });
    },

    parsedBag() {
      return this.bagList.map((item) => ({
        name: this.genName(item),
        image: item.colorId >= 0 ? item.images[item.colorId] : item.mainImage,
        quantity: item.quantity,
      }));
    },

    remaining() {
      return this.myBag.slice(3).reduce((acc, item) => acc + item.quantity, 0);
    },

    bagSize() {
      return this.myBag.reduce((acc, item) => acc + item.quantity, 0);
    },
  },

  methods: {
    genName(item) {
      const { specs } = item;
      let itemName = item.name;
      if (item.capacityId >= 0) {
        const cap = specs.capacities[item.capacityId];
        if (cap < 10) {
          itemName += ` ${cap}TB`;
        } else {
          itemName += ` ${cap}GB`;
        }
      }

      if (item.colorId >= 0) {
        const colorCode = specs.colors[item.colorId];
        const colorName = colorPicker(colorCode).name;
        itemName += ` ${colorName}`;
      }
      return itemName;
    },

    genIcon(icon) {
      return this.$assetsUrl(`icons/${icon}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.bag-popup {
  @include sizeWH(2.3rem, auto);
  @include position(absolute, $top: 0.4rem, $right: 1.8rem);
  padding-bottom: 0.2rem;
  background: #fff;
  border-radius: 0.2rem;
  border: #d2d2d7 solid 0.01rem;

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
      // cursor: pointer;

      img {
        @include sizeWH(0.25rem, 0.25rem);
      }
      span {
        @include textMixin(#2866cc, 0.12rem);
        margin-left: 0.06rem;
      }

      // &:hover {
      //   span {
      //     filter: brightness(1.3);
      //   }
      // }
    }
  }
}

.products {
  display: flex;
  flex-flow: column wrap;
  padding: 0 0.2rem;

  .product {
    @include flexCenter(row);
    justify-content: flex-start;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    width: 1.8rem;
    border-bottom: #d2d2d7 solid 0.01rem;

    &:last-child {
      border-bottom: none;
    }

    .left {
      @include sizeWH(0.5rem, 0.5rem);
    }
    .right {
      @include textMixin(#000, 0.12rem);
      width: 1.9rem;
      margin-left: 0.05rem;
      text-align: left;

      .quantity {
        color: #949499;
      }
    }
  }
}

.remaining {
  @include textMixin(#808084, 0.11rem);
}

.btn-checkout {
  @include sizeWH(80%, 0.3rem);
  @include textMixin(#fff, 0.14rem);
  background: #2d71e3;
  border-radius: 0.1rem;
  margin-top: 0.1rem;
  margin-bottom: -0.15rem;
}
</style>
