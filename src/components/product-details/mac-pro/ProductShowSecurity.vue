<template>
  <div class="product-show-security">
    <div class="wrapper">
      <div class="title">SECURITY AND STORAGE</div>
      <div class="desc">
        <span>Security taken to new heights.</span>
        <span>
          Mac Pro is the most secure tower we’ve ever built. A Secure Enclave
          coprocessor provides the foundation for encrypted storage and secure
          boot capabilities. So you can worry less about protecting your work,
          code, and intellectual property. And focus more on doing your best
          thinking.
        </span>
      </div>
    </div>

    <div class="container">
      <div class="inner-wrapper">
        <div class="left">
          <img class="image" :src="genLink('security.jpg')" />
          <div class="text">
            <span>Apple T2 Security Chip.</span>
            <span>
              Data on Mac Pro is protected by the Apple T2 Security Chip. It
              integrates a Secure Enclave coprocessor and discrete controllers
              into a single chip. It also ensures that the lowest levels of
              software aren’t tampered with and that only operating system
              software trusted by Apple loads at startup.
            </span>
          </div>
        </div>
        <div class="right">
          <img class="image" :src="genLink('storage.jpg')" />
          <div class="text">
            <span>Apple T2 Security Chip.</span>
            <span>
              Data on Mac Pro is protected by the Apple T2 Security Chip. It
              integrates a Secure Enclave coprocessor and discrete controllers
              into a single chip. It also ensures that the lowest levels of
              software aren’t tampered with and that only operating system
              software trusted by Apple loads at startup.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowSecurity',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/mac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-security {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1.2rem;

  .wrapper {
    @include sizeWH(100%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.14rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.3rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.37rem;
      margin-top: 0.2rem;
      width: 8rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }
  }

  .container {
    @include sizeWH(100%, auto);
    margin-top: 0.6rem;

    .inner-wrapper {
      @include flexCenter(row);

      .image {
        @include sizeWH(5.7rem, auto);
        margin-bottom: 0.4rem;
      }

      .left,
      .right {
        display: flex;
        flex-flow: column wrap;
        margin-right: 0.3rem;

        .text {
          @include textMixin(#86868b, 0.15rem, bold);
          text-align: left;
          line-height: 0.2rem;
          margin-top: 0.2rem;
          width: 5rem;

          span:first-child {
            color: #000;
          }
        }
      }
    }
  }
}
</style>
