import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Button, Link, Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Brightness4, Brightness7, Translate } from "@mui/icons-material";
import { useColorMode } from "hooks";
import { LINKS } from "./navbar.const";
import { NavLink } from "./navbar.interface";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const theme = useTheme();

  const { toggleColorMode } = useColorMode();

  const changeLanguageHandler = () => {
    i18n.changeLanguage("pl");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {LINKS.map((link: NavLink, idx: number) => (
          <Button color="inherit" key={`NAV_LINK_${idx}`}>
            <Link
              color="inherit"
              underline="none"
              component={RouterLink}
              to={link.to}
            >
              {t(link.title)}
            </Link>
          </Button>
        ))}
        <Box sx={{ ml: "auto" }}>
          <IconButton onClick={changeLanguageHandler} color="inherit">
            <Translate />
          </IconButton>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
