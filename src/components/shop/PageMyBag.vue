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
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'PageMyBag',

  components: {
    BaseLayout,
  },

  computed: {
    ...mapState('Apple', ['myBag']),
    ...mapGetters('Apple', ['isLoggedIn']),

    emptyBag() {
      return this.myBag.length === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-bag {
  @include sizeWH(65%, auto);
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
      @include textMixin(#000, 0.47rem, bold);
      margin-top: 0.5rem;
    }
    .subtitle {
      @include textMixin(#000, 0.2rem, bold);
      margin-top: 0.1rem;
    }
  }
}
</style>
