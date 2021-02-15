<template>
  <div class="product-showcase">
    <div class="section-1 leap-year">
      <div class="title">iPhone 12 Pro and iPhone 12 Pro Max</div>
      <div class="subtitle">It’s a leap year.</div>
      <video autoplay playsinline muted>
        <source :src="genLink('leap-year.mp4')" />
      </video>
      <div class="desc">
        5G goes Pro. A14 Bionic rockets past every other smartphone chip. The
        Pro camera system takes low-light photography to the next level — with
        an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers
        four times better drop performance. Let’s see what this thing can do.
      </div>
      <div class="price">From $41.62/mo. or $999 before trade‑in</div>
      <div class="buttons">
        <button class="btn-watch">Watch the event</button>
        <button class="btn-film">Watch the film</button>
      </div>
    </div>

    <div class="section-2 less-bezel">
      <div class="title">Less bezel, more screen.</div>
      <div class="pro-max">
        <div class="pro-max-title">iPhone 12 Pro Max</div>
        <div class="pro-max-subtitle">
          <div>6.7” Super Retina</div>
          <div>XDR display</div>
        </div>
      </div>
      <div class="pro">
        <div class="pro-title">iPhone 12 Pro</div>
        <div class="pro-subtitle">
          <div>6.1” Super Retina</div>
          <div>XDR display</div>
        </div>
      </div>
      <video autoplay playsinline muted>
        <source :src="genLink('compare.mp4')" />
      </video>
      <button class="btn-compare">Compare sizes to iPhone 11 Pro</button>
    </div>

    <div class="section-3 kicks-glass">
      <div class="title">Kicks glass.</div>
      <img class="photo" :src="genLink('tougher-glass.jpg')" />
      <div class="desc">Ceramic Shield, tougher than any smartphone glass</div>
    </div>

    <div class="section-4 surgical-grade">
      <div class="text-1">Surgical-grade</div>
      <div class="text-2">stainless steel.</div>
      <img class="photo" :src="genLink('surgical-grade.jpg')" alt="" />
    </div>

    <div class="section-5 water-resistance">
      <img class="photo" :src="genLink('water-resistance.jpg')" />
      <div class="title">Blows other phones out of the water.</div>
      <div class="subtitle">Industry‑leading IP68 water resistance</div>
    </div>

    <div class="section-6 four-colors">
      <video autoplay playsinline muted>
        <source :src="genLink('four-colors.mp4')" />
      </video>
      <div class="title">Four finishing touches.</div>
      <div class="subtitle">Pacific Blue, Gold, Silver, and Graphite</div>
    </div>

    <div class="section-7 night-photography">
      <div class="container">
        <div class="title">Pro camera system</div>
        <div class="subtitle">A new day for Night mode.</div>
      </div>
      <img class="photo" :src="genLink('night-photography.jpg')" />
    </div>

    <div class="section-8 camerus-maximus">
      <div class="container">
        <div class="title">12 Pro Max.</div>
        <div class="subtitle">Camerus maximus.</div>
      </div>
      <img class="photo" :src="genLink('camera.jpg')" />
    </div>

    <div class="section-9 retina-screen">
      <div class="container">
        <div class="title">Super Retina XDR display .</div>
        <div class="subtitle">An infinity pool of pixels.</div>
      </div>
      <img class="photo" :src="genLink('retina-screen.jpg')" />
      <div class="desc">
        How do you make our brightest display even better? Make it bigger. A new
        design with flat edges and our flexible custom OLED allowed us to push
        the screen’s amazing color, brightness, and contrast right to the very
        edge.
      </div>

      <div class="table">
        <div class="left">
          <p>Up to</p>
          <p class="number">1200 nits</p>
          <p>peak brightness for</p>
          <p>HDR photos and movies</p>
        </div>
        <div class="right">
          <p class="number">2,000,000:1</p>
          <p>contrast ratio for true blacks</p>
          <p>and bright whites</p>
        </div>
      </div>

      <div class="desc-2">
        Over 3.4 million pixels in 12 Pro Max, the most ever in an iPhone
      </div>
    </div>

    <div class="section-10 instance-attraction">
      <div class="title">Instant attraction.</div>
      <video autoplay playsinline muted>
        <source :src="genLink('instant-attraction.mp4')" />
      </video>
      <div class="subtitle">
        Each piece magnetically snaps together like magic.
      </div>
    </div>

    <div class="section-11 stack-and-go">
      <video autoplay playsinline muted>
        <source :src="genLink('stack.mp4')" />
      </video>
      <div class="title">Stack and go.</div>
      <div class="subtitle">
        Snap on a case, a wallet, or both. (Fear not, the wallet is shielded so
        it’s safe for credit cards.)
      </div>
    </div>

    <div class="section-12 carbon-footprint">
      <div class="title">
        We reduced our carbon footprint. By thinking inside the box.
      </div>
      <img class="photo" :src="genLink('iphone-box.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowcase',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/iphone-12-pro/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-showcase {
  @include sizeWH(100%, auto);
  background: #000;
  padding-bottom: 2rem;

  .section-1 {
    padding-top: 0.7rem;
    .title {
      @include textMixin(#fff, 0.23rem, bold);
    }
    .subtitle {
      @include textMixin(#fff, 0.8rem, bold);
      margin-top: 0.1rem;
    }
    video {
      @include sizeWH(90%, auto);
      margin: 0 auto;
      margin-left: 2.9rem;
    }
    .desc {
      @include textMixin(#a1a1a6, 0.26rem, bold);
      width: 46%;
      margin: 1rem auto 0;
    }
    .price {
      @include textMixin(#a1a1a6, 0.24rem, bold);
      margin-top: 0.4rem;
    }
    .buttons {
      @include flexCenter(row);
      margin-top: 0.45rem;

      button {
        @include textMixin(#f5f5f7, 0.23rem, bold);
        margin-right: 0.4rem;
        border: none;
        background: none;
      }
    }
  }

  .section-2 {
    @include flexCenter(column);
    margin-top: 3rem;
    position: relative;
    .title {
      @include textMixin(#fff, 0.5rem, bold);
    }
    video {
      @include sizeWH(auto, 5.7rem);
      margin: 0.4rem auto;
    }

    .pro-max {
      @include position(absolute, $top: 3.6rem, $left: 3.2rem);
      text-align: right;

      &-title {
        @include textMixin(#fff, 0.23rem, bold);
      }
      &-subtitle {
        @include textMixin(#8f8f93, 0.2rem, bold);
      }
    }

    .pro {
      @include position(absolute, $top: 3.6rem, $right: 3.6rem);
      text-align: left;

      &-title {
        @include textMixin(#fff, 0.23rem, bold);
      }
      &-subtitle {
        @include textMixin(#8f8f93, 0.2rem, bold);
      }
    }

    .btn-compare {
      @include textMixin(#d4d4d4, 0.19rem);
      background: none;
      border: #fff solid 0.01rem;
      border-radius: 0.2rem;
      padding: 0.05rem 0.2rem;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        background: #d4d4d4;
        color: rgb(26, 25, 25);
      }
    }
  }

  .section-3 {
    @include flexCenter(column);
    margin-top: 4rem;

    .title {
      @include textMixin(#d4d4d4, 0.6rem, bold);
    }
    .photo {
      @include sizeWH(90%, auto);
      margin-top: 0.6rem;
    }
    .desc {
      @include textMixin(#1d5467, 0.36rem, bold);
      @include gradient(45deg, #0c3f56, #4d9fb6);
      width: 6rem;
      margin-top: 0.7rem;
    }
  }

  .section-4 {
    margin-top: 4rem;
    position: relative;

    .photo {
      @include sizeWH(1.6rem, auto);
    }

    .text-1 {
      @include position(absolute, $top: 2.5rem, $left: 3rem);
      @include textMixin(#fff, 0.58rem, bold);
      transform: rotate(90deg);
    }
    .text-2 {
      @include position(absolute, $top: 7.5rem, $right: 3rem);
      @include textMixin(#fff, 0.58rem, bold);
      transform: rotate(90deg);
    }
  }

  .section-5 {
    margin-top: 4rem;
    position: relative;
    .photo {
      @include sizeWH(70%, auto);
      @include position(relative, $left: 2rem);
    }
    .title {
      @include textMixin(#bcbcbe, 0.56rem, bold, $align: left);
      @include position(absolute, $top: 5rem, $left: 2.2rem);
      width: 4rem;
      line-height: 0.64rem;
    }
    .subtitle {
      @include textMixin(#89898d, 0.27rem, bold, $align: left);
      @include position(absolute, $top: 7.35rem, $left: 2.2rem);
      width: 3rem;
    }
  }

  .section-6 {
    @include flexCenter(column);

    video {
      @include sizeWH(80%, auto);
      margin: 0 auto;
    }
    .title {
      @include textMixin(#fff, 0.58rem, bold, $align: left);
      margin-top: 0.5rem;
    }
    .subtitle {
      @include textMixin(#89898d, 0.24rem, bold, $align: left);
      margin-top: 0.15rem;
    }
  }

  .section-7 {
    @include flexCenter(column);
    margin-top: 3rem;

    .container {
      width: 60%;
      text-align: left;
    }
    .title {
      @include textMixin(#6e6e73, 0.68rem, bold);
    }
    .subtitle {
      @include textMixin(#fff, 0.68rem, bold);
    }

    .photo {
      @include sizeWH(80%, auto);
      @include position(relative, $left: 2rem);
      margin-top: 0.7rem;
    }
  }

  .section-8 {
    @extend .section-7;
    .title,
    .subtitle {
      color: #fff;
      font-size: 0.65rem;
    }
    .photo {
      left: 0;
      margin-top: 0.2rem;
    }
  }

  .section-9 {
    @extend .section-7;

    .title,
    .subtitle {
      font-size: 0.6rem;
    }

    .photo {
      @include sizeWH(90%, auto);
      left: 0;
      margin-top: 1rem;
    }

    .desc {
      @include textMixin(#a1a1a6, 0.28rem, bold);
      width: 48%;
      margin: 0.9rem auto 0.2rem;
    }

    .table {
      @include flexCenter(row);

      .left,
      .right {
        @include sizeWH(5rem, 2.5rem);
        background: #161616;
        margin-right: 0.1rem;
        margin-top: 0.4rem;
        border-radius: 0.2rem;
        padding: 0.4rem 0 0 0.5rem;

        p {
          @include textMixin(#fff, 0.23rem, bold, $align: left);

          &.number {
            @include gradient(45deg, #16617f, #5fb4cb);
            font-size: 0.6rem;
          }
        }
      }

      .right {
        p.number {
          font-size: 0.7rem;
        }
        padding-top: 0.5rem;
      }
    }

    .desc-2 {
      @include gradient(45deg, #16617f, #5fb4cb);
      font-size: 0.35rem;
      font-weight: bold;
      width: 40%;
      margin-top: 0.7rem;
    }
  }

  .section-10 {
    @include flexCenter(column);
    margin-top: 4rem;

    video {
      @include sizeWH(60%, auto);
    }
    .title {
      @include textMixin(#fff, 0.6rem, bold);
    }
    .subtitle {
      @include textMixin(#a1a1a6, 0.28rem, bold);
      margin-top: 0.4rem;
    }
  }

  .section-11 {
    margin-top: 3rem;

    video {
      @include sizeWH(7rem, auto);
    }

    .title {
      @include textMixin(#fff, 0.6rem, bold);
      margin-top: 0.4rem;
    }

    .subtitle {
      @include textMixin(#a1a1a6, 0.23rem, bold);
      width: 40%;
      margin: 0.3rem auto;
    }
  }

  .section-12 {
    position: relative;
    margin-top: 5rem;

    .title {
      @include textMixin(#fff, 0.55rem, bold, $align: left);
      @include position(absolute, $top: -2.3rem, $left: 3rem);
      @include gradient(135deg, #fff, #a1a1a6);
      width: 4rem;
    }

    .photo {
      @include sizeWH(10rem, auto);
    }
  }
}
</style>
