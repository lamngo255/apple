<template>
  <div class="carousel">
    <button v-if="value > 0" class="arrow left" @click="prev" />
    <div class="slides" :class="direction">
      <transition name="slide">
        <img :src="slides[value]" :key="value" />
      </transition>
    </div>
    <button
      v-if="value < slides.length - 1"
      class="arrow right"
      @click="next"
    />
    <div class="dots">
      <label v-for="(slide, index) in slides" :key="slide">
        <input name="slide" type="radio" v-model="value" :value="index" />
        <div class="dot" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCarousel',
  props: {
    slides: { type: Array, default: () => [] },
  },
  data() {
    return {
      direction: null,
      value: 0,
    };
  },
  watch: {
    value(nVal, oVal) {
      this.direction = nVal > oVal ? 'next' : 'prev';
    },
  },
  methods: {
    next() {
      this.value += 1;
    },
    prev() {
      this.value -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 8.6rem;
  height: 4.6rem;
  margin: 0.15rem auto;
  margin-left: -0.15rem;
  padding: 0.15rem 0.69rem 0.5rem;
}

.slides {
  position: relative;
  height: 100%;
  border: 0.05rem solid #e2bf77;
  overflow: hidden;
}

.slides img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.arrow {
  @include imageCDN('popup-arrow.png', 0.29rem, 0.45rem);

  position: absolute;
  top: 1.9rem;
  padding: 0;
  border: none;
}

.arrow.left {
  left: 0;
  transform: rotateY(180deg);
}

.arrow.right {
  right: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 300ms, transform 300ms;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateZ(0);
}

.next .slide-enter,
.prev .slide-leave-to {
  transform: translateX(100%) translateZ(0);
}

.next .slide-leave-to,
.prev .slide-enter {
  transform: translateX(-100%) translateZ(0);
}

.dots {
  @include position(absolute, $right: 0.68rem);

  display: flex;
  margin-top: 0.3rem;
}

.dots input {
  display: none;
}

.dots label + label {
  margin-left: 0.15rem;
}

.dot {
  width: 0.13rem;
  height: 0.13rem;
  background: #323131;
  transition: background-color 300ms;
}

.dots input:checked + .dot {
  background: #e2bf77;
}
</style>
