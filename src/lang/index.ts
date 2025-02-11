import { translationUz } from "./uz";
import { translationRu } from "./ru";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang_code") || "ru",
  fallbackLng: localStorage.getItem("lang_code") || "ru",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: { translation: translationRu },
    uz: { translation: translationUz },
  },
});

export default i18n;
