<template>
  <div class="showcase-touch-id">
    <div class="topic">Touch ID</div>
    <div class="content">
      <div class="desc">
        One touch is all it takes to lock or unlock MacBook Air. Use your
        fingerprint to rent a movie, buy an app, or access things like secure
        documents or system settings without having to reenter your password.
        And when you shop online with Apple Pay, Touch ID fills in your shipping
        and billing information without sharing your card details.
      </div>
      <div class="wrapper">
        <div class="item">
          <img class="image" :src="genLink('unlock.png')" />
          <div class="name">Unlock your Mac</div>
        </div>
        <div class="item">
          <img class="image" :src="genLink('apple-pay.png')" />
          <div class="name">Use Apple Pay</div>
        </div>
        <div class="item">
          <img class="image" :src="genLink('password.png')" />
          <div class="name">Open password-protected documents</div>
        </div>
        <div class="item">
          <img class="image" :src="genLink('apple-tv.png')" />
          <div class="name">Make purchases on the Apple TV app</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowCPU',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/touch/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-touch-id {
  @include sizeWH(80%, 5rem);
  background: linear-gradient(
    229deg,
    #517281 0%,
    #3b5d70 27%,
    #4d5c82 72%,
    #5d647f 100%
  );
  margin: 0.3rem auto 0;
  text-align: left;
  padding: 0.3rem;
  border-radius: 0.3rem;
  position: relative;

  .topic {
    @include textMixin(#fff, 0.19rem, bold);
  }

  .title {
    @include textMixin(#fff, 0.62rem, bold);
    display: flex;
    flex-flow: column wrap;
    font-family: 'San Francisco Bold', sans-serif;
    margin-top: 0.7rem;

    div {
      margin-bottom: -0.1rem;

      &:first-child {
        color: #c48cfc;
      }
    }
  }

  .desc {
    @include textMixin(#fff, 0.25rem);
    margin-top: 0.5rem;
    width: 4.5rem;
    font-family: 'San Francisco Bold', sans-serif;
  }

  .wrapper {
    @include position(absolute, $top: 1rem, $left: 5rem);
    @include flexCenter(row);
    flex-wrap: wrap;

    .item {
      @include flexCenter(column);
      margin-right: 0.5rem;
      margin-bottom: 0.6rem;

      .image {
        @include sizeWH(auto, 0.6rem);
      }
      .name {
        @include textMixin(#fff, 0.17rem, bold);
        @include position(relative, $top: 0.1rem, $left: 0.4rem);
        width: 1.5rem;
      }

      &:nth-child(2) {
        .image {
          @include position(relative, $left: 0.1rem);
        }
      }
    }
  }
}
</style>
