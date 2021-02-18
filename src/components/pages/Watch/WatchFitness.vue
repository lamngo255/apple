<template>
  <div class="watch-fitness">
    <div class="left">
      <img
        class="logo"
        :src="$assetsUrl('pages/watch/extra/logo-fitness.png')"
      />
      <div class="title">Make your move</div>
      <div class="subtitle">
        A new fitness experience powered by Apple Watch. Try world-class
        workouts on your iPhone, iPad, and Apple TV. And now you can get 3
        months free when you buy an Apple Watch.
      </div>
      <div class="buttons">
        <button class="btn-try">Try it free</button>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>
    <img
      class="right"
      :src="$assetsUrl('pages/watch/extra/fitness.jpg')"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'WatchFitness',
};
</script>

<style lang="scss" scoped>
.watch-fitness {
  @include sizeWH(100%, auto);
  @include flexCenter(row);
  background: #fafafa;
  position: relative;

  .left {
    @include flexCenter(column);
    width: 40%;
    margin-right: 0.5rem;

    .logo {
      @include sizeWH(1.4rem, auto);
    }
    .title {
      @include textMixin(#000, 0.5rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
    }
    .subtitle {
      @include textMixin(#000, 0.24rem);
      margin-top: 0.23rem;
      width: 5rem;
    }
    .buttons {
      @include flexCenter(row);
      margin-top: 0.2rem;

      .btn-try {
        @include textMixin(#2866cc, 0.23rem);
        background: none;
        margin-right: 0.5rem;
      }
      .btn-learn {
        @include textMixin(#2866cc, 0.23rem);
        background: none;
      }
    }
  }

  .right {
    @include sizeWH(7rem, auto);
    // @include position(absolute, $top: 0, $right: 0);
  }
}
</style>
