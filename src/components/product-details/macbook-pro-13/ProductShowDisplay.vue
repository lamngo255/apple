<template>
  <div class="showcase-display">
    <img class="overlay" :src="genLink('display.jpg')" alt="" />
    <div class="content">
      <div class="topic">P3 wide color gamut</div>
      <div class="title">
        <div>A wider palette</div>
        <div>of colors</div>
        <div>on display.</div>
      </div>
      <div class="desc">
        <div>25%</div>
        <div>more colors than sRGB</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowDisplay',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-display {
  @include sizeWH(80%, 5rem);
  background: linear-gradient(
    to right top,
    #194189 0%,
    #3b4980 25%,
    #8738a7 100%
  );
  margin: 0.2rem auto 0;
  text-align: left;
  border-radius: 0.3rem;
  position: relative;

  .overlay {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    border-radius: 0.3rem;
  }

  .content {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    z-index: 1;
    padding: 0.3rem;
  }

  .topic {
    @include textMixin(#fff, 0.19rem, bold);
  }

  .title {
    @include textMixin(#fff, 0.62rem, bold);
    display: flex;
    flex-flow: column wrap;
    font-family: 'San Francisco Bold', sans-serif;
    margin-top: 0.9rem;

    div {
      margin-bottom: -0.1rem;
    }
  }

  .desc {
    @include textMixin(#fff, 0.23rem);
    @include position(absolute, $top: 1rem, $right: 1rem);
    @include flexCenter(column);
    margin-top: 0.7rem;
    width: 4rem;
    font-family: 'San Francisco Medium', sans-serif;

    div:nth-child(1) {
      font-size: 1rem;
      font-family: 'San Francisco Bold', sans-serif;
    }
  }
}
</style>
