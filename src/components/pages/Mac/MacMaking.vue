<template>
  <div class="mac-making">
    <div class="title">What makes a Mac a Mac?</div>
    <div class="frame-banner">
      <img class="banner" :src="genMakingJpg('banner')" />
      <img class="logo" :src="genMakingPng('logo-bigsur')" />
      <div class="tagline">Doing it all, in all new ways.</div>
      <div class="buttons">
        <button class="btn-update">Update now</button>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>

    <div class="row">
      <div class="continuity">
        <img :src="genMakingJpg('continuity')" />
        <div class="title">Continuity</div>
        <div class="subtitle">
          <div>All your devices.</div>
          <div>One seamless experience.</div>
        </div>
        <button class="btn-learn">Learn more</button>
      </div>
      <div class="icloud">
        <div class="title">iCloud</div>
        <div class="subtitle">
          <div>Store it all. Access it</div>
          <div>anywhere.</div>
        </div>
        <button class="btn-learn">Learn more</button>
        <img :src="genMakingJpg('icloud')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacMaking',

  methods: {
    genMakingJpg(path) {
      return this.$assetsUrl(`pages/mac/making/${path}.jpg`);
    },
    genMakingPng(path) {
      return this.$assetsUrl(`pages/mac/making/${path}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mac-making {
  .title {
    @include textMixin(#000, 0.6rem, bold);
    margin-top: 1.5rem;
  }
  .frame-banner {
    @include sizeWH(100%, 6rem);
    margin-top: 0.5rem;
    position: relative;

    .banner {
      @include sizeWH(100%, 100%);
      object-fit: fill;
    }

    .logo {
      @include alignCenter();
      @include sizeWH(1.7rem, 0.26rem);
      margin-top: -0.6rem;
    }
    .tagline {
      @include alignCenter();
      @include textMixin(#fff, 0.47rem, bold);
      margin-top: 0rem;
    }
    .buttons {
      @include alignCenter();
      margin-top: 0.54rem;

      .btn-update,
      .btn-learn {
        @include textMixin(#fff, 0.18rem);
        border: none;
        background: none;
        margin-right: 0.15rem;
      }
    }
  }
}

.row {
  @include flexCenter(row);
  margin-top: 0.3rem;
  justify-content: space-around;

  .continuity {
    @include sizeWH(49%, 6.4rem);
    margin-right: 0.3rem;
    background: #fafafa;
    position: relative;

    img {
      @include position(absolute, $bottom: 0.5rem, $left: 0);
      @include sizeWH(100%, 3.1rem);
      object-fit: cover;
      object-position: 28% 0;
    }
  }

  .icloud {
    @extend .continuity;
    margin-right: 0;

    img {
      @include sizeWH(auto, 2.4rem);
      left: 0.75rem;
      top: 2.9rem;
    }
  }

  .continuity,
  .icloud {
    .title {
      @include textMixin(#000, 0.26rem, bold);
      margin-top: 0.5rem;
    }
    .subtitle {
      @include textMixin(#000, 0.48rem, bold);
      margin: 0 auto;
    }
    .btn-learn {
      @include textMixin(#0171e3, 0.19rem);
      margin-top: 0.1rem;
      border: none;
      background: none;
    }
  }
}
</style>
