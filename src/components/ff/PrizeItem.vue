<template>
  <div :class="['prize-item', { special }]" :data-level="level">
    
    <div class="image" :style="{ backgroundImage: `url(${image})` }" />
    <div class="quantity" v-if="quantity > 1">x{{ quantity }}</div>
    <div class="name">
      <BaseMarquee>{{ name }}</BaseMarquee>
    </div>
    
  </div>
</template>

<script>
import BaseMarquee from './BaseMarquee.vue';

export default {
  inheritAttrs: false,
  name: 'PrizeItem',
  components: { BaseMarquee },
  props: {
    special: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      default: 2,
    },
  },
};
</script>

<style lang="scss" scoped>
.prize-item {
  @include sizeWH(1.53rem, 1.67rem);
  padding: 0.03rem 0.03rem 0.31rem 0.03rem;
  flex-shrink: 0;
  background: center / contain no-repeat;
  position: relative;
}

.prize-item[data-level='1'] {
  @include imageCDN('prize-frames/popup-frame-01.png', 1.53rem, 1.67rem);
}

.prize-item[data-level='2'] {
  @include imageCDN('prize-frames/popup-frame-02.png', 1.53rem, 1.67rem);
}

.prize-item[data-level='3'] {
  @include imageCDN('prize-frames/popup-frame-03.png', 1.53rem, 1.67rem);
}

.prize-item[data-level='4'] {
  @include imageCDN('prize-frames/popup-frame-04.png', 1.53rem, 1.67rem);
}

.prize-item[data-level='5'] {
  @include imageCDN('prize-frames/popup-frame-05.png', 1.53rem, 1.67rem);
}

.prize-item.special {
  @include imageCDN('prize-frames/popup-frame-00.png', 1.53rem, 1.67rem);
}

.image {
  height: 100%;
  background: center / contain no-repeat;
}

.quantity {
  @include textMixin(#fff, 0.23rem);
  @include position(absolute, 1.08rem, 0.1rem);
}

.name {
  height: 0.27rem;
  padding: 0.02rem 0.06rem;
  color: #fff;
  font: 0.16rem / 0.27rem CgFuturaMaxiLt, Roboto, Arial, Helvetica, 'Droid Sans',
    sans-serif;
  text-align: center;
  text-transform: uppercase;
}
</style>
