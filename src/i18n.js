import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',    
    languages: ['sv', 'en'],
    resources: {
      en: {
        navbar: {
          home: 'Home',
          language: 'Languages',
          swedish: 'Swedish',
          english: 'English',
          categories: 'Categories',
          environment: 'Environment',
          medicine: 'Medicine',
          outreach: 'Outreach',
          search: 'Search...',
          login: 'Log in',
          signup: 'Sign up',
          create_article: 'Create Article',
          subscribe: 'Subscribe'
        }
      },
      sv: {
        navbar: {
          home: 'Hem',
          language: 'Språk',
          swedish: 'Svenska',
          english: 'Engelska',
          categories: 'Kategorier',
          environment: 'Klimat',
          medicine: 'Medicin',
          outreach: 'Insatsarbete',
          search: 'Sök...',
          login: 'Logga in',
          signup: 'Bli medlem',
          create_article: 'Skriv artikel',
          subscribe: 'Prenumerera'
        }
      }
    },
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
