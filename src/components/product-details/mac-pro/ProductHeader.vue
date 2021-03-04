<template>
  <div class="product-header">
    <div class="strip">
      <div class="container">
        <div class="left" @click="$router.go()">Mac Pro</div>
        <div class="right">
          <div class="overview">Overview</div>
          <button class="btn-buy" @click="$router.push('/shop/mac-pro')">
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
  display: unset;

  .strip {
    @include sizeWH(100%, 0.42rem);
    @include flexCenter(row);
    background: #fff;
    position: -webkit-sticky;
    position: sticky;
    top: 0rem;
    z-index: 2;

    .container {
      @include flexCenter(row);
      width: 59%;
      justify-content: space-between;

      .left {
        @include textMixin(#000, 0.18rem, bold);
        cursor: pointer;
      }
      .right {
        @include textMixin(#7c7c7c, 0.12rem);
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
