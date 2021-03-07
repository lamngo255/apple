<template>
  <div class="my-bag-item">
    <img
      class="left"
      :src="product.image"
      @click="$router.push(`${product.id}`)"
    />
    <div class="right">
      <div class="row">
        <div class="name">{{ product.name }}</div>
        <div class="quantity">
          <span>x</span>
          <input
            type="number"
            min="1"
            v-model="qty"
            @change="changeQuantity()"
          />
        </div>
        <div class="price">${{ product.basePrice * product.quantity }}</div>
      </div>

      <div class="row">
        <div class="apr">Pay 0% APR for 12 months:</div>
        <div class="month">
          ${{ ((product.basePrice * product.quantity) / 12).toFixed(2) }}
        </div>
      </div>

      <div class="row">
        <button class="btn-remove" @click="removeProductFromBag(product)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PageMyBagItem',

  props: {
    product: { type: Object, default: () => {} },
  },

  data() {
    return {
      qty: 1,
    };
  },

  methods: {
    ...mapActions('Apple', ['updateBagQty']),

    changeQuantity() {
      this.updateBagQty({ product: this.product, qty: this.qty });
    },
  },

  mounted() {
    this.qty = this.product.quantity;
  },
};
</script>

<style lang="scss" scoped>
.my-bag-item {
  @include flexCenter(row);
  justify-content: flex-start;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: #d2d2d7 solid 0.01rem;

  &:last-child {
    border-bottom: none;
  }

  .left {
    @include sizeWH(1rem, auto);
    display: flex;
    flex-flow: column wrap;
    align-self: flex-start;
    align-items: flex-start;
    cursor: pointer;
  }

  .right {
    display: flex;
    flex-flow: column wrap;
    align-self: flex-start;
    align-items: flex-start;
    margin-left: 0.2rem;
    text-align: left;
    // height: 0.9rem;
    padding-top: 0.1rem;

    .row {
      @include flexCenter(row);
      width: 5.7rem;
      justify-content: space-between;
    }

    .row:first-child {
      .name {
        @include textMixin(#000, 0.2rem, bold);
        padding-right: 0.3rem;
        width: 3rem;
      }

      .quantity {
        @include textMixin(#000, 0.2rem, bold);
        flex-grow: 1;
        span {
          margin-right: -0.03rem;
        }
        input {
          width: 0.32rem;
          text-align: left;
          border: none;
        }
      }

      .price {
        @include textMixin(#000, 0.2rem, bold);
      }
    }

    .row:nth-child(2) {
      margin-top: 0.1rem;
      .apr {
        @include textMixin(#000, 0.12rem);
      }
      .month {
        @include textMixin(#000, 0.14rem);
      }
    }

    .row:nth-child(3) {
      justify-content: flex-end;

      .btn-remove {
        @include textMixin(#2866cc, 0.14rem);
        margin-top: 0.1rem;
        margin-right: -0.03rem;
        background: none;
      }
    }
  }
}
</style>
