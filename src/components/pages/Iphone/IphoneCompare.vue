<template>
  <div class="ipad-find">
    <div class="title">Which iPhone is right for you?</div>
    <div class="compare">Compare iPhone models</div>

    <div class="products">
      <IphoneCompareProduct
        v-for="(product, i) in products"
        :key="i"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import IphoneCompareProduct from './IphoneCompareProduct.vue';

export default {
  name: 'IphoneCompare',

  components: {
    IphoneCompareProduct,
  },

  data() {
    return {
      products: [
        {
          image: this.$assetsUrl('pages/iphone/compare/ip-12-pro.jpg'),
          name: 'Iphone 12 Pro',
          price: 799,
          screenSize: '6.1″ or 6.7″',
          screenDesc: 'Super Retina XDR display',
          chip: {
            image: this.$assetsUrl('chips/a12z.png'),
            name: 'A12Z Bionic chip',
          },
          keyboard: 'Compatible with Magic Keyboard and Smart Keyboard Folio',
          pencil: 'Compatible with Apple Pencil (2nd generation)',
        },
        {
          image: this.$assetsUrl('pages/iphone/compare/ip-12.jpg'),
          name: 'Iphone 12',
          price: 599,
          screenSize: '5.4″ or 6.1″',
          screenDesc: 'Super Retina XDR display',
          chip: {
            image: this.$assetsUrl('chips/a14.png'),
            name: 'A14 Bionic chip',
          },
          keyboard: 'Compatible with Magic Keyboard and Smart Keyboard Folio',
          pencil: 'Compatible with Apple Pencil (2nd generation)',
        },
        {
          image: this.$assetsUrl('pages/iphone/compare/ip-se.jpg'),
          name: 'Iphone SE',
          price: 329,
          screenSize: '4.7″',
          screenDesc: 'Retina HD display',
          chip: {
            image: this.$assetsUrl('chips/a12.png'),
            name: 'A12 Bionic chip',
          },
          keyboard: 'Compatible with Smart Keyboard',
          pencil: 'Compatible with Apple Pencil (1st generation)',
        },
        {
          image: this.$assetsUrl('pages/iphone/compare/ip-11.jpg'),
          name: 'Iphone 11',
          price: 399,
          screenSize: '6.1″',
          screenDesc: 'Liquid Retina HD display',
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
    @include textMixin(#000, 0.5rem, bold);
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
