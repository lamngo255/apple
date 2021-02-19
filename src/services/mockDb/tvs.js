import { CDN } from '@/constants';

const appleTv4k = () => {
  const link = `${CDN}/shop/tv/apple-tv-4k`;

  return {
    name: 'Apple TV 4K',
    mainImage: `${link}/main.jpeg`,
    prices: [179, 199],
    specs: {
      capacities: [32, 64],
    },
  };
};

const appleTvHd = () => {
  const link = `${CDN}/shop/tv/apple-tv-hd`;

  return {
    name: 'Apple TV HD',
    mainImage: `${link}/main.png`,
    prices: [149],
    specs: {
      capacities: [32],
    },
  };
};

const homePod = () => {
  const link = `${CDN}/shop/homepod/homepod`;

  return {
    name: 'Homepod',
    mainImage: `${link}/main.jpeg`,
    images: [`${link}/colors/space-gray.jpeg`, `${link}/colors/white.jpeg`],
    prices: [299],
    specs: {
      colors: ['spaceGray', 'white'],
    },
  };
};

const homePodMini = () => {
  const link = `${CDN}/shop/homepod/homepod-mini`;

  return {
    name: 'Homepod Mini',
    mainImage: `${link}/main.jpeg`,
    images: [`${link}/colors/space-gray.jpeg`, `${link}/colors/white.jpeg`],
    prices: [199],
    specs: {
      colors: ['spaceGray', 'white'],
    },
  };
};

export default {
  'apple-tv-4k': appleTv4k(),
  'apple-tv-hd': appleTvHd(),
  'homepod-mini': homePodMini(),
  homepod: homePod(),
};
