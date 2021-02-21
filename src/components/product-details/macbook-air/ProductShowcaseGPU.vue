<template>
  <div class="showcase-gpu">
    <img class="overlay" :src="genLink('graphics.jpg')" alt="" />
    <div class="content">
      <div class="topic">GPU</div>
      <div class="title">
        <div>8-core GPU</div>
        <div>Plays hard.</div>
        <div>Works wonders.</div>
      </div>
      <div class="desc">
        <div>Up to</div>
        <div>5x</div>
        <div>faster graphics</div>
      </div>
      <div class="btn-learn" @click="$router.push('mac/m1')">
        See how M1 revs up graphics
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowcaseGPU',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-gpu {
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
    margin-top: 0.5rem;

    div {
      margin-bottom: -0.1rem;

      &:first-child {
        color: #4693ad;
      }
    }
  }

  .desc {
    @include textMixin(#fff, 0.23rem);
    @include position(absolute, $top: 1rem, $right: 1rem);
    @include flexCenter(column);
    margin-top: 0.3rem;
    width: 4rem;
    font-family: 'San Francisco Medium', sans-serif;

    div:nth-child(2) {
      font-size: 1rem;
      font-family: 'San Francisco Bold', sans-serif;
    }
  }
  .btn-learn {
    @include textMixin(#fff, 0.15rem, bold);
    @include position(absolute, $bottom: 0.3rem, $left: 0.3rem);
    border: #fff solid 0.02rem;
    margin-top: 0.3rem;
    padding: 0.04rem 0.2rem;
    display: inline-block;
    border-radius: 0.2rem;
    cursor: pointer;
  }
}
</style>
