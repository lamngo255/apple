<template>
  <div class="chip-m1">
    <div class="intro">
      <img class="m1-big" :src="genLink('m1-big.png')" alt="" />
      <div class="title">Small chip. Giant leap.</div>
      <div class="desc">
        It’s here. Our first chip designed specifically for Mac. Packed with an
        astonishing 16 billion transistors, the Apple M1 system on a chip (SoC)
        integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a
        single tiny chip. With incredible performance, custom technologies, and
        industry-leading power efficiency,1 M1 is not just a next step for Mac —
        it’s another level entirely.
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
