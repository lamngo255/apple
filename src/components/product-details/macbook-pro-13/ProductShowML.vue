<template>
  <div class="showcase-ml">
    <div class="topic">Machine Learning</div>
    <div class="left">
      <img class="demo" :src="genLink('machine-learning.png')" alt="" />
    </div>
    <div class="right">
      <div class="desc">
        <span> 16-core Neural Engine. Smarts, meet speed. </span>
        <span>
          Machine learning (ML) brings task‑smashing speed and automation to
          video analysis, voice recognition, image processing, and more. And the
          M1 chip with 16‑core Neural Engine and full stack of technologies
          takes ML performance on MacBook Pro into the stratosphere.
        </span>
      </div>
      <div class="extra-1">
        <div>Up to</div>
        <div>11x</div>
        <div>faster ML performance</div>
      </div>
      <div class="extra-2">
        <div>
          <span>16</span>
          <span>-core</span>
        </div>
        <div>Neural Engine</div>
      </div>

      <div class="btn-learn" @click="$router.push('mac/m1')">
        See how M1 unleashes ML
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowML',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-ml {
  @include sizeWH(80%, 5.5rem);
  background: linear-gradient(to bottom, #4c102a 0%, #151516 100%);
  margin: 0.3rem auto 0;
  text-align: left;
  padding: 0.3rem;
  border-radius: 0.3rem;
  position: relative;

  .topic {
    @include textMixin(#fff, 0.19rem, bold);
  }

  .left {
    .demo {
      @include sizeWH(5.3rem, auto);
      @include position(absolute, $bottom: 0.3rem, $left: -0.01rem);
    }
  }

  .right {
    @include position(absolute, $top: 0.9rem, $left: 5.8rem);
    height: 4.5rem;

    .desc {
      @include textMixin(#a1a1a6, 0.19rem);
      margin-top: 0.1rem;
      width: 4rem;
      line-height: 0.28rem;
      font-family: 'San Francisco Bold', sans-serif;

      span:first-child {
        color: #fff;
      }
    }

    .extra-1 {
      @include textMixin(#fff, 0.16rem);
      @include position(absolute, $top: 2.1rem, $right: -1.4rem);
      @include flexCenter(column);
      margin-top: 0.3rem;
      width: 4rem;
      font-family: 'San Francisco Medium', sans-serif;

      div:nth-child(2) {
        font-size: 0.55rem;
        font-family: 'San Francisco Bold', sans-serif;
      }
      div:last-child {
        width: 1.5rem;
        @include position(relative, $left: 0.4rem);
      }
    }

    .extra-2 {
      @extend .extra-1;
      @include position(absolute, $top: 2.2rem, $right: 1rem);

      div:first-child {
        span:first-child {
          font-size: 0.66rem;
          font-family: 'San Francisco Bold', sans-serif;
        }
        span:last-child {
          font-size: 0.4rem;
          font-family: 'San Francisco Bold', sans-serif;
        }
      }
      div:last-child {
        @include textMixin(#fff, 0.15rem);
        font-family: 'San Francisco Medium', sans-serif;
      }
    }

    .btn-learn {
      @include textMixin(#fff, 0.15rem, bold);
      @include position(absolute, $bottom: 0.3rem, $left: 0rem);
      border: #fff solid 0.02rem;
      margin-top: 0.5rem;
      padding: 0.04rem 0.2rem;
      display: inline-block;
      border-radius: 0.2rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
