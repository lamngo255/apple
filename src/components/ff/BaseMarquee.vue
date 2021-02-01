<template>
  <div class="marquee" ref="marquee">
    <template v-if="isLongText">
      <div class="text running" :style="textStyle">
        <slot />
      </div>
      <div class="text running" :style="textStyle">
        <slot />
      </div>
    </template>
    <div class="text" ref="text" v-else><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'BaseMarquee',
  data() {
    return { isLongText: false, textStyle: null };
  },
  props: {
    duration: { type: Number, default: 3 },
  },
  mounted() {
    const { marquee, text } = this.$refs;
    if (marquee && text) {
      const animationDuration = `${(text.offsetWidth / marquee.offsetWidth) *
        this.duration}s`;
      this.textStyle = {
        webkitAnimationDuration: animationDuration,
        animationDuration,
      };
      this.isLongText = text.offsetWidth > marquee.offsetWidth;
    }
  },
};
</script>

<style lang="scss" scoped>
@keyframes marquee {
  to {
    transform: translateX(-100%) translateZ(0);
  }
}

.marquee {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}

.running {
  padding-right: 0.16rem;
  animation: marquee infinite linear;
}

.text {
  flex-shrink: 0;
  min-width: 100%;
  will-change: transform;
}
</style>
