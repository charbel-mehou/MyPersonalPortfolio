import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home":"Home",
      "about":"About",
      "skills":"Skills",
      "projects":"Projects",
      "contacts":"Contact",
      "copyright":"© 2023 All rights reserved.",
      "made-by":"Made by Charbel MEHOU",
      "view-here":"View here",
      "github-view-here":"Github repository here",
      "me-1": "Student Engineer in Digital Services Engineering",
      "me-2": "Seeking a Professional Contract",
      "me-3": "For a",
      "me-2-1":"Professional Contract",
      "me-3-1":"Full Stack Developer Position",
      "me-4":"Hi ! I'm",
      "me-5":"Charbel MEHOU",
      "projet":"Project",
      "myftjourney-d1": "An application providing advice",
      "myftjourney-d2": "to help users train effectively",
      "myportfolio-d1":"This is my Web portfolio",
      "myportfolio-d2":"Here you can have acces to my deployed projects",
      "web-portfolio":"Web Portfolio",
      "interests":"Interests",
      'gmail':'Gmail',
      'github':'Github',
      'linkedIn':'LinkedIn',
      "contact-me":"To Reach Me",
      "certifications":"Certifications",
      "certif-complete":"Course Completion Certificate of ",
      "myftjourney":'Gym Training Plateform'

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
      "view-here":"Apercu ici",
      "github-view-here":"Repository Github ici ",
      "me-1":"Etudiant en Ingénierie des Services du Numérique",
      "me-2":"à la recherche d'un ",
      "me-2-1":"Contrat de professionnalisation",
      "me-3":"pour un poste de" ,
      "me-3-1":" Développeur Full stack",
      "me-4":"Bonjour , je suis",
      "me-5":"Charbel MEHOU",
      "projet":"Projet",
      "myftjourney-d1":"Une application fournissant des conseils",
      "myftjourney-d2":"pour aider les utilisateurs à s'entraîner efficacement",
      "myportfolio-d1":"Il s'agit de mon Web portfolio ",
      "myportfolio-d2":"Où vous pouvez avoir accès à mes projets déployés",
      "web-portfolio":"Web Portfolio",
      "interests":"Centres d'intérêt",
      'gmail':'Gmail',
      'github':'Github',
      'linkedIn':'LinkedIn',
      "contact-me":"Pour me contactez",
      "certifications":"Certifications",
      "certif-complete":"Certificat de complétion de cours de",
      "myftjourney":'PlateForme d\'aide à l\'entrainement'

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
