import { useContext } from "react";
import { IColorModeContext, ColorModeContext } from "app/theme";

export const useColorMode = () =>
  useContext<IColorModeContext>(ColorModeContext);
