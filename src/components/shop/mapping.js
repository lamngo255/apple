const colorLink = `${process.env.CDN}/shop/color-plates`;

const colorMapping = {
  pacificBlue: {
    name: 'Pacific Blue',
    image: `${colorLink}/pacificBlue.jpeg`,
  },
  blue: {
    name: 'Blue',
    image: `${colorLink}/blue.jpeg`,
  },
  gold: {
    name: 'Gold',
    image: `${colorLink}/gold.jpeg`,
  },
  silver: {
    name: 'Silver',
    image: `${colorLink}/silver.jpeg`,
  },
  graphite: {
    name: 'Graphite',
    image: `${colorLink}/graphite.jpeg`,
  },
  white: {
    name: 'White',
    image: `${colorLink}/white.jpeg`,
  },
  black: {
    name: 'Black',
    image: `${colorLink}/black.jpeg`,
  },
  green: {
    name: 'Green',
    image: `${colorLink}/green.jpeg`,
  },
  red: {
    name: 'Red',
    image: `${colorLink}/red.jpeg`,
  },
  yellow: {
    name: 'Yellow',
    image: `${colorLink}/yellow.jpeg`,
  },
  purple: {
    name: 'Purple',
    image: `${colorLink}/purple.jpeg`,
  },
  coral: {
    name: 'Coral',
    image: `${colorLink}/coral.jpeg`,
  },
};

const productMapping = {
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

export const normalizeStr = (str) => {
  if (productMapping[str]) return productMapping[str];
  return capitalize(camelizeStr(str));
};

export const colorPicker = (code) => {
  return colorMapping[code];
};
