<template>
  <button class="button-primary" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonPrimary',
};
</script>

<style lang="scss" scoped>
.button-primary {
  @include imageCDN('btn-confirm.png', 2.27rem, 0.53rem);
  padding: 0;
  border: none;
  font-family: refrigerator-deluxe, sans-serif;
  text-transform: uppercase;
}

.button-primary:disabled {
  opacity: 0.5;
}
</style>
