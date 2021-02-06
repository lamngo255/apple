<template>
  <div class="ipad-find">
    <div class="title">Find the right iPad for you</div>
    <div class="compare">Compare iPad models</div>

    <div class="products">
      <IpadFindProduct
        v-for="(product, i) in products"
        :key="i"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import IpadFindProduct from './IpadFindProduct.vue';

export default {
  name: 'IpadFind',

  components: {
    IpadFindProduct,
  },

  data() {
    return {
      products: [
        {
          image: this.$assetsUrl('pages/ipad/find/ipad-pro.png'),
          name: 'Ipad Pro',
          price: 799,
          screenSize: '12.9” and 11”',
          screenDesc: 'Liquid Retina display with ProMotion',
          chip: {
            image: this.$assetsUrl('chips/a12z.png'),
            name: 'A12Z Bionic chip',
          },
          keyboard: 'Compatible with Magic Keyboard and Smart Keyboard Folio',
          pencil: 'Compatible with Apple Pencil (2nd generation)',
        },
        {
          image: this.$assetsUrl('pages/ipad/find/ipad-air.png'),
          name: 'Ipad Air',
          price: 599,
          screenSize: '10.9”',
          screenDesc: 'Liquid Retina display',
          chip: {
            image: this.$assetsUrl('chips/a14.png'),
            name: 'A14 Bionic chip',
          },
          keyboard: 'Compatible with Magic Keyboard and Smart Keyboard Folio',
          pencil: 'Compatible with Apple Pencil (2nd generation)',
        },
        {
          image: this.$assetsUrl('pages/ipad/find/ipad.png'),
          name: 'Ipad',
          price: 329,
          screenSize: '10.2”',
          screenDesc: 'Retina display',
          chip: {
            image: this.$assetsUrl('chips/a12.png'),
            name: 'A12 Bionic chip',
          },
          keyboard: 'Compatible with Smart Keyboard',
          pencil: 'Compatible with Apple Pencil (1st generation)',
        },
        {
          image: this.$assetsUrl('pages/ipad/find/ipad-mini.png'),
          name: 'Ipad Mini',
          price: 399,
          screenSize: '7.9”',
          screenDesc: 'Retina display',
          chip: {
            image: this.$assetsUrl('chips/a12.png'),
            name: 'A12 Bionic chip',
          },
          keyboard: 'Compatible with Smart Keyboard',
          pencil: 'Compatible with Apple Pencil (1st generation)',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ipad-find {
  @include sizeWH(100%, auto);
  padding-top: 1rem;
  background: #fff;
  position: relative;

  .title {
    @include textMixin(#000, 0.6rem, bold);
  }
  .compare {
    @include textMixin(#0266cc, 0.21rem);
    margin-top: 0.1rem;
  }

  .products {
    @include flexCenter(row);
    margin-top: 0.5rem;
  }
}
</style>
