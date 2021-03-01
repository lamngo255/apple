<template>
  <div class="product-show-storage">
    <div class="container">
      <div class="title">
        <div>Storage</div>
        <div>Bring your whole studio</div>
        <div>with you.</div>
      </div>

      <div class="note">
        The 16-inch MacBook Pro has up to <b>8TB of SSD storage</b> — the most
        available in any notebook. So you can take your photo or video libraries
        with you no matter where you’re headed. And with superfast speeds,
        massive files load in an instant and pro apps launch in a blink.
      </div>

      <div class="images">
        <img :src="genLink('storage.jpg')" />
        <img :src="genLink('storage-stats.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowStorage',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-storage {
  @include sizeWH(100%, auto);
  background: #fff;
  padding-top: 0.3rem;
  padding-bottom: 1rem;

  .container {
    @include sizeWH(58%, auto);
    margin: 0 auto;
    text-align: left;

    .title {
      @include textMixin(#000, 0.6rem, bold);
      display: flex;
      flex-flow: column wrap;
      font-family: 'San Francisco Medium', sans-serif;

      div:first-child {
        color: #acacac;
      }
    }

    .note {
      @include textMixin(#86868b, 0.29rem, bold, $align: left);
      font-family: 'San Francisco Regular', sans-serif;
      line-height: 0.35rem;
      margin: 0.5rem auto 0.1rem;
      letter-spacing: 0.007rem;

      b {
        color: #000;
        font-weight: bold;
      }
    }

    .images {
      img {
        @include sizeWH(8rem, auto);
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
