<template>
  <BaseLayout>
    <div class="my-bag">
      <div class="empty" v-if="emptyBag">
        <div class="title">Your bag is empty.</div>
        <div class="subtitle">
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
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'PageMyBag',

  components: {
    BaseLayout,
  },

  computed: {
    emptyBag() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-bag {
  @include sizeWH(100%, auto);

  .empty {
    text-align: left;
    margin: 0 auto;
    width: 65%;

    .title {
      @include textMixin(#000, 0.47rem, bold);
      margin-top: 0.5rem;
    }
    .subtitle {
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
}
</style>
