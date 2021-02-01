<template>
  <Rules
    :rules="rules"
    :slides="slides"
    :titleHowToPlay="$t('textHowToPlay')"
    :titleRules="$t('textEventRules')"
    @close="closePopup"
  />
</template>

<script>
import { mapActions } from 'vuex';
import Rules from './Rules.vue';

export default {
  name: 'ModalRules',

  components: { Rules },

  data() {
    return {
      rules: this.$t('textRules'),
      slides: [
        this.$t('tutorial1'),
        this.$t('tutorial2'),
        this.$t('tutorial3'),
      ],
    };
  },

  methods: {
    ...mapActions('Game', ['closePopup']),
  },
};
</script>
