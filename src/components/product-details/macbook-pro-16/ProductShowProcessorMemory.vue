<template>
  <div class="product-show-processor-memory">
    <div class="container">
      <div class="title">
        <div>Processor and Memory</div>
        <div>Working at the speed</div>
        <div>of thought.</div>
      </div>

      <div class="images">
        <div class="producer">
          <div class="text">
            <div class="quote">
              <div>”This MacBook Pro is a</div>
              <div>game changer.”</div>
            </div>
            <div class="author">Oak Felder</div>
            <div class="role">GRAMMY®️-Nominated Songwriter and Producer</div>
          </div>

          <img :src="genLink('producer.jpg')" />
        </div>
        <img
          class="processor-fallback"
          :src="genLink('processor-fallback.jpg')"
        />
        <div class="note">
          The 16-inch MacBook Pro brings a whole new class of performance to the
          notebook. Thanks to a more advanced thermal design, the
          <b>Intel Core i9 processor</b> with up to 8 cores and 16 threads of
          processing power sustains <b>higher performance</b> for longer periods
          of time — and delivers up to 2.1 times the performance of a quad-core
          MacBook Pro. So whether you’re layering dozens of tracks and effects,
          rendering 3D models, or compiling and testing code, you’ll be doing it
          in no time flat.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowProcessorMemory',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-processor-memory {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .container {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.6rem, bold);
      display: flex;
      flex-flow: column wrap;
      font-family: 'San Francisco Regular', sans-serif;

      div:first-child {
        color: #acacac;
      }
    }
    .desc {
      @include textMixin(#86868b, 0.32rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin-top: 0.1rem;
      letter-spacing: 0.005rem;
      width: 7rem;

      span:first-child {
        color: #000;
      }
    }
    .images {
      margin-top: 0.5rem;

      .producer {
        @include sizeWH(7rem, auto);
        background: #f2f2f2;

        .text {
          margin: 0rem auto 0;
          width: 62%;

          .quote {
            @include textMixin(#000, 0.38rem, bold);
            padding-top: 0.5rem;

            div:first-child {
              margin-left: -0.14rem;
            }
          }
          .author {
            @include textMixin(#000, 0.16rem, bold);
            margin-top: 0.1rem;
          }
          .role {
            @include textMixin(#000, 0.15rem);
            width: 40%;
            margin-top: 0.03rem;
          }
        }

        img {
          @include sizeWH(100%, auto);
        }
      }
    }

    .processor-fallback {
      @include sizeWH(8.5rem, auto);
      margin-left: -0.8rem;
      margin-top: 0.5rem;
    }

    .note {
      @include textMixin(#86868b, 0.29rem, bold, $align: left);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin: 0.5rem auto 0;
      letter-spacing: 0.007rem;

      b {
        color: #000;
        font-weight: bold;
      }
    }
  }
}
</style>
