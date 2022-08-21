import { NavLink, Language } from "./navbar.interface";

export const LINKS: NavLink[] = [
  {
    title: "events",
    to: "/events",
  },
  {
    title: "create-event",
    to: "/events/new",
  },
];

export const LANGUAGES: Language[] = [
  {
    name: "pl",
  },
  {
    name: "en",
  },
];

export const DEBOUNCE_DELAY_IN_MS = 500;
