<template>
  <div class="modal">
    <div class="dialog">
      <div :class="['header', { noheader }]">
        <slot name="header" />
        <button class="btn-close" @click="close" />
      </div>
      <div class="body">
        <slot />
      </div>
      <div class="footer" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModalLarge',

  props: {
    noheader: { type: Boolean, default: false },
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @include position(fixed, 0, 0, 0, 0, $z-index: 2);
  @include flexCenter(row);

  background: rgba(0, 0, 0, 0.8);
  font-size: 0.36rem;
  font-family: refrigerator-deluxe, sans-serif;
}

.dialog {
  @include sizeWH(9.7rem, 6.1rem);

  background: #2b2b2b;
  position: relative;
  margin-bottom: 0.24rem;
}

.header {
  position: relative;
  height: 0.57rem;
  width: 100%;
  display: flex;
  font-size: 0.26rem;
  font-family: 'Oswald-Medium', sans-serif;
  text-transform: uppercase;
}

.btn-close {
  @include position(absolute, 0.05rem, $right: 0.05rem);
  @include imageCDN('btn-close.png', 0.62rem, 0.62rem);

  border: none;
  z-index: 2;
}

.footer {
  position: absolute;
  bottom: -0.48rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
}

.modal-enter {
  opacity: 0;
}

.modal-enter .dialog {
  transform: scale(0.8);
}

.modal-enter-active {
  transition: opacity 200ms;
}

.modal-enter-active .dialog {
  transition: transform 200ms;
}
</style>
