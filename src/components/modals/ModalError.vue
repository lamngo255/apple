<template>
  <BaseModalSmall @close="closePopup">
    <template #header>
      <span>{{ $t('textError') }}</span>
    </template>
    <div class="content">
      <div class="message">{{ message }}</div>
    </div>

    <template #footer>
      <!-- <ButtonPrimary @click="closePopup">
        <span>{{ $t('btnConfirm') }}</span>
      </ButtonPrimary> -->
    </template>
  </BaseModalSmall>
</template>

<script>
import utils from '@/utils';
import { mapActions, mapState } from 'vuex';
import BaseModalSmall from '../ff/BaseModalSmall.vue';

export default {
  name: 'ModalError',

  components: {
    BaseModalSmall,
  },

  computed: {
    ...mapState('Modal', ['error']),

    message() {
      return this.$t(utils.capitalize(this.error));
    },
  },

  methods: {
    ...mapActions('Game', ['closePopup']),
  },
};
</script>

<style lang="scss" scoped>
.content {
  .message {
    color: #fff;
    font-size: 0.3rem;
    font-family: refrigerator-deluxe, sans-serif;
    @include alignCenter();
  }
}

.header {
  @include textMixin(#fff, 0.27rem, $transform: uppercase, $align: left);

  margin-left: 0.25rem;
  margin-top: 0.18rem;
}
</style>
