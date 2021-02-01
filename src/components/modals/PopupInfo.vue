<template>
  <div class="popup-info">
    <div class="popup">
      <div class="content" v-html="$t('textInfo')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupInfo',
};
</script>

<style lang="scss" scoped>
.popup-info {
  @include position(absolute, 4.5rem, $right: 0.7rem);
  text-align: center;
  opacity: 0.8;
  z-index: 3;

  .popup {
    @include imageCDN('frame-popup-info.png', 2.09rem, 0.98rem);
    .content {
      @include textMixin(#fff, 0.25rem, bold);
      position: relative;
      margin: 0.15rem 0.15rem;
      text-align: left;

      & /deep/ .strike {
        color: #ffc200;
      }
    }
  }
}
</style>
