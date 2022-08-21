import { ReactNode } from "react";

export interface IColorModeContext {
  toggleColorMode: () => void;
}

export interface ColorModeContextProviderProps {
  children: ReactNode;
}
