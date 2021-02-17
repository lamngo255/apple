const mapping = {
  'iphone-12-pro': 'iPhone 12 Pro',
  'iphone-12': 'iPhone 12',
  'iphone-se': 'iPhone SE',
  'iphone-11': 'iPhone 11',
  'iphone-xr': 'iPhone XR',
};

function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function camelizeStr(str) {
  return str.replace(/[_.-](\w|$)/g, (_, x) => ` ${x.toUpperCase()}`);
}

export default function normalizeStr(str) {
  if (mapping[str]) return mapping[str];
  return capitalize(camelizeStr(str));
}
