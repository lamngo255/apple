/* eslint-disable */
import utils from '../utils';

export default {
  async getProfile() {
    await utils.delay(100);
    return utils.camelizeKeys({
      account_id: '123456789',
      region: 'sg',
    });
  },

  async getBalances() {
    await utils.delay(100);
    return { coins: 305, gems: 777777 };
  },
};
