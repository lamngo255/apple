<template>
  <div class="mac-getmore">
    <div class="title">Get more out of Mac</div>
    <div class="frame-apple-one">
      <img :src="genMoreJpg('apple-one')" />
      <div class="details">
        <img :src="genMoreJpg('logo-apple-one')" />
        <div class="title">
          <div>Bundle up to six Apple services.</div>
          <div>And enjoy more for less.</div>
        </div>
        <div class="buttons">
          <button class="btn-try">Try it free</button>
          <button class="btn-learn">Learn more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacGetMore',

  methods: {
    genMoreJpg(path) {
      return this.$assetsUrl(`pages/mac/more/${path}.jpg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mac-getmore {
  .title {
    @include textMixin(#000, 0.6rem, bold);
    margin-top: 1.5rem;
  }

  .frame-apple-one {
    @include sizeWH(100%, 5rem);
    @include flexCenter(row);
    background: #fbfbfd;

    img {
      @include sizeWH(5.7rem, 3.3rem);
      margin-right: 0.2rem;
      margin-top: 0.3rem;
    }

    .details {
      img {
        @include sizeWH(3rem, 0.9rem);
      }
      .title {
        @include textMixin(#000, 0.28rem, bold);
        margin: 0.1rem auto;
        width: 5rem;
      }
      .buttons {
        @include flexCenter(row);

        .btn-learn,
        .btn-try {
          @include textMixin(#0171e3, 0.2rem);
          border: none;
          background: none;
          margin-right: 0.2rem;
        }
      }
    }
  }
}
</style>
