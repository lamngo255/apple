/* eslint-disable */
import utils from '../utils';
import mockDb from './mockDb';

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

    await utils.delay(100);
    return utils.camelizeKeys(mockDb[payload.id]);
  },
};
