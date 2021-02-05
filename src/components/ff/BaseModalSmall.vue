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
  @include textMixin(#e4cda0, 0.38rem, bold, uppercase);

  font-family: refrigerator-deluxe, sans-serif;
  margin-top: 0.3rem;
}

.dialog {
  @include sizeWH(8.31rem, 4.79rem);
  @include flexCenter(column);

  background: #2e2e2e;
  position: relative;
}

.btn-close {
  @include position(absolute, 0.05rem, $right: 0.05rem);
  @include imageCDN('btn-close.png', 0.62rem, 0.62rem);

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
}

.token {
  @include textMixin(#424242, 0.22rem);
  @include position(absolute, $bottom: 0.02rem);

  display: inline-block;
  font-family: refrigerator-deluxe, sans-serif;
}
</style>
