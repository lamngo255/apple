<template>
  <MountingPortal append mountTo="body">
    <div class="loading"></div>
  </MountingPortal>
</template>

<script>
import { MountingPortal } from 'portal-vue';

export default {
  name: 'Loading',

  components: {
    MountingPortal,
  },
};
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg) scaleX(-1);
  }

  to {
    transform: rotate(360deg) scaleX(-1);
  }
}

.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
}

.loading::before {
  content: '';
  width: 0.44rem;
  height: 0.44rem;
  animation: rotate 1s linear infinite;
  background: url('./loading.png') center / contain no-repeat;
}
</style>
