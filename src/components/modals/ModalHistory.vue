<template>
  <BaseModalLarge @close="closePopup">
    
    <template #header>
      <span class="text" v-html="$t('textHistory')" />
    </template>

    <div class="history">
      <Loading v-if="isLoading" />
      <div v-else-if="history.length === 0" class="message">
        <span v-html="$t('popupHistoryEmptyMessage')" />
      </div>
      <div v-else-if="history.length > 0">
        <div class="thead">
          <div class="row">
            <div class="cell" v-html="$t('popupHistoryTime')" />
            <div class="cell" v-html="$t('popupHistoryPrice')"/>
            <div class="cell" v-html="$t('popupHistoryPrizePreview')" />
            <div class="cell" v-html="$t('popupHistoryRemarks')" />
          </div>
        </div>

        <BaseScrollable>
          <div class="items">
            <div class="row" v-for="(item, i) in historyItems" :key="i">
              <div class="cell">
                <span>{{ new Date(item.time * 1000) | dateFormat('dd.MM.yyyy') }}</span>
                <span>{{ new Date(item.time * 1000) | dateFormat('HH.mm') }}</span>
              </div>
              <div class="cell">{{ item.cost }}</div>
              <div class="cell">
                <div class="image">
                  <img :src="item.image" />
                  <div class="quantity">{{ itemQuantity(item) }}</div>
                </div>
                <div class="name">{{ itemName(item) }}</div>
              </div>
              <div class="cell" v-if="item.token">
                <span v-html="$t('textHistoryToken', { quantity: item.token })" />
              </div>
            </div>
          </div>
        </BaseScrollable>
      </div>
    </div>
    
  </BaseModalLarge>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Loading from '../loading/Loading.vue';
import BaseModalLarge from '../ff/BaseModalLarge.vue';
import BaseScrollable from '../ff/BaseScrollable.vue';

export default {
  name: 'ModalHistory',

  data() {
    return {
      dontAsk: false,
    };
  },

  components: {
    BaseModalLarge,
    BaseScrollable,
    Loading,
  },

  computed: {
    ...mapState('Modal', ['error']),
    ...mapState('Game', ['config', 'loots', 'history', 'language']),

    isLoading() {
      return this.history === null;
    },

    historyItems() {
      return this.history.map((item) => ({
        time: item.timestamp,
        cost: item.cost,
        token: item.fallbackSeq ? this.findItem(item.fallbackSeq)?.quantity : 0,
        ...this.findItem(item.seq),
      }));
    },
  },

  methods: {
    ...mapActions('Game', ['closePopup', 'getDrawHistory']),

    itemName(item) {
      if (item.quantity > 1) return `${item.quantity}x ${item.name}`;
      return item.name;
    },

    itemQuantity(item) {
      if (item.quantity > 1) return `x${item.quantity}`;
      return '';
    },

    findItem(seq) {
      return this.loots.find((it) => {
        return it.seq === seq;
      });
    },
  },

  async created() {
    await this.getDrawHistory();
  },
};
</script>

<style lang="scss" scoped>
.header {
  .text {
    margin: 0.03rem 0 0 0.25rem;
    @include textMixin(#ffc200, 0.32rem, uppercase, $align: center);
  }
}

.history {
  margin-top: 0.15rem;
  margin-left: 0.45rem;
  width: 92%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}

.row {
  display: flex;
  background-color: #444;
  margin-bottom: 0.024rem;
}

.cell {
  height: 1rem;
  color: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: refrigerator-deluxe, sans-serif;
  font-size: 0.27rem;
  font-weight: normal;
  text-align: center;
  z-index: 1;
}

.thead .cell {
  @include flexCenter(row);
  @include textMixin(#2b2b2b, 0.3rem, bold, uppercase);
  background: #808080;
  height: 0.5rem;
}

.items {
  @include sizeWH(8.92rem, 4.6rem);
}

.cell:nth-child(1) {
  @include flexCenter(column);
  width: 2rem;
}

.cell:nth-child(2) {
  width: 1.5rem;

  i {
    @include imageCDN('icon-diamond.png', 0.28rem, 0.28rem);
    display: inline-block;
    margin-right: 0.1rem;
  }
}

.cell:nth-child(3) {
  flex-grow: 1;
  position: relative;
  .image {
    @include imageCDN('frame-prize.png', 0.9rem, 0.9rem);
    @include position(absolute, $left: 0.7rem);

    img {
      @include alignCenter();
      @include sizeWH(0.85rem, 0.85rem);
      border-radius: 0.04rem;
    }

    .quantity {
      @include textMixin(#fff, 0.2rem);
      @include position(absolute, 0.65rem, 0.06rem);
    }
  }
  .name {
    @include position(absolute, $left: 1.6rem);
    text-transform: uppercase;
    margin-left: 0.15rem;
    width: 2rem;
    text-align: left;
  }
}

.cell:nth-child(4) {
  width: 1.7rem;
  padding-right: 0.3rem;
}

.message {
  @include alignCenter();
  @include textMixin(#fff, 0.3rem, bold, uppercase);
  font-family: refrigerator-deluxe, sans-serif;
}

.scrollable {
  width: 94.3%;
}
</style>
