import { I18nextProvider } from "react-i18next";
import { i18nInit } from "i18n";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./router";

export default function App() {
  return (
    <I18nextProvider i18n={i18nInit}>
      <CssBaseline />
      <Router />
    </I18nextProvider>
  );
}
