<template>
  <BaseModalSmall @close="closePopup">
    <template #header>
      <span>Check out</span>
    </template>
    <div class="content">
      <div class="message">You've purchased successfully!</div>
    </div>

    <template #footer>
      <button class="btn-confirm" @click="closePopup">OK</button>
    </template>
  </BaseModalSmall>
</template>

<script>
import { mapActions } from 'vuex';
import BaseModalSmall from '../common/BaseModalSmall.vue';

export default {
  name: 'ModalError',

  components: {
    BaseModalSmall,
  },

  methods: {
    ...mapActions('Apple', ['closePopup']),
  },
};
</script>

<style lang="scss" scoped>
.content {
  .message {
    color: #333;
    font-size: 0.27rem;
    font-family: refrigerator-deluxe, sans-serif;
    @include alignCenter();
  }
}
</style>
