<template>
  <BaseLayout>
    <div class="main-page">
      <div class="iphone-12">
        <img :src="$assetsUrl('main-page/ip12.jpg')" />
        <div class="content">
          <div class="title">iPhone 12</div>
          <div class="subtitle">Blast past fast.</div>
          <div class="desc">
            <p>From $29.12/mo. or $699 before trade-in.</p>
            <p>Buy directly from Apple with special carrier offers.</p>
          </div>
          <div class="buttons">
            <a class="btn-learn" href="/learn">Learn more</a>
            <a class="btn-buy" href="/shop/iphone-12">Buy</a>
          </div>
        </div>
      </div>

      <div class="iphone-12-pro">
        <img :src="$assetsUrl('main-page/ip12-pro.jpg')" />
        <div class="content">
          <div class="title">iPhone 12 Pro</div>
          <div class="subtitle">It's a leap year.</div>
          <div class="desc">
            <p>From $41.62/mo. or $999 before trade-in.</p>
            <p>Buy directly from Apple with special carrier offers.</p>
          </div>
          <div class="buttons">
            <a class="btn-learn" href="/iphone-12-pro">Learn more</a>
            <a class="btn-buy" href="/shop/iphone-12-pro">Buy</a>
          </div>
        </div>
      </div>

      <div class="apple-watch">
        <div class="content">
          <div class="logo" />
          <div class="subtitle">The future of health is on your wrist.</div>
          <div class="buttons">
            <a class="btn-learn" href="/learn">Learn more</a>
            <a class="btn-buy" href="/buy">Buy</a>
          </div>
          <img class="watch" :src="$assetsUrl('main-page/apple-watch.jpg')" />
        </div>
      </div>

      <section class="row">
        <div class="ipad-air">
          <img :src="$assetsUrl('main-page/ipad-air.jpg')" />
          <div class="content">
            <div class="title">iPad Air</div>
            <div class="subtitle">Powerful. Colorful. Wonderful.</div>
            <div class="buttons">
              <a class="btn-learn" href="/learn">Learn more</a>
              <a class="btn-buy" href="/buy">Buy</a>
            </div>
          </div>
        </div>

        <div class="fitness">
          <img :src="$assetsUrl('main-page/apple-fitness.jpg')" />
          <div class="content">
            <div class="logo" />
            <div class="subtitle">
              A new fitness experience for everyone. Powered by Apple Watch.
            </div>
            <div class="buttons">
              <a class="btn-learn" href="/learn">Learn more</a>
              <a class="btn-buy" href="/buy">Try it free</a>
            </div>
          </div>
        </div>
      </section>

      <section class="row">
        <div class="apple-one">
          <img :src="$assetsUrl('main-page/apple-one.jpg')" />
          <div class="content">
            <div class="logo" />
            <div class="subtitle">
              Bundle up to six Apple services. And enjoy more or less.
            </div>
            <div class="buttons">
              <a class="btn-learn" href="/learn">Learn more</a>
              <a class="btn-buy" href="/buy">Buy</a>
            </div>
          </div>
        </div>

        <div class="gift">
          <img :src="$assetsUrl('main-page/gift-big.jpg')" />
          <div class="content">
            <div class="logo" />
            <div class="title">For lovers of Apple</div>
            <div class="buttons">
              <a class="btn-shop" href="/shop">Shop gifts</a>
            </div>
          </div>
        </div>
      </section>

      <section class="row">
        <div class="apple-card">
          <img :src="$assetsUrl('main-page/apple-card.jpg')" />
          <div class="content">
            <div class="logo" />
            <div class="subtitle">
              Get 3% Daily Cash back on purchases from Apple when you use Apple
              Card.
            </div>
            <div class="buttons">
              <a class="btn-learn" href="/learn">Learn more</a>
            </div>
          </div>
        </div>

        <div class="poster">
          <img :src="$assetsUrl('main-page/poster.jpg')" />
          <div class="content">
            <div class="logo" />
            <div class="headline" />
            <div class="buttons">
              <a class="btn-watch" href="/watch">Watch the film</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout.vue';

export default {
  name: 'MainPage',

  components: {
    BaseLayout,
  },
};
</script>

<style lang="scss" scoped>
section.row {
  @include flexCenter(row);
  margin-bottom: 0.1rem;

  div:first-child {
    margin-right: 0.12rem;
  }
}

