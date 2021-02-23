<template>
  <div class="chip-m1">
    <div class="intro">
      <img class="m1-big" :src="genLink('m1-big.png')" alt="" />
      <div class="title">Small chip. Giant leap.</div>
      <div class="desc">
        Our thinnest, lightest notebook, completely transformed by the Apple M1
        chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most
        advanced Neural Engine for up to 9x faster machine learning. The longest
        battery life ever in a MacBook Air. And a silent, fanless design. This
        much power has never been this ready to go.
      </div>
      <div class="btn-learn" @click="$router.push('mac/m1')">
        Learn more about M1
      </div>
    </div>

    <video autoplay playsinline muted>
      <source :src="genLink('chip-m1.mp4')" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'ProductShow2',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.chip-m1 {
  .intro {
    @include sizeWH(60%, auto);
    margin: 0 auto;
    text-align: left;

    .m1-big {
      @include sizeWH(1.5rem, auto);
    }

    .title {
      @include textMixin(#fff, 0.6rem, bold);
      font-family: 'San Francisco Bold', sans-serif;
    }
    .desc {
      @include textMixin(#a1a1a6, 0.23rem, bold);
      width: 6rem;
    }
    .btn-learn {
      @include textMixin(#fff, 0.2rem, bold);
      margin-top: 0.2rem;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  video {
    @include sizeWH(100%, auto);
    margin: 0 auto;
  }
}
</style>
