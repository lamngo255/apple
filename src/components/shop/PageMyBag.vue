<template>
  <BaseLayout>
    <div class="my-bag">
      <div class="empty" v-if="emptyBag">
        <div class="title">Your bag is empty.</div>

        <template v-if="!isLoggedIn">
          <div class="signin">
            Sign in to see if you have any saved items. Or continue shopping.
          </div>
          <div class="buttons">
            <button class="btn-signin" @click="$router.push('/login')">
              Sign In
            </button>
            <button class="btn-continue" @click="$router.push('/')">
              Continue Shopping
            </button>
          </div>
        </template>
      </div>

      <div class="container" v-else>
        <div class="title">Review your bag</div>
        <div class="subtitle">Free delivery and free returns.</div>
        <div class="pay">
          <img
            class="applecard"
            :src="$assetsUrl('shop/logo-applecard.jpeg')"
          />
          <div class="note">
            Pay $68.16/mo.per month at 0% APR for eligible items in your order
            with Apple Card Monthly Installments.
          </div>
        </div>
        <div class="products">
          <div class="product" v-for="(product, i) in parsedBag" :key="i">
            <img class="left" :src="product.image" alt="" />
            <div class="right">
              <div class="row">
                <div class="name">{{ product.name }}</div>
                <div class="quantity">
                  <span>x</span>
                  <input
                    type="number"
                    min="1"
                    v-model="product.quantity"
                    @change="changeQuantity(product)"
                  />
                </div>
                <div class="price">
                  ${{ product.basePrice * product.quantity }}
                </div>
              </div>

              <div class="row">
                <div class="apr">Pay 0% APR for 12 months:</div>
                <div class="month">
                  ${{
                    ((product.basePrice * product.quantity) / 12).toFixed(2)
                  }}
                </div>
              </div>

              <div class="row">
                <button
                  class="btn-remove"
                  @click="removeProductFromBag(product)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="checkout">
          <div class="row">
            <div class="text">Subtotal</div>
            <div class="price">{{ totalPrice }}</div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import { colorPicker } from '@/mapping';
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'PageMyBag',

  components: {
    BaseLayout,
  },

  computed: {
    ...mapState('Apple', ['myBag', 'allProducts']),
    ...mapGetters('Apple', ['isLoggedIn']),

    emptyBag() {
      return this.myBag.length === 0;
    },

    bagList() {
      return this.myBag.map((item) => {
        return {
          ...this.allProducts[item.id],
          ...item,
        };
      });
    },

    parsedBag() {
      return this.bagList.map((item) => ({
        ...item,
        name: this.genName(item),
        image: item.colorId >= 0 ? item.images[item.colorId] : item.mainImage,
        quantity: item.quantity,
        basePrice: item.basePrice,
      }));
    },

    totalPrice() {
      return this.parsedBag.reduce(
        (acc, item) => acc + item.quantity * item.basePrice,
        0,
      );
    },
  },

  methods: {
    ...mapActions('Apple', ['updateBagQty', 'removeProductFromBag']),

    changeQuantity(product) {
      this.updateBagQty(product);
    },

    genName(item) {
      const { specs } = item;
      if (!specs) return '';

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
        const colorCode = specs?.colors[item.colorId];
        const colorName = colorPicker(colorCode).name;
        itemName += ` ${colorName}`;
      }
      return itemName;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-bag {
  @include sizeWH(58%, auto);
  text-align: left;
  margin: 0 auto;
  padding-bottom: 0.3rem;

  .empty {
    .title {
      @include textMixin(#000, 0.37rem, bold);
      margin-top: 0.5rem;
    }
    .signin {
      @include textMixin(#1d1d20, 0.18rem);
      margin-top: 0.1rem;
    }

    .buttons {
      @include flexCenter(row);
      justify-content: flex-start;
      margin-top: 0.4rem;
      margin-bottom: 0.5rem;

      .btn-signin {
        @include textMixin(#fff, 0.19rem);
        background: #2d71e3;
        padding: 0.17rem 1.2rem;
        border-radius: 0.15rem;
        margin-right: 0.2rem;
      }
      .btn-continue {
        @extend .btn-signin;
        background: #ebebeb;
        color: #000;

        &:hover {
          filter: brightness(1);
        }
      }
    }
  }

  .container {
    .title {
      @include textMixin(#000, 0.32rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#000, 0.14rem, bold);
      margin-top: 0.1rem;
    }
    .pay {
      @include sizeWH(98%, 0.5rem);
      @include flexCenter(row);
      background: #f5f5f7;
      margin-top: 0.3rem;
      border-radius: 0.08rem;

      .applecard {
        @include sizeWH(0.17rem, 0.17rem);
      }
      .note {
        @include textMixin(#000, 0.12rem);
        margin-left: 0.05rem;
      }
    }
  }
}

.products {
  display: flex;
  flex-flow: column wrap;
  margin-top: 0.1rem;
  padding: 0 0.2rem;
  border-bottom: #dbdbdb solid 0.01rem;
  padding-bottom: 0.5rem;

  .product {
    @include flexCenter(row);
    justify-content: flex-start;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border-bottom: #d2d2d7 solid 0.01rem;

    &:last-child {
      border-bottom: none;
    }

    .left {
      @include sizeWH(1rem, 1.2rem);
      display: flex;
      flex-flow: column wrap;
      align-self: flex-start;
      align-items: flex-start;
    }

    .right {
      display: flex;
      flex-flow: column wrap;
      align-self: flex-start;
      align-items: flex-start;
      margin-left: 0.2rem;
      text-align: left;
      // height: 0.9rem;
      padding-top: 0.1rem;

      .row {
        @include flexCenter(row);
        width: 6.2rem;
        justify-content: space-between;
      }

      .row:first-child {
        .name {
          @include textMixin(#000, 0.2rem, bold);
          padding-right: 0.3rem;
          width: 3rem;
        }

        .quantity {
          @include textMixin(#000, 0.2rem, bold);
          flex-grow: 1;
          span {
            margin-right: -0.03rem;
          }
          input {
            width: 0.32rem;
            text-align: left;
            border: none;
          }
        }

        .price {
          @include textMixin(#000, 0.2rem, bold);
        }
      }

      .row:nth-child(2) {
        margin-top: 0.1rem;
        .apr {
          @include textMixin(#000, 0.12rem);
        }
        .month {
          @include textMixin(#000, 0.14rem);
        }
      }

      .row:nth-child(3) {
        justify-content: flex-end;

        .btn-remove {
          @include textMixin(#2866cc, 0.14rem);
          margin-top: 0.1rem;
          background: none;
        }
      }
    }
  }
}

.checkout {
  @include flexCenter(column);
  width: 60%;
  height: 1rem;

  .row {
    @include flexCenter(row);
    width: 7rem;
    justify-content: space-between;
  }
}
</style>
