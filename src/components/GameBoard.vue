<template>
  <div class="game-board">
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import utils from '@/utils';

export default {
  name: 'GameBoard',

  data() {
    return {
      timerId: 0,
    };
  },

  computed: {
    ...mapState('Game', ['profile', 'timeLeft']),

    textCountdown() {
      const { h, m, s } = utils.parseTime(this.timeLeft);
      return this.$t('textCountdown', { h, m, s });
    },
  },

  watch: {
    timeLeft(val) {
      if (val <= 0) {
        this.setError('no-event');
      }
    },
  },

  mounted() {
    this.startTimer();
  },

  beforeDestroy() {
    this.stopTimer();
  },

  methods: {
    ...mapActions('Game', ['openPopup', 'setError', 'tick']),

    startTimer() {
      this.timerId = setInterval(() => {
        if (this.timeLeft <= 0) {
          this.stopTimer();
        } else {
          this.tick();
        }
      }, 1000);
    },

    stopTimer() {
      clearInterval(this.timerId);
      this.timerId = 0;
    },
  },
};
</script>
