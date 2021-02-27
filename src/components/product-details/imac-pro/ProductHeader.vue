<template>
  <div class="product-header">
    <div class="strip">
      <div class="container">
        <div class="left">iMac Pro</div>
        <div class="right">
          <div class="overview">Overview</div>
          <button class="btn-buy" @click="$router.push('/shop/macbook-air')">
            <span>Buy</span>
          </button>
        </div>
      </div>
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
    @include sizeWH(100%, 0.42rem);
    @include flexCenter(row);
    background: #141414;
    border-bottom: #464646 solid 0.01rem;

    .container {
      @include flexCenter(row);
      width: 60%;
      justify-content: space-between;

      .left {
        @include textMixin(#fff, 0.19rem, bold);
      }
      .right {
        @include textMixin(#fff, 0.13rem);
        @include flexCenter(row);

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
}
</style>
