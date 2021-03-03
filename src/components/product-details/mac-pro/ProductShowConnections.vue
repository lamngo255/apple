<template>
  <div class="product-show-security">
    <div class="wrapper">
      <div class="title">HIGH-SPEED CONNECTIONS</div>
      <div class="desc">
        <span>Powerful I/O at hand.</span>
        <span>
          Mac Pro has extremely high‑performance I/O, and lots of it. It begins
          with four Thunderbolt 3 ports, two USB-A ports, and two 10Gb Ethernet
          ports. And with every MPX Module you add you get more capability.
          Connect up to 12 4K displays or up to six Pro Display XDRs from Apple
          and see your work with over 120 million pixels. It’s now easy to
          expand at will.
        </span>
      </div>
    </div>

    <div class="container">
      <div class="inner-wrapper">
        <div class="left">
          <img class="image" :src="genLink('rear-expansion.jpg')" />
          <div class="text">
            <span>Rear expansion.</span>
            <span>
              With up to 12 Thunderbolt 3 ports, Mac Pro doesn’t just have room
              for more ports than any Mac, it integrates them elegantly with
              each new module added.
            </span>
          </div>
        </div>
        <div class="right">
          <img class="image" :src="genLink('top-case.jpg')" />
          <div class="text">
            <span>Top case.</span>
            <span>
              Two convenient ports on the top allow quick and easy connections
              to your Thunderbolt 3–compatible devices.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowSecurity',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/mac-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-security {
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
    margin-top: 0.6rem;

    .inner-wrapper {
      @include flexCenter(row);

      .image {
        @include sizeWH(5.7rem, auto);
        margin-bottom: 0.3rem;
      }

      .left,
      .right {
        display: flex;
        flex-flow: column wrap;
        margin-right: 0.3rem;

        .text {
          @include textMixin(#86868b, 0.15rem, bold);
          text-align: left;
          line-height: 0.2rem;
          margin-top: 0.2rem;
          width: 5rem;

          span:first-child {
            color: #000;
          }
        }
      }
    }
  }
}
</style>
