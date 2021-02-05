const linkingTarget = 'https://test.apple.ff.garena.com';

// variables accessible in project src code
const env = ['REGION', 'CDN', 'LANG_MAP', 'LOCALE', 'TRANSIFY_ID'];

const prodCdnMap = {
  sg: 'https://freefiremobile-a.akamaihd.net/common/web_event/apple',
};

const langMap = {
  sg: {
    sg_en: 18,
    ru_ru: 7,
    ind_en: 12,
    europe_tr: 14,
    europe_en: 1,
  },
};

const gaIdMap = { sg: 'UA-XXXXXXXXX-X' };
const region = process.env.REGION || 'sg';
const locales = Object.keys(langMap[region]);
process.env.CDN = process.env.CDN || prodCdnMap[region];
process.env.LANG_MAP = JSON.stringify(langMap[region]);
[process.env.LOCALE] = locales;
process.env.REGION = region;
process.env.TRANSIFY_ID = 0;

const langSet = new Set();
locales.forEach((locale) => {
  const [localeRegion, lang = localeRegion] = locale.split('_');
  langSet.add(lang);
});

module.exports = {
  linkingTarget,
  env,
  gaId: gaIdMap[region],
  locales,
  languages: Array.from(langSet),
};
