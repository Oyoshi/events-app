import i18n from "i18next";
import translations from "./translations.json";

export const eventsAppInstance = i18n.createInstance();

eventsAppInstance.init({
  resources: translations,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  saveMissing: true,
  missingKeyHandler: (lng: readonly string[], ns: string, key: string) => {
    console.error(`${key} does not exist in translations.json}`);
  },
});

export const i18nInit = eventsAppInstance;
