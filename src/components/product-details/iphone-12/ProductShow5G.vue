<template>
  <div class="product-show-5g">
    <div class="container">
      <div class="title">
        <div>5G speed</div>
        <div>OMGGGGG.</div>
      </div>
      <div class="subtitle">
        5G on iPhone is superfast. So you can download movies on the fly. Stream
        higher-quality video. Or FaceTime in HD over cellular. With lots less
        lag. And you can do it in more places, because iPhone 12 has the
        broadest 5G coverage worldwide
      </div>
      <div class="note">iPhone makes the most of 5G</div>
      <img class="phone" :src="genLink('5g.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShow5G',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-5g {
  @include sizeWH(100%, auto);

  .container {
    @include sizeWH(100%, 8rem);
    padding-top: 0.5rem;
    margin-top: 0.4rem;
    position: relative;
    background: #f2f2f2;

    .title {
      @include textMixin(#000, 0.6rem, $align: left);
      @include position(absolute, $top: 1.7rem, $left: 7.5rem);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0 auto;
      width: 4rem;

      div:first-child {
        color: #86868b;
      }
    }

    .subtitle {
      @include textMixin(#86868b, 0.22rem, bold, $align: left);
      @include position(absolute, $top: 3.2rem, $left: 7.5rem);
      font-family: 'San Francisco', sans-serif;
      margin: 0.3rem auto;
      width: 3.7rem;

      border-bottom: #000 solid 0.02rem;
      padding-bottom: 0.3rem;
    }

    .note {
      @include position(absolute, $top: 6rem, $left: 7.5rem);
      @include textMixin(#000, 0.25rem, bold, $align: left);
    }

    .phone {
      @include position(absolute, $bottom: 0, $left: 2.3rem);
      @include sizeWH(5rem, 10rem);
      object-fit: cover;
      object-position: 10% -120%;
    }
  }
}
</style>
