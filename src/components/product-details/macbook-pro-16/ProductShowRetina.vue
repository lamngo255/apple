<template>
  <div class="product-show-retina">
    <div class="wrapper">
      <div class="title">
        <div>Retina Display</div>
        <div>A big, beautiful workspace.</div>
        <div>For doing big, beautiful work.</div>
      </div>

      <div class="images">
        <div class="photographer">
          <div class="text">
            <div class="quote">
              <div>”Boundaries are meant to</div>
              <div>be pushed.”</div>
            </div>
            <div class="author">Chris Burkard</div>
            <div class="role">Adventure Photographer</div>
          </div>

          <img :src="genLink('photographer.jpg')" />
        </div>
        <img class="display-fallback" :src="genLink('display-fallback.jpg')" />
        <div class="note">
          MacBook Pro features a stunning <b>16-inch Retina display</b> — the
          largest Retina display ever in a Mac notebook. It produces
          <b>500 nits of brightness</b> for spectacular highlights and bright
          whites, while delivering deep blacks thanks to the precise photo
          alignment of liquid crystal molecules. And the
          <b>P3 wide color</b> gamut enables brilliant, true-to-life images and
          video. So no matter where you are, you’ll see your work in the best
          possible light.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowRetina',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-retina {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .wrapper {
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

      .photographer {
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
            @include textMixin(#000, 0.17rem, bold);
            margin-top: 0.1rem;
          }
          .role {
            @include textMixin(#000, 0.17rem);
          }
        }

        img {
          @include sizeWH(100%, auto);
        }
      }
    }

    .display-fallback {
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
