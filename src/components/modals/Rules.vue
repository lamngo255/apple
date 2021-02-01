<template>
  <div class="modal">
    <div class="dialog">
      <div class="header">
        <RulesTab
          v-for="(tab, i) in tabList"
          :key="i"
          :name="tab"
          :active="activeTab === i"
          @click.native="activeTab = i"
        />
        <button class="btn-close" @click="$emit('close')" />
      </div>

      <div class="body">
        <div v-if="activeTab === 0" key="how-to-play" class="how-to-play">
          <BaseCarousel :slides="slides" />
        </div>
        <BaseScrollable v-else-if="activeTab === 1" key="rules">
          <div class="rules" v-html="rules" />
        </BaseScrollable>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCarousel from '../ff/BaseCarousel.vue';
import BaseScrollable from '../ff/BaseScrollable.vue';
import RulesTab from './RulesTab.vue';

export default {
  name: 'Rules',

  components: {
    BaseCarousel,
    BaseScrollable,
    RulesTab,
  },

  props: {
    slides: { type: Array, required: true },
    rules: { type: String, required: true },
    titleHowToPlay: { type: String, required: true },
    titleRules: { type: String, required: true },
  },

  data() {
    return {
      activeTab: 0,
      tabList: [this.$t('textHowToPlay'), this.$t('textEventRules')],
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @include position(fixed, 0, 0, 0, 0, $z-index: 2);
  @include flexCenter(row);

  background: rgba(0, 0, 0, 0.8);
  font-size: 0.36rem;
}

.dialog {
  @include sizeWH(9rem, 5.85rem);
  @include flexCenter(column);

  background: #2b2b2b;
  position: relative;
  margin-bottom: 0.24rem;
}

.header {
  position: relative;
  height: 0.57rem;
  width: 100%;
  display: flex;
  font-size: 0.26rem;
  font-family: 'Oswald-Medium', sans-serif;
  text-transform: uppercase;
}

.active {
  color: #2b2f11;
  background-color: #e5cda1;
  padding: 0 0.13rem 0.03rem;
  border: transparent solid 0.02rem;
  transition: background-color 200ms, color 200ms;
}

.btn-close {
  @include position(absolute, 0.05rem, $right: 0.05rem);
  @include imageCDN('btn-close.png', 0.62rem, 0.62rem);

  border: none;
  z-index: 2;
}

.body {
  width: 100%;
  padding: 0.1rem;
  padding-right: 0.02rem;
  padding-left: 0.3rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
}

.rules {
  @include sizeWH(8.5rem, 4.9rem);

  color: #ddd;
  font-size: 0.25rem;
  padding-right: 0.4rem;
  font-family: refrigerator-deluxe, sans-serif;
}

.rules /deep/ .highlight {
  color: #e2bf77;
  font-size: 0.27rem;
  font-weight: bold;
}

.rules /deep/ p {
  margin-top: 0.1rem;
}

.rules /deep/ li {
  margin-left: 0.3rem;
  line-height: 0.24rem;
  list-style-position: outside;
}

.rules /deep/ ol {
  padding: 0.1rem 0.1rem 0 0;
  text-align: justify;
}

.rules /deep/ ol > li {
  list-style: decimal;
}

.rules /deep/ ul > li {
  list-style-type: circle;
}

.footer {
  position: absolute;
  bottom: -0.48rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
}
</style>
