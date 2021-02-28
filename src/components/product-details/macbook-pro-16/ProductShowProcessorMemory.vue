<template>
  <div class="product-nano-glass">
    <div class="wrapper">
      <div class="processor">
        <div class="title">Processor and Memory</div>
        <div class="desc">
          <span>From fast to fasten your seatbelt.</span>
          <span>
            iMac and powerful processors go hand in hand. Up to a 6-core Intel
            Core i7 processor gives the 21.5‑inch iMac all the power you need
            for creating in Photoshop, editing video, or making music. And the
            27-inch model offers up to a 10-core Intel Core i9 processor to sail
            through heavy tasks like layering dozens of audio tracks or
            compiling and testing code.
          </span>
        </div>
        <div class="images">
          <img class="processor" :src="genLink('processor.png')" />
          <img class="info" :src="genLink('processor-info.png')" />
        </div>
      </div>

      <div class="memory">
        <img class="image" :src="genLink('memory.png')" />
        <div class="desc">
          <span>More memory. For major processing.</span>
          <span>
            The 21.5‑inch iMac can be configured to a formidable 32GB of memory.
            And the 27‑inch iMac can now be configured to 128GB — double the
            capacity of the previous generation — to fly through the most
            complex pro workflows up to twice as fast.
          </span>
        </div>
        <img class="info" :src="genLink('memory-info.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowProcessorMemory',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-nano-glass {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1rem;

  .wrapper {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.2rem, bold);
      font-family: 'San Francisco Bold', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.32rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.38rem;
      margin-top: 0.1rem;
      width: 7.5rem;
      letter-spacing: 0.005rem;

      span:first-child {
        color: #000;
      }
    }

    .images {
      margin-top: 0.5rem;

      .processor {
        @include sizeWH(9rem, auto);
        margin-left: -0.5rem;
      }
      .info {
        @include sizeWH(7.4rem, auto);
      }
    }
  }

  .memory {
    margin-top: 0.7rem;
    .image {
      @include sizeWH(8rem, auto);
    }
    .desc {
      @include textMixin(#86868b, 0.15rem, bold);
      line-height: 0.23rem;
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      width: 7rem;

      span:first-child {
        color: #000;
      }
    }
    .info {
      @include sizeWH(9rem, auto);
      margin-top: 0.3rem;
      margin-left: -0.2rem;
    }
  }
}
</style>
