/* Vue filters */

import Vue from 'vue';
import { format as dateFormat } from 'date-fns';
import utils from './utils';

/* dateFormat */
// usage: {{ new Date() | dateFormat('yyyy-MM-dd hh:mm:ss')}}
// usage: {{ Date.now() | dateFormat('yyyy-MM-dd hh:mm:ss')}}
// output: 2018-03-15 03:23:10
// see the date-fns module: https://date-fns.org/docs/format
Vue.filter('dateFormat', (date, format) => {
  if (!date) return '';
  if (!format) return date;
  return dateFormat(date, format);
});

/* commaNumber */
// usage: {{ 1234567 | commaNumber }}
// output: 1,234,567
Vue.filter('commaNumber', (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

/* chineseNumber */
// usage: {{ 8 | chineseNumber }}
// output: 八
Vue.filter('chineseNumber', (number) => {
  if (!number || typeof number !== 'number') return number;
  const zhChars = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  return zhChars[number - 1];
});

/* prependZero */
// usage: {{ '9' | prefixZero }}, {{ '10' | prefixZero(4) }}
// output: '09', '0010'
Vue.filter('prependZero', (number, length = 2) => {
  let str = '0'.repeat(length);
  if (!number) return str;
  if (typeof number !== 'string') {
    str = number.toString();
  }
  return str.padStart(length, '0');
});

/* capitalize */
// usage: {{ 'helloworld' | capitalize }}
// output: 'Helloworld'
Vue.filter('capitalize', (value) => {
  if (!value) return '';
  return (
    value
      .toString()
      .charAt(0)
      .toUpperCase() + value.slice(1)
  );
});

/* camelizeStr */
// usage: {{ 'hello_world' | camelizeStr }}
// output: 'helloWorld'
Vue.filter('camelizeStr', utils.camelizeStr);

/* snakifyStr */
// usage: {{ 'helloWorld' | snakifyStr }}
// output: 'hello_world'
Vue.filter('snakifyStr', utils.snakifyStr);

/* camelizeKeys */
// usage: {{ {hello_world:1} | camelizeKeys }}
// output: {helloWorld:1}
Vue.filter('camelizeKeys', utils.camelizeKeys);

/* snakifyKeys */
// usage: {{ {helloWorld:1} | snakifyKeys }}
// output: {hello_world:1}
Vue.filter('snakifyKeys', utils.snakifyKeys);
