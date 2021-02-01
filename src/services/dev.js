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

  async getConfig() {
    await utils.delay(100);
    return utils.camelizeKeys({
      start_ts: 1586966400,
      end_ts: Math.floor(Date.now() / 1000) + 120,
      grand_seq: [1, 2, 3, 4, 5],
      fallback_icon:
        'https://freefiremobile-a.akamaihd.net/common/OB17/RUSHOP/item/802000001.png',
    });
  },

  async getAllItems() {
    await utils.delay(100);
    return new Array(20).fill(null).map((_, i) =>
      utils.camelizeKeys({
        _seq: i + 1,
        level: (i % 4) + 1,
        name_en: `Item long long name  ${i + 1}`,
        name_ru: `Ru-Item ${i + 1}`,
        name_tr: `Tr-Item ${i + 1}`,
        image: `/cdn/assets/loots/${i + 1}.png`,
        item_id: i + 1,
        quantity: 5,
        fallback_name_en: 'FF Token',
        fallback_name_tr: 'Jeton',
        fallback_name_ru: 'Жетон FF',
        fallback_quantity: 10,
        fallback_image:
          'https://freefiremobile-a.akamaihd.net/common/OB17/RUSHOP/item/800000301.png',
        fallback_level: (i % 4) + 1,
        price: 200,
      }),
    );
  },

  async getGameState() {
    await utils.delay(100);
    return utils.camelizeKeys([{
      grand_owned: [1, 2, 3],
    }]);
  },

  async getDrawHistory() {
    await utils.delay(300);
    return utils.camelizeKeys([
      { seq: 1, timestamp: 1574224904, cost: 15 },
      {
        seq: 2,
        fallback_seq: 7,
        timestamp: 1574224985,
        cost: 15,
      },
      { seq: 3, timestamp: 1574224904, cost: 15 },
      { seq: 3, timestamp: 1574224904, cost: 15 },
      { seq: 3, timestamp: 1574224904, cost: 15 },
      { seq: 3, timestamp: 1574224904, cost: 15 },
      { seq: 3, timestamp: 1574224904, cost: 15 },
      { seq: 3, timestamp: 1574224904, cost: 15 },
      { seq: 3, timestamp: 1574224904, cost: 15 },
    ]);
  },
};
