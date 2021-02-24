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
        <div class="badge" v-if="bagSize > 0">{{ bagSize }}</div>
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
import { mapState } from 'vuex';
import BagPopup from './modals/BagPopup/index.vue';

export default {
  name: 'BaseHeader',

  mixins: [clickaway],

  components: {
    BagPopup,
  },

  computed: {
    ...mapState('Apple', ['myBag']),

    bagSize() {
      return this.myBag.reduce((acc, item) => acc + item.quantity, 0);
    },
    showExtra() {
      return window.location.pathname === '/home';
    },
  },

  data() {
    return {
      showMyBag: false,
      navData: [
        { name: 'Mac', link: '/mac' },
        { name: 'iPad', link: '/ipad' },
        { name: 'iPhone', link: '/iphone' },
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
  @include sizeWH(100%, 0.35rem);
  @include flexCenter(row);
  @include textMixin(rgb(226, 223, 223), 0.15rem);
  background: rgba(10, 10, 10, 0.85);
  padding-left: 0.4rem;

  li,
  a {
    font-size: 0.12rem;
    margin-right: 0.54rem;
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
      @include imageCDN('icons/icon-apple.svg', 0.32rem, 0.32rem);
    }
    &.search {
      @include imageCDN('icons/icon-search.svg', 0.32rem, 0.32rem);
    }
    &.bag {
      @include imageCDN('icons/icon-bag.svg', 0.32rem, 0.32rem);
      position: relative;
      .badge {
        @include sizeWH(auto, 0.11rem);
        @include textMixin(#000, 0.09rem);
        @include position(absolute, $top: 0.16rem, $left: 0.17rem);
        background: #d6d6d6;
        border-radius: 0.2rem;
        padding: 0 0.03rem;
      }
      &:hover {
        filter: brightness(1);
      }
    }
  }
}

.base-header {
  width: 100%;
  z-index: 1;
  margin-top: 0.35rem;

  &.nofloat {
    #navbar {
      position: absolute;
      background: #0a0a0a;
    }
  }
}

.extra {
  .covid {
    @include sizeWH(100%, 0.34rem);
    @include textMixin(#fff, 0.12rem);
    padding-top: 0.1rem;
    background: #0171e3;
  }

  .shop-online {
    @include sizeWH(100%, 0.35rem);
    @include textMixin(#1e1e1f, 0.12rem);
    padding-top: 0.07rem;
    background: #f5f5f7;
    line-height: 0.2rem;
  }
}
</style>
