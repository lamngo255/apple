<template>
  <div class="product-header">
    <div class="strip">
      <div class="container">
        <div class="left" @click="$router.go()">iPhone 12 Pro</div>
        <div class="right">
          <div class="overview">Overview</div>
          <button class="btn-buy" @click="$router.push('/shop/iphone-12-pro')">
            <span>Buy</span>
          </button>
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
  display: unset;

  .strip {
    @include sizeWH(100%, 0.55rem);
    @include flexCenter(row);
    background: #000;
    position: -webkit-sticky;
    position: sticky;
    top: 0rem;
    z-index: 2;

    .container {
      @include flexCenter(row);
      width: 60%;
      justify-content: space-between;

      .left {
        @include textMixin(#fff, 0.19rem, bold);
        padding-top: 0.07rem;
        cursor: pointer;
      }
      .right {
        @include textMixin(#fff, 0.13rem);
        @include flexCenter(row);
        padding-top: 0.08rem;

        .overview {
          color: #979798;
        }

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
    @include textMixin(#fff, 0.13rem);
    background: #1d1d20;
    padding-top: 0.12rem;
  }
}
</style>
