<template>
  <BaseLayout>
    <div class="page-music">
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
      <div class="apple-one">
        Introducing Apple One. Bundle your favorite services and enjoy more of
        Apple for less.
      </div>

      <MusicShowcase />
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import MusicShowcase from './MusicShowcase.vue';

export default {
  name: 'Music',

  components: {
    BaseLayout,
    MusicShowcase,
  },

  data() {
    return {
      show: false,
      productIcons: [
        {
          name: 'Apple Music',
          img: 'apple-music',
          // path: 'apple-music',
          new: true,
        },
        { name: 'Airpods', img: 'airpods', path: 'shop/airpods' },
        { name: 'Airpods Pro', img: 'airpods-pro', path: 'shop/airpods-pro' },
        {
          name: 'Airpods Max',
          img: 'airpods-max',
          path: 'shop/airpods-max',
          new: true,
        },
        {
          name: 'Homepod Mini',
          img: 'homepod-mini',
          path: 'homepod-mini',
          new: true,
        },
        { name: 'Homepod', img: 'homepod', path: 'homepod' },
        { name: 'iPod Touch', img: 'ipod-touch', path: 'ipod-touch' },
        { name: 'Beats', img: 'beats', path: 'beats' },
        {
          name: 'Music Accessories',
          img: 'music-accessories',
          path: 'music-accessories',
        },
        {
          name: 'Gift Cards',
          img: 'gift-cards',
          path: 'gift-cards',
        },
      ],
    };
  },

  methods: {
    genIcon(path) {
      return this.$assetsUrl(`product-icons/music/${path}.svg`);
    },
  },

  mounted() {
    document.title = 'Music - Apple';
    setTimeout(() => {
      this.show = true;
    }, 150);
  },
};
</script>

<style lang="scss" scoped>
.page-music {
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
      @include position(relative, $top: 0.1rem);
      @include flexCenter(column);
      align-self: flex-start;
      margin-right: 0.1rem;
      position: relative;
      text-decoration: none;
      cursor: pointer;

      .icon {
        @include sizeWH(0.5rem, 0.5rem);
      }
      .name {
        @include textMixin(#fff, 0.13rem);
        width: 0.9rem;
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

  .apple-one {
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
