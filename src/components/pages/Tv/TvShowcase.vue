<template>
  <div class="tv-showcase">
    <div class="section-1">
      <video autoplay playsinline loop muted>
        <source :src="genLink('snoopy.mp4')" />
      </video>
      <img class="logo-apple-tv" :src="genLink('logo-apple-tv.png')" />
      <img class="logo-snoopy-show" :src="genLink('logo-snoopy-show.png')" />
      <button class="btn-watch">
        <span>Watch now</span>
        <i />
      </button>
    </div>

    <div class="section-2">
      <div class="title">The Apple TV app</div>
      <div class="subtitle">All your TV. All in one app.</div>
      <div class="buttons">
        <button class="btn-open">Open app</button>
        <button class="btn-learn">Learn more</button>
      </div>
      <img class="photo" :src="genLink('apple-tv-app.png')" alt="" />
    </div>

    <div class="section-3">
      <img class="logo-tv-4k" :src="genLink('logo-tv-4k.png')" />
      <div class="title">Cinematic in every sense.</div>
      <div class="buttons">
        <button class="btn-buy">Buy</button>
        <button class="btn-learn">Learn more</button>
      </div>
      <img class="tv-4k-remote" :src="genLink('tv-4k-remote.png')" />
      <div class="note">
        Get 1 year of Apple TV+ free when you buy an Apple TV 4K
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TvShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`pages/tv/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.tv-showcase {
  .section-1 {
    position: relative;
    video {
      @include sizeWH(100%, 6rem);
      object-fit: cover;
      object-position: bottom center;
    }
    .logo-apple-tv {
      @include sizeWH(0.8rem, auto);
      @include alignCenter();
      top: 1rem;
    }
    .logo-snoopy-show {
      @include sizeWH(4rem, auto);
      @include alignCenter();
      top: 2.8rem;
    }
    .btn-watch {
      @include textMixin(#000, 0.17rem, bold);
      @include alignCenter();
      @include flexCenter(row);
      top: 4.7rem;
      background: #fff;
      border-radius: 0.4rem;
      padding: 0.12rem 0.3rem;

      i {
        @include imageCDN('pages/tv/btn-play.png', 0.22rem, 0.22rem);
        margin-left: 0.07rem;
      }
    }
  }

  .section-2 {
    @include sizeWH(100%, 8.5rem);
    margin: -0.1rem auto 0;
    background: #c5c9cd;
    padding-top: 1.4rem;
    position: relative;

    .title {
      @include textMixin(#1d1d20, 0.2rem, bold);
    }
    .subtitle {
      @include textMixin(#1d1d20, 0.6rem, bold);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.2rem;
    }

    .buttons {
      @include flexCenter(row);
      margin-top: 0.2rem;

      .btn-open {
        @include textMixin(#fff, 0.17rem);
        background: #2d71e3;
        padding: 0.07rem 0.15rem;
        border-radius: 0.3rem;
        margin-right: 0.3rem;
      }
      .btn-learn {
        @include textMixin(#2d71e3, 0.17rem);
        background: none;
      }
    }

    .photo {
      @include position(absolute, $bottom: 0, $left: 50%);
      @include sizeWH(5rem, auto);
      transform: translate(-50%, 0);
    }
  }

  .section-3 {
    @include sizeWH(100%, 8.5rem);
    padding-top: 1.5rem;
    background: radial-gradient(
      ellipse at center,
      #36383f 0%,
      #1a1d22 60%,
      #000 90%
    );
    .logo-tv-4k {
      @include sizeWH(1.5rem, auto);
    }
    .title {
      @include textMixin(#fff, 0.6rem, bold);
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.2rem;
    }
    .buttons {
      @include flexCenter(row);
      margin-top: 0.2rem;

      .btn-buy {
        @include textMixin(#fff, 0.17rem);
        background: #2d71e3;
        padding: 0.07rem 0.15rem;
        border-radius: 0.3rem;
        margin-right: 0.3rem;
      }
      .btn-learn {
        @include textMixin(#3495fa, 0.17rem);
        background: none;
      }
    }

    .tv-4k-remote {
      @include sizeWH(5rem, auto);
      margin-top: 1rem;
    }
    .note {
      @include textMixin(#fff, 0.18rem, bold);
    }
  }
}
</style>
