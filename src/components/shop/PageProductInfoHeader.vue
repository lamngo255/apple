<template>
  <div class="page-product-header">
    <div class="strip">
      <div class="container">
        <div class="left">
          <div class="product-name">{{ name }}</div>
        </div>
        <div class="right">
          <div class="price">
            From ${{ priceMonth }}/mo.per month or ${{ price }} before trade-in
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageProductInfoHeader',

  props: {
    name: { type: String, default: '' },
    price: { type: Number, default: 0 },
  },

  computed: {
    priceMonth() {
      return (this.price / 24).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-product-header {
  display: unset;

  .strip {
    @include sizeWH(100%, 0.38rem);
    @include flexCenter(row);
    background: #fff;
    border-bottom: #dbdbdb solid 0.015rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0rem;
    z-index: 1;

    .container {
      @include flexCenter(row);
      width: 59%;
      justify-content: space-between;

      .left {
        @include textMixin(#000, 0.17rem, bold);
        padding-top: 0.03rem;
      }
      .right {
        @include textMixin(#000, 0.13rem, bold);
        padding-top: 0.02rem;
        margin-right: 0.15rem;
      }
    }
  }
}
</style>
