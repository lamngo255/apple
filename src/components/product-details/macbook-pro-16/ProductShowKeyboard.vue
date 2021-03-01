<template>
  <div class="product-show-keyboard">
    <div class="container">
      <div class="title">
        <div>Keyboard</div>
        <div>There’s magic in a perfect</div>
        <div>workspace.</div>
      </div>

      <div class="images">
        <div class="producer">
          <div class="text">
            <div class="quote">
              <div>”Everything is where it</div>
              <div>should be, and everything</div>
              <div>makes sense.”</div>
            </div>
            <div class="author">Laure De Mey</div>
            <div class="role">Game Developer ustwo games</div>
          </div>

          <img :src="genLink('keyboard.jpg')" />
        </div>
        <img class="fallback" :src="genLink('keyboard-fallback.jpg')" />
        <div class="note">
          The 16-inch MacBook Pro takes workflow efficiency to a new level. The
          <b>Magic Keyboard</b> features a refined
          <b>scissor mechanism with 1 mm travel</b> for a responsive,
          comfortable, and quiet typing experience. The <b>Touch Bar</b> puts
          powerful shortcuts front and center, and <b>Touch ID</b> provides fast
          authentication. A dedicated <b>Escape key</b> allows quick switching
          between modes and views. And the <b>inverted-T arrow keys</b> enable
          fluid navigation whether you’re flying through lines of code,
          navigating spreadsheets, or gaming.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowKeyboard',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-keyboard {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 0.3rem;
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
            font-family: 'San Francisco Regular', sans-serif;
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

    .fallback {
      @include sizeWH(8.5rem, auto);
      margin-left: -0.8rem;
      margin-top: 0.5rem;
    }

    .note {
      @include textMixin(#86868b, 0.29rem, bold, $align: left);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin: 0.5rem auto -0.1rem;
      letter-spacing: 0.007rem;

      b {
        color: #000;
        font-weight: bold;
      }
    }

    .touchbar {
      position: relative;
      img {
        @include sizeWH(8rem, auto);
        margin-top: 0.6rem;
      }
      video {
        // @include position(absolute, $top: 1rem, $left: 1rem);
        @include sizeWH(7rem, auto);
        z-index: 2;
      }
    }
  }
}
</style>
