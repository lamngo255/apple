<template>
  <div class="showcase-density-tone">
    <div class="density">
      <div class="content">
        <div class="topic">Pixel density</div>
        <img class="image" :src="genLink('density.png')" />
      </div>
    </div>

    <div class="tone">
      <img class="overlay" :src="genLink('truetone-bg.jpg')" />
      <div class="content">
        <div class="topic">True Tone technology</div>
        <div class="desc">
          <span>Good looking. And easy on the eyes.</span>
          <span>
            MacBook Pro automatically adjusts the white point of your display to
            the color temperature of your environment for a more natural viewing
            experience.
          </span>
        </div>
        <img class="image" :src="genLink('truetone.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowDensityTone',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-density-tone {
  @include sizeWH(80%, 5.2rem);
  @include flexCenter(row);

  margin: 0.2rem auto 0;
  text-align: left;
  position: relative;

  // common
  .content {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    z-index: 1;
    padding: 0.3rem;

    .topic {
      @include textMixin(#fff, 0.19rem, bold);
    }
  }

  .density {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: #181725;
    margin-right: 0.2rem;

    .desc {
      @include textMixin(#fff, 0.17rem, bold, $align: left);
      font-family: 'San Francisco', sans-serif;
      margin: 0.24rem auto 0;
    }

    .image {
      @include sizeWH(3rem, auto);
      @include alignCenter();
    }
  }

  .tone {
    @include sizeWH(50%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: linear-gradient(
      225deg,
      #1623a6 0%,
      #3343d4 29%,
      #175eac 73%,
      #176682 100%
    );

    .overlay {
      @include sizeWH(100%, 100%);
      @include position(absolute, 0, 0, 0, 0);
      border-radius: 0.3rem;
    }

    .desc {
      @include textMixin(#fff, 0.23rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0.24rem auto 0;

      span:last-child {
        color: #a1a1a6;
      }
    }

    .image {
      @include sizeWH(2.3rem, auto);
      @include position(absolute, $bottom: 0.3rem, $left: 50%);
      transform: translate(-50%, 0);
    }
  }
}
</style>
