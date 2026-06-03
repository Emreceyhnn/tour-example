import { Box, Typography, Container, IconButton, Stack } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MailOutlineIcon from "@mui/icons-material/Mail";
import MapIcon from "@mui/icons-material/Map";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "#hero", key: "home" },
  { label: "Routes", href: "#routes", key: "routes" },
  { label: "Gallery", href: "#gallery", key: "gallery" },
  { label: "Pricing", href: "#pricing", key: "pricing" },
  { label: "About Us", href: "/about", isRoute: true, key: "about" },
  { label: "Terms of Service", href: "/terms", isRoute: true, key: "terms" },
  { label: "Privacy Policy", href: "/privacy", isRoute: true, key: "privacy" },
];

const socialLinks = [
  { icon: <PublicIcon />, href: "#" },
  { icon: <PhotoCameraIcon />, href: "#" },
  { icon: <MailOutlineIcon />, href: "#" },
];

export default function Footer() {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#e5e2dd",
        color: "#1c1c19",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        sx={{
          textAlign: "center",
          gap: { xs: 8, md: 4, lg: 8 },
          py: 8,
          borderBottom: "1px solid rgba(11, 74, 92, 0.1)",
        }}
      >
        <Box sx={{ maxWidth: { md: "320px" } }}>
          <Stack spacing={3} alignItems="center">
            <Logo size={64} />
            <Typography
              variant="body2"
              sx={{ color: "#3e484c", lineHeight: 1.8 }}
            >
              {t("footer.desc")}
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={social.href}
                  sx={{
                    color: "#0B4A5C",
                    backgroundColor: "rgba(11, 74, 92, 0.05)",
                    transition: "all 0.3s",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#0B4A5C",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* Quick Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                color: "#1c1c19",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#0B4A5C",
                },
              }}
            >
              {t("footer.links")}
            </Typography>
            <Stack spacing={2} alignItems="center">
              {quickLinks.map((link) => {
                const href = link.isRoute
                  ? `/${lang || "en"}${link.href === "/" ? "" : link.href}`
                  : link.href;
                return (
                  <Box
                    key={link.label}
                    component={link.isRoute ? Link : "a"}
                    {...(link.isRoute ? { to: href } : { href })}
                    sx={{
                      color: "#3e484c",
                      textDecoration: "none",
                      fontSize: "16px",
                      transition: "color 0.3s, transform 0.3s",
                      display: "inline-block",
                      "&:hover": {
                        color: "#0B4A5C",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    {t(`nav.${link.key}`)}
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Box>

        {/* Contact */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                color: "#1c1c19",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#0B4A5C",
                },
              }}
            >
              {t("footer.contact")}
            </Typography>
            <Stack spacing={2.5}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="flex-start"
                justifyContent="center"
              >
                <LocationOnIcon
                  sx={{ fontSize: 20, mt: 0.2, color: "#0B4A5C" }}
                />
                <Typography sx={{ color: "#3e484c", fontSize: "16px" }}>
                  Fethiye Marina, Turkey
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent="center"
              >
                <PhoneIcon sx={{ fontSize: 20, color: "#0B4A5C" }} />
                <Typography sx={{ color: "#3e484c", fontSize: "16px" }}>
                  +90 555 123 4567
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent="center"
              >
                <EmailIcon sx={{ fontSize: 20, color: "#0B4A5C" }} />
                <Typography sx={{ color: "#3e484c", fontSize: "16px" }}>
                  info@mavirota.com
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Map */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            sx={{ width: "100%", maxWidth: "260px" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                color: "#1c1c19",
                position: "relative",
                textAlign: "center",
                width: "100%",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "2px",
                  backgroundColor: "#0B4A5C",
                },
              }}
            >
              Find Us
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 160,
                backgroundColor: "#dcdad5",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(11, 74, 92, 0.1)",
                flexDirection: "column",
                gap: 1.5,
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                },
              }}
            >
              <MapIcon sx={{ fontSize: 40, color: "#0B4A5C", opacity: 0.8 }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#3e484c",
                  textAlign: "center",
                  px: 2,
                }}
              >
                Marina Map Placeholder
                <br />({t("footer.harbor")})
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>

      {/* Copyright */}
      <Box
        sx={{
          mt: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: "#3e484c",
          }}
        >
          © {new Date().getFullYear()} Mavi Rota. {t("footer.rights")}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#3e484c",
            opacity: 0.8,
          }}
        >
          Crafted for luxury Mediterranean voyages.
        </Typography>
      </Box>
    </Box>
  );
}
