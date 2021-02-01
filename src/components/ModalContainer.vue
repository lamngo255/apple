<template>
  <MountingPortal append mountTo="body">
    <transition name="modal">
      <ModalConfirm v-if="openedPopup ==='confirm'" />
      <ModalCongrats v-else-if="openedPopup === 'congrats'" />
      <ModalHistory v-else-if="openedPopup === 'history'" />
      <ModalTreasure v-else-if="openedPopup === 'treasure'" />
      <ModalRules v-else-if="openedPopup === 'rules'" />
      <ModalError v-if="error" />
    </transition>
  </MountingPortal>
</template>

<script>
import { mapState } from 'vuex';
import { MountingPortal } from 'portal-vue';
import ModalConfirm from './modals/ModalConfirm.vue';
import ModalCongrats from './modals/ModalCongrats.vue';
import ModalRules from './modals/ModalRules.vue';
import ModalHistory from './modals/ModalHistory.vue';
import ModalTreasure from './modals/ModalTreasure.vue';
import ModalError from './modals/ModalError.vue';

export default {
  name: 'ModalContainer',

  components: {
    ModalConfirm,
    ModalCongrats,
    ModalRules,
    ModalHistory,
    ModalTreasure,
    ModalError,
    MountingPortal,
  },

  computed: {
    ...mapState('Game', ['error', 'openedPopup']),
  },
};
</script>
<style lang="scss" scoped>
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

