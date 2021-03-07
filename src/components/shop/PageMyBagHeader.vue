<template>
  <div class="my-bag-header">
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
      <template v-else>
        <div class="free">Free delivery and free returns.</div>
        <button class="btn-shopping" @click="$router.push('/')">
          Continue Shopping
        </button>
      </template>
    </div>

    <div class="container" v-if="totalPrice > 0">
      <div class="title">Your bag total is ${{ totalPrice }}.00</div>
      <div class="subtitle">Free delivery and free returns.</div>
      <button class="btn-checkout" @click="checkOut">Check Out</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'PageMyBagHeader',

  props: {
    totalPrice: { type: Number, default: 0 },
  },

  computed: {
    ...mapState('Apple', ['myBag']),
    ...mapGetters('Apple', ['isLoggedIn']),

    emptyBag() {
      return this.myBag.length === 0;
    },
  },

  methods: {
    ...mapActions('Apple', ['clearBag', 'openPopup']),

    checkOut() {
      this.clearBag();
      this.openPopup('checkout');
    },
  },
};
</script>

<style lang="scss" scoped>
.empty {
  .title {
    @include textMixin(#000, 0.3rem, bold);
    margin-top: 0.5rem;
  }
  .signin {
    @include textMixin(#1d1d20, 0.14rem);
    margin-top: 0.1rem;
  }

  .free {
    @include textMixin(#1d1d20, 0.15rem);
    margin-top: 0.07rem;
  }

  .btn-shopping {
    @include textMixin(#fff, 0.14rem);
    background: #ebebeb;
    color: #000;
    padding: 0.13rem 0.8rem;
    border-radius: 0.1rem;
    margin-top: 0.23rem;

    &:hover {
      filter: brightness(1);
    }
  }

  .buttons {
    @include flexCenter(row);
    justify-content: flex-start;
    margin-top: 0.4rem;
    margin-bottom: 0.5rem;

    .btn-signin {
      @include textMixin(#fff, 0.16rem);
      background: #2d71e3;
      padding: 0.1rem 1rem;
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
  text-align: center;
  margin-top: 0.4rem;
  border-bottom: #dbdbdb solid 0.01rem;
  padding-bottom: 0.4rem;

  .title {
    @include textMixin(#000, 0.32rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
    margin-top: 0.35rem;
  }
  .subtitle {
    @include textMixin(#000, 0.14rem, bold);
    margin-top: 0.1rem;
  }
  .btn-checkout {
    @include textMixin(#fff, 0.15rem);
    margin-top: 0.2rem;
    background: #2d71e3;
    padding: 0.06rem 1rem;
    border-radius: 0.1rem;
  }
}
</style>
