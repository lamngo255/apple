export default {
  install(Vue, { cdn }) {
    Vue.prototype.$assetsUrl = function $assetsUrl(path) {
      return [cdn, path].join('/');
    };
    Vue.prototype.$i18nUrl = function $i18nUrl(path) {
      const locale = this.$i18n.locale || process.env.LOCALE;
      return this.$assetsUrl([locale, path].join('/'));
    };
  },
};
