<template>
  <MountingPortal append mountTo="body">
    <transition name="modal">
      <ModalError v-if="error" />
    </transition>
  </MountingPortal>
</template>

<script>
import { mapState } from 'vuex';
import { MountingPortal } from 'portal-vue';
import ModalError from './modals/ModalError.vue';

export default {
  name: 'ModalContainer',

  components: {
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
