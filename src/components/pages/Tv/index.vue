<template>
  <BaseLayout>
    <div class="page-tv">
      <div class="container">
        <transition name="fade">
          <div class="products" v-if="show">
            <a
              class="product"
              v-for="(product, i) in productIcons"
              :key="i"
              :href="product.path"
            >
              <img class="icon" :src="genIcon(product.img)" />
              <div class="name">{{ product.name }}</div>
              <div class="new" v-if="product.new">New</div>
            </a>
          </div>
        </transition>
      </div>
      <div class="free-apple-tv">
        Get 1 year of Apple TV+ free when you buy an Apple device.
      </div>

      <TvShowcase />
      <div class="wrapper">
        <TvTiles />
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import TvShowcase from './TvShowcase.vue';
import TvTiles from './TvTiles.vue';

export default {
  name: 'Tv',

  components: {
    BaseLayout,
    TvShowcase,
    TvTiles,
  },

  data() {
    return {
      show: false,
      productIcons: [
        {
          name: 'Apple TV+',
          img: 'apple-tv-plus',
          path: 'apple-tv-plus',
          new: true,
        },
        {
          name: 'Apple TV App',
          img: 'apple-tv-app',
          path: 'apple-tv-app',
          new: true,
        },
        {
          name: 'Apple TV 4k',
          img: 'apple-tv-4k',
          path: 'apple-tv-4k',
        },
        {
          name: 'Apple TV HD',
          img: 'apple-tv-hd',
          path: 'apple-tv-hd',
        },
        { name: 'AirPlay', img: 'airplay', path: 'airplay' },
        { name: 'HomePod', img: 'homepod', path: 'homepod' },
        { name: 'Accessories', img: 'accessories', path: 'tv/accessories' },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/tv/${path}.svg`);
    },
  },

  mounted() {
    document.title = 'TV - Apple';
    setTimeout(() => {
      this.show = true;
    }, 150);
  },
};
</script>

<style lang="scss" scoped>
.page-tv {
  @include sizeWH(100%, auto);
  position: relative;

  .container {
    @include sizeWH(100%, 1.2rem);
    background: #151515;
    padding-left: 0.2rem;
  }

  .products {
    @include flexCenter(row);

    .product {
      @include position(relative, $top: 0.13rem);
      @include flexCenter(column);
      align-self: flex-start;
      margin-right: 0.2rem;
      position: relative;
      text-decoration: none;
      cursor: pointer;

      .icon {
        @include sizeWH(0.5rem, 0.5rem);
      }
      .name {
        @include textMixin(#fff, 0.13rem);
        width: 0.8rem;
      }
      .new {
        @include textMixin(#e46917, 0.11rem);
      }

      &:hover {
        .name {
          color: #1976d2;
        }
      }
    }
  }

  .free-apple-tv {
    @include sizeWH(100%, 0.5rem);
    @include textMixin(#fff, 0.16rem);
    padding-top: 0.15rem;
    background: #1d1d20;
  }
}

.wrapper {
  @include sizeWH(100%, auto);
  background: #f5f5f7;
  padding: 0.3rem 0.7rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, margin-right 0.3s;
}
.fade-enter {
  opacity: 0;
  margin-right: -1rem;
}
.fade-leave-to {
  opacity: 0;
  margin-right: 1rem;
}
</style>
