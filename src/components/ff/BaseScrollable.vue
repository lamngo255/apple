<template>
  <div :class="['scrollable', { noscroll }]">
    <div class="content" ref="content" @scroll.passive="scroll">
      <slot />
    </div>
    <div class="scrollbar" :style="{ top: `${scrollPos}px`, height: `${scrollHeight}px`}"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseScrollable',

  props: {
    noshadow: { type: Boolean, default: false },
    noscroll: { type: Boolean, default: false },
  },

  data() {
    return {
      top: false,
      bottom: false,

      scrollPos: 0,
      scrollHeight: 0,
    };
  },

  mounted() {
    this.scroll();
  },

  methods: {
    scroll() {
      if (this.noshadow) return;
      if (this.$refs.content) {
        const { offsetHeight, scrollHeight, scrollTop } = this.$refs.content;
        this.top = scrollTop > 0;
        this.bottom = scrollTop + offsetHeight < scrollHeight;

        this.scrollPos = scrollTop / (scrollHeight / offsetHeight);
        this.scrollHeight = (offsetHeight * offsetHeight) / scrollHeight;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scrollable {
  position: absolute;
  display: flex;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  &::before {
    content: '';
    @include sizeWH(0.12rem, 100%);
    @include position(absolute, 0, $right: -0.02rem, $z-index: 0);
    background: #4F4F4F;
  }

  &.noscroll {
    &::before {
      background: transparent;
    }
  }

  .scrollbar {
    @include position(absolute, 0, 0rem);
    width: 0.1rem;
    background: #ffc100;
  }
}

.content {
  width: 100%;
  overflow-y: auto;
  z-index: 1;
}

.shadow {
  position: absolute;
  right: 0;
  left: 0;
  height: 0.6rem;
  pointer-events: none;
}

::-webkit-scrollbar {
  width: 0;
  display: none;
}

.scrollable ::-webkit-scrollbar {
  width: 0.11rem;
  background: transparent;
  visibility: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
