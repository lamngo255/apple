<template>
  <BaseLayout>
    <div class="main-page">
      <div class="iphone-12">
        <img :src="$assetsUrl('main-page/ip12.jpg')" />
        <div class="content">
          <div class="title">iPhone 12</div>
          <div class="subtitle">Blast past fast.</div>
          <div class="desc">
            <p>From $29.12/mo. or $699 before trade-in.</p>
            <p>Buy directly from Apple with special carrier offers.</p>
          </div>
          <div class="buttons">
            <a class="btn-learn" href="/learn">Learn more</a>
            <a class="btn-buy" href="/buy">Buy</a>
          </div>
        </div>
      </div>

      <div class="iphone-12-pro">
        <img :src="$assetsUrl('main-page/ip12-pro.jpg')" />
        <div class="content">
          <div class="title">iPhone 12 Pro</div>
          <div class="subtitle">It's a leap year.</div>
          <div class="desc">
            <p>From $41.62/mo. or $999 before trade-in.</p>
            <p>Buy directly from Apple with special carrier offers.</p>
          </div>
          <div class="buttons">
            <a class="btn-learn" href="/learn">Learn more</a>
            <a class="btn-buy" href="/buy">Buy</a>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout.vue';

export default {
  name: 'MainPage',

  components: {
    BaseLayout,
  },
};
</script>

<style lang="scss" scoped>
.iphone-12 {
  @include sizeWH(100%, 5rem);
  position: relative;

  img {
    @include sizeWH(100%, 6rem);
    z-index: 0;
    object-fit: cover;
    margin-top: -0.4rem;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .title {
      @include textMixin(#000, 0.57rem, bold);
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#000, 0.28rem);
    }
    .desc {
      @include textMixin(#86868b, 0.18rem);
      margin-top: 0.14rem;
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include position(relative, $top: 0.1rem);
        font-size: 0.22rem;
        margin-right: 0.4rem;
      }
    }
  }
}

.iphone-12-pro {
  @include sizeWH(100%, 5rem);
  position: relative;
  margin-top: 1.2rem;

  img {
    @include sizeWH(100%, 6.2rem);
    z-index: 0;
    object-fit: cover;
    margin-top: -0.3rem;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .title {
      @include textMixin(#fff, 0.57rem, bold);
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#fff, 0.28rem);
    }
    .desc {
      @include textMixin(#86868b, 0.18rem);
      margin-top: 0.14rem;
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include position(relative, $top: 0.1rem);
        font-size: 0.22rem;
        margin-right: 0.4rem;
      }
    }
  }
}
</style>
