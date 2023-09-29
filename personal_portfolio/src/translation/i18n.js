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
      "welcome":'Welcome on my Web portfolio  ! ',
      "me-1": "I'm a Student Engineer in Digital Services Engineering",
      "me-1-1":"passionate about ", 
      "eager":"and eager for",
      "programming":"programming ",
      "digital-innovation":"digital innovation",
      "me-2": "Specialized in",
      "me-2-1": "full-stack development",
      "me-3": "my skill set",
      "me-3-1": "ranges from front-end to back-end, with expertise in",
      "me-4":"Hi ! I'm",
      "me-5":"Charbel MEHOU",
      "me-5-1":"a Developper",
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
      "contact-me":"Here is my links and contacts",
      "certifications":"Certifications",
      "certif-complete":"Course Completion Certificate of ",
      "myftjourney":'Gym Training Plateform',
      "and":"and",
      'management':'Project Management',
      'languages':'Languages',
      'logiciel':'Logiciel'
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
      "view-here":"Aperçu ici",
      "github-view-here":"Repository Github ici ",
      "me-1":"Je suis un étudiant en Ingénierie des Services du Numérique",
      "me-1-1": "passionné de ",
      "eager":"et avide d'",
      "programming": "programmation ",
      "digital-innovation": "Innovation numérique",  
      "me-2":"Spécialisé en  ",
      "me-2-1":"développement full-stack",
      "me-3":" ma palette de compétences " ,
      "me-3-1":"s'étend du front-end au back-end, avec une expertise en",
      "me-4":"Bonjour , je suis",
      "me-5":"Charbel MEHOU",
      "me-5-1":" Développeur",
      "welcome":'Bienvenue sur mon portfolio web ! ',
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
      "contact-me":"Voici mes Liens et Contacts",
      "certifications":"Certifications",
      "certif-complete":"Certificat de complétion de cours de",
      "myftjourney":'PlateForme d\'aide à l\'entrainement',
      "and":'et',
      'management':'Gestion de Projet',
      'languages':'Languages',
      'logiciel':'Logiciel',
        
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
