<template>
  <div class="product-show-audio">
    <div class="container">
      <div class="title">
        <div>Audio</div>
        <div>Bigger bass.</div>
        <div>Better mic.</div>
      </div>

      <div class="note">
        MacBook Pro has a big voice. The
        <b>six-speaker sound system</b> produces room-filling wide stereo sound
        like you’ve never heard from a notebook before.
        <b>Dual force-cancelling woofers</b> dramatically reduce system
        vibration for a clearer, more natural sound and a half-octave lower
        range to the bass. And the <b>studio-quality three-mic array</b> rivals
        professional third-party microphones, for creating superclean podcasts
        or music recordings on the go.
      </div>

      <div class="images">
        <div class="left">
          <img class="image" :src="genLink('audio-1.jpg')" />
          <div class="desc">
            Six-speaker sound system with dual force-cancelling woofers.
          </div>
        </div>
        <div class="right">
          <img class="image" :src="genLink('audio-2.jpg')" />
          <div class="desc">
            Studio-quality three-mic array with high signal-to-noise ratio.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowAudio',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-audio {
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
      font-family: 'San Francisco Regular', sans-serif;

      div:first-child {
        color: #acacac;
      }
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

    .note {
      @include textMixin(#86868b, 0.29rem, bold, $align: left);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin: 0.5rem auto -0.1rem;
      letter-spacing: 0.007rem;

      b {
        color: #000;
        font-weight: bold;
      }
    }

    .images {
      @include flexCenter(row);
      margin-top: 0.6rem;

      .left,
      .right {
        display: flex;
        flex-flow: column wrap;
        margin-right: 0.2rem;

        .image {
          @include sizeWH(auto, 6rem);
        }
        .desc {
          @include textMixin(#888888, 0.14rem, bold);
          width: 2rem;
          line-height: 0.2rem;
        }
      }
    }
  }
}
</style>
