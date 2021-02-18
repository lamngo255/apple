import { CDN } from '@/constants';

const ipadPro = () => {
  const link = `${CDN}/shop/ipad/ipad-pro`;

  return {
    name: 'iPad Pro',
    mainImage: `${link}/main.jpeg`,
    images: [`${link}/colors/space-gray.png`, `${link}/colors/silver.png`],
    prices: [999, 1099, 1299],
    specs: {
      models: [
        {
          name: 'iPad Pro Small',
          desc: '11-inch display',
        },
        {
          name: 'iPad Pro Big',
          desc: '12.9-inch display',
        },
      ],
      capacities: [128, 256, 512],
      colors: ['spaceGray', 'silver'],
    },
  };
};

const ipadAir = () => {
  const link = `${CDN}/shop/ipad/ipad-air`;

  return {
    name: 'iPad Air',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/space-gray.png`,
      `${link}/colors/silver.png`,
      `${link}/colors/rose-gold.png`,
      `${link}/colors/green.png`,
      `${link}/colors/sky-blue.png`,
    ],
    prices: [599, 749],
    specs: {
      capacities: [64, 256],
      colors: ['spaceGray', 'silver', 'roseGold', 'green', 'skyBlue'],
    },
  };
};

const ipadLight = () => {
  const link = `${CDN}/shop/ipad/ipad-light`;

  return {
    name: 'iPad Light',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/space-gray.png`,
      `${link}/colors/silver.png`,
      `${link}/colors/gold.png`,
    ],
    prices: [329, 429],
    specs: {
      capacities: [32, 128],
      colors: ['spaceGray', 'silver', 'gold'],
    },
  };
};

const ipadMini = () => {
  const link = `${CDN}/shop/ipad/ipad-mini`;

  return {
    name: 'iPad Mini',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/space-gray.png`,
      `${link}/colors/silver.png`,
      `${link}/colors/gold.png`,
    ],
    prices: [399, 549],
    specs: {
      capacities: [64, 256],
      colors: ['spaceGray', 'silver', 'gold'],
    },
  };
};

const applePencil = () => {
  const link = `${CDN}/shop/ipad/apple-pencil`;

  return {
    name: 'Apple Pencil',
    mainImage: `${link}/main.jpeg`,
    prices: [129],
    specs: {},
  };
};

const magicKeyboard = () => {
  const link = `${CDN}/shop/ipad/keyboard`;

  return {
    name: 'iPad',
    mainImage: `${link}/main.jpeg`,
    prices: [129],
    specs: {},
  };
};

export default {
  'ipad-pro': ipadPro(),
  'ipad-air': ipadAir(),
  'ipad-light': ipadLight(),
  'ipad-mini': ipadMini(),
  'apple-pencil': applePencil(),
  'magic-keyboard': magicKeyboard(),
};
