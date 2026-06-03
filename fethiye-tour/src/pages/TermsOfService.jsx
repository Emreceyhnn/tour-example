import { useState, useEffect } from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import CancelIcon from "@mui/icons-material/Cancel";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import GavelIcon from "@mui/icons-material/Gavel";
import AnchorIcon from "@mui/icons-material/Anchor";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import BalanceIcon from "@mui/icons-material/Balance";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SailingIcon from "@mui/icons-material/Sailing";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

/* ─── Scroll-spy sidebar link ─── */
function SidebarLink({ href, icon, label, active }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: active ? "#0B4A5C" : "#3e484c",
        fontWeight: active ? 700 : 400,
        fontSize: "16px",
        textDecoration: "none",
        transition: "color 0.3s, transform 0.2s",
        "&:hover": { color: "#0B4A5C", transform: "translateX(4px)" },
      }}
    >
      {icon}
      {label}
    </Box>
  );
}

/* ─── Glass card wrapper ─── */
function GlassCard({ children, sx = {}, ...props }) {
  return (
    <Box
      sx={{
        background: "rgba(250, 247, 242, 0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

/* ─── Section icon badge ─── */
function SectionBadge({ icon, bgColor }) {
  return (
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        flexShrink: 0,
      }}
    >
      {icon}
    </Box>
  );
}

export default function TermsOfService() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("booking");

  /* scroll-spy */
  useEffect(() => {
    const handleScroll = () => {
      const ids = ["booking", "cancellation", "safety", "liability"];
      let current = "booking";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEO titleKey="seo.terms.title" descKey="seo.terms.desc" canonical="/terms" />
      <Navbar />

      <Box component="main" sx={{ pt: "160px", pb: 10, minHeight: "100vh" }}>
        {/* ─── Hero Header ─── */}
        <Box sx={{ textAlign: "center", mb: 10, px: { xs: 2, md: "80px" } }}>
          <Typography
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0B4A5C",
              mb: 2,
            }}
          >
            {t("terms.badge")}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: "42px", md: "64px" },
              lineHeight: { xs: "50px", md: "72px" },
              letterSpacing: "-0.02em",
              color: "#0b7a8f",
              mb: 3,
              textShadow: "0 0 20px rgba(0, 96, 113, 0.1)",
            }}
          >
            {t("terms.title")}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Anybody", sans-serif',
              fontWeight: 300,
              fontSize: "24px",
              lineHeight: "24px",
              color: "#6b5d3f",
              maxWidth: "640px",
              mx: "auto",
            }}
          >
            {t("terms.subtitle")}
          </Typography>
        </Box>

        {/* ─── Wave Divider ─── */}
        <Box sx={{ width: "100%", height: 48, opacity: 0.3, mb: 6 }}>
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              d="M0 64L48 58.7C96 53 192 43 288 48C384 53 480 75 576 80C672 85 768 75 864 64C960 53 1056 43 1152 42.7C1248 43 1344 53 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V64Z"
              fill="#0B4A5C"
            />
          </svg>
        </Box>

        {/* ─── Content Grid ─── */}
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ maxWidth: "1280px", px: { xs: 2, md: "80px" } }}
        >
          <Grid container spacing={3}>
            {/* ─── Sidebar ─── */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <GlassCard
                sx={{
                  position: "sticky",
                  top: 100,
                  p: 4,
                  borderRadius: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#0B4A5C",
                    mb: 3,
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <SidebarLink
                    href="#booking"
                    icon={<AnchorIcon sx={{ fontSize: 18 }} />}
                    label={t("terms.nav.booking")}
                    active={activeSection === "booking"}
                  />
                  <SidebarLink
                    href="#cancellation"
                    icon={<EventBusyIcon sx={{ fontSize: 18 }} />}
                    label={t("terms.nav.cancellation")}
                    active={activeSection === "cancellation"}
                  />
                  <SidebarLink
                    href="#safety"
                    icon={<HealthAndSafetyIcon sx={{ fontSize: 18 }} />}
                    label={t("terms.nav.safety")}
                    active={activeSection === "safety"}
                  />
                  <SidebarLink
                    href="#liability"
                    icon={<BalanceIcon sx={{ fontSize: 18 }} />}
                    label={t("terms.nav.liability")}
                    active={activeSection === "liability"}
                  />
                </Box>
              </GlassCard>
            </Grid>

            {/* ─── Main Content ─── */}
            <Grid item xs={12} md={9}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* === Booking Conditions === */}
                <Box
                  component="article"
                  id="booking"
                  sx={{ scrollMarginTop: "128px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 4,
                    }}
                  >
                    <SectionBadge icon={<PaymentsIcon />} bgColor="#f1deb8" />
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        fontSize: "32px",
                        lineHeight: "40px",
                        color: "#0B4A5C",
                      }}
                    >
                      {t("terms.booking.title")}
                    </Typography>
                  </Box>
                  <GlassCard sx={{ p: { xs: 4, md: 5 }, borderRadius: "24px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        color: "#3e484c",
                        lineHeight: "28px",
                      }}
                    >
                      <Typography sx={{ fontSize: "16px", lineHeight: "28px" }}>
                        {t("terms.booking.p1")}
                      </Typography>
                      <Box
                        component="ul"
                        sx={{
                          pl: 3,
                          m: 0,
                          listStyleType: "disc",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.5,
                        }}
                      >
                        <li>
                          <Typography
                            sx={{ fontSize: "16px", lineHeight: "28px" }}
                          >
                            {t("terms.booking.points.0")}
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            sx={{ fontSize: "16px", lineHeight: "28px" }}
                          >
                            {t("terms.booking.points.1")}
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            sx={{ fontSize: "16px", lineHeight: "28px" }}
                          >
                            {t("terms.booking.points.2")}
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            sx={{ fontSize: "16px", lineHeight: "28px" }}
                          >
                            {t("terms.booking.points.3")}
                          </Typography>
                        </li>
                      </Box>
                    </Box>
                  </GlassCard>
                </Box>

                {/* === Cancellation Policy === */}
                <Box
                  component="article"
                  id="cancellation"
                  sx={{ scrollMarginTop: "128px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 4,
                    }}
                  >
                    <SectionBadge icon={<CancelIcon />} bgColor="#ffdad3" />
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        fontSize: "32px",
                        lineHeight: "40px",
                        color: "#0B4A5C",
                      }}
                    >
                      {t("terms.cancellation.title")}
                    </Typography>
                  </Box>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <GlassCard
                        sx={{
                          p: 4,
                          borderRadius: "16px",
                          borderLeft: "4px solid #0B4A5C",
                          height: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontWeight: 700,
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#6b5d3f",
                            mb: 1.5,
                          }}
                        >
                          {t("terms.cancellation.c1.title")}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: "#3e484c",
                          }}
                        >
                          {t("terms.cancellation.c1.desc")}
                        </Typography>
                      </GlassCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GlassCard
                        sx={{
                          p: 4,
                          borderRadius: "16px",
                          borderLeft: "4px solid #9f301a",
                          height: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontWeight: 700,
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#9f301a",
                            mb: 1.5,
                          }}
                        >
                          {t("terms.cancellation.c2.title")}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            lineHeight: "28px",
                            color: "#3e484c",
                          }}
                        >
                          {t("terms.cancellation.c2.desc")}
                        </Typography>
                      </GlassCard>
                    </Grid>
                  </Grid>
                </Box>

                {/* === Safety Regulations === */}
                <Box
                  component="article"
                  id="safety"
                  sx={{ scrollMarginTop: "128px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 4,
                    }}
                  >
                    <SectionBadge
                      icon={<HealthAndSafetyIcon />}
                      bgColor="#adecff"
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        fontSize: "32px",
                        lineHeight: "40px",
                        color: "#0B4A5C",
                      }}
                    >
                      {t("terms.safety.title")}
                    </Typography>
                  </Box>
                  <GlassCard
                    sx={{
                      p: { xs: 4, md: 5 },
                      borderRadius: "24px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 10,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          lineHeight: "32px",
                          fontStyle: "italic",
                          color: "#6b5d3f",
                        }}
                      >
                        {t("terms.safety.quote")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          lineHeight: "28px",
                          color: "#3e484c",
                        }}
                      >
                        {t("terms.safety.p1")}
                      </Typography>
                      <Grid container spacing={3}>
                        {[0, 1, 2, 3].map((i) => (
                          <Grid item xs={12} sm={6} key={i}>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 1.5,
                                alignItems: "flex-start",
                              }}
                            >
                              <CheckCircleIcon
                                sx={{ fontSize: 22, color: "#0B4A5C", mt: 0.3 }}
                              />
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  lineHeight: "24px",
                                  color: "#3e484c",
                                }}
                              >
                                {t(`terms.safety.points.${i}`)}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                    {/* Decorative sailing icon */}
                    <SailingIcon
                      sx={{
                        position: "absolute",
                        right: -40,
                        bottom: -40,
                        fontSize: 240,
                        color: "#0B4A5C",
                        opacity: 0.05,
                      }}
                    />
                  </GlassCard>
                </Box>

                {/* === Liability === */}
                <Box
                  component="article"
                  id="liability"
                  sx={{ scrollMarginTop: "128px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 4,
                    }}
                  >
                    <SectionBadge icon={<GavelIcon />} bgColor="#f0ede9" />
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 600,
                        fontSize: "32px",
                        lineHeight: "40px",
                        color: "#0B4A5C",
                      }}
                    >
                      {t("terms.liability.title")}
                    </Typography>
                  </Box>
                  <GlassCard sx={{ p: { xs: 4, md: 5 }, borderRadius: "24px" }}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          lineHeight: "28px",
                          color: "#3e484c",
                        }}
                      >
                        {t("terms.liability.p1")}
                      </Typography>
                      <Box
                        sx={{
                          p: 3,
                          backgroundColor: "#f6f3ee",
                          borderRadius: "12px",
                          borderLeft: "2px solid #6e797c",
                          fontStyle: "italic",
                          color: "#3e484c",
                          fontSize: "16px",
                          lineHeight: "28px",
                        }}
                      >
                        {t("terms.liability.quote")}
                      </Box>
                    </Box>
                  </GlassCard>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* ─── CTA Section ─── */}
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ maxWidth: "1280px", px: { xs: 2, md: "80px" }, mt: 16 }}
        >
          <GlassCard
            sx={{
              py: 8,
              px: { xs: 4, md: 8 },
              borderRadius: "32px",
              textAlign: "center",
              border: "1px solid rgba(0, 96, 113, 0.1)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "40px",
                color: "#0B4A5C",
                mb: 2,
              }}
            >
              {t("terms.cta.title")}
            </Typography>
            <Typography
              sx={{
                color: "#3e484c",
                fontSize: "16px",
                lineHeight: "24px",
                maxWidth: "560px",
                mx: "auto",
                mb: 4,
              }}
            >
              {t("terms.cta.p1")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                startIcon={<MailIcon />}
                sx={{
                  backgroundColor: "#0B4A5C",
                  color: "#fff",
                  px: 5,
                  py: 2,
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#083A4A",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {t("terms.cta.btn1")}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#0B4A5C",
                  color: "#0B4A5C",
                  px: 5,
                  py: 2,
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "rgba(0, 96, 113, 0.05)",
                    borderColor: "#0B4A5C",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {t("terms.cta.btn2")}
              </Button>
            </Box>
          </GlassCard>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
