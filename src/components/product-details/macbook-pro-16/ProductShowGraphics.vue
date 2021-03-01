<template>
  <div class="product-show-graphics">
    <div class="container">
      <div class="title">
        <div>Graphics</div>
        <div>Bending reality takes</div>
        <div>bandwidth.</div>
      </div>

      <div class="images">
        <div class="producer">
          <div class="text">
            <div class="quote">
              <div>”This is an amazing amount</div>
              <div>of power to carry around.”</div>
            </div>
            <div class="author">Charmaine Chan</div>
            <div class="role">
              Visual Effects Artist Industrial Light & Magic
            </div>
          </div>

          <img :src="genLink('graphics.jpg')" />
        </div>
        <img class="fallback" :src="genLink('graphics-fallback.jpg')" />
        <div class="note">
          The <b>AMD Radeon Pro 5000M series</b> delivers the most graphics
          horsepower ever in a MacBook Pro. The 16-inch MacBook Pro base model
          is over two times faster than the previous-generation base model, for
          seamless playback and faster rendering of ultra-high-definition video.
        </div>
        <div class="note">
          For working on graphics-intensive projects like 3D rendering or
          high-end game development, you can supercharge your MacBook Pro with
          the optional Radeon Pro 5600M. With its <b>40 compute units</b> and
          <b>8GB of High Bandwidth Memory</b>, this powerhouse GPU brings a new
          level of desktop-class graphics power to MacBook Pro.
        </div>

        <img class="stats" :src="genLink('graphics-stats.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowGraphics',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-graphics {
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

    .stats {
      @include sizeWH(8rem, auto);
      margin-top: 0.6rem;
    }
  }
}
</style>
