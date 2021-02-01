<template>
  <BaseModalLarge @close="closePopup" noheader>
    
    <BaseScrollable>
      <div class="container">
        <div class="grand-prize">
          <span class="title">{{ $t('textGrandPrizes')}}</span>
          <div class="prizes">
            <div class="item" v-for="(prize, i) in grandPrizes" :key="i">
              <PrizeItem
                :name="prize.info[`name${language}`]"
                :image="prize.info.image"
                :level="prize.info.level"
                :quantity="prize.quantity"
              />
            </div>
          </div>
        </div>
        <div class="normal-prize">
          <span class="title">{{ $t('textNormalPrizes')}}</span>
          <div class="prizes">
            <div class="item" v-for="(prize, i) in normalPrizes" :key="i">
              <PrizeItem
                :name="prize.info[`name${language}`]"
                :image="prize.info.image"
                :level="prize.info.level"
                :quantity="prize.quantity"
              />
            </div>
          </div>
        </div>
      </div>
    </BaseScrollable>
    
  </BaseModalLarge>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BaseModalLarge from '../ff/BaseModalLarge.vue';
import BaseScrollable from '../ff/BaseScrollable.vue';
import PrizeItem from '../ff/PrizeItem.vue';

export default {
  name: 'ModalTreasure',

  components: {
    BaseModalLarge,
    BaseScrollable,
    PrizeItem,
  },

  computed: {
    ...mapState('Game', ['loots', 'config', 'language']),

    grandPrizes() {
      return this.config.grandSeq.map((seq) => ({
        ...this.getItem(seq),
      }));
    },

    normalPrizes() {
      return [
        ...this.loots.filter((loot) => loot.info.itemType === 1),
      ];
    },
  },

  methods: {
    ...mapActions('Game', ['closePopup']),

    getItem(seq) {
      return this.loots.find((loot) => loot.seq === seq);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 5.8rem;
}

.grand-prize,
.normal-prize {
  padding: 0.4rem;
  margin-top: -0.5rem;

  .title {
    @include textMixin(#fff, 0.52rem, bold, uppercase, $align: center);
    padding-top: 0.02rem;
    border-bottom: #ffc600 solid 0.04rem;
    cursor: pointer;
  }

  .prizes {
    @include flexCenter(row);
    margin-top: 0.2rem;
    flex-wrap: wrap;
    justify-content: flex-start;

    .item {
      @include sizeWH(1.4rem, 1.4rem);
      margin-right: 0.35rem;
      margin-bottom: 0.5rem;
      position: relative;

      .quantity {
        @include position(absolute, 1.1rem, 0.07rem);
        @include textMixin(#fff, 0.23rem, bold);
      }
      img {
        @include alignCenter();
        @include sizeWH(1.35rem, 1.35rem);
      }
      .name {
        @include textMixin(#fff, 0.25rem, bold, uppercase, $align: center);
        @include position(absolute, 1.4rem);
        width: 1.4rem;
      }
    }
  }
}

.scrollable {
  width: 99%;
}
</style>
