<template>
  <div :class="['base-header', { nofloat: !showExtra }]">
    <div id="navbar">
      <li class="logo" @click="$router.push('/')" />
      <li
        v-for="(data, i) in navData"
        :class="{ active: active(data.link) }"
        :key="i"
        @click="goTo(data.link)"
      >
        {{ data.name }}
      </li>
      <li class="search"></li>
      <li class="bag" @mousedown="showBag" v-on-clickaway="hideBag">
        <BagPopup v-if="showMyBag" />
      </li>
    </div>

    <div class="extra" v-if="showExtra">
      <div class="covid">
        Evaluate COVID‑19 symptoms and understand next steps
      </div>
      <div class="shop-online">
        <p>
          Shop online and get Specialist help, free no‑contact delivery, and
          more.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import BagPopup from './modals/BagPopup/index.vue';

export default {
  name: 'BaseHeader',

  mixins: [clickaway],

  components: {
    BagPopup,
  },

  computed: {
    showExtra() {
      return window.location.pathname === '/home';
    },
  },

  data() {
    return {
      showMyBag: false,
      navData: [
        { name: 'Mac', link: '/mac' },
        { name: 'Ipad', link: '/ipad' },
        { name: 'Iphone', link: '/iphone' },
        { name: 'Watch', link: '/watch' },
        { name: 'TV', link: '/tv' },
        { name: 'Music', link: '/music' },
        { name: 'Support', link: '/#' },
      ],
    };
  },

  methods: {
    active(slug) {
      return window.location.pathname.includes(slug.slice(1));
    },
    showBag() {
      this.showMyBag = true;
    },
    hideBag() {
      this.showMyBag = false;
    },
    goTo(link) {
      if (!window.location.pathname.endsWith(link)) this.$router.push(link);
    },
  },
};
</script>

<style lang="scss" scoped>
#navbar {
  @include position(fixed, $top: 0, $left: 0);
  @include sizeWH(100%, 0.45rem);
  @include flexCenter(row);
  @include textMixin(rgb(226, 223, 223), 0.15rem);
  background: rgba(10, 10, 10, 0.85);
  padding-left: 0.3rem;

  li,
  a {
    margin-right: 0.68rem;
    text-decoration: none;
    color: #d6d6d6;
    position: relative;
    cursor: pointer;

    &.active {
      color: #929292;
    }

    &:hover {
      filter: brightness(1.2);
    }

    &.logo {
      @include imageCDN('icons/icon-apple.svg', 0.45rem, 0.45rem);
    }
    &.search {
      @include imageCDN('icons/icon-search.svg', 0.45rem, 0.45rem);
    }
    &.bag {
      @include imageCDN('icons/icon-bag.svg', 0.45rem, 0.45rem);
      &:hover {
        filter: brightness(1);
      }
    }
  }
}

.base-header {
  width: 100%;
  z-index: 1;
  margin-top: 0.45rem;

  &.nofloat {
    #navbar {
      position: absolute;
      background: #0a0a0a;
    }
  }
}

.extra {
  .covid {
    @include sizeWH(100%, 0.44rem);
    @include textMixin(#fff, 0.15rem);
    padding-top: 0.12rem;
    background: #0171e3;
  }

  .shop-online {
    @include sizeWH(100%, 0.45rem);
    @include textMixin(#1e1e1f, 0.145rem);
    padding-top: 0.13rem;
    background: #f5f5f7;
    line-height: 0.2rem;
  }
}
</style>
