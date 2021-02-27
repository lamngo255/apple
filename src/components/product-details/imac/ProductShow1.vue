<template>
  <div class="product-show1">
    <div class="title">iMac</div>
    <div class="images">
      <img class="monitor" :src="genLink('monitor-large.jpg')" />
      <img class="keyboard" :src="genLink('keyboard.jpg')" />
      <video autoplay playsinline muted>
        <source :src="genLink('showcase.mp4')" />
      </video>
    </div>
    <div class="desc">
      <span>The all-in-one for all.</span>
      <span>
        If you can dream it, you can do it on iMac. It’s beautifully designed,
        incredibly intuitive, and packed with powerful tools that let you take
        any idea to the next level. And the new 27-inch model elevates the
        experience in every way, with faster processors and graphics, expanded
        memory and storage, enhanced audio and video capabilities, and an even
        more stunning Retina 5K display. It’s the desktop that does it all —
        better and faster than ever.
      </span>
    </div>

    <div class="imac-demo">
      <div class="left">
        <img class="21-inch" :src="genLink('21inch-imac.jpg')" />
        <div class="wrapper">
          <div class="title">21.5-inch iMac</div>
          <div class="subtitle">Starting at $1099</div>
        </div>
      </div>
      <div class="right">
        <img class="27-inch" :src="genLink('27inch-imac.jpg')" />
        <div class="wrapper">
          <div class="new">New</div>
          <div class="title">27-inch iMac</div>
          <div class="subtitle">Starting at $1799</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShow1',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show1 {
  @include sizeWH(100%, auto);
  background: #f5f5f7;
  padding-top: 0.2rem;
  padding-bottom: 0.1rem;

  .title {
    @include textMixin(#000, 1.2rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
  }
  .images {
    position: relative;
    .monitor {
      @include sizeWH(9rem, auto);
    }
    .keyboard {
      @include sizeWH(9rem, auto);
    }
    video {
      @include position(absolute, $top: 0.33rem, $left: 2.6rem);
      @include sizeWH(8.1rem, auto);
    }
  }
  .desc {
    @include textMixin(#86868b, 0.32rem, 600, $align: left);
    font-family: 'San Francisco', sans-serif;
    width: 60%;
    margin: 0.5rem auto 0;

    span:first-child {
      color: #000;
    }
  }

  .imac-demo {
    @include flexCenter(row);
    align-items: flex-start;
    margin-top: 0.5rem;

    .title {
      @include textMixin(#000, 0.27rem, bold);
    }

    .left,
    .right {
      img {
        @include sizeWH(auto, 7rem);
        margin-bottom: 0.4rem;
      }

      .wrapper {
        @include sizeWH(auto, 1rem);

        .new {
          @include textMixin(#f56300, 0.15rem, bold);
        }
        .title {
          @include textMixin(#000, 0.14rem, bold);
          margin-top: 0.05rem;
        }
        .subtitle {
          @include textMixin(#86868b, 0.13rem);
          margin-top: 0.05rem;
        }
      }
    }

    .left .wrapper {
      margin-top: 0.23rem;
    }
  }
}
</style>
