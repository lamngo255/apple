<template>
  <div class="showcase-bigsur">
    <img class="overlay" :src="genLink('big-sur-background.jpg')" />

    <div class="content">
      <div class="topic">macOS Big Sur</div>
      <div class="title">The power of macOS Big Sur on M1.</div>
      <div class="desc">
        Developed to unlock the potential of the M1 chip, macOS Big Sur
        transforms Mac with major performance benefits and so much more.
        Powerful updates for apps. A beautiful new design. Industry-leading
        privacy features and best‑in‑class security. It‘s our most powerful
        software ever — running on our most advanced hardware yet.
      </div>
    </div>
    <img class="demo" :src="genLink('big-sur.png')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowBigSur',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-bigsur {
  @include sizeWH(80%, 5rem);
  background: linear-gradient(
    to right top,
    #194189 0%,
    #3b4980 25%,
    #8738a7 100%
  );
  margin: 0.3rem auto 0;
  text-align: left;
  padding: 0.3rem;
  border-radius: 0.3rem;
  position: relative;

  .overlay {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    border-radius: 0.3rem;
  }

  .content {
    @include position(absolute, $top: 0.3rem, $left: 0.3rem);
    z-index: 1;
    .topic {
      @include textMixin(#fff, 0.19rem, bold);
    }

    .title {
      @include textMixin(#fff, 0.43rem, bold);
      display: flex;
      flex-flow: column wrap;
      font-family: 'San Francisco Bold', sans-serif;
      margin-top: 0.3rem;
      width: 3rem;

      div {
        margin-bottom: -0.1rem;

        &:first-child {
          color: #c48cfc;
        }
      }
    }

    .desc {
      @include textMixin(#fff, 0.16rem);
      margin-top: 0.3rem;
      width: 4rem;
      line-height: 0.21rem;
      font-family: 'San Francisco Medium', sans-serif;
    }
  }

  .demo {
    @include sizeWH(5.3rem, auto);
    @include position(absolute, $bottom: 0.3rem, $right: -0.01rem);
  }
}
</style>
