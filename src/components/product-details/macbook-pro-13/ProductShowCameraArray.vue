<template>
  <div class="showcase-camera-array">
    <div class="camera">
      <div class="content">
        <div class="topic">FaceTime HD camera</div>
        <div class="desc">
          Get clearer, sharper images. See more detail in shadows and
          highlights. And face detection uses the Neural Engine to adjust white
          balance and exposure for even more natural‑looking skin tones.
        </div>
        <img class="image" :src="genLink('camera-hd.png')" alt="" />
      </div>
    </div>

    <div class="mics">
      <div class="content">
        <div class="topic">Three-microphone array</div>
        <div class="desc">
          Say “Hello” to mics that focus on your voice instead of what’s going
          on around you.
        </div>
        <img class="image" :src="genLink('mics.jpg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowSpeedApp',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-camera-array {
  @include sizeWH(80%, 5.6rem);
  @include flexCenter(row);

  margin: -1rem auto 0;
  text-align: left;
  position: relative;

  // common
  .content {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    z-index: 1;
    padding: 0.3rem;

    .topic {
      @include textMixin(#fff, 0.18rem, bold);
    }
  }

  .camera {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: #151516;
    margin-right: 0.2rem;

    .desc {
      @include textMixin(#fff, 0.24rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.4rem;
      width: 4rem;
    }

    .image {
      @include sizeWH(4rem, auto);
      @include position(absolute, $bottom: 0.2rem, $left: 50%);
      transform: translate(-50%, 0);
    }
  }

  .mics {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: #151516;

    .desc {
      @include textMixin(#fff, 0.39rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.24rem;
      width: 4rem;
    }

    .image {
      @include sizeWH(3.8rem, auto);
      @include position(absolute, $bottom: 0.24rem, $left: 50%);
      transform: translate(-50%, 0);
    }
  }
}
</style>
