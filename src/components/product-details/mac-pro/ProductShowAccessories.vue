<template>
  <div class="product-show-accessories">
    <div class="wrapper">
      <div class="title">Apple Accessories</div>
      <div class="desc">
        <span>Rechargeable. Remarkable.</span>
        <span>
          Magic Mouse 2 and Magic Keyboard pair perfectly with iMac and come
          included in the box. If you’re looking for extra functionality, Magic
          Keyboard with Numeric Keypad and Magic Trackpad 2 offer some
          impressive options.
        </span>
      </div>
      <div class="images">
        <img class="accessories" :src="genLink('accessories.jpg')" />
      </div>
      <div class="note">
        <div class="col">
          <div class="item">
            <div class="title">Magic Mouse 2</div>
            <div class="subtitle">
              A streamlined design gives the Multi-Touch mouse a solid build and
              a smooth glide for quality you can feel.
            </div>
          </div>

          <div class="item">
            <div class="title">Magic Keyboard with Numeric Keypad</div>
            <div class="subtitle">
              Whether you’re working or gaming, this keyboard makes everything
              as easy as 1-2-3.
            </div>
          </div>
        </div>

        <div class="col">
          <div class="item">
            <div class="title">Magic Keyboard</div>
            <div class="subtitle">
              Designed with a sleek, low profile and engineered for stability so
              you can type with comfort and precision.
            </div>
          </div>

          <div class="item">
            <div class="title">Magic Trackpad 2</div>
            <div class="subtitle">
              Designed with Force Touch technology, it lets you press a little
              deeper on a large, click-anywhere surface — and do a lot more.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowAccessories',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/imac/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-accessories {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 1rem;

  .wrapper {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.2rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .desc {
      @include textMixin(#86868b, 0.32rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.37rem;
      margin-top: 0.1rem;
      letter-spacing: 0.006rem;
      width: 7rem;

      span:first-child {
        color: #000;
      }
    }
    .images {
      margin-top: 0.5rem;

      .accessories {
        @include sizeWH(11rem, auto);
        margin-left: -2rem;
      }
    }
    .note {
      @include flexCenter(row);
      margin-top: 0.4rem;

      .col {
        @include flexCenter(column);
        width: 3.5rem;
        margin-right: 0.5rem;

        .item {
          margin-bottom: 0.4rem;

          .title {
            @include textMixin(#000, 0.15rem);
          }
          .subtitle {
            @include textMixin(#86868b, 0.14rem);
            margin-top: 0.03rem;
          }
        }
      }
    }
  }
}
</style>
