<template>
  <div class="trade-in">
    <div class="col">Special Trade-in Offers at Apple</div>
    <div class="col">
      <img class="image" :src="genLink('carrier-att.png')" />
      <span class="note">Pay from $0/mo. after AT&T bill credits.Δ</span>
    </div>
    <div class="col">
      <img class="image" :src="genLink('carrier-tmobile.png')" />
      <span class="note">
        Get an additional $100 trade-in credit from T‑Mobile/Sprint.º
      </span>
    </div>
    <div class="col">
      <img class="image" :src="genLink('carrier-verizon.png')" />
      <span class="note">
        Pay from $11.95/mo. after Verizon bill credits.ΔΔ
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageProductTradeIn',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`shop/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.trade-in {
  @include sizeWH(7.8rem, 1rem);
  @include flexCenter(row);
  background: #f2f2f2;
  margin: 0.12rem auto 0;
  font-size: 0.11rem;

  .col {
    @include flexCenter(column);
    margin-right: 0.2rem;

    .image {
      @include sizeWH(auto, 0.3rem);
    }
    .note {
      margin-top: 0.04rem;
      width: 1.6rem;
    }
  }

  .col:first-child {
    @include textMixin(#000, 0.14rem, bold);
  }
}
</style>
