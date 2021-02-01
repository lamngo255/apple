<template>
  <BaseModalSmall @close="close">
    
    <template #header>
      <span>{{ $t('textConfirmation')}}</span>
    </template>
    <div class="content">
      <div class="message">
        <div v-html="$t('textConfirmationMessage', { diamonds })"></div>
        <Checkbox :label="$t('textConfirmationReminder')" v-model="dontAsk" class="checkbox" />
      </div>
    </div>
    <template #footer>
      <ButtonSecondary @click="close">
        <span>{{ $t('btnCancel') }}</span>
      </ButtonSecondary>
      <ButtonPrimary @click="confirm">
        <span>{{ $t('btnConfirm') }}</span>
      </ButtonPrimary>
    </template>
    
  </BaseModalSmall>
</template>

<script>
import BaseModalSmall from '../ff/BaseModalSmall.vue';
import ButtonPrimary from '../ff/ButtonPrimary.vue';
import ButtonSecondary from '../ff/ButtonSecondary.vue';
import Checkbox from '../ff/Checkbox.vue';

export default {
  name: 'ModalConfirm',

  props: {
    diamonds: { type: Number, required: true },
  },

  data() {
    return {
      dontAsk: false,
    };
  },

  components: {
    ButtonPrimary,
    ButtonSecondary,
    BaseModalSmall,
    Checkbox,
  },

  methods: {
    close() {
      this.$emit('close');
    },

    async confirm() {
      this.$emit('dontAsk', this.dontAsk);
      this.$emit('confirm');
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  @include alignCenter();
  width: 100%;
  font-family: refrigerator-deluxe, sans-serif;

  .message {
    @include textMixin(#fff, 0.25rem);

    span /deep/ .strike {
      text-decoration: line-through;
    }
  }
}

label {
  text-align: left;

  span {
    @include position(relative, 0.03rem);
    @include textMixin(#f3c62a, 0.23rem);
  }
}

.header {
  @include textMixin(#fff, 0.27rem, $transform: uppercase, $align: left);

  margin-left: 0.25rem;
  margin-top: 0.18rem;
  font-family: refrigerator-deluxe, sans-serif;
}
</style>
