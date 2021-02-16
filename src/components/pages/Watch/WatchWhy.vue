<template>
  <div class="watch-why">
    <div class="left">
      <div class="title">Why Apple Watch</div>
      <div class="subtitle">It's the ultimate device for a healthy life.</div>
      <div class="buttons">
        <button class="btn-learn">Learn more</button>
      </div>
    </div>
    <img
      class="right"
      :src="$assetsUrl('pages/watch/extra/watch-why.jpg')"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'WatchWhy',
};
</script>

<style lang="scss" scoped>
.watch-why {
  @include sizeWH(100%, auto);
  @include flexCenter(row);
  background: #fafafa;
  position: relative;
  margin-top: 0.5rem;

  .left {
    @include flexCenter(column);
    width: 40%;
    margin-right: 0.5rem;

    .title {
      @include textMixin(#000, 0.26rem, bold);
    }
    .subtitle {
      @include textMixin(#000, 0.46rem, bold);
      margin-top: 0.1rem;
      width: 5rem;
    }
    .buttons {
      @include flexCenter(row);
      margin-top: 0.2rem;

      .btn-learn {
        @include textMixin(#2866cc, 0.23rem);
        background: none;
      }
    }
  }

  .right {
    @include sizeWH(7rem, auto);
    @include position(relative, $top: 0.6rem);
  }
}
</style>
