import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import locales from './constants/Locale';

const resources = locales.reduce((acc, cur) => ({
  ...acc,
  [cur.value]: {
    translation: require(`./locales/${cur.value}.json`), // property accessed by i18n
  },
}), {});

i18n
  .use(initReactI18next)
  // .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;