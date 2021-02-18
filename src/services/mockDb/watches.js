import { CDN } from '@/constants';

const watchS6 = () => {
  const link = `${CDN}/shop/watch/apple-watch-series-6`;

  return {
    name: 'Apple Watch Series 6',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/black-unity.jpeg`,
      `${link}/colors/northern-blue.jpeg`,
      `${link}/colors/silver.jpeg`,
      `${link}/colors/red.jpeg`,
      `${link}/colors/yellow.jpeg`,
      `${link}/colors/green.jpeg`,
    ],
    desc:
      '<div>The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.</div><div>The Solo Loop is made from soft, stretchable silicone and designed for ultracomfort with no clasps or buckles.</div>',
    prices: [399],
    specs: {
      colors: [
        'blackUnity',
        'northernBlue',
        'silver',
        'red',
        'yellow',
        'green',
      ],
    },
  };
};

const watchSE = () => {
  const link = `${CDN}/shop/watch/apple-watch-se`;

  return {
    name: 'Apple Watch SE',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/northern-blue.jpeg`,
      `${link}/colors/black.jpeg`,
      `${link}/colors/red.jpeg`,
      `${link}/colors/yellow.jpeg`,
      `${link}/colors/silver.jpeg`,
    ],
    desc:
      '<div>The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.</div><div>The Solo Loop is made from soft, stretchable silicone and designed for ultracomfort with no clasps or buckles.</div>',
    prices: [399],
    specs: {
      colors: ['northernBlue', 'black', 'red', 'yellow', 'silver'],
    },
  };
};

const watchS3 = () => {
  const link = `${CDN}/shop/watch/apple-watch-series-3`;

  return {
    name: 'Apple Watch Series 3',
    mainImage: `${link}/main.png`,
    images: [`${link}/colors/black.png`, `${link}/colors/white.png`],
    desc:
      '<div>The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.</div><div>The Solo Loop is made from soft, stretchable silicone and designed for ultracomfort with no clasps or buckles.</div>',
    prices: [199],
    specs: {
      colors: ['black', 'white'],
      sizes: [38, 42],
    },
  };
};

const watchNike = () => {
  const link = `${CDN}/shop/watch/apple-watch-nike`;

  return {
    name: 'Apple Watch Series 3',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/anthracite-black.jpeg`,
      `${link}/colors/platinum-black.jpeg`,
      `${link}/colors/pride.jpeg`,
      `${link}/colors/obsidian-mist.jpeg`,
    ],
    desc:
      '<div>The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy.</div><div>The Nike Sport Band is made from a durable high-performance fluoroelastomer with compression-molded perforations for breathability.</div>',
    prices: [399],
    specs: {
      sizes: [40, 44],
      colors: ['anthraciteBlack', 'platinumBlack', 'pride', 'obsidianMist'],
    },
  };
};

const watchHermes = () => {
  const link = `${CDN}/shop/watch/apple-watch-hermes`;

  return {
    name: 'Apple Watch Hermes',
    mainImage: `${link}/main.jpeg`,
    images: [`${link}/colors/orange.jpeg`, `${link}/colors/fauve.jpeg`],
    desc:
      '<div>The stainless steel case is durable and polished to a shiny, mirror-like finish.</div><div>The Attelage Double Tour is slimmer than the classic version, and has an elongated connection to the case that gives this classic Hermès design an understated update.</div>',
    prices: [1399],
    specs: {
      sizes: [40, 44],
      colors: ['orange', 'fauve'],
    },
  };
};

const bands = () => {
  const link = `${CDN}/shop/watch/bands`;

  return {
    name: 'Bands',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/black.jpeg`,
      `${link}/colors/northern-blue.jpeg`,
      `${link}/colors/orange.jpeg`,
      `${link}/colors/red.jpeg`,
      `${link}/colors/silver.jpeg`,
      `${link}/colors/yellow.jpeg`,
    ],
    desc: '<div>Eye candy for your wrist.</div>',
    prices: [49],
    specs: {
      sizes: [40, 44],
      colors: ['black', 'northernBlue', 'orange', 'red', 'silver', 'yellow'],
    },
  };
};

export default {
  'apple-watch-series-6': watchS6(),
  'apple-watch-series-3': watchS3(),
  'apple-watch-se': watchSE(),
  'apple-watch-nike': watchNike(),
  'apple-watch-hermes': watchHermes(),
  bands: bands(),
};
