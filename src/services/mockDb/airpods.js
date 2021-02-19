import { CDN } from '@/constants';

const airpods = () => {
  const link = `${CDN}/shop/airpods/airpods`;

  return {
    name: 'Airpods',
    mainImage: `${link}/main.jpeg`,
    prices: [199],
    desc:
      '<div>Universal fit</div><div>H1 chip</div><div></div>“Hey Siri” always on</div><div>Up to 5 hours of listening time (on one charge)</div><div>More than 24 hours of listening time (with Wireless Charging Case)</div><div>Wireless Charging Case</div><div>Personalized engraving with initials, emoji, and more</div>',
    specs: {},
  };
};

const airpodsPro = () => {
  const link = `${CDN}/shop/airpods/airpods-pro`;

  return {
    name: 'Airpods Pro',
    mainImage: `${link}/main.jpeg`,
    prices: [249],
    desc:
      '<div>Universal fit</div><div>H1 chip</div><div></div>“Hey Siri” always on</div><div>Up to 10 hours of listening time (on one charge)</div><div>More than 24 hours of listening time (with Wireless Charging Case)</div><div>Wireless Charging Case</div><div>Personalized engraving with initials, emoji, and more</div>',
    specs: {},
  };
};

const airpodsMax = () => {
  const link = `${CDN}/shop/airpods/airpods-max`;

  return {
    name: 'iPhone SE',
    mainImage: `${link}/main.jpeg`,
    images: [
      `${link}/colors/space-gray.png`,
      `${link}/colors/silver.png`,
      `${link}/colors/green.png`,
      `${link}/colors/sky-blue.png`,
      `${link}/colors/coral.png`,
    ],
    prices: [549],
    specs: {
      // capacities: [64, 128, 256],
      colors: ['spaceGray', 'silver', 'green', 'skyBlue', 'coral'],
    },
  };
};

const ipodTouch = () => {
  const link = `${CDN}/shop/ipod`;

  return {
    name: 'iPhone SE',
    mainImage: `${link}/main.png`,
    images: [
      `${link}/colors/space-gray.png`,
      `${link}/colors/silver.png`,
      `${link}/colors/gold.png`,
      `${link}/colors/blue.png`,
      `${link}/colors/red.png`,
    ],
    prices: [199, 299, 399],
    specs: {
      capacities: [32, 128, 256],
      colors: ['spaceGray', 'silver', 'gold', 'blue', 'red'],
    },
  };
};

export default {
  airpods: airpods(),
  'airpods-pro': airpodsPro(),
  'airpods-max': airpodsMax(),
  'ipod-touch': ipodTouch(),
};
