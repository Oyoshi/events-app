import { useState, useCallback, MouseEvent, ChangeEvent, FC } from "react";
import debounce from "lodash/debounce";
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
import {
  Brightness4,
  Brightness7,
  Translate,
  Search,
} from "@mui/icons-material";
import { useColorMode } from "hooks";
import {
  SearchWrapper,
  SearchIconWrapper,
  StyledInputBase,
} from "components/search-input";
import { LINKS, LANGUAGES } from "./navbar.const";
import { NavbarProps, NavLink, Language } from "./navbar.interface";

const Navbar: FC<NavbarProps> = ({ onSearch }) => {
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

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleSearch(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((value) => {
      onSearch!(value);
    }, 500),
    []
  );

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
        {onSearch && (
          <SearchWrapper>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("search")}
              inputProps={{ "aria-label": "search" }}
              onChange={handleOnChange}
            />
          </SearchWrapper>
        )}
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
};

export default Navbar;
