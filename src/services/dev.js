/* eslint-disable */
import utils from '../utils';

const CDN = '/cdn/assets';

export default {
  async getProfile() {
    await utils.delay(100);
    return utils.camelizeKeys({
      account_id: '123456789',
      region: 'sg',
    });
  },

  async getProduct(payload) {
    // payload format
    // {
    //   id: 'iphone-12-pro'
    // }

    const link = `${CDN}/shop/${payload.id}`;

    await utils.delay(100);
    return utils.camelizeKeys({
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
        // sizes: [44, 40],
      },
    });
  },
};
