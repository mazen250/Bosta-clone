import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './en/translationEN.json';
import translationAR from './ar/translationAR.json';

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;