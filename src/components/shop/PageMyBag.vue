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
        <div class="products">
          <div class="product" v-for="(product, i) in parsedBag" :key="i">
            <img class="left" :src="product.image" alt="" />
            <div class="right">
              <div class="col">
                <div class="name">{{ product.name }}</div>
                <div class="quantity">x{{ product.quantity }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
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
        name: this.genName(item),
        image: item.colorId >= 0 ? item.images[item.colorId] : item.mainImage,
        quantity: item.quantity,
      }));
    },
  },

  methods: {
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
      @include textMixin(#000, 0.47rem, bold);
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
  }
}

.products {
  display: flex;
  flex-flow: column wrap;
  margin-top: 0.1rem;
  padding: 0 0.2rem;

  .product {
    @include flexCenter(row);
    justify-content: flex-start;
    padding-top: 0.2rem;
    padding-bottom: 0.1rem;
    border-bottom: #d2d2d7 solid 0.01rem;

    &:last-child {
      border-bottom: none;
    }

    .left {
      @include sizeWH(1rem, 1.2rem);
    }
    .right {
      @include textMixin(#000, 0.22rem, bold);
      margin-left: 0.2rem;
      text-align: left;

      .quantity {
        @include textMixin(#949499, 0.2rem, normal);
      }
    }
  }
}
</style>
