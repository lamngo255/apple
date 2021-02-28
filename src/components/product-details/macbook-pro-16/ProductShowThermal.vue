<template>
  <div class="product-show-thermal">
    <div class="wrapper">
      <img class="thermal" :src="genLink('thermal.jpg')" />
      <img class="thermal-stats" :src="genLink('thermal-stats.png')" />
      <div class="thermal-note">
        <span>
          More advanced thermal architecture enables faster processing.
        </span>
        <span>
          The thermal architecture in MacBook Pro has been completely
          redesigned, featuring larger impellers with improved fan blades for
          optimal airflow and more heat-dispersing fins for more effective
          cooling. The resulting gain in cooling capacity allows MacBook Pro to
          deliver up to 12 watts more maximum sustained power.
        </span>
      </div>
    </div>

    <img class="memory" :src="genLink('memory.jpg')" />
    <div class="memory-note">
      <span>
        Up to 64GB of DDR4 memory means more efficient multitasking.
      </span>
      <span>
        The 16-inch MacBook Pro uses fast 2666MHz DDR4 memory — up to 64GB — for
        smooth performance whether you’re loading hundreds of audio samples,
        editing billion-pixel images, or running multiple virtual machines.
      </span>
    </div>
    <img class="memory-stats" :src="genLink('memory-stats.png')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowThermal',

  data() {
    return {};
  },

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-pro-16/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-thermal {
  @include sizeWH(100%, auto);
  @include flexCenter(column);
  background: #fff;
  padding-bottom: 0.2rem;

  .wrapper {
    @include sizeWH(60%, auto);
    background: #f3f3f3;
    margin: 0 auto;
    padding-bottom: 0.7rem;
    position: relative;

    .thermal {
      @include sizeWH(90%, auto);
    }
    .thermal-stats {
      @include sizeWH(80%, auto);
      margin-top: 0.5rem;
    }
    .thermal-note {
      @include textMixin(#888, 0.15rem, bold, $align: left);
      line-height: 0.22rem;
      width: 80%;
      margin: 0 auto;

      span:first-child {
        color: #000;
      }
    }
  }

  .memory {
    @include sizeWH(60%, auto);
    margin-top: 0.2rem;
  }

  .memory-note {
    @include textMixin(#888, 0.15rem, bold, $align: left);
    line-height: 0.22rem;
    width: 60%;
    margin: 0.3rem auto 0;

    span:first-child {
      color: #000;
    }
  }

  .memory-stats {
    @include sizeWH(60%, auto);
  }
}
</style>
