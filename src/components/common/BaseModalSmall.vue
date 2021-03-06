<template>
  <div class="modal">
    <div class="dialog">
      <div class="header">
        <slot name="header" />
        <button class="btn-close" @click="close" />
      </div>
      <div class="body">
        <slot />
      </div>
      <div class="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModalSmall',

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @include position(fixed, 0, 0, 0, 0, $z-index: 3);
  @include flexCenter(row);

  background: rgba(0, 0, 0, 0.65);
  font-size: 0.36rem;
}

.header {
  @include textMixin(#000, 0.38rem, bold);
  margin-top: 0.3rem;
  font-family: 'San Francisco Regular', sans-serif;
}

.dialog {
  @include sizeWH(6rem, 3.79rem);
  @include flexCenter(column);

  background: #fff;
  position: relative;
  border-radius: 0.2rem;
}

.btn-close {
  @include position(absolute, 0.12rem, $left: 0.12rem);
  @include imageCDN('shop/btn-close.png', 0.4rem, 0.4rem);

  border: none;
  z-index: 2;
}

.body {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  overflow: auto;
  color: #000;
  text-align: center;
  overflow-y: hidden;
}

.footer {
  @include flexCenter(column);

  padding: 0.2rem 0.16rem 0.35rem;

  .btn-confirm {
    @include textMixin(#fff, 0.2rem);
    font-family: 'San Francisco', sans-serif;
    background: #2d71e3;
    border-radius: 0.1rem;
    padding: 0.1rem 1rem;
  }
}

.token {
  @include textMixin(#424242, 0.22rem);
  @include position(absolute, $bottom: 0.02rem);

  display: inline-block;
  font-family: refrigerator-deluxe, sans-serif;
}
</style>
