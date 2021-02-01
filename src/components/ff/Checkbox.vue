<template>
  <label class="checkbox">
  
    <input
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="$emit('change', $event.target.checked)"
    />
    <div class="checkmark" />
    <slot>{{ label }}</slot>
  
  </label>
</template>

<script>
export default {
  name: 'Checkbox',

  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {
    label: { type: String, default: null },
    checked: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  @include textMixin(#fff, 0.27rem, bold);

  display: inline-flex;
  align-items: center;
}

.checkbox input {
  display: none;
}

.checkbox .checkmark {
  @include imageCDN('checkbox-unchecked.png', 0.35rem, 0.35rem);

  transition: background-image 200ms;
}

.checkbox :checked + .checkmark {
  @include imageCDN('checkbox-checked.png', 0.35rem, 0.35rem);
}
</style>
