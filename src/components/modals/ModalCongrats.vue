<template>
  <BaseModalSmall @close="closePopup">
    
    <template #header>
      <span>{{ $t('textCongratsTitle') }}</span>
    </template>
    <div class="content">
      <div class="message">{{ $t('textCongratsMessage') }}</div>
      <div class="item">
        <PrizeItem
          :name="prizeItem.info[`name${language}`]"
          :image="prizeItem.info.image"
          :level="prizeItem.info.level"
          :quantity="prizeItem.quantity"
        />
      </div>
    </div>

    <template #footer>
      <ButtonPrimary @click="closePopup">
        <span>{{ $t('btnConfirm') }}</span>
      </ButtonPrimary>
      <div class="token" v-if="redeemTokens">
        <span>{{ $t('textAlreadyOwned', { token: redeemTokens }) }}</span>
      </div>
    </template>
    
  </BaseModalSmall>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import BaseModalSmall from '../ff/BaseModalSmall.vue';
import ButtonSecondary from '../ff/ButtonSecondary.vue';
import ButtonPrimary from '../ff/ButtonPrimary.vue';

export default {
  name: 'ModalCongrats',

  computed: {
    ...mapGetters('Game', ['redeemTokens']),
    ...mapState('Game', ['loots', 'prizeSeq', 'language']),

    prizeItem() {
      return this.loots.find((it) => it.seq === this.prizeSeq);
    },
  },

  components: {
    ButtonSecondary,
    ButtonPrimary,
    BaseModalSmall,
  },

  methods: {
    ...mapActions('Game', ['closePopup']),
  },
};
</script>

<style lang="scss" scoped>
.content {
  .message {
    @include textMixin(#fff, 0.25rem);
    margin-top: 0.3rem;
  }
  .item {
    @include flexCenter(row);
    margin-top: 0rem;
  }
}

.token {
  @include textMixin(#fff, 0.2rem, $style: italic, $align: center);
  width: 100%;
  margin: 0 auto 0.05rem;
}
</style>
