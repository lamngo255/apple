<template>
  <div class="product-showcase">
    <div class="container">
      <div class="title">Mac Pro</div>
      <div class="images">
        <img class="endframe" :src="genLink('hero-endframe.jpg')" />
        <img class="case" :src="genLink('hero-case.jpg')" />
      </div>
    </div>

    <div class="desc">
      <span>Power to change everything.</span>
      <span>
        Say hello to a Mac that is extreme in every way. With the greatest
        performance, expansion, and configurability yet, it is a system created
        to let a wide range of professionals push the limits of what is
        possible.
      </span>
    </div>

    <div class="buttons">
      <div class="btn-watch">Watch the film</div>
      <a
        class="btn-view"
        href="https://www.apple.com/mac-pro/pdf/Mac_Pro_White_Paper_Feb_2020.pdf"
        target="_blank"
      >
        View the Mac Pro Technology White Paper (PDF)
      </a>
    </div>

    <div class="intro">
      <img class="left" :src="genLink('intro-front.jpg')" />
      <video class="right" autoplay playsinline muted>
        <source :src="genLink('intro-back.mp4')" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/mac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-showcase {
  @include sizeWH(100%, auto);
  padding-top: 0.2rem;
  padding-bottom: 0.1rem;

  .container {
    background: #f2f2f2;

    .title {
      @include textMixin(#000, 1.2rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin-bottom: 0.3rem;
      padding-top: 0.4rem;
    }
    .images {
      position: relative;
      .endframe {
        @include sizeWH(9.5rem, auto);
      }
      .case {
        @include sizeWH(9.5rem, 2.5rem);
        object-fit: cover;
        object-position: 10% 0%;
        margin-top: -0.1rem;
      }
    }
  }

  .desc {
    @include textMixin(#86868b, 0.32rem, bold, $align: left);
    font-family: 'San Francisco Regular', sans-serif;
    padding-left: 0.1rem;
    margin-top: 0.4rem;
    width: 50%;

    span:first-child {
      color: #000;
    }
  }

  .buttons {
    @include textMixin(#000, 0.24rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    margin-left: 0.1rem;

    .btn-watch {
      margin-top: 0.2rem;
    }
    .btn-view {
      margin-top: 0.2rem;
      color: #000;

      &:hover {
        color: #1452bd;
      }
    }
  }

  .intro {
    @include flexCenter(row);
    margin-top: 1.5rem;
    .left {
      @include sizeWH(auto, 7rem);
      margin-right: 0.3rem;
    }
    .right {
      @include sizeWH(auto, 7rem);
    }
  }
}
</style>
