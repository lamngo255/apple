<template>
  <div class="showcase-cpu">
    <div class="topic">CPU</div>
    <div class="title">
      <div>8-core CPU</div>
      <div>We’re on a</div>
      <div>power chip.</div>
    </div>
    <div class="desc">
      The M1 chip makes MacBook Pro outrageously fast and powerful. Its 8‑core
      CPU rips through complex workflows and heavy workloads, with up to 2.8x
      faster processing performance than the previous generation — all with
      unbelievable energy efficiency.
    </div>
    <div class="btn-learn" @click="$router.push('mac/m1')">
      See how M1 redefines speed
    </div>
    <img class="demo" :src="genLink('cpu-demo.png')" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowCPU',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-cpu {
  @include sizeWH(80%, auto);
  background: linear-gradient(
    to right top,
    #071931 0%,
    #33274f 50%,
    #661e43 100%
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
    margin-top: 0.5rem;
    padding: 0.04rem 0.2rem;
    display: inline-block;
    border-radius: 0.2rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .demo {
    @include sizeWH(5.8rem, auto);
    @include position(absolute, $bottom: 0.3rem, $right: -0.01rem);
  }
}
</style>
