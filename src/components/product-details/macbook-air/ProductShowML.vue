<template>
  <div class="showcase-ml">
    <div class="topic">Machine Learning</div>
    <div class="left">
      <img class="demo" :src="genLink('machine-learning.png')" alt="" />
    </div>
    <div class="right">
      <div class="desc">
        <span>
          Up to 9x faster. Even for a 16‑core Neural Engine, that’s a lot to
          process.
        </span>
        <span>
          Apps on MacBook Air can use machine learning (ML) to automatically
          retouch photos like a pro, make smart tools such as magic wands and
          audio filters more accurate at auto‑detection, and so much more.
          That’s not just brain power — that’s the power of a full stack of ML
          technologies.
        </span>
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
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-ml {
  @include sizeWH(80%, 5.5rem);
  background: linear-gradient(to bottom, #061420 0%, #151516 100%);
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

    .desc {
      @include textMixin(#a1a1a6, 0.24rem);
      margin-top: 0.3rem;
      width: 4rem;
      line-height: 0.28rem;
      font-family: 'San Francisco Bold', sans-serif;

      span:first-child {
        color: #fff;
      }
    }
    .btn-learn {
      @include textMixin(#fff, 0.15rem, bold);
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
