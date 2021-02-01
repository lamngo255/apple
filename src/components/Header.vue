<template>
  <div class="header">
    <ul id="navbar">
      <li class="logo" />
      <li>Mac</li>
      <li>iPad</li>
      <li>iPhone</li>
      <li>Watch</li>
      <li>TV</li>
      <li>Music</li>
      <li>Support</li>
      <li class="search"></li>
      <li class="bag"></li>
    </ul>

    <div class="extra">
      <div class="covid">
        Evaluate COVID‑19 symptoms and understand next steps
      </div>
      <div class="shop-online">
        <p>
          Shop online and get Specialist help, free no‑contact delivery, and
          more.
        </p>
        <p>
          Some of our retail stores are temporarily closed or offering limited
          services. Before you visit, check your store’s status.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  z-index: 1;
  margin-top: 0.45rem;
}

#navbar {
  @include position(fixed, $top: 0, $left: 0);
  @include sizeWH(100%, 0.45rem);
  @include flexCenter(row);
  @include textMixin(rgb(226, 223, 223), 0.15rem);
  background: #333;
  padding-left: 0.3rem;
  li {
    margin-right: 0.68rem;
    cursor: pointer;

    &.logo {
      @include imageCDN('icons/icon-apple.svg', 0.45rem, 0.45rem);
    }
    &.search {
      @include imageCDN('icons/icon-search.svg', 0.45rem, 0.45rem);
    }
    &.bag {
      @include imageCDN('icons/icon-bag.svg', 0.45rem, 0.45rem);
    }
  }
}

.extra {
  .covid {
    @include sizeWH(100%, 0.44rem);
    @include textMixin(#fff, 0.15rem);
    padding-top: 0.12rem;
    background: #0171e3;
  }

  .shop-online {
    @include sizeWH(100%, 0.62rem);
    @include textMixin(#1e1e1f, 0.145rem);
    padding-top: 0.1rem;
    background: #f5f5f7;
    line-height: 0.2rem;
  }
}
</style>
