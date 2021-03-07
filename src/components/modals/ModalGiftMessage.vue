<template>
  <BaseModalLarge @close="closePopup" :longer="selectedId === 1">
    <div class="content">
      <div class="title">Packing Slip Gift Message</div>

      <div class="container">
        <div class="message">Choose a gift option:</div>
        <div
          :class="['option option-1', { selected: selectedId === 0 }]"
          @click="selectedId = 0"
        >
          <div class="left">None</div>
        </div>
        <div
          :class="['option option-2', { selected: selectedId === 1 }]"
          @click="selectedId = 1"
        >
          <div class="left">Packing Slip Gift Message</div>
          <div class="right">FREE</div>
        </div>

        <div class="wrapper" v-if="selectedId === 1">
          <div class="enter">Enter your message:</div>
          <textarea
            type="text"
            maxlength="50"
            placeholder="Your message"
            v-model="giftMsg"
          />
        </div>

        <div class="buttons">
          <button class="btn-save" @click="saveMessage(giftMsg)">Save</button>
          <button class="btn-cancel" @click="closePopup">Cancel</button>
        </div>
      </div>
    </div>
  </BaseModalLarge>
</template>

<script>
import BaseModalLarge from '../common/BaseModalLarge.vue';

export default {
  name: 'ModalError',

  components: {
    BaseModalLarge,
  },

  data() {
    return {
      selectedId: 0,
      giftMsg: '',
    };
  },

  methods: {
    closePopup() {
      this.$emit('close');
    },
    saveMessage(msg) {
      this.$emit('confirmMessage', msg);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'San Francisco', sans-serif;

  .title {
    @include textMixin(#000, 0.33rem, bold);
    font-family: 'San Francisco Regular', sans-serif;
    margin-top: 0.4rem;
  }

  .container {
    text-align: left;
    width: 3.5rem;
    margin: 0.25rem auto 0;

    .message {
      @include textMixin(#333, 0.15rem);
      margin-bottom: 0.1rem;
    }
    .option {
      @include textMixin(#000, 0.14rem, bold);
      @include sizeWH(100%, 0.62rem);
      @include flexCenter(row);
      justify-content: flex-start;
      padding: 0 0.1rem;
      margin-bottom: 0.12rem;
      border: #dbdbdb solid 0.01rem;
      border-radius: 0.1rem;

      &.option-2 {
        @include flexCenter(row);
        justify-content: space-between;

        .right {
          font-weight: normal;
        }
      }

      &:hover {
        border: #797777 solid 0.01rem;
      }

      &.selected {
        border: #2d71e3 solid 0.02rem;
        .left {
          margin-left: -0.01rem;
        }
        .right {
          margin-right: -0.01rem;
        }
      }
    }

    .wrapper {
      text-align: left;
      margin-top: 0.13rem;
      .enter {
        @include textMixin(#333, 0.13rem);
        margin-bottom: 0.05rem;
      }

      textarea {
        @include sizeWH(100%, 0.7rem);
        @include textMixin(#333, 0.13rem);
        border: #dbdbdb solid 0.01rem;
        border-radius: 0.1rem;
        padding: 0.1rem 0.1rem;
      }
    }
  }

  .buttons {
    @include flexCenter(column);
    margin-top: 0.2rem;

    .btn-save {
      @include textMixin(#fff, 0.15rem);
      @include sizeWH(100%, 0.4rem);
      font-family: 'San Francisco', sans-serif;
      background: #2d71e3;
      border-radius: 0.1rem;
    }
    .btn-cancel {
      @include textMixin(#2866cc, 0.14rem);
      margin-top: 0.1rem;
      background: none;
    }
  }
}
</style>
