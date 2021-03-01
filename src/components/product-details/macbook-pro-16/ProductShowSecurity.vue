<template>
  <div class="product-show-security">
    <div class="container">
      <div class="title">
        <div>Apple T2 Security Chip</div>
        <div>The next generation</div>
        <div>of security.</div>
      </div>

      <div class="note">
        Every MacBook Pro is equipped with the <b>Apple T2 Security Chip</b> —
        our second‑generation custom Mac silicon designed to make everything you
        do even more secure. It includes a <b>Secure Enclave</b> coprocessor
        that powers Touch ID and provides the foundation for
        <b>secure boot</b> and <b>encrypted storage</b> capabilities. It also
        consolidates many discrete controllers, including the system management
        controller, audio controller, and SSD controller, into one.
      </div>

      <img class="image" :src="genLink('security.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowSecurity',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-security {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 0.3rem;
  padding-bottom: 1rem;

  .container {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.6rem, bold);
      display: flex;
      flex-flow: column wrap;
      font-family: 'San Francisco Medium', sans-serif;

      div:first-child {
        color: #acacac;
      }
    }

    .note {
      @include textMixin(#86868b, 0.29rem, bold, $align: left);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin: 0.5rem auto 0.1rem;
      letter-spacing: 0.007rem;

      b {
        color: #000;
        font-weight: bold;
      }
    }

    .image {
      @include sizeWH(9rem, auto);
      margin-top: 0.5rem;
    }
  }
}
</style>
