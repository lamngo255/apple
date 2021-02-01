import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './messages';
import plugin from './plugin';

Vue.use(VueI18n);
Vue.use(plugin, { cdn: process.env.CDN });

const loadedLocales = {};
const defaultLocale = process.env.LOCALE;

export const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
});

function setLocale(locale) {
  i18n.locale = locale;
  document.documentElement.lang = locale;
  return locale;
}

const langMap = JSON.parse(process.env.LANG_MAP);
const DomainPrefixMap = {
  ind_en: 'rosetta-ind',
  ind_hi: 'rosetta-ind',
  sac_es: 'rosetta-sac',
  na_en: 'rosetta-sac',
  na_es: 'rosetta-sac',
  us_es: 'rosetta-us',
};

const fetchMessage = async (locale) => {
  try {
    const domainPrefix = DomainPrefixMap[locale] || 'rosetta';
    const res = await fetch(
      `https://${domainPrefix}.garenanow.com/transify/${process.env.TRANSIFY_ID}?lang=${langMap[locale]}`,
    );
    if (res.status === 200) {
      return res.json();
    }
    throw Error(`Fetch Rosetta failed with status ${res.status}`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Referring to local translation due to', e);
    return messages[locale];
  }
};

export async function loadLocale(locale) {
  if (locale in loadedLocales) {
    return setLocale(locale);
  }

  const localeList = Object.keys(langMap);
  let localeWithFallback = localeList.find((l) => l === locale);
  if (!localeWithFallback) {
    const [region] = locale.split('_');
    localeWithFallback =
      localeList.find((l) => l.indexOf(region) > -1) || defaultLocale;
  }

  const message = await fetchMessage(localeWithFallback);
  i18n.setLocaleMessage(localeWithFallback, message);
  loadedLocales[localeWithFallback] = true;
  return setLocale(localeWithFallback);
}
