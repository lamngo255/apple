<template>
  <div class="product-show-led">
    <div class="wrapper">
      <div class="text">{{ content[selectedId].text }}</div>
      <transition name="fade">
        <img
          class="image"
          :key="selectedId"
          :src="genLink(`led/${selectedId + 1}.png`)"
        />
      </transition>

      <div class="icons">
        <img
          class="left"
          :src="genLink('icon-left-gray.png')"
          v-if="selectedId === 0"
        />
        <img
          class="left"
          :src="genLink('icon-left.png')"
          @click="prev"
          v-else
        />

        <img
          class="right"
          :src="genLink('icon-right-gray.png')"
          v-if="selectedId === 3"
        />
        <img
          class="right"
          :src="genLink('icon-right.png')"
          @click="next"
          v-else
        />
      </div>
    </div>

    <img class="specs" :src="genLink('led-specs.png')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowLED',

  data() {
    return {
      selectedId: 0,
      content: [
        {
          id: 0,
          text:
            'The narrow-band LED-powered backlight allows MacBook Pro to represent the P3 wide color gamut for brilliant, true-to-life color in photos and videos.',
        },
        {
          id: 1,
          text:
            'The oxide thin film transistor (TFT) features 10 times faster pixel charging than the traditional amorphous silicon TFT, and holds the pixel voltage steady during low-frequency power-saving modes, enabling pin-sharp resolution and longer battery life.',
        },
        {
          id: 2,
          text:
            'An Apple-patented metal layer in the TFT maximizes the transmittance of the pixels, enhancing brightness and color uniformity while reducing pixel cross-talk, which can cause visual artifacts.',
        },
        {
          id: 3,
          text:
            'A mirrorlike enhanced reflector sheet in the backlight reflects over 98 percent of incident light, allowing MacBook Pro to achieve 500 nits of brightness efficiently.',
        },
      ],
    };
  },

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },

    prev() {
      this.selectedId = Math.max(0, this.selectedId - 1);
    },
    next() {
      this.selectedId = Math.min(3, this.selectedId + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-led {
  @include sizeWH(100%, auto);
  @include flexCenter(column);
  background: #fff;
  padding-bottom: 1rem;

  .wrapper {
    @include sizeWH(60%, 5.7rem);
    background: #f3f3f3;
    margin: 0 auto;
    position: relative;

    .text {
      @include position(absolute, $top: 2.2rem, $left: 0.5rem);
      @include textMixin(#888888, 0.15rem, bold, $align: left);
      line-height: 0.22rem;
      z-index: 1;
      width: 2rem;
    }
    .image {
      @include sizeWH(auto, 100%);
      @include position(absolute, $right: 0);
    }

    .icons {
      @include position(absolute, $bottom: 0.2rem, $left: 0.5rem);

      .left,
      .right {
        @include sizeWH(0.3rem, 0.3rem);
        cursor: pointer;
      }
      .left {
        margin-right: 0.07rem;
      }
    }
  }

  .specs {
    @include sizeWH(8rem, auto);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
