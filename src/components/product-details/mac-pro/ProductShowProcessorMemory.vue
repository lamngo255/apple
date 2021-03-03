<template>
  <div class="product-show-processor-memory">
    <div class="wrapper">
      <div class="title">PROCESSOR AND MEMORY</div>
      <div class="desc">
        <span>Up to 28 cores of power. Create without constraint.</span>
        <span>
          Mac Pro is designed for pros who need the ultimate in CPU performance.
          From production rendering to playing hundreds of virtual instruments
          to simulating an iOS app on multiple devices at once, it’s exceedingly
          capable. At the heart of the system is an Intel Xeon processor with up
          to 28 cores — the most ever in a Mac. In addition, large L2 and shared
          L3 caches and 64 PCI Express lanes provide massive bandwidth in and
          out of the processor.
        </span>
      </div>
    </div>

    <div class="container">
      <img class="processor" :src="genLink('processor.png')" />
    </div>

    <div class="container-2">
      <div class="left">
        <span>Engineered to go all out. All the time.</span>
        <span>
          Squeezing every possible ounce of performance out of the processor
          means giving it a lot of power. In this case, over 300 watts. A
          massive heat sink keeps the system cool, enabling it to run fully
          unconstrained. Heat pipes move heat away from the chip, dispersing it
          along aluminum fin stacks. While three axial fans move air through the
          system.
        </span>
      </div>
      <div class="right">
        <img :src="genLink('heat-sink.png')" />
      </div>
    </div>

    <div class="container-3">
      <div class="left">
        <img :src="genLink('memory.png')" />
      </div>
      <div class="right">
        <div class="inner-wrapper">
          <span>Forget everything you know about memory.</span>
          <span>
            A multicore workstation processor needs lots of memory to feed it.
            Featuring six channels of superfast ECC memory and 12 physical DIMM
            slots, Mac Pro allows for up to 1.5TB of memory. So pros working
            with large projects, analyzing huge data sets, or running multiple
            pro applications can make fast work out of all kinds of work. And
            while typical towers cram memory into hard-to-reach places, Mac Pro
            utilizes a two-sided logic board, making it easy to access.
          </span>
        </div>
        <div class="text">Up to 2933MHz DDR4 ECC memory</div>
        <div class="text">Up to 140GB/s memory bandwidth</div>
        <div class="text">Six-channel memory system</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowProcessorMemory',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/mac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-processor-memory {
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

    .processor {
      @include sizeWH(85%, auto);
    }
  }

  .container-2 {
    @include flexCenter(row);
    margin-top: 0.3rem;

    .left {
      @include textMixin(#86868b, 0.16rem, bold, $align: left);
      font-family: 'San Francisco Regular', sans-serif;
      margin-top: 0.2rem;
      margin-right: 1.4rem;
      width: 5rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }

    .right {
      img {
        @include sizeWH(5.6rem, auto);
      }
    }
  }

  .container-3 {
    @include flexCenter(row);
    margin-top: 0.3rem;

    .left {
      img {
        @include sizeWH(5.6rem, auto);
      }
    }

    .right {
      display: flex;
      flex-flow: column wrap;
      margin-left: 1.4rem;
      width: 4.6rem;

      .inner-wrapper {
        @include textMixin(#86868b, 0.15rem, bold, $align: left);
        font-family: 'San Francisco Regular', sans-serif;
        letter-spacing: 0.005rem;
        line-height: 0.24rem;
        margin-bottom: 0.2rem;
      }

      .text {
        @include textMixin(#000, 0.25rem, bold, $align: left);
        margin-top: 0.1rem;
        font-family: 'San Francisco Regular', sans-serif;
      }

      span:first-child {
        color: #000;
      }
    }
  }
}
</style>
