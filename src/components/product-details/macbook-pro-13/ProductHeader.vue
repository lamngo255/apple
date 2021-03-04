<template>
  <div class="product-header">
    <div class="strip">
      <div class="container">
        <div class="left" @click="$router.go()">MacBook Pro 13”</div>
        <div class="right">
          <div class="overview">Overview</div>
          <button class="btn-buy" @click="$router.push('/shop/macbook-pro-13')">
            <span>Buy</span>
          </button>
        </div>
      </div>
    </div>

    <div class="offers">
      <span>
        Get the new 13-inch MacBook Pro starting at $1199 in our Education
        Store.
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
    @include sizeWH(100%, 0.42rem);
    @include flexCenter(row);
    background: #141414;
    border-bottom: #464646 solid 0.01rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0rem;
    z-index: 2;

    .container {
      @include flexCenter(row);
      width: 60%;
      justify-content: space-between;

      .left {
        @include textMixin(#fff, 0.17rem, bold);
        cursor: pointer;
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

  .offers {
    @include sizeWH(100%, 0.38rem);
    @include textMixin(#fff, 0.12rem);
    background: #151516;
    padding-top: 0.12rem;
  }
}
</style>
