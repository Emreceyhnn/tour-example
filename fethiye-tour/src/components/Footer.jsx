import { Box, Typography, Container, IconButton, Grid } from "@mui/material";
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
  { label: 'Home', href: '#hero' },
  { label: 'Routes', href: '#routes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '/about', isRoute: true },
  { label: 'Terms of Service', href: '/terms', isRoute: true },
  { label: 'Privacy Policy', href: '/privacy', isRoute: true },
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
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: "80px" },
        color: "#1c1c19",
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ maxWidth: "1280px" }}>
        <Grid container spacing={6}>
          {/* Logo & Description */}
          <Grid item xs={12} md={3}>
            <Logo size={64} />
            <Typography
              variant="body2"
              sx={{ color: "#3e484c", lineHeight: 1.8, maxWidth: "300px" }}
            >
              {t('footer.desc')}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {socialLinks.map((social, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={social.href}
                  sx={{
                    color: "#006071",
                    transition: "color 0.3s",
                    "&:hover": { color: "#E8654A" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                color: "#1c1c19",
                mb: 3,
              }}
            >
              {t('footer.links')}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {quickLinks.map((link) => {
                const href = link.isRoute ? `/${lang || 'en'}${link.href === '/' ? '' : link.href}` : link.href;
                return (
                  <Box
                    key={link.label}
                    component={link.isRoute ? Link : "a"}
                    {...(link.isRoute ? { to: href } : { href })}
                    sx={{
                      color: "#3e484c",
                      textDecoration: "none",
                      fontSize: "16px",
                      transition: "color 0.3s",
                      "&:hover": { color: "#006071" },
                    }}
                  >
                    {t(`nav.${link.label.toLowerCase().replace(/ /g, '')}`)}
                  </Box>
                );
              })}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                color: "#1c1c19",
                mb: 3,
              }}
            >
              {t('footer.contact')}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <LocationOnIcon
                  sx={{ fontSize: 18, mt: 0.3, color: "#006071" }}
                />
                <Typography sx={{ color: "#3e484c", fontSize: "16px" }}>
                  Fethiye Marina, Turkey
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 18, color: "#006071" }} />
                <Typography sx={{ color: "#3e484c", fontSize: "16px" }}>
                  +90 555 123 4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon sx={{ fontSize: 18, color: "#006071" }} />
                <Typography sx={{ color: "#3e484c", fontSize: "16px" }}>
                  info@mavirota.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                fontSize: "20px",
                color: "#1c1c19",
                mb: 3,
              }}
            >
              Find Us
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 160,
                backgroundColor: "#dcdad5",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #bec8cc",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <MapIcon sx={{ fontSize: 40, color: "#6e797c" }} />
              <Typography
                sx={{ fontSize: "14px", color: "#3e484c", textAlign: "center" }}
              >
                Marina Map Placeholder
                <br />
                ({t('footer.harbor')})
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: "1px solid rgba(190, 200, 204, 0.3)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "#3e484c",
            }}
          >
            © 2024 Mavi Rota. {t('footer.rights')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
