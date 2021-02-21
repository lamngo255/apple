<template>
  <div class="showcase-cpu">
    <div class="topic">CPU</div>
    <div class="title">
      <div>8-core CPU</div>
      <div>Devours tasks.</div>
      <div>Sips battery.</div>
    </div>
    <div class="desc">
      M1 has the fastest CPU we’ve ever made. With that kind of processing
      speed, MacBook Air can take on new extraordinarily intensive tasks like
      professional-quality editing and action-packed gaming. But the 8‑core CPU
      on M1 isn‘t just up to 3.5x faster than the previous generation — it
      balances high-performance cores with efficiency cores that can still crush
      everyday jobs while using just a tenth of the power.
    </div>
    <div class="btn-learn" @click="$router.push('mac/m1')">
      See how M1 redefines speed
    </div>
    <img class="demo" :src="genLink('cpu-demo.png')" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowcaseCPU',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-cpu {
  @include sizeWH(80%, auto);
  background: linear-gradient(
    to right top,
    #194189 0%,
    #3b4980 25%,
    #8738a7 100%
  );
  margin: 0 auto;
  text-align: left;
  padding: 0.3rem;
  border-radius: 0.3rem;
  position: relative;

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
        color: #c48cfc;
      }
    }
  }

  .desc {
    @include textMixin(#fff, 0.16rem);
    margin-top: 0.3rem;
    width: 4rem;
    line-height: 0.21rem;
    font-family: 'San Francisco Medium', sans-serif;
  }
  .btn-learn {
    @include textMixin(#fff, 0.15rem, bold);
    border: #fff solid 0.02rem;
    margin-top: 0.3rem;
    padding: 0.04rem 0.2rem;
    display: inline-block;
    border-radius: 0.2rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .demo {
    @include sizeWH(5.3rem, auto);
    @include position(absolute, $bottom: 0.3rem, $right: -0.01rem);
  }
}
</style>
