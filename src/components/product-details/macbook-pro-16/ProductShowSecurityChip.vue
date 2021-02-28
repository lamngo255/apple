<template>
  <div class="product-show-security">
    <div class="wrapper">
      <div class="title">Apple T2 Security Chip</div>
      <div class="desc">
        <span>Your own private security detail.</span>
        <span>
          The Apple T2 Security Chip comes to the 27‑inch iMac, with a Secure
          Enclave coprocessor that provides the foundation for secure boot and
          encrypted storage capabilities. The T2 chip also enables powerful
          features like the 1080p FaceTime HD camera, face detection, enhanced
          speaker bass response, and “Hey Siri” — and makes transcoding HEVC
          video up to twice as fast as the previous generation.
        </span>
      </div>
      <div class="images">
        <img class="display" :src="genLink('security-chip.jpg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowSecurityChip',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-security {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1rem;

  .wrapper {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.2rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.32rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin-top: 0.1rem;
      letter-spacing: 0.005rem;
      width: 7rem;

      span:first-child {
        color: #000;
      }
    }
    .images {
      margin-top: 0.5rem;

      .display {
        @include sizeWH(8.4rem, auto);
        margin-left: -0.5rem;
      }
      .info {
        @include sizeWH(8rem, auto);
      }
    }
  }
}
</style>
