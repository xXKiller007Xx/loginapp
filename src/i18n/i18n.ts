import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import translationEN from "../locales/en-US/translation.json";
import translationVI from "../locales/vi-VN/translation.json";
import translationZH from "../locales/zh-CN/translation.json";

// Set up i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    vi: {
      translation: translationVI,
    },
    zh: {
      translation: translationZH,
    },
  },
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
