<template>
  <div class="product-show-cam-speaker">
    <div class="wrapper">
      <div class="title">Camera, Speakers, and Mics</div>
      <div class="desc">
        <span>Mics, camera, action.</span>
        <span>
          From crystal clear video calls and voice recordings to music and
          movies that fill the room, iMac is an all-star for communications and
          content. The 27‑inch iMac now features a 1080p FaceTime HD camera and
          a studio-quality three-mic array. And the T2 chip acts in concert with
          the speakers to enable variable EQ and an enhanced bass response, so
          all your content can have big, balanced high-fidelity sound.
        </span>
      </div>
      <div class="images">
        <img class="camera" :src="genLink('camera.jpg')" />
        <img class="info" :src="genLink('camera-info.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowStorage',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-cam-speaker {
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

      .camera {
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
