<template>
  <div class="product-show-night">
    <div class="container">
      <div class="title">
        <div>Night mode selfies</div>
        <div>You look amazing in the dark.</div>
      </div>
      <div class="subtitle">
        Nighttime is the right time for a selfie. Because Night mode and a slew
        of other great features are now on the front camera. Like Deep Fusion,
        Smart HDR 3, Dolby Vision recording, and more. You lucky duck face.
      </div>
      <img class="water" :src="genLink('night-mode.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowNight',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-night {
  @include sizeWH(100%, auto);

  .container {
    @include sizeWH(100%, 9rem);
    padding-top: 0.5rem;
    position: relative;
    background: #101010;

    .title {
      @include textMixin(#fff, 0.5rem, bold, $align: left);
      @include position(absolute, $top: 1.5rem, $left: 2.5rem);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0 auto;
      width: 3.5rem;

      div:first-child {
        color: #86868b;
      }
    }

    .subtitle {
      @include textMixin(#86868b, 0.21rem, bold, $align: left);
      @include position(absolute, $top: 4.5rem, $left: 2.5rem);
      font-family: 'San Francisco', sans-serif;
      margin: 0.3rem auto;
      width: 3.2rem;
    }

    .water {
      @include position(absolute, $bottom: 0, $right: 1.6rem);
      @include sizeWH(auto, 8rem);
    }
  }
}
</style>
