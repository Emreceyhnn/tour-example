import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", key: "home", href: "/", isRoute: true },
  { label: "Routes", key: "routes", href: "/bay-guide", isRoute: true },
  { label: "About Us", key: "about", href: "/about", isRoute: true },
  { label: "Terms of Service", key: "terms", href: "/terms", isRoute: true },
  { label: "Privacy Policy", key: "privacy", href: "/privacy", isRoute: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (lang && (lang === "en" || lang === "tr")) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const switchLanguage = (newLang) => {
    // Replace the current language segment in the pathname
    const pathParts = location.pathname.split("/");
    if (pathParts.length > 1) {
      pathParts[1] = newLang; // e.g. /en/about -> /tr/about
    }
    navigate(pathParts.join("/") + location.search + location.hash);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? "rgba(252, 249, 244, 0.95)"
            : "rgba(252, 249, 244, 0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          transition: "all 0.3s ease-in-out",
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1280px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: "80px" },
            height: scrolled ? "60px" : "80px",
            transition: "height 0.3s ease-in-out",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to={`/${lang || "en"}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <Logo size={scrolled ? 40 : 48} scrolled={scrolled} />
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: scrolled ? "#006071" : "#ffffff",
                fontSize: { xs: "24px", md: "32px" },
                textShadow: scrolled ? "none" : "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Mavi Rota
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 6,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => {
              const href = link.isRoute
                ? `/${lang || "en"}${link.href === "/" ? "" : link.href}`
                : link.href;
              return (
                <Typography
                  key={link.label}
                  component={link.isRoute ? Link : "a"}
                  {...(link.isRoute ? { to: href } : { href })}
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "16px",
                    color: scrolled ? "#3e484c" : "#ffffff",
                    textDecoration: "none",
                    textShadow: scrolled ? "none" : "0 2px 4px rgba(0,0,0,0.5)",
                    transition: "color 0.3s, transform 0.3s",
                    "&:hover": {
                      color: "#006071",
                      transform: "scale(1.05)",
                    },
                    display: "inline-block",
                  }}
                >
                  {t(`nav.${link.key}`)}
                </Typography>
              );
            })}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography
                onClick={() => switchLanguage("tr")}
                sx={{
                  fontSize: "18px",
                  cursor: "pointer",
                  opacity: lang === "tr" ? 1 : 0.5,
                  transition: "all 0.3s",
                  "&:hover": { opacity: 1, transform: "scale(1.1)" },
                  filter: lang === "tr" ? "none" : "grayscale(100%)",
                }}
              >
                Tr
              </Typography>
              <Typography
                onClick={() => switchLanguage("en")}
                sx={{
                  fontSize: "18px",
                  cursor: "pointer",
                  opacity: lang === "en" ? 1 : 0.5,
                  transition: "all 0.3s",
                  "&:hover": { opacity: 1, transform: "scale(1.1)" },
                  filter: lang === "en" ? "none" : "grayscale(100%)",
                }}
              >
                En
              </Typography>
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { md: "none" },
              color: scrolled ? "#006071" : "#ffffff",
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "#fcf9f4",
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#006071" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component={link.isRoute ? Link : "a"}
                {...(link.isRoute ? { to: link.href } : { href: link.href })}
                onClick={handleDrawerToggle}
                sx={{
                  px: 4,
                  py: 1.5,
                  "&:hover": { backgroundColor: "rgba(0, 96, 113, 0.08)" },
                }}
              >
                <ListItemText
                  primary={t(`nav.${link.key}`)}
                  primaryTypographyProps={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "18px",
                    color: "#3e484c",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
