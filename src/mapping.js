const colorLink = `${process.env.CDN}/shop/color-plates`;
const carrierLink = `${process.env.CDN}/shop`;

const colorMapping = {
  pacificBlue: {
    name: 'Pacific Blue',
    image: `${colorLink}/pacific-blue.jpeg`,
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
  roseGold: {
    name: 'Rose Gold',
    image: `${colorLink}/rose-gold.jpeg`,
  },
  spaceGray: {
    name: 'Space Gray',
    image: `${colorLink}/space-gray.png`,
  },
  skyBlue: {
    name: 'Sky Blue',
    image: `${colorLink}/sky-blue.png`,
  },
  blackUnity: {
    name: 'Black Unity',
    image: `${colorLink}/black-unity.jpeg`,
  },
  northernBlue: {
    name: 'Northern Blue',
    image: `${colorLink}/northern-blue.jpeg`,
  },
  anthraciteBlack: {
    name: 'Anthracite/Black',
    image: `${colorLink}/anthracite-black.jpeg`,
  },
  pride: {
    name: 'Pride',
    image: `${colorLink}/pride.jpeg`,
  },
  platinumBlack: {
    name: 'Pure Platinum/Black',
    image: `${colorLink}/platinum-black.jpeg`,
  },
  obsidianMist: {
    name: 'Obsidian Mist',
    image: `${colorLink}/obsidian-mist.jpeg`,
  },
  orange: {
    name: 'Orange',
    image: `${colorLink}/orange.jpeg`,
  },
  fauve: {
    name: 'Fauve',
    image: `${colorLink}/fauve.jpeg`,
  },
  pink: {
    name: 'Pink',
    image: `${colorLink}/pink.jpeg`,
  },
};

const carrierMapping = {
  att: {
    name: 'AT&T',
    image: `${carrierLink}/carrier-att.png`,
  },
  sprint: {
    name: 'Sprint',
    image: `${carrierLink}/carrier-sprint.png`,
  },
  tmobile: {
    name: 'T-Mobile',
    image: `${carrierLink}/carrier-tmobile.png`,
  },
  verizon: {
    name: 'Verizon',
    image: `${carrierLink}/carrier-verizon.png`,
  },
};

const productMapping = {
  'iphone-12-pro': 'iPhone 12 Pro',
  'iphone-12': 'iPhone 12',
  'iphone-se': 'iPhone SE',
  'iphone-11': 'iPhone 11',
  'iphone-xr': 'iPhone XR',

  'ipad-pro': 'iPad Pro',
  'ipad-air': 'iPad Air',
  'imac-pro': 'iMac Pro',
  imac: 'iMac',

  'apple-watch-se': 'Apple Watch SE',
  'watch-bands': 'Bands',
  'apple-tv-4k': 'Apple TV 4K',
  'apple-tv-hd': 'Apple TV HD',
  homepod: 'HomePod',
  'homepod-mini': 'HomePod Mini',
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

export const carrierPicker = (code) => {
  return carrierMapping[code];
};
