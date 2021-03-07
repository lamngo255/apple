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
        <div class="price">${{ product.basePrice * product.quantity }}.00</div>
      </div>

      <div class="row">
        <button class="btn-remove" @click="removeProductFromBag(product)">
          Remove
        </button>
      </div>

      <div class="row">
        <div class="inner-left">
          <div class="title">
            <i />
            <span>Add AppleCare+ for {{ orginalName }} for $149.00</span>
          </div>
          <div class="note" v-if="appleCare">
            Automatically registered with your Apple hardware.
          </div>
          <div v-else>
            <ul>
              <li>Priority access to Apple experts</li>
              <li>Apple-certified repairs using genuine Apple parts</li>
              <li>Coverage for iPhone, including the battery</li>
              <li>Accidental damage protection</li>
            </ul>
            <div class="btn-learn">Learn more</div>
          </div>
        </div>

        <div class="inner-right">
          <div v-if="appleCare">
            <div class="price">$149.00</div>
            <button class="btn-remove" @click="appleCare = false">
              Remove
            </button>
          </div>
          <button class="btn-add" v-else @click="appleCare = true">Add</button>
        </div>
      </div>

      <div class="row">
        <div class="inner-left">
          <div class="text">
            <i />
            <span v-if="!giftMsg">Add a gift message</span>
            <template v-else>
              <span>Your gift message.</span>
              <button class="btn-edit" @click="showGift = true">Edit</button>
            </template>
          </div>
          <div class="text">{{ giftMsg }}</div>
        </div>
        <div class="inner-right" v-if="!giftMsg">
          <button class="btn-add" @click="showGift = true">Add</button>
        </div>
      </div>
    </div>

    <ModalGiftMessage
      v-if="showGift"
      @confirmMessage="confirmMessage"
      @close="showGift = false"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ModalGiftMessage from '@/components/modals/ModalGiftMessage.vue';

export default {
  name: 'PageMyBagItem',

  components: {
    ModalGiftMessage,
  },

  props: {
    product: { type: Object, default: () => {} },
  },

  computed: {
    ...mapState('Apple', ['allProducts']),

    orginalName() {
      return this.allProducts[this.product.id].name;
    },
  },

  data() {
    return {
      qty: 1,
      appleCare: false,
      showGift: false,
      giftMsg: '',
    };
  },

  methods: {
    ...mapActions('Apple', [
      'updateBagQty',
      'removeProductFromBag',
      'openPopup',
    ]),

    changeQuantity() {
      this.updateBagQty({ product: this.product, qty: this.qty });
    },

    confirmMessage(msg) {
      this.giftMsg = msg;
      this.showGift = false;
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
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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
      justify-content: flex-end;
      border-bottom: #dbdbdb solid 0.01rem;
      padding-bottom: 0.2rem;

      .btn-remove {
        @include textMixin(#2866cc, 0.14rem);
        margin-top: 0.03rem;
        margin-right: -0.03rem;
        background: none;
      }
    }

    .row:nth-child(3) {
      margin-top: 0.2rem;
      align-items: flex-start;
      border-bottom: #dbdbdb solid 0.01rem;
      padding-bottom: 0.2rem;

      .inner-left {
        .title {
          @include textMixin(#000, 0.14rem, bold);
          @include flexCenter(row);

          i {
            @include imageCDN('shop/apple-care.jpeg', 0.16rem, 0.16rem);
            @include position(relative, $top: 0.01rem);
            margin-right: 0.04rem;
          }
        }

        .note {
          @include textMixin(#000, 0.12rem);
          margin-top: 0.05rem;
          margin-left: 0.2rem;
        }

        li {
          @include textMixin(#000, 0.11rem);
          margin-left: 0.3rem;
          list-style-type: disc;
          margin-top: 0.04rem;
        }
        .btn-learn {
          @include textMixin(#2866cc, 0.12rem);
          margin-left: 0.18rem;
          margin-top: 0.04rem;
          background: none;
        }
      }

      .inner-right {
        display: flex;
        flex-flow: column wrap;
        align-items: flex-end;
        text-align: right;

        .price {
          @include textMixin(#000, 0.14rem, bold);
        }
        button {
          @include textMixin(#2866cc, 0.14rem);
          margin-right: -0.03rem;
          background: none;
          margin-top: 0.03rem;
        }
      }
    }

    .row:nth-child(4) {
      margin-top: 0.15rem;
      .inner-left {
        @include textMixin(#000, 0.14rem, bold);
        display: flex;
        flex-flow: column wrap;

        .text {
          @include flexCenter(row);
          justify-content: flex-start;

          i {
            @include imageCDN('shop/gift.png', 0.18rem, 0.18rem);
            margin-right: 0.03rem;
          }

          .btn-edit {
            @include textMixin(#2866cc, 0.14rem, normal);
            background: none;
            margin-left: 0.04rem;
            border-left: #afafb2 solid 0.01rem;
            padding-left: 0.04rem;
          }

          &:last-child {
            @include textMixin(#000, 0.13rem, normal);
            margin-top: 0.05rem;
          }
        }
      }

      .inner-right {
        @include flexCenter(column);

        button {
          @include textMixin(#2866cc, 0.14rem);
          margin-right: -0.03rem;
          background: none;
          margin-top: 0.03rem;
        }
      }
    }
  }
}
</style>
