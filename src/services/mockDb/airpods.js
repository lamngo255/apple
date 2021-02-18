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

export default {
  airpods: airpods(),
};
