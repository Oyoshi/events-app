import { I18nextProvider } from "react-i18next";
import { i18nInit } from "i18n";
import CssBaseline from "@mui/material/CssBaseline";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Router from "./router";

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <I18nextProvider i18n={i18nInit}>
        <CssBaseline />
        <Router />
      </I18nextProvider>
    </LocalizationProvider>
  );
}
