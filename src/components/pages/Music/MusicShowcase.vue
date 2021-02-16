<template>
  <div class="music-showcase">
    <div class="section-1">
      <video autoplay playsinline loop muted>
        <source :src="genLink('music.mp4')" />
      </video>
      <img class="logo-music" :src="genLink('logo-music.png')" />
      <div class="title">Music lives here.</div>
      <div class="buttons">
        <button class="btn-try">Try it free*</button>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`pages/music/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.music-showcase {
  .section-1 {
    position: relative;
    video {
      @include sizeWH(100%, 5.6rem);
      object-fit: cover;
      object-position: bottom center;
    }
    .logo-music {
      @include sizeWH(0.8rem, auto);
      @include alignCenter();
      top: 3.1rem;
    }
    .title {
      @include textMixin(#fff, 0.55rem, bold);
      @include alignCenter();
      top: 3.95rem;
    }
    .buttons {
      @include flexCenter(row);
      @include alignCenter();
      top: 4.8rem;

      .btn-try {
        @include textMixin(#fff, 0.21rem);
        background: #fa233c;
        padding: 0.12rem 0.2rem;
        border-radius: 0.3rem;
        margin-right: 0.3rem;
      }
      .btn-learn {
        @include textMixin(#fff, 0.21rem);
        background: none;
      }
    }
  }
}
</style>