.iphone-12 {
  @include sizeWH(100%, 4.5rem);
  position: relative;

  img {
    @include sizeWH(100%, 6rem);
    z-index: 0;
    object-fit: cover;
    margin-top: -0.7rem;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .title {
      @include textMixin(#000, 0.47rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#000, 0.25rem);
    }
    .desc {
      @include textMixin(#86868b, 0.18rem);
      margin-top: 0.14rem;
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include position(relative, $top: 0.1rem);
        font-size: 0.17rem;
        margin-right: 0.4rem;
      }
    }
  }
}

.iphone-12-pro {
  @include sizeWH(100%, 5rem);
  position: relative;
  margin-top: 1.2rem;

  img {
    @include sizeWH(100%, 6.2rem);
    z-index: 0;
    object-fit: cover;
    margin-top: -0.3rem;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .title {
      @include textMixin(#fff, 0.47rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#fff, 0.25rem);
    }
    .desc {
      @include textMixin(#86868b, 0.18rem);
      margin-top: 0.14rem;
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include position(relative, $top: 0.1rem);
        font-size: 0.17rem;
        margin-right: 0.4rem;
      }
    }
  }
}

.apple-watch {
  @include sizeWH(100%, 6rem);
  background: #000;
  position: relative;
  margin-top: 1rem;

  img {
    @include sizeWH(100%, 6.2rem);
    z-index: 0;
    object-fit: cover;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .logo {
      @include imageCDN('main-page/logo-apple-watch.png', 1.67rem, 0.67rem);
      margin: 0.4rem auto 0.2rem;
    }
    .subtitle {
      @include textMixin(#fff, 0.25rem);
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include position(relative, $top: 0.1rem);
        font-size: 0.17rem;
        margin-right: 0.4rem;
      }
    }

    .watch {
      @include sizeWH(2.28rem, 3.66rem);
      margin-top: 0.4rem;
    }
  }
}

.ipad-air {
  @include sizeWH(49.5%, 5.7rem);
  background: #fbfbfd;
  position: relative;

  img {
    @include sizeWH(100%, 5.7rem);
    z-index: 0;
    object-fit: cover;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .title {
      @include textMixin(#000, 0.47rem, bold);
      font-family: 'San Francisco Regular', sans-serif;

      margin-top: 0.35rem;
    }
    .subtitle {
      @include textMixin(#000, 0.2rem);
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include position(relative, $top: 0.1rem);
        font-size: 0.19rem;
        margin-right: 0.4rem;
      }
    }
  }
}

.fitness {
  @include sizeWH(49.5%, 5.7rem);
  background: #fbfbfd;
  position: relative;

  img {
    @include sizeWH(100%, 3.6rem);
    z-index: 0;
    object-fit: cover;
    margin-top: 2rem;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .logo {
      @include imageCDN('main-page/logo-apple-fitness.png', 1.74rem, 0.33rem);
      margin: 0.4rem auto 0.2rem;
    }
    .subtitle {
      @include textMixin(#000, 0.2rem);
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include position(relative, $top: 0.1rem);
        font-size: 0.19rem;
        margin-right: 0.4rem;
      }
    }
  }
}

.apple-one {
  @include sizeWH(49.5%, 5.7rem);
  background: #fbfbfd;
  position: relative;

  img {
    @include sizeWH(5.58rem, 3.41rem);
    z-index: 0;
    object-fit: cover;
    margin-top: 2.2rem;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .logo {
      @include imageCDN('main-page/logo-apple-one.png', 1.3rem, 0.4rem);
      margin: 0.4rem auto 0.13rem;
    }
    .subtitle {
      @include textMixin(#000, 0.2rem);
      width: 3.5rem;
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn,
      .btn-buy {
        @include position(relative, $top: 0.1rem);
        font-size: 0.19rem;
        margin-right: 0.4rem;
      }
    }
  }
}

.gift {
  @include sizeWH(49.5%, 5.7rem);
  background: #f5f5f7;
  position: relative;

  img {
    @include sizeWH(5.16rem, 4.9rem);
    z-index: 0;
    object-fit: cover;
    margin-top: 0.6rem;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .logo {
      @include imageCDN('main-page/logo-gift.png', 2.19rem, 0.21rem);
      margin: 0.4rem auto 0rem;
    }
    .title {
      @include textMixin(#000, 0.45rem, bold);
      font-family: 'San Francisco Regular', sans-serif;
      width: 2.5rem;
    }
    .subtitle {
      @include textMixin(#000, 0.2rem);
    }
    .buttons {
      @include flexCenter(row);

      .btn-shop {
        @include position(relative, $top: 0.1rem);
        font-size: 0.19rem;
      }
    }
  }
}

.apple-card {
  @include sizeWH(49.5%, 5.7rem);
  background: #fbfbfd;
  position: relative;

  img {
    @include sizeWH(5.26rem, 5rem);
    z-index: 0;
    object-fit: cover;
    margin-top: 0.3rem;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .logo {
      @include imageCDN('main-page/logo-apple-card.png', 1.23rem, 0.43rem);
      margin: 0.4rem auto 0.13rem;
    }
    .subtitle {
      @include textMixin(#000, 0.2rem);
      width: 3rem;
    }
    .buttons {
      @include flexCenter(row);

      .btn-learn {
        @include position(relative, $top: 0.1rem);
        font-size: 0.19rem;
      }
    }
  }
}

.poster {
  @include imageCDN('poster.jpg', 49.5%, 5.7rem);
  background: #fbfbfd;
  position: relative;

  img {
    @include sizeWH(100%, 100%);
    z-index: 0;
    object-fit: cover;
  }

  .content {
    @include position(absolute, $top: 0, $left: 50%);
    transform: translate(-50%, 0);

    .logo {
      @include imageCDN('main-page/logo-apple-tv.png', 1.2rem, 0.42rem);
      margin: 2.5rem auto 0.13rem;
    }
    .headline {
      @include imageCDN('main-page/poster-headline.png', 2.29rem, 1.43rem);
    }
    .buttons {
      @include flexCenter(row);

      .btn-watch {
        @include position(relative, $top: 0.1rem);
        font-size: 0.21rem;
        margin-right: 0.4rem;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>
