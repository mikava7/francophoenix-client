// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import kaTranslation from "./ka.json";

const userLanguagePreference = localStorage.getItem("languageSelected");

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ka: {
      translation: kaTranslation,
    },
    // Add more language translations as needed
  },
  lng: userLanguagePreference || "fr", // Set user's preference or default language
  fallbackLng: "fr", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
});

export default i18n;
