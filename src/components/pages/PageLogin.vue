<template>
  <BaseLayout>
    <div class="page-login">
      <div class="container">
        <div class="title">Please sign in.</div>
        <form class="form">
          <input type="text" placeholder="Apple ID" v-model="username" />
          <input type="password" placeholder="Password" v-model="password" />

          <div class="desc">
            Your Apple ID is the email address you use to sign in to iTunes, the
            App Store, and iCloud.
          </div>
          <div class="buttons">
            <button type="submit" class="btn-signin" @click="login">
              Sign In
            </button>
            <a class="register">Don't have an Apple ID? Create one now. </a>
          </div>
        </form>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'PageLogin',

  components: {
    BaseLayout,
  },

  data() {
    return {
      username: '',
      password: '',
    };
  },

  computed: {
    ...mapGetters('Apple', ['isLoggedIn']),
  },

  methods: {
    ...mapActions('Apple', ['loginApple']),

    async login() {
      await this.loginApple({
        username: this.username,
        password: this.password,
      });
      this.$router.push('/shop/bag');
    },
  },

  mounted() {
    if (this.isLoggedIn) {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>
.page-login {
  @include sizeWH(100%, auto);

  .container {
    text-align: left;
    margin: 0 auto;
    width: 65%;

    .title {
      @include textMixin(#000, 0.4rem, bold);
      margin-top: 0.5rem;
    }
    .desc {
      @include textMixin(#1d1d20, 0.14rem);
      margin-top: 0.1rem;
      width: 4rem;
    }
    .form {
      display: flex;
      flex-flow: column wrap;
      margin-top: 0.2rem;

      input {
        @include sizeWH(4rem, 0.5rem);
        border: #d2d2d7 solid 0.01rem;
        border-radius: 0.1rem;
        margin-top: 0.1rem;
        font-size: 0.17rem;
        padding-left: 0.15rem;
      }
    }

    .buttons {
      display: flex;
      flex-flow: column wrap;
      margin-top: 0.23rem;
      margin-bottom: 0.5rem;

      .btn-signin {
        @include textMixin(#fff, 0.19rem);
        background: #2d71e3;
        padding: 0.17rem 1.6rem;
        border-radius: 0.15rem;
        margin-right: 0.2rem;
        width: 4rem;
      }
      .register {
        @include textMixin(#2d71e3, 0.17rem);
        margin-top: 0.1rem;
      }
    }
  }
}
</style>
