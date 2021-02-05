import path from 'path';

function getParam(paramName, url) {
  const href = url || window.location.href;
  const name = paramName.replace(/[[]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getRegion() {
  let region = window.location.pathname.replace(
    /^\/(europe|ind|ru|sg).*/,
    '$1',
  );

  if (region === '/') region = 'sg';
  return region;
}

function camelizeStr(str) {
  if (str.startsWith('_')) return str.slice(1, str.length);
  return str.replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase());
}

function snakifyStr(str) {
  return str.replace(/(?:^|\.?)([A-Z])/g, (_, x) => `_${x.toLowerCase()}`);
}

function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function convertCase(convertFunc) {
  function converter(thing) {
    if (thing instanceof Array) {
      return thing.map((i) => converter(i));
    }
    if (thing instanceof Object) {
      const newObj = {};
      Object.keys(thing).forEach((k) => {
        newObj[convertFunc(k)] = converter(thing[k]);
      });
      return newObj;
    }
    return thing;
  }
  return converter;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function prependZero(num) {
  if (num.length === 1) {
    return `0${num}`;
  }
  return num;
}

function parseTime(timer) {
  const d = Math.floor(timer / (24 * 60 * 60)) || 0;
  const h = Math.floor((timer % (24 * 60 * 60)) / (60 * 60)) || 0;
  const m = Math.floor((timer % (60 * 60)) / 60) || 0;
  const s = Math.floor(timer % 60) || 0;

  return {
    d: prependZero(d.toString()),
    h: prependZero(h.toString()),
    m: prependZero(m.toString()),
    s: prependZero(s.toString()),
  };
}

function transformImage(image, effect) {
  if (!image) return '';
  if (!effect) return image;
  const folder = image.substr(0, image.lastIndexOf('/'));
  const filename = path.basename(image);

  return `${folder}/${filename.substr(
    0,
    filename.lastIndexOf('.'),
  )}-${effect}.png`;
}

function includes(arr, id) {
  return arr.indexOf(id) !== -1;
}

function excludes(arr, id) {
  return arr.indexOf(id) === -1;
}

export default {
  getRegion,
  getParam,
  camelizeStr,
  snakifyStr,
  delay,
  camelizeKeys: convertCase(camelizeStr),
  snakifyKeys: convertCase(snakifyStr),
  capitalize,
  parseTime,
  transformImage,
  prependZero,
  includes,
  excludes,
};
