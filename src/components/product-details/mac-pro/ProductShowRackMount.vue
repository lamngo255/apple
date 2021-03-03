<template>
  <div class="product-show-rack">
    <div class="wrapper">
      <div class="title">RACK MOUNT</div>
      <div class="desc">
        <span>Different form. Same powerful factors.</span>
        <span>
          Mac Pro is also available in a rack mount — with all the same
          performance features and configuration options as the tower — for
          spaces better suited to a rack design. The rack mount features the
          airflow‑maximizing 3D lattice and stainless steel handles on the front
          and tool‑less stainless steel slide rails in place of feet or optional
          wheels.
        </span>
      </div>
    </div>

    <div class="container">
      <img class="video" :src="genLink('rack-mount.jpg')" />
    </div>

    <div class="container-2">
      <img class="left" :src="genLink('rack-left.jpg')" />
      <img class="right" :src="genLink('rack-right.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowRackMount',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/mac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-rack {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1.2rem;

  .wrapper {
    @include sizeWH(100%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.14rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.3rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.37rem;
      margin-top: 0.2rem;
      width: 8rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }
  }

  .container {
    @include sizeWH(100%, auto);
    background: #f2f2f2;
    margin-top: 0.6rem;
    padding-top: 1rem;

    .video {
      @include sizeWH(100%, auto);
    }
  }

  .container-2 {
    @include flexCenter(row);
    margin-top: 0.4rem;

    img {
      @include sizeWH(5.7rem, auto);
    }

    .left {
      margin-right: 0.45rem;
    }
  }
}
</style>
