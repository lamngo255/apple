import { CDN } from '@/constants';
import iphones from './iphones';

const airpods = () => {
  const link = `${CDN}/shop/airpods/airpods`;

  return {
    name: 'iPhone XR',
    mainImage: `${link}/main.jpeg`,
    prices: [199],
    specs: {},
  };
};

export default {
  ...iphones,
  airpods: airpods(),
};
