// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      home: 'Home',
      calculator: 'Calculator',
      toDoList: 'To Do List',
      slider: 'Slider',
      api: 'API',
      langEn: 'English',
      langES: 'Spanish',
      langJP: 'Japanese',
    },
  },
  es: {
    translation: {
      home: 'Inicio',
      calculator: 'Calculadora',
      toDoList: 'Lista de tareas',
      slider: 'Deslizador',
      api: 'API',
      langEn: 'Inglés',
      langES: 'Español',
      langJP: 'Japonés',
    },
  },
  jp: {
    translation: {
      home: 'ホーム',
      calculator: '電卓',
      toDoList: 'やることリスト',
      slider: 'スライダー',
      api: 'API',
      langEn: '英語',
      langES: 'スペイン語',
      langJP: '日本語',
    },
  },
  // Ajoutez d'autres langues si nécessaire
};

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

export default i18n;
