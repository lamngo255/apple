<template>
  <button class="button-secondary" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonSecondary',
};
</script>

<style lang="scss" scoped>
.button-primary {
  @include imageCDN('btn-cancel.png', 2.27rem, 0.53rem);
  padding: 0;
  border: none;
  font-family: refrigerator-deluxe, sans-serif;
  text-transform: uppercase;
}

.button-secondary:disabled {
  opacity: 0.5;
}
</style>
