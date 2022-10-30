import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const eventsAppInstance = i18n.createInstance();

const missingKeyHandler = (lng: readonly string[], ns: string, key: string) => {
  const errorMsg = `${key} does not exist in translation.json`;
  alert(errorMsg);
  throw new Error(errorMsg);
};

eventsAppInstance
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true,
    missingKeyHandler: missingKeyHandler,
  });

export const i18nInit = eventsAppInstance;
