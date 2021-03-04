<template>
  <div :class="['container', { homepod, homepodMini }]">
    <div class="left">
      <img class="photo" :src="currentImage" />
      <div class="strip">
        <div class="item">
          <img class="icon" :src="genLink('delivery.png')" />
          <div class="text">Fast, free, no-contact delivery</div>
        </div>
        <div class="item">
          <img class="icon" :src="genLink('personal.png')" />
          <div class="text">Free Personal Session</div>
        </div>
        <div class="item">
          <img class="icon" :src="genLink('return.png')" />
          <div class="text">Free and easy returns</div>
        </div>
      </div>

      <div class="chat">
        <img class="inner-left" :src="$assetsUrl('shop/chat.png')" />
        <div class="inner-right">
          <div class="question">Have questions about buying an iPhone?</div>
          <div class="specialist">Chat with an iPhone Specialist</div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="new">New</div>
      <div class="title">Buy {{ productName }}</div>
      <div class="tradein">Get up to $220 off with Apple Trade In*</div>
      <div class="desc" v-if="desc" v-html="desc" />

      <div class="models" v-if="specs.models">
        <div class="title">Choose your model.</div>
        <div class="options">
          <div
            v-for="(model, i) in specs.models"
            :class="['option', { selected: modelId === i }]"
            :key="i"
            @click="selectModel(i)"
          >
            <div class="name">{{ model.name }}</div>
            <div class="desc">{{ model.desc }}</div>
          </div>
        </div>
      </div>

      <div class="colors" v-if="specs.colors">
        <div class="title">Choose your finish.</div>
        <div class="options">
          <div
            :class="['option', { selected: colorId === i }]"
            v-for="(color, i) in colors"
            :key="i"
            @click="selectColor(i)"
          >
            <img class="color" :src="color.image" alt="Color" />
            <div class="name">{{ color.name }}</div>
          </div>
        </div>
      </div>

      <div class="carriers" v-if="specs.carriers">
        <div class="title">Choose your carrier.</div>
        <div class="note">
          We’ll work with the carrier you choose to activate your new iPhone so
          you can keep your number. For 5G service, some carriers may require an
          upgrade to a 5G plan.
        </div>
        <div class="options">
          <div
            :class="['option', { selected: carrierId === i }]"
            v-for="(carrier, i) in carriers"
            :key="i"
            @click="selectCarrier(i)"
          >
            <div class="offers">Special Offers Available</div>
            <img class="carrier" :src="carrier.image" />
            <div class="tradein">
              From ${{ priceMonth }}/mo.per month or ${{ currentPrice }} before
              trade-in
            </div>
          </div>
        </div>
      </div>

      <div class="capacities" v-if="specs.capacities">
        <div class="title">Choose your capacity.</div>
        <div class="options">
          <div
            :class="['option', { selected: capacityId === i }]"
            v-for="(cap, i) in specs.capacities"
            :key="i"
            @click="selectCapacity(i)"
          >
            <div class="wrapper">
              <span class="name">{{ cap }}</span>
              <span class="unit">
                <span v-if="cap < 10">TB</span>
                <span v-else>GB</span>
              </span>
            </div>

            <div class="tradein">
              From ${{ (prices[i] / 24).toFixed(2) }}/mo.per month or ${{
                prices[i]
              }}
              before trade-in
            </div>
          </div>
        </div>
      </div>

      <div class="sizes" v-if="specs.sizes">
        <div class="title">Choose your size.</div>
        <div class="options">
          <div
            :class="['option', { selected: sizeId === i }]"
            v-for="(size, i) in specs.sizes"
            :key="i"
            @click="selectSize(i)"
          >
            <span class="name">{{ size }}</span>
            <span class="mm">mm</span>
          </div>
        </div>
      </div>

      <div class="continue">
        <div class="price">Price: ${{ productPrice }}</div>
        <button class="btn-continue" @click="addToBag()">Add to Bag</button>

        <div class="delivery">
          <img class="icon" :src="genLink('delivery.png')" />
          <div class="wrapper">
            <div class="ship">Ships:</div>
            <div>1–3 business days</div>
            <div>Free Shipping</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PageProductOptions',

  props: {
    specs: { type: Object, default: () => {} },
    productId: { type: String, required: true },
    productPrice: { type: Number, default: 0 },
    productName: { type: String, default: '' },
    productImages: { type: Array, default: () => {} },
    colors: { type: Array, default: () => {} },
    carriers: { type: Array, default: () => {} },
    mainImage: { type: String, default: '' },
    prices: { type: Array, default: () => {} },
    desc: { type: String, default: '' },
  },

  data() {
    return {
      colorId: -1,
      carrierId: -1,
      modelId: -1,
      capacityId: -1,
      sizeId: -1,
      currentPrice: this.prices[0],
    };
  },

  computed: {
    homepod() {
      return this.productName === 'HomePod';
    },
    homepodMini() {
      return this.productName === 'HomePod Mini';
    },

    currentImage() {
      if (this.colorId === -1) return this.mainImage;
      return this.productImages[this.colorId];
    },

    priceMonth() {
      return (this.currentPrice / 24).toFixed(2);
    },
  },

  methods: {
    ...mapActions('Apple', ['addProductToBag']),
    addToBag() {
      const product = {
        id: this.productId,
        colorId: this.colorId,
        modelId: this.modelId,
        capacityId: this.capacityId,
        sizeId: this.sizeId,
      };
      this.addProductToBag(product);
    },
    genLink(name) {
      return this.$assetsUrl(`shop/${name}`);
    },
    selectModel(id) {
      this.modelId = id;
    },
    selectColor(id) {
      this.colorId = id;
    },
    selectCarrier(id) {
      this.carrierId = id;
    },
    selectCapacity(id) {
      this.capacityId = id;
      this.$emit('setPrice', this.prices[id]);
      this.currentPrice = this.prices[id];
    },
    selectSize(id) {
      this.sizeId = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  @include flexCenter(row);
  padding: 0 0.5rem 0.5rem;

  &.homepod {
    background: #f5f5f7;

    .left .photo {
      @include sizeWH(8rem, auto);
    }
  }

  &.homepodMini {
    .left .photo {
      @include sizeWH(8rem, auto);
    }
  }

  .left {
    @include flexCenter(column);
    align-self: flex-start;
    width: 32%;
    margin-left: 1.4rem;
    margin-right: 0.7rem;
    margin-top: 0.2rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0.2rem;

    .photo {
      @include sizeWH(auto, 4.4rem);
    }
    .strip {
      @include flexCenter(row);
      margin-top: 0.1rem;
      border-bottom: #dbdbdb solid 0.01rem;
      padding-bottom: 0.2rem;

      .item {
        @include flexCenter(column);
        align-self: flex-start;
        margin-right: 0.13rem;
      }
      .icon {
        @include sizeWH(0.22rem, 0.22rem);
      }
      .text {
        @include textMixin(#333, 0.11rem);
        font-family: 'San Francisco Medium', sans-serif;
        margin-top: 0.07rem;
        width: 1rem;
      }
    }

    .chat {
      @include flexCenter(row);
      margin-top: 0.3rem;

      .inner-left {
        @include sizeWH(0.3rem, 0.3rem);
        margin-right: 0.15rem;
      }
      .inner-right {
        @include textMixin(#000, 0.12rem, $align: left);
        display: flex;
        flex-flow: column wrap;
        width: 2.2rem;

        .question {
          font-weight: bold;
          margin-bottom: 0.05rem;
        }
        .specialist {
          color: #2a77cb;
          font-size: 0.11rem;
        }
      }
    }
  }

  .right {
    @include flexCenter(column);
    align-self: flex-start;
    align-items: flex-start;
    margin-left: 0.3rem;
    & > .new {
      @include textMixin(#ef5601, 0.14rem);
      margin-top: 0.3rem;
    }
    & > .title {
      @include textMixin(#000, 0.32rem, bold);
    }
    & > .tradein {
      @include textMixin(#000, 0.14rem);
      margin-top: 0.05rem;
    }

    .desc {
      @include textMixin(#333, 0.13rem, $align: left);
      line-height: 0.19rem;
      width: 3.5rem;

      /deep/ div {
        margin-top: 0.05rem;
      }
    }

    .models {
      text-align: left;
      padding-bottom: 0.2rem;
      width: 3.3rem;
      border-bottom: #dbdbdb solid 0.01rem;

      .title {
        @include textMixin(#000, 0.15rem, bold);
        margin-top: 0.2rem;
      }

      .options {
        @include flexCenter(row);
        flex-wrap: wrap;
        margin-top: 0.14rem;
        justify-content: flex-start;
        width: 4rem;

        .option {
          @include sizeWH(3.3rem, 0.65rem);
          border: #dbdbdb solid 0.01rem;
          border-radius: 0.05rem;
          padding: 0.13rem 0 0 0.15rem;
          margin-right: 0.1rem;
          margin-bottom: 0.1rem;

          .name {
            @include textMixin(#000, 0.14rem, bold);
          }
          .desc {
            @include textMixin(#333, 0.11rem);
            margin-top: 0.02rem;
          }

          &:hover {
            border: #868585 solid 0.01rem;
            cursor: pointer;
          }

          &.selected {
            cursor: pointer;
            border: #2770c9 solid 0.02rem;
            padding: 0.125rem 0 0 0.145rem;
          }
        }
      }
    }

    .colors {
      text-align: left;
      padding-bottom: 0.25rem;
      border-bottom: #dbdbdb solid 0.01rem;
      margin-top: 0.1rem;
      width: 3.3rem;

      .title {
        @include textMixin(#000, 0.15rem, bold);
        margin-top: 0.1rem;
      }

      .options {
        @include flexCenter(row);
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 4rem;

        .option {
          @include sizeWH(1.6rem, 0.8rem);
          @include flexCenter(column);
          margin-top: 0.12rem;
          border: #dbdbdb solid 0.01rem;
          border-radius: 0.03rem;
          margin-right: 0.12rem;

          .color {
            @include sizeWH(0.25rem, 0.25rem);
          }
          .name {
            @include textMixin(#333, 0.11rem);
            margin-top: 0.04rem;
          }

          &:hover {
            border: #868585 solid 0.01rem;
            cursor: pointer;
          }
          &.selected {
            cursor: pointer;
            border: #2770c9 solid 0.02rem;
          }
        }
      }
    }

    .carriers {
      text-align: left;
      padding-bottom: 0.25rem;
      border-bottom: #dbdbdb solid 0.01rem;
      margin-top: 0.1rem;
      width: 3.3rem;

      .title {
        @include textMixin(#000, 0.15rem, bold);
        margin-top: 0.1rem;
      }

      .note {
        @include textMixin(#000, 0.11rem);
        line-height: 0.14rem;
        margin-top: 0.1rem;
        margin-bottom: 0.03rem;
      }

      .options {
        @include flexCenter(row);
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 4rem;

        .option {
          @include sizeWH(1.6rem, 1rem);
          @include flexCenter(column);
          margin-top: 0.12rem;
          border: #dbdbdb solid 0.01rem;
          border-radius: 0.03rem;
          margin-right: 0.12rem;

          .offers {
            @include textMixin(#ef5b0b, 0.09rem);
            margin-bottom: 0.03rem;
          }
          .carrier {
            @include sizeWH(auto, 0.3rem);
          }
          .name {
            @include textMixin(#333, 0.11rem);
            margin-top: 0.04rem;
          }
          .tradein {
            @include textMixin(#333, 0.1rem, $align: center);
            margin-top: 0.05rem;
            width: 1.2rem;
          }

          &:hover {
            border: #868585 solid 0.01rem;
            cursor: pointer;
          }
          &.selected {
            cursor: pointer;
            border: #2770c9 solid 0.02rem;
          }
        }
      }
    }

    .capacities {
      text-align: left;
      padding-bottom: 0.25rem;
      margin-top: 0.1rem;

      .title {
        @include textMixin(#000, 0.15rem, bold);
        margin-top: 0.1rem;
      }

      .options {
        @include flexCenter(row);
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 4rem;

        .option {
          @include sizeWH(1.6rem, 0.8rem);
          @include flexCenter(column);
          margin-top: 0.15rem;
          border: #dbdbdb solid 0.015rem;
          border-radius: 0.03rem;
          margin-right: 0.15rem;
          padding-bottom: 0.1rem;

          .wrapper {
            @include flexCenter(row);
            .name {
              @include textMixin(#333, 0.23rem, bold);
              margin-top: 0.1rem;
            }
            .unit {
              @include textMixin(#333, 0.15rem, bold);
              margin-top: 0.15rem;
              margin-left: 0.01rem;
            }
          }

          .tradein {
            @include textMixin(#333, 0.1rem, $align: center);
            margin-top: 0.05rem;
            width: 1.2rem;
          }

          &:hover,
          &.selected {
            cursor: pointer;
            border: #2770c9 solid 0.02rem;
          }
        }
      }
    }

    .sizes {
      @extend .capacities;
      .mm {
        @include textMixin(#333, 0.14rem);
      }
    }

    .continue {
      @include sizeWH(4.5rem, auto);
      @include flexCenter(column);
      align-self: flex-start;
      align-items: flex-start;
      text-align: left;
      padding: 0.2rem 0 0.2rem 0.3rem;
      background: #f7f5f5;
      border-radius: 0.1rem;
      margin-top: 0.1rem;

      .price {
        @include textMixin(#000, 0.21rem, bold);
      }
      .btn-continue {
        @include textMixin(#fff, 0.14rem, bold);
        background: linear-gradient(45deg, #3e9eea, #2874cc);
        padding: 0.07rem 1.1rem;
        margin-top: 0.15rem;
        border-radius: 0.05rem;
      }

      .delivery {
        @include flexCenter(row);
        margin-top: 0.15rem;

        .icon {
          @include sizeWH(0.25rem, 0.25rem);
          @include position(relative, $top: -0.2rem);
          margin-top: 0.2rem;
          margin-right: 0.06rem;
        }
        .wrapper {
          @include textMixin(#333, 0.12rem);

          .ship {
            font-weight: bold;
            color: #000;
          }
        }
      }
    }
  }
}
</style>
