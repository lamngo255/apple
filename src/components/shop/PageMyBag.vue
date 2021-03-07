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
            <div class="left">
              <div class="text">
                <span class="tax">Estimated tax for:</span>
                <span class="zipcode" v-if="zipcode" @click="zipcode = ''">
                  <span>{{ zipcode }}</span>
                  <i />
                </span>
              </div>
              <div class="form" v-if="!zipcode">
                <input
                  type="text"
                  placeholder="Zip code"
                  maxlength="6"
                  v-model="code"
                  @keypress="isNumber"
                />
                <button class="btn-apply" @click="confirmZipcode()">
                  Apply
                </button>
                <button class="btn-cancel">Cancel</button>
              </div>
            </div>
            <div class="price">$ -</div>
          </div>
          <div class="row">
            <div class="text">Total</div>
            <div class="price">${{ totalPrice }}.00</div>
          </div>
          <div class="row">
            <span>Get Daily Cash back with Apple Card</span>
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
      return this.parsedBag.reduce((acc, item) => {
        const appleCare = item.appleCare ? item.quantity * 149 : 0;
        return acc + item.quantity * item.basePrice + appleCare;
      }, 0);
    },
  },

  data() {
    return {
      code: '',
      zipcode: '123456',
    };
  },

  methods: {
    ...mapActions('Apple', ['openPopup', 'clearBag']),

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

    isNumber($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },

    confirmZipcode() {
      this.zipcode = this.code;
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
    font-family: 'San Francisco', sans-serif;
    margin-left: 0.7rem;
    width: 5.7rem;
    justify-content: space-between;
    margin-top: 0.03rem;

    &:nth-child(3) {
      border-bottom: #dbdbdb solid 0.01rem;
      padding-bottom: 0.15rem;

      .left {
        display: flex;
        flex-flow: column wrap;
        text-align: left;

        .text {
          @include flexCenter(row);
          justify-content: flex-start;

          .zipcode {
            display: flex;
            color: #2866cc;
            font-family: 'San Francisco Regular', sans-serif;
            margin-left: 0.04rem;
            cursor: pointer;

            i {
              @include imageCDN('main-page/arrow-up.png', 0.1rem, 0.1rem);
              @include position(relative, $top: 0.04rem, $left: 0.03rem);
              transform: rotate(180deg);
            }
          }
        }

        .form {
          input {
            @include sizeWH(2.5rem, 0.4rem);
            border: #dbdbdb solid 0.01rem;
            border-radius: 0.07rem;
            margin-top: 0.1rem;
            padding-left: 0.05rem;
          }
          .btn-apply {
            @include textMixin(#2866cc, 0.14rem);
            @include position(relative, $left: -0.5rem);
            background: none;
          }
          .btn-cancel {
            @include textMixin(#2866cc, 0.14rem);
            @include position(relative, $left: -0.4rem);
            background: none;
          }
        }
      }
    }
    &:nth-child(4) {
      margin-top: 0.15rem;
      @include textMixin(#000, 0.2rem, bold);
    }
    &:nth-child(5) {
      @include textMixin(#2866cc, 0.12rem);
      justify-content: flex-end;
    }
    &:nth-child(6) {
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
