<template>
  <div class="music-tiles">
    <div class="section-1">
      <img class="image" :src="genLink('airpods-max.png')" />
      <div class="buttons">
        <button class="btn-buy" @click="redirect('shop/airpods-max')">
          Buy
        </button>
        <button class="btn-learn" @click="redirect('shop/airpods-max')">
          <span>Learn more</span>
          <i />
        </button>
      </div>
    </div>

    <div class="section-2">
      <img class="image" :src="genLink('homepod-mini.jpeg')" />
      <div class="title">HomePod mini</div>
      <div class="buttons">
        <button class="btn-buy" @click="redirect('shop/homepod-mini')">
          Buy
        </button>
        <button class="btn-learn" @click="redirect('shop/homepod-mini')">
          <span>Learn more</span>
          <i />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicTiles',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`pages/music/${name}`);
    },
    redirect(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.music-tiles {
  .section-1 {
    @include sizeWH(100%, 6.8rem);
    position: relative;
    margin-top: 0.2rem;
    padding-top: 0.6rem;
    background: #fafafa;

    .image {
      @include sizeWH(65%, auto);
    }

    .buttons {
      @include flexCenter(row);
      @include alignCenter();
      top: 5.8rem;

      .btn-buy {
        @include textMixin(#fff, 0.14rem);
        background: #2d71e3;
        padding: 0.07rem 0.14rem;
        border-radius: 0.3rem;
        margin-right: 0.1rem;
      }
      .btn-learn {
        @include textMixin(#2d71e3, 0.14rem);
        @include flexCenter(row);
        background: none;
      }
    }
  }

  .section-2 {
    @extend .section-1;
    height: 8rem;

    .image {
      @include sizeWH(59%, auto);
    }

    .title {
      @include textMixin(#000, 0.4rem, bold);
      @include alignCenter();
      font-family: 'San Francisco Regular', sans-serif;
      top: 6.8rem;
    }

    .buttons {
      top: 7.3rem;
    }
  }
}

i {
  @include imageCDN('main-page/arrow-up.png', 0.1rem, 0.1rem);
  @include position(relative, $top: 0.01rem, $left: 0.02rem);
  transform: rotate(90deg);
}
</style>
