<template>
  <BaseLayout>
    <div class="my-bag">
      <PageMyBagHeader :totalPrice="totalPrice" />

      <template v-if="!emptyBag">
        <div class="products">
          <PageMyBagItem
            v-for="(product, i) in parsedBag"
            :product="product"
            :key="i"
          />
        </div>

        <div class="checkout">
          <div class="row">
            <div class="text">Subtotal</div>
            <div class="price">${{ totalPrice }}</div>
          </div>
          <div class="row">
            <div class="text">Shipping</div>
            <div class="price">FREE</div>
          </div>
          <div class="row">
            <div class="text">Total</div>
            <div class="price">${{ totalPrice }}.00</div>
          </div>
          <div class="row">
            <button class="btn-checkout" @click="checkOut()">Check out</button>
          </div>
        </div>
      </template>
    </div>
  </BaseLayout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { colorPicker } from '@/mapping';
import BaseLayout from '@/components/BaseLayout.vue';
import PageMyBagHeader from './PageMyBagHeader.vue';
import PageMyBagItem from './PageMyBagItem.vue';

export default {
  name: 'PageMyBag',

  components: {
    BaseLayout,
    PageMyBagHeader,
    PageMyBagItem,
  },

  computed: {
    ...mapState('Apple', ['myBag', 'allProducts']),

    emptyBag() {
      return this.myBag.length === 0;
    },

    bagList() {
      return this.myBag.map((item) => {
        return {
          ...this.allProducts[item.id],
          ...item,
        };
      });
    },

    parsedBag() {
      return this.bagList.map((item) => ({
        ...item,
        name: this.genName(item),
        image: item.colorId >= 0 ? item.images[item.colorId] : item.mainImage,
        quantity: item.quantity,
        basePrice: item.basePrice,
      }));
    },

    totalPrice() {
      return this.parsedBag.reduce(
        (acc, item) => acc + item.quantity * item.basePrice,
        0,
      );
    },
  },

  methods: {
    ...mapActions('Apple', ['removeProductFromBag', 'openPopup', 'clearBag']),

    genName(item) {
      const { specs } = item;
      if (!specs) return '';

      let itemName = this.allProducts[item.id].name;
      if (item.capacityId >= 0) {
        const cap = specs.capacities[item.capacityId];
        if (cap < 10) {
          itemName += ` ${cap}TB`;
        } else {
          itemName += ` ${cap}GB`;
        }
      }

      if (item.colorId >= 0) {
        const colorCode = specs?.colors[item.colorId];
        const colorName = colorPicker(colorCode).name;
        itemName += ` ${colorName}`;
      }
      return itemName;
    },

    checkOut() {
      this.clearBag();
      this.openPopup('checkout');
    },
  },
};
</script>

<style lang="scss" scoped>
.my-bag {
  @include sizeWH(58%, auto);
  text-align: left;
  margin: 0 auto;
  padding-bottom: 0.3rem;
}

.products {
  display: flex;
  flex-flow: column wrap;
  margin-top: 0.1rem;
  padding: 0 0.2rem;
  border-bottom: #dbdbdb solid 0.01rem;
  padding-bottom: 0.3rem;
}

.checkout {
  @include flexCenter(column);
  margin: 0.2rem auto 0;

  .row {
    @include flexCenter(row);
    @include textMixin(#000, 0.14rem);
    font-family: 'San Francisco Regular', sans-serif;
    margin-left: 0.7rem;
    width: 5.7rem;
    justify-content: space-between;
    margin-top: 0.03rem;

    &:nth-child(2) {
      border-bottom: #dbdbdb solid 0.01rem;
      padding-bottom: 0.15rem;
    }
    &:nth-child(3) {
      margin-top: 0.15rem;
      @include textMixin(#000, 0.2rem, bold);
    }
    &:nth-child(4) {
      justify-content: flex-end;
      .btn-checkout {
        @include textMixin(#fff, 0.15rem);
        margin-top: 0.1rem;
        background: #2d71e3;
        padding: 0.13rem 1.1rem;
        border-radius: 0.1rem;
      }
    }
  }
}
</style>
