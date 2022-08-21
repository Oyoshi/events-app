import { FC, createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  IColorModeContext,
  ColorModeContextProviderProps,
} from "./theme.interface";

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
});

const ColorModeContextProvider: FC<ColorModeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
