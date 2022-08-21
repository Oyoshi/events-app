import { useState, MouseEvent } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  Button,
  Link,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Brightness4, Brightness7, Translate } from "@mui/icons-material";
import { useColorMode } from "hooks";
import { LINKS, LANGUAGES } from "./navbar.const";
import { NavLink, Language } from "./navbar.interface";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const theme = useTheme();

  const { toggleColorMode } = useColorMode();

  const handleOnLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    handleOnMenuClose();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOnMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnMenuClose = () => {
    setAnchorEl(null);
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
          <IconButton onClick={handleOnMenuOpen} color="inherit">
            <Translate />
          </IconButton>
          <Menu
            id="translationsMenuAppbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleOnMenuClose}
          >
            {LANGUAGES.map((lng: Language) => (
              <MenuItem
                key={`MENU_ITEM_LNG_${lng.name}`}
                onClick={() => handleOnLanguageChange(lng.name)}
              >
                {t(lng.name)}
              </MenuItem>
            ))}
          </Menu>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
