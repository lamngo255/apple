<template>
  <div class="showcase-extra">
    <div class="memory">
      <img class="overlay" :src="genLink('memory-bg.jpg')" />
      <div class="content">
        <div class="topic">Unified memory</div>
        <img class="icon" :src="genLink('icon-memory.png')" alt="" />
        <div class="title">
          <span>Runs a tight chip.</span>
          <span
            >The M1 chip brings up to 16GB of superfast unified memory. This
            single pool of high‑bandwidth, low‑latency memory allows apps to
            share data between the CPU, GPU, and Neural Engine efficiently — so
            everything you do is fast and fluid.
          </span>
        </div>
      </div>
    </div>

    <div class="storage">
      <div class="content">
        <div class="topic">SSD storage</div>
        <div class="title">
          <div>Up to</div>
          <div>2TB</div>
          <div>SSD storage.</div>
        </div>

        <div class="title-1">
          <div>Up to</div>
          <div>3.3GB/s</div>
          <div>sequential read speeds</div>
        </div>
      </div>
    </div>

    <div class="security">
      <div class="content">
        <div class="topic">Security</div>
        <div class="title">
          <img class="icon" :src="genLink('icon-unlock.png')" alt="" />
          <div>
            <div>MacBook Pro.</div>
            <div>Securely</div>
            <div>yours.</div>
          </div>
        </div>
        <div class="btn-learn" @click="$router.push('mac/m1')">
          See how M1 protects your data
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowGPU',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-13/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.showcase-extra {
  @include sizeWH(80%, 5rem);
  @include flexCenter(row);

  margin: 0.2rem auto 0;
  text-align: left;
  position: relative;

  // common
  .content {
    @include sizeWH(100%, 100%);
    @include position(absolute, 0, 0, 0, 0);
    z-index: 1;
    padding: 0.3rem;

    .topic {
      @include textMixin(#fff, 0.19rem, bold);
    }
  }

  .memory {
    @include sizeWH(33%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: linear-gradient(to bottom, #203025 0%, #151516 100%);
    margin-right: 0.2rem;

    .overlay {
      @include sizeWH(100%, 100%);
      @include position(absolute, 0, 0, 0, 0);
      border-radius: 0.3rem;
    }

    .title {
      @include textMixin(#a1a1a6, 0.2rem, bold, $align: left);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0.1rem auto 0;

      span:first-child {
        color: #fff;
      }
    }

    .icon {
      @include sizeWH(0.5rem, 0.5rem);
      margin-top: 0.8rem;
    }
  }

  .storage {
    @include sizeWH(34%, 100%);
    position: relative;
    border-radius: 0.3rem;
    background: linear-gradient(to right bottom, #1f224b 0%, #2d5d85 100%);

    .title,
    .title-1 {
      @include textMixin(#fff, 0.2rem, bold, $align: center);
      font-family: 'San Francisco', sans-serif;
      margin: 0.5rem auto 0;

      div:nth-child(2) {
        font-size: 0.65rem;
        font-family: 'San Francisco Bold', sans-serif;
      }
    }

    .btn-learn {
      @include textMixin(#fff, 0.15rem, bold);
      @include position(absolute, $bottom: 0.3rem, $left: 0.3rem);
      border: #fff solid 0.02rem;
      margin-top: 0.3rem;
      padding: 0.04rem 0.2rem;
      display: inline-block;
      border-radius: 0.2rem;
      cursor: pointer;
    }
  }

  .security {
    @include sizeWH(34%, 100%);
    position: relative;
    border-radius: 0.3rem;
    margin-left: 0.2rem;
    background: #151516;

    .title {
      @include textMixin(#a1a1a6, 0.39rem, bold, $align: center);
      @include flexCenter(column);
      font-family: 'San Francisco Bold', sans-serif;
      margin: 0.5rem auto 0;

      .icon {
        @include sizeWH(1.2rem, 1.2rem);
      }
    }

    .btn-learn {
      @include textMixin(#fff, 0.15rem, bold);
      @include position(absolute, $bottom: 0.3rem, $left: 0.5rem);
      border: #fff solid 0.02rem;
      margin: 0.3rem auto 0;
      padding: 0.04rem 0.2rem;
      display: inline-block;
      border-radius: 0.2rem;
      cursor: pointer;
    }
  }
}
</style>
