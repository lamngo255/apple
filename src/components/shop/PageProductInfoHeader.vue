<template>
  <div class="page-product-header">
    <div class="strip">
      <div class="container">
        <div class="left">
          <div class="product-name">{{ name }}</div>
        </div>
        <div class="right">
          <div class="price">Price: ${{ price }}</div>
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
};
</script>

<style lang="scss" scoped>
.page-product-header {
  .strip {
    @include sizeWH(100%, 0.55rem);
    @include flexCenter(row);
    background: #fff;
    border-bottom: #dbdbdb solid 0.015rem;

    .container {
      @include flexCenter(row);
      width: 65%;
      justify-content: space-between;

      .left {
        @include textMixin(#000, 0.25rem, bold);
        padding-top: 0.07rem;
      }
      .right {
        @include textMixin(#000, 0.23rem, bold);
        padding-top: 0.06rem;
        margin-right: 0.25rem;
      }
    }
  }
}
</style>
