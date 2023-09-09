import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home":"Home",
      "about":"About",
      "skills":"Skills",
      "projects":"Project",
      "contacts":"Contact",
      "copyright":"© 2023 All rights reserved.",
      "made-by":"Made by Charbel MEHOU",
      "view-here":"View here",
      "github-view-here":"Github repository here",
      "me-1": "Student Engineer in Digital Services Engineering",
      "me-2": "Seeking a Professional Contract",
      "me-3": "For a Full Stack Developer Position",
      "projet":"Project",
      "myftjourney-d1": "An application providing advice",
      "myftjourney-d2": "to help users train effectively",
      "myportfolio-d1":"This is my Web portfolio",
      "web-portfolio":"Web Portfolio"
      
    }
  },
  fr: {
    translation: {
      "home":"Acceuil",
      "about":"À Propos",
      "skills":"Compétences",
      "projects":"Projets",
      "contacts":"Contacts",
      "copyright": "© 2023 Tous droits réservés.",
      "made-by": "Réalisé par Charbel MEHOU",
      "view-here":"Appercu ici",
      "github-view-here":"Repository Github ici ",
      "me-1":"Élève-Ingenieur en Ingénierie des Services du Numérique",
      "me-2":"à la recherche d'un Contrat de professionnalisation",
      "me-3":"pour un poste de Développeur Full stack" ,
      "projet":"Projet",
      "myftjourney-d1":"Une application fournissant des conseils",
      "myftjourney-d2":"pour aider les utilisateurs à s'entraîner efficacement",
      "myportfolio-d1":"Il s'agit de mon Web portfolio",
      "web-portfolio":"Web Portfolio"
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
