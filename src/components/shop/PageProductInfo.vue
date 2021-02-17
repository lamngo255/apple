<template>
  <BaseLayout>
    <div class="page-product-info">
      <PageProductInfoHeader :name="productName" :price="productPrice" />

      <div class="container" v-if="product">
        <div class="left">
          <img class="photo" :src="currentImage" alt="" />
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
        </div>
        <div class="right" v-if="specs">
          <div class="new">New</div>
          <div class="title">Buy {{ productName }}</div>

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
            <div class="title">Choose your color.</div>
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

          <div class="capacities" v-if="specs.capacities">
            <div class="title">Choose your capacity.</div>
            <div class="options">
              <div
                :class="['option', { selected: capacityId === i }]"
                v-for="(cap, i) in specs.capacities"
                :key="i"
                @click="selectCapacity(i)"
              >
                <span class="name">{{ cap }}</span>
                <span class="gb">GB</span>
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
            <button class="btn-continue">Add to Bag</button>

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
    </div>
  </BaseLayout>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BaseLayout from '@/components/BaseLayout.vue';
import PageProductInfoHeader from './PageProductInfoHeader.vue';
import { normalizeStr, colorPicker } from './mapping';

export default {
  name: 'PageProductInfo',

  components: {
    BaseLayout,
    PageProductInfoHeader,
  },

  data() {
    return {
      colorId: -1,
      modelId: -1,
      capacityId: -1,
      sizeId: -1,
    };
  },

  computed: {
    ...mapState('Product', ['product']),
    productId() {
      return this.$route.params.productId;
    },
    productName() {
      return normalizeStr(this.productId);
    },
    productImages() {
      return this.product.images;
    },
    productPrice() {
      if (!this.product) return 0;
      if (this.capacityId === -1) return this.product.prices[0];
      return this.product.prices[this.capacityId];
    },
    currentImage() {
      if (this.colorId === -1) return this.product.mainImage;
      return this.productImages[this.colorId];
    },
    specs() {
      return this.product?.specs;
    },
    colors() {
      if (this.specs && this.specs.colors)
        return this.specs.colors.map((color) => colorPicker(color));
      return [];
    },
  },

  methods: {
    ...mapActions('Product', ['getProduct']),
    genLink(name) {
      return this.$assetsUrl(`/shop/${name}`);
    },
    selectModel(id) {
      this.modelId = id;
    },
    selectColor(id) {
      this.colorId = id;
    },
    selectCapacity(id) {
      this.capacityId = id;
    },
    selectSize(id) {
      this.sizeId = id;
    },
  },

  async created() {
    this.$nextTick(async () => {
      await this.getProduct({ id: this.productId });
    });
  },
};
</script>

<style lang="scss" scoped>
.page-product-info {
  @include sizeWH(100%, auto);

  .container {
    @include flexCenter(row);
    padding-bottom: 0.5rem;

    .left {
      @include flexCenter(column);
      align-self: flex-start;
      width: 32%;
      margin-right: 1rem;
      .photo {
        @include sizeWH(4.7rem, auto);
      }
      .strip {
        @include flexCenter(row);
        margin-top: 0.15rem;
        .item {
          @include flexCenter(column);
          align-self: flex-start;
          margin-right: 0.13rem;
        }
        .icon {
          @include sizeWH(0.3rem, 0.3rem);
        }
        .text {
          @include textMixin(#333, 0.14rem, bold);
          margin-top: 0.1rem;
          width: 1.4rem;
        }
      }
    }

    .right {
      @include flexCenter(column);
      align-self: flex-start;
      align-items: flex-start;
      & > .new {
        @include textMixin(#ef5601, 0.18rem);
        margin-top: 0.3rem;
      }
      & > .title {
        @include textMixin(#000, 0.46rem, bold);
      }

      .models {
        text-align: left;
        padding-bottom: 0.25rem;

        .title {
          @include textMixin(#000, 0.2rem, bold);
          margin-top: 0.2rem;
        }

        .options {
          @include flexCenter(row);
          margin-top: 0.14rem;

          .option {
            @include sizeWH(2.3rem, 0.8rem);
            border: #dbdbdb solid 0.015rem;
            border-radius: 0.1rem;
            padding: 0.15rem 0 0 0.15rem;
            margin-right: 0.1rem;

            .name {
              @include textMixin(#000, 0.2rem, bold);
            }
            .desc {
              @include textMixin(#333, 0.15rem);
              margin-top: 0.03rem;
            }

            &:hover,
            &.selected {
              cursor: pointer;
              border: #2770c9 solid 0.02rem;
              padding: 0.145rem 0 0 0.145rem;
            }
          }
        }
      }

      .colors {
        text-align: left;
        padding-bottom: 0.25rem;

        .title {
          @include textMixin(#000, 0.2rem, bold);
          margin-top: 0.1rem;
        }

        .options {
          @include flexCenter(row);
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 5rem;

          .option {
            @include sizeWH(2.3rem, 1rem);
            @include flexCenter(column);
            margin-top: 0.15rem;
            border: #dbdbdb solid 0.015rem;
            border-radius: 0.1rem;
            margin-right: 0.12rem;

            .color {
              @include sizeWH(0.3rem, 0.3rem);
            }
            .name {
              @include textMixin(#333, 0.15rem);
              margin-top: 0.1rem;
            }

            &:hover,
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

        .title {
          @include textMixin(#000, 0.2rem, bold);
          margin-top: 0.1rem;
        }

        .options {
          @include flexCenter(row);
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 5rem;

          .option {
            @include sizeWH(1.3rem, 0.6rem);
            @include flexCenter(row);
            margin-top: 0.15rem;
            border: #dbdbdb solid 0.015rem;
            border-radius: 0.1rem;
            margin-right: 0.15rem;
            padding-bottom: 0.1rem;

            .name {
              @include textMixin(#333, 0.25rem, bold);
              margin-top: 0.1rem;
            }
            .gb {
              @include textMixin(#333, 0.17rem);
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
          @include textMixin(#333, 0.17rem);
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

        .price {
          @include textMixin(#000, 0.27rem, bold);
        }
        .btn-continue {
          @include textMixin(#fff, 0.18rem, bold);
          background: linear-gradient(45deg, #3e9eea, #2874cc);
          padding: 0.07rem 1.3rem;
          margin-top: 0.1rem;
          border-radius: 0.05rem;
        }

        .delivery {
          @include flexCenter(row);
          margin-top: 0.15rem;

          .icon {
            @include sizeWH(0.3rem, 0.3rem);
            @include position(relative, $top: -0.2rem);
            margin-top: 0.2rem;
            margin-right: 0.06rem;
          }
          .wrapper {
            @include textMixin(#333, 0.13rem);

            .ship {
              font-weight: bold;
              color: #000;
            }
          }
        }
      }
    }
  }
}
</style>
