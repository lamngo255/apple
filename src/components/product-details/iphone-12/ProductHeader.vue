<template>
  <div class="product-header">
    <div class="strip">
      <div class="container">
        <div class="left">iPhone 12</div>
        <div class="right">
          <div>Overview</div>
          <button class="btn-buy">Buy</button>
        </div>
      </div>
    </div>

    <div class="offers">
      <span>
        Buy iPhone 12 and iPhone 12 Pro directly from Apple with special offers
        from AT&T, T‑Mobile/Sprint, and Verizon.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductHeader',
};
</script>

<style lang="scss" scoped>
.product-header {
  .strip {
    @include sizeWH(100%, 0.55rem);
    @include flexCenter(row);
    border-bottom: #dbdbdb solid 0.01rem;
    background: #fcfcfc;

    .container {
      @include flexCenter(row);
      width: 65%;
      justify-content: space-between;

      .left {
        @include textMixin(#000, 0.25rem, bold);
        padding-top: 0.07rem;
      }
      .right {
        @include textMixin(#000, 0.13rem);
        @include flexCenter(row);
        padding-top: 0.08rem;

        div {
          margin-right: 0.2rem;
        }
        button {
          @include textMixin(#fff, 0.13rem);
          border: none;
          background: #2d71e3;
          padding: 0.03rem 0.13rem;
          border-radius: 0.2rem;
        }
      }
    }
  }

  .offers {
    @include sizeWH(100%, 0.43rem);
    @include textMixin(#000, 0.14rem);
    background: #fff;
    padding-top: 0.12rem;
  }
}
</style>
