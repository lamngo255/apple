<template>
  <div class="product-show-keyboard">
    <div class="title">
      <div>Magic Keyboard</div>
      <div>Go ahead. Take the keys.</div>
    </div>
    <div class="desc">
      When a keyboard types like a dream and still does a whole lot more: that’s
      magic. With new preprogrammed shortcuts, useful features are even easier
      to access. Get help from Siri, switch keyboard languages, respond with the
      perfect emoji, find documents with Spotlight — there’s so much you can do
      with just a tap. And the backlit keys with ambient light sensor help you
      type in low‑light settings.
    </div>
    <img class="image" :src="genLink('magic-keyboard.jpg')" />
  </div>
</template>

<script>
export default {
  name: 'ProductShowMacgicKeyboard',

  methods: {
    genLink(name) {
      return this.$assetsUrl(`product-details/macbook-air/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-show-keyboard {
  @include sizeWH(60%, auto);
  background: #000;
  margin: 1rem auto 0;

  .title {
    @include textMixin(#fff, 0.58rem, bold, $align: left);
    font-family: 'San Francisco Bold', sans-serif;

    div:first-child {
      color: #a1a1a6;
    }
  }

  .subtitle {
    @include textMixin(#fff, 0.7rem, bold);
    margin-top: 0.1rem;
    background: radial-gradient(#eff1ff, #000);
    background-size: 54% 156%;
    background-position: center center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'San Francisco Bold', sans-serif;
  }

  .desc {
    @include textMixin(#a1a1a6, 0.22rem, bold, $align: left);
    width: 70%;
    margin-top: 0.25rem;
  }

  .image {
    @include sizeWH(9.5rem, auto);
    text-align: left;
    margin-top: 0.5rem;
    margin-left: -1rem;
  }
}
</style>
