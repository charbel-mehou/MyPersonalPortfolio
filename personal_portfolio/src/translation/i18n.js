import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "about":"About",
      "skills":"Skills",
      "projects":"Project",
      "contacts":"Contact",
    }
  },
  fr: {
    translation: {
      "about":"À Propos",
      "skills":"Compétences",
      "projects":"Projets",
      "contacts":"Contacts",
      }
      
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
