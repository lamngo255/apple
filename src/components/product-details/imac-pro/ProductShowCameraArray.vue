<template>
  <div class="showcase-camera-array">
    <div class="camera">
      <div class="content">
        <div class="topic">FaceTime HD camera</div>
        <div class="desc">
          The M1 chip even helps you look your best. Highlights in low light
          have never looked better. Advanced noise reduction makes dark areas
          sharper. And face detection uses the Neural Engine to better adjust
          white balance and exposure levels for even more natural‑looking skin
          tones.
        </div>
        <img class="image" :src="genLink('camera-hd.png')" alt="" />
      </div>
    </div>

    <div class="mics">
      <div class="content">
        <div class="topic">Three-mic array</div>
        <div class="desc">
          <span>Studio quality. Without the studio.</span>
          <span
            >An improved signal‑to‑noise ratio rivals that of professional‑grade
            microphones.</span
          >
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
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-camera-array {
  @include sizeWH(80%, 5rem);
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
    @include sizeWH(60%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: #151516;
    margin-right: 0.2rem;

    .desc {
      @include textMixin(#fff, 0.16rem, bold, $align: left);
      font-family: 'San Francisco', sans-serif;
      margin-top: 0.2rem;
      width: 4.5rem;
    }

    .image {
      @include sizeWH(4.5rem, auto);
      @include position(absolute, $bottom: 0.2rem, $left: 50%);
      transform: translate(-50%, 0);
    }
  }

  .mics {
    @include sizeWH(40%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: #151516;

    .desc {
      @include textMixin(#a2a1a7, 0.23rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.24rem;
      width: 3rem;

      span:first-child {
        color: #fff;
      }
    }

    .image {
      @include sizeWH(3.2rem, auto);
      @include position(absolute, $bottom: 0.3rem, $left: 50%);
      transform: translate(-50%, 0);
    }
  }
}
</style>
