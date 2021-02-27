<template>
  <div class="ipad-getmore">
    <div class="title">Get more out of Ipad</div>
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

    <div class="row">
      <div class="apple-tv">
        <img class="overlay" :src="genMoreJpg('apple-tv')" />
        <img class="logo" :src="genMorePng('logo-apple-tv')" />
        <div class="desc">
          <div>Get 1 year of Apple TV+ free</div>
          <div>when you buy an Ipad.</div>
        </div>
        <div class="buttons">
          <button class="btn-try">Try it free</button>
          <button class="btn-learn">Learn more</button>
        </div>
      </div>
      <div class="apple-card">
        <img class="overlay" :src="genMoreJpg('apple-card')" />
        <img class="logo" :src="genMorePng('logo-apple-card')" />
        <div class="desc">
          <div>Get 3% Daily Cash back on purchases from</div>
          <div>Apple when you use Apple Card.</div>
        </div>
        <button class="btn-learn">Learn more</button>
      </div>
    </div>

    <div class="row">
      <div class="apple-arcade">
        <img class="overlay" :src="genMoreJpg('apple-arcade')" />
        <img class="logo" :src="genMorePng('logo-apple-arcade')" />
        <div class="desc">
          <div>Get 3 months of Apple Arcade free</div>
          <div>when you buy a Mac.</div>
        </div>
        <div class="buttons">
          <button class="btn-try">Try it free</button>
          <button class="btn-learn">Learn more</button>
        </div>
      </div>
      <div class="apple-news">
        <img class="overlay" :src="genMoreJpg('apple-news')" />
        <img class="logo" :src="genMorePng('logo-apple-news')" />
        <div class="desc">
          <div>Get 3% Daily Cash back on purchases from</div>
          <div>Apple when you use Apple Card.</div>
        </div>
        <div class="buttons">
          <button class="btn-try">Try it free</button>
          <button class="btn-learn">Learn more</button>
        </div>
      </div>
    </div>

    <div class="frame-apple-gift">
      <div class="details">
        <img class="logo" :src="genMorePng('logo-apple-gift')" />
        <div class="desc">For everything and everyone.</div>
        <div class="buttons">
          <button class="btn-learn">Learn more</button>
          <button class="btn-buy">Buy</button>
        </div>
      </div>
      <img class="overlay" :src="genMoreJpg('apple-gift')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacGetMore',

  methods: {
    genMoreJpg(path) {
      return this.$assetsUrl(`pages/ipad/more/${path}.jpg`);
    },
    genMorePng(path) {
      return this.$assetsUrl(`pages/ipad/more/${path}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
.ipad-getmore {
  .title {
    @include textMixin(#000, 0.5rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
    margin-top: 1rem;
  }

  .frame-apple-one {
    @include sizeWH(100%, 5rem);
    @include flexCenter(row);
    background: #fbfbfd;
    margin-top: 0.2rem;

    img {
      @include sizeWH(4.3rem, auto);
      margin-left: 0.2rem;
      margin-top: 0.3rem;
    }

    .details {
      img {
        @include sizeWH(2.6rem, auto);
      }
      .title {
        @include textMixin(#000, 0.23rem, bold);
        margin: 0.1rem auto;
        width: 5rem;
      }
      .buttons {
        @include flexCenter(row);

        .btn-learn,
        .btn-try {
          @include textMixin(#0171e3, 0.16rem);
          border: none;
          background: none;
          margin-right: 0.2rem;
        }
      }
    }
  }
}

.row {
  @include flexCenter(row);
  margin-top: 0.3rem;
  justify-content: space-around;

  .apple-tv {
    @include sizeWH(49%, 5.5rem);
    margin-right: 0.3rem;
    background: #000;
    position: relative;

    .overlay {
      @include position(absolute, $bottom: 0, $left: 0);
      @include sizeWH(100%, 3rem);
      object-fit: cover;
      object-position: 28% 0;
    }

    .logo {
      @include sizeWH(0.8rem, auto);
      margin-top: 0.6rem;
    }

    .desc {
      @include textMixin(#fff, 0.17rem);
      margin-top: 0.2rem;
      width: 100%;
    }

    .buttons {
      @include flexCenter(row);
      margin-top: 0.15rem;

      .btn-learn,
      .btn-try {
        @include textMixin(#2a97ff, 0.16rem);
        border: none;
        background: none;
        margin-right: 0.2rem;
      }
    }
  }

  .apple-card {
    @extend .apple-tv;
    margin-right: 0;
    background: #cccccc;

    .overlay {
      @include position(absolute, $bottom: 0, $left: 0);
      @include sizeWH(100%, 3.4rem);
      object-fit: cover;
      object-position: 5% 0;
    }

    .logo {
      @include sizeWH(1.4rem, 0.4rem);
    }
    .desc {
      color: #000;
    }
    .btn-learn {
      @include textMixin(#000, 0.16rem);
      border: none;
      background: none;
      margin-top: 0.15rem;
    }
  }

  .apple-arcade {
    @extend .apple-tv;

    .overlay {
      @include position(absolute, $bottom: 0, $left: 0);
      @include sizeWH(100%, 100%);
      object-fit: cover;
      object-position: 43% 0;
      z-index: 0;
    }
    .logo {
      @include alignCenter();
      @include sizeWH(1.8rem, 0.4rem);
      top: 0.25rem;
    }
    .desc {
      @include position(absolute, $top: 1rem, $left: 50%);
      transform: translate(-50%, 0);
      z-index: 1;
    }
    .buttons {
      @include alignCenter();
      top: 1.7rem;
      .btn-learn,
      .btn-try {
        @include textMixin(#fff, 0.16rem);
      }
    }
  }

  .apple-news {
    @extend .apple-arcade;
  }
}

.frame-apple-gift {
  @include sizeWH(100%, 5rem);
  @include flexCenter(row);
  justify-content: space-around;
  margin-top: 0.3rem;
  background: #fbfbfd;
  position: relative;

  .overlay {
    @include sizeWH(9.7rem, auto);
  }

  .details {
    margin-left: 0.8rem;

    .logo {
      @include sizeWH(2rem, auto);
    }
    .desc {
      @include textMixin(#000, 0.18rem);
      margin: 0.2rem auto;
    }

    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include textMixin(#0171e3, 0.16rem);
        border: none;
        background: none;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>
