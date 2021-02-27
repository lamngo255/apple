<template>
  <div class="product-show-camera">
    <div class="title">
      <div>Camera and mics</div>
      <div>Be seen. Be heard.</div>
    </div>
    <div class="desc">
      Thanks to M1, the FaceTime HD camera can now take full advantage of our
      latest image signal processor — improving image quality in video
      conferences and pulling out more details in both shadows and highlights.
      And whether you’re running a meeting, hosting a podcast, or connecting
      with friends and family, new studio-quality mics will make sure everyone
      hears you loud and clear.
    </div>
    <img class="image" :src="genLink('camera-mics.png')" />
  </div>
</template>

<script>
export default {
  name: 'ProductCameraMics',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-camera {
  @include sizeWH(60%, auto);
  background: #000;
  margin: 1rem auto 0;

  .title {
    @include textMixin(#fff, 0.58rem, bold, $align: left);
    font-family: 'San Francisco Bold', sans-serif;

    div:first-child {
      color: #a1a1a6;
    }
  }

  .subtitle {
    @include textMixin(#fff, 0.7rem, bold);
    margin-top: 0.1rem;
    background: radial-gradient(#eff1ff, #000);
    background-size: 54% 156%;
    background-position: center center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'San Francisco Bold', sans-serif;
  }

  .desc {
    @include textMixin(#a1a1a6, 0.22rem, bold, $align: left);
    width: 70%;
    margin-top: 0.25rem;
  }

  .image {
    @include sizeWH(9rem, auto);
    text-align: left;
    margin-top: 0.4rem;
    margin-left: -0.7rem;
  }
}
</style>
