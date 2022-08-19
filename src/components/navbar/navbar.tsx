import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Button, Link } from "@mui/material";
import { LINKS } from "./navbar.const";
import { NavLink } from "./navbar.interface";

export default function Navbar() {
  const { t } = useTranslation();

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
      </Toolbar>
    </AppBar>
  );
}
