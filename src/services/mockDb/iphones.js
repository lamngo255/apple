import { CDN } from '@/constants';

const iphone12Pro = () => {
  const link = `${CDN}/shop/iphone/iphone-12-pro`;

  return {
    name: 'iPhone 12 Pro',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/pacific-blue.png`,
      `${link}/colors/gold.png`,
      `${link}/colors/graphite.png`,
      `${link}/colors/silver.png`,
    ],
    prices: [1600, 1750, 1900],
    specs: {
      models: [
        {
          name: 'iPhone 12 Pro',
          desc: '6.1-inch display',
        },
        {
          name: 'iPhone 12 Pro Max',
          desc: '6.7-inch display',
        },
      ],
      capacities: [128, 256, 512],
      colors: ['pacificBlue', 'gold', 'graphite', 'silver'],
    },
  };
};

const iphone12 = () => {
  const link = `${CDN}/shop/iphone/iphone-12`;

  return {
    name: 'iPhone 12',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/white.png`,
      `${link}/colors/black.png`,
      `${link}/colors/blue.png`,
      `${link}/colors/green.png`,
      `${link}/colors/red.png`,
    ],
    prices: [799, 899, 999],
    specs: {
      models: [
        {
          name: 'iPhone 12 Mini',
          desc: '5.4-inch display',
        },
        {
          name: 'iPhone 12',
          desc: '6.1-inch display',
        },
      ],
      capacities: [128, 256, 512],
      colors: ['white', 'black', 'blue', 'green', 'red'],
    },
  };
};

const iphoneSE = () => {
  const link = `${CDN}/shop/iphone/iphone-se`;

  return {
    name: 'iPhone SE',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/white.png`,
      `${link}/colors/black.png`,
      `${link}/colors/red.png`,
    ],
    prices: [399, 449, 549],
    specs: {
      capacities: [64, 128, 256],
      colors: ['white', 'black', 'red'],
    },
  };
};

const iphone11 = () => {
  const link = `${CDN}/shop/iphone/iphone-11`;

  return {
    name: 'iPhone 11',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/white.png`,
      `${link}/colors/black.png`,
      `${link}/colors/green.png`,
      `${link}/colors/yellow.png`,
      `${link}/colors/purple.png`,
      `${link}/colors/red.png`,
    ],
    prices: [599, 649, 749],
    specs: {
      capacities: [64, 128, 256],
      colors: ['white', 'black', 'green', 'yellow', 'purple', 'red'],
    },
  };
};

const iphoneXR = () => {
  const link = `${CDN}/shop/iphone/iphone-xr`;

  return {
    name: 'iPhone XR',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/white.png`,
      `${link}/colors/black.png`,
      `${link}/colors/blue.png`,
      `${link}/colors/yellow.png`,
      `${link}/colors/coral.png`,
      `${link}/colors/red.png`,
    ],
    prices: [499, 549],
    specs: {
      capacities: [64, 128],
      colors: ['white', 'black', 'blue', 'yellow', 'coral', 'red'],
    },
  };
};

export default {
  'iphone-12': iphone12(),
  'iphone-12-pro': iphone12Pro(),
  'iphone-se': iphoneSE(),
  'iphone-11': iphone11(),
  'iphone-xr': iphoneXR(),
};
