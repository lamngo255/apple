<template>
  <div :class="['tab', { active }]">
    
    <span>{{ name }}</span>
    
  </div>
</template>

<script>
export default {
  name: 'RulesTab',

  props: {
    name: { type: String, required: true },
    active: { type: Boolean, required: true },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  @include textMixin(#2e2e2e, 0.28rem, $align: center);

  color: #717171;
  height: 0.47rem;
  padding: 0 0.13rem 0.07rem;
  cursor: pointer;
  margin-top: 0.13rem;
  margin-left: 0.25rem;
  border-radius: 0.06rem;
  border: #717171 solid 0.02rem;

  & + .tab {
    margin-left: 0.15rem;
  }
}

.active {
  transition: background-color 200ms, color 200ms;
  filter: brightness(1.4);
}
</style>
