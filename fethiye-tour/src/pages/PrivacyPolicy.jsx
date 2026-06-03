import { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AnchorIcon from "@mui/icons-material/Anchor";
import SailingIcon from "@mui/icons-material/Sailing";
import GroupsIcon from "@mui/icons-material/Groups";
import CookieIcon from "@mui/icons-material/Cookie";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("data-collection");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "data-collection", key: "data-collection" },
    { id: "use-info", key: "use-info" },
    { id: "cookies", key: "cookies" },
    { id: "third-party", key: "third-party" },
  ];

  return (
    <>
      <Navbar />

      <Box
        component="main"
        sx={{
          pt: { xs: 16, md: 24 },
          pb: 10,
          px: { xs: 2, md: "80px" },
          maxWidth: "1280px",
          mx: "auto",
        }}
      >
        {/* Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: "center" }}>
          <Box
            sx={{
              display: "inline-block",
              mb: 2,
              px: 2,
              py: 0.5,
              borderRadius: "999px",
              backgroundColor: "#f1deb8",
              color: "#6f6143",
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {t('privacy.badge')}
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: "32px", md: "64px" },
              lineHeight: { xs: "40px", md: "72px" },
              letterSpacing: "-0.02em",
              color: "#006071",
              mb: 3,
            }}
          >
            {t('privacy.title')}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "20px",
              lineHeight: "32px",
              color: "#3e484c",
              maxWidth: "672px",
              mx: "auto",
              opacity: 0.8,
            }}
          >
            {t('privacy.subtitle')}
          </Typography>
        </Box>

        {/* Content Grid */}
        <Grid container spacing={6} alignItems="flex-start">
          {/* Side Navigation */}
          <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              component="aside"
              sx={{
                position: "sticky",
                top: 128,
                borderLeft: "2px solid #f0ede9",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.id}
                  component="a"
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  sx={{
                    pl: 2,
                    py: 0.5,
                    borderLeft: "2px solid",
                    marginLeft: "-2px",
                    borderColor: activeSection === item.id ? "#006071" : "transparent",
                    color: activeSection === item.id ? "#006071" : "#3e484c",
                    fontWeight: activeSection === item.id ? 700 : 400,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    "&:hover": { color: "#006071" },
                  }}
                >
                  {t(`privacy.nav.${item.key}`)}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Policy Body */}
          <Grid item xs={12} md={9}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Introduction Image */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "300px",
                  mb: 4,
                }}
              >
                <Box
                  component="img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSkRGo7mfruEPOAM0YxZe9i2sjlyjn5VI4SDLhOtJ63zeePzo3isu1EHj4X9ls-obnJ3CaylVUXW57IVX4hO66EVPWD9Rs6VuaF0YlN4uMYrxVfGNcMfCkJx9j88ci_cXpJyt-25ytpMGdgOoDeB2xRRXoBn0q9573KUPE5Bn7p1zYGqv_oMdZAC8S1iBQsYMATXdHEo7RZCUUJtiEXd3z23dG5xhsvGXUVlgjH6WKjLUddadHSiFMr3Xug5TPSH7uWHHBa4wmaVk"
                  alt="Mediterranean sea water"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0, 96, 113, 0.4), transparent)",
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    fontFamily: '"Anybody", sans-serif',
                    fontSize: "24px",
                    color: "#ffffff",
                    fontWeight: 300,
                  }}
                >
                  Sailing with Integrity
                </Typography>
              </Box>

              {/* Section 1: Data Collection */}
              <Box id="data-collection" component="section" sx={{ borderLeft: "1px solid rgba(0, 96, 113, 0.1)", pl: { xs: 2, md: 4 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: "32px",
                    color: "#006071",
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <AnchorIcon sx={{ color: "#0b7a8f" }} /> {t('privacy.s1.title')}
                </Typography>
                <Typography sx={{ color: "#3e484c", lineHeight: "28px", mb: 2 }}>
                  {t('privacy.s1.p1')}
                </Typography>
                <Typography sx={{ color: "#3e484c", lineHeight: "28px", mb: 3 }}>
                  {t('privacy.s1.p2')}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                    <CheckCircleIcon sx={{ color: "#006071", fontSize: 20, mt: 0.5 }} />
                    <Typography sx={{ color: "#3e484c" }}>
                      {t('privacy.s1.check1')}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                    <CheckCircleIcon sx={{ color: "#006071", fontSize: 20, mt: 0.5 }} />
                    <Typography sx={{ color: "#3e484c" }}>
                      {t('privacy.s1.check2')}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Section 2: Use of Information */}
              <Box id="use-info" component="section" sx={{ borderLeft: "1px solid rgba(0, 96, 113, 0.1)", pl: { xs: 2, md: 4 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: "32px",
                    color: "#006071",
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <SailingIcon sx={{ color: "#0b7a8f" }} /> {t('privacy.s2.title')}
                </Typography>
                <Typography sx={{ color: "#3e484c", lineHeight: "28px", mb: 4 }}>
                  {t('privacy.s2.subtitle')}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        p: 3,
                        backgroundColor: "#f6f3ee",
                        borderRadius: "8px",
                        border: "1px solid rgba(190, 200, 204, 0.3)",
                      }}
                    >
                      <Typography sx={{ fontWeight: 700, color: "#006071", mb: 1 }}>
                        {t('privacy.s2.c1.title')}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#3e484c" }}>
                        {t('privacy.s2.c1.desc')}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        p: 3,
                        backgroundColor: "#f6f3ee",
                        borderRadius: "8px",
                        border: "1px solid rgba(190, 200, 204, 0.3)",
                      }}
                    >
                      <Typography sx={{ fontWeight: 700, color: "#006071", mb: 1 }}>
                        {t('privacy.s2.c2.title')}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#3e484c" }}>
                        {t('privacy.s2.c2.desc')}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Section 3: Cookies */}
              <Box
                id="cookies"
                component="section"
                sx={{
                  backgroundColor: "rgba(0, 96, 113, 0.05)",
                  p: { xs: 4, md: 5 },
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 4,
                  alignItems: "center",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      fontSize: "32px",
                      color: "#006071",
                      mb: 2,
                    }}
                  >
                    {t('privacy.s3.title')}
                  </Typography>
                  <Typography sx={{ color: "#3e484c", lineHeight: "28px", mb: 3 }}>
                    {t('privacy.s3.p1')}
                  </Typography>
                  <Typography
                    component="button"
                    sx={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      fontFamily: "inherit",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#006071",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                      cursor: "pointer",
                      transition: "color 0.2s",
                      "&:hover": { color: "#0b7a8f" },
                    }}
                  >
                    {t('privacy.s3.btn')}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 128,
                    height: 128,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    flexShrink: 0,
                  }}
                >
                  <CookieIcon sx={{ fontSize: 60, color: "#006071" }} />
                </Box>
              </Box>

              {/* Section 4: Third Party Services */}
              <Box id="third-party" component="section" sx={{ borderLeft: "1px solid rgba(0, 96, 113, 0.1)", pl: { xs: 2, md: 4 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: "32px",
                    color: "#006071",
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <GroupsIcon sx={{ color: "#0b7a8f" }} /> {t('privacy.s4.title')}
                </Typography>
                <Typography sx={{ color: "#3e484c", lineHeight: "28px", mb: 2 }}>
                  {t('privacy.s4.p1')}
                </Typography>
                <Typography sx={{ color: "#3e484c", lineHeight: "28px" }}>
                  {t('privacy.s4.p2')}
                </Typography>
              </Box>

              {/* Final CTA */}
              <Box
                sx={{
                  mt: 6,
                  p: { xs: 4, md: 6 },
                  backgroundColor: "#e5e2dd",
                  borderRadius: "24px",
                  textAlign: "center",
                }}
              >
                <MailIcon sx={{ fontSize: 40, color: "#006071", mb: 2 }} />
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: "32px",
                    color: "#1c1c19",
                    mb: 2,
                  }}
                >
                  {t('privacy.cta.title')}
                </Typography>
                <Typography sx={{ color: "#3e484c", mb: 4, maxWidth: "450px", mx: "auto" }}>
                  {t('privacy.cta.p1')}
                </Typography>
                <Typography
                  component="a"
                  href="mailto:privacy@fethiyeazure.com"
                  sx={{
                    display: "inline-block",
                    px: 5,
                    py: 2,
                    backgroundColor: "#006071",
                    color: "#ffffff",
                    borderRadius: "999px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {t('privacy.cta.btn')}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Wave Footer Divider */}
      <Box sx={{ width: "100%", overflow: "hidden", lineHeight: 0, transform: "rotate(180deg)" }}>
        <svg
          style={{ position: "relative", display: "block", width: "100%", height: "60px" }}
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f0ede9"
            opacity="0.5"
          />
        </svg>
      </Box>

      <Footer />
    </>
  );
}
