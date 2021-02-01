<template>
  <div class="game-banner">

    <div class="game-title">
      <span class="title">{{ $t('textEventTitle') }}</span>
      <button class="btn-history" @click="openPopup('history')" />
      <button class="btn-rules" @click="openPopup('rules')" />
    </div>

    <div class="profile">
      <div class="uid">{{ $t('textUID', { uid: profile.accountId })}}</div>
      <div class="balance">
        <span>{{ $t('textBalance')}}</span>
        <i />
        <span>{{ balance }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'GameBanner',

  computed: {
    ...mapState('Game', ['profile']),
    ...mapGetters('Game', ['balance']),
  },

  methods: {
    ...mapActions('Game', ['openPopup'])
  }
};
</script>

<style lang="scss" scoped>
.game-banner {
  @include sizeWH(100%, 0.9rem);
}

.game-title {
  @include position(absolute, 0.05rem, $left: 50%);
  @include textMixin(#fff, 0.6rem, bold, uppercase);
  @include flexCenter(row);
  transform: translate(-50%, 0);

  button {
    margin-left: 0.12rem;
  }

  .btn-history {
    @include imageCDN('btn-history.png', 0.3rem, 0.31rem);
  }

  .btn-rules {
    @include imageCDN('btn-rules.png', 0.3rem, 0.31rem);
  }
}

.profile {
  @include position(absolute, 0.05rem, 0.5rem);
  text-align: right;

  .uid {
    @include textMixin(#fff, 0.27rem, normal);
  }

  .balance {
    @include textMixin(#fff, 0.27rem, normal, uppercase);
    width: 100%;

    i {
      @include imageCDN('icon-diamond.png', 0.28rem, 0.23rem);
      @include position(relative, 0.02rem);
      display: inline-block;
    }
  }
}
</style>
