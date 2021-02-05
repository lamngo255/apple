export default {
  install(Vue, { cdn }) {
    Vue.prototype.$assetsUrl = function $assetsUrl(path) {
      return [cdn, path].join('/');
    };
  },
};
