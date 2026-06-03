import { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import KayakingIcon from "@mui/icons-material/Kayaking";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LuggageIcon from "@mui/icons-material/Luggage";
import AnchorIcon from "@mui/icons-material/Anchor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

/* ─── Scroll reveal wrapper ─── */
function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `all 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}

/* ─── Glass card ─── */
function GlassCard({ children, sx = {}, ...props }) {
  return (
    <Box
      sx={{
        background: "rgba(250, 247, 242, 0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03)",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

/* ─── Data ─── */
const HERO_IMG = "/route hero.webp";

const bays = [
  {
    key: "oludeniz",
    image: "/oludeniz.webp",
    reverse: false,
    extras: "tips",
    tips: [
      {
        icon: <ScheduleIcon />,
        keyLabel: "tip1_label",
        keyText: "tip1_text",
      },
      {
        icon: <KayakingIcon />,
        keyLabel: "tip2_label",
        keyText: "tip2_text",
      },
    ],
  },
  {
    key: "butterfly",
    image: "/kelebekler.webp",
    reverse: true,
    extras: "quote",
  },
  {
    key: "gemile",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJgD2IWTNgUlSGOn7ZA-4Qllw6PrJ9x0kJUfBUvtQ7hSDVGkxc6A5YM-CAw3gwviw9D0VXmMk4O1L2zpHhWA1b0VmcTnW_bSjWCpLfH-URzUGwyqE8yWpIPeRo-GgLxahvklYyXgcVGDVEm6etyJFp8GHFzwTuUCf-x7Vw0RG0thlvTh5qEIGaOTA_hI9JjABfC0r3ngfkNoJiZyioXwpuezHYRlPyOPaMaeV8Ku7B-Sizfo8sq_VraDFqR35-AEoYNXNE9OyXssE",
    reverse: false,
    extras: "checklist",
    checklist: ["check1", "check2"],
  },
];

const travelTips = [
  {
    icon: <WbSunnyIcon sx={{ fontSize: 30, color: "#0B4A5C" }} />,
    key: "t1",
  },
  {
    icon: <LuggageIcon sx={{ fontSize: 30, color: "#0B4A5C" }} />,
    key: "t2",
  },
  {
    icon: <AnchorIcon sx={{ fontSize: 30, color: "#0B4A5C" }} />,
    key: "t3",
  },
];

export default function BayGuidePage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO titleKey="seo.bayguide.title" descKey="seo.bayguide.desc" canonical="/bay-guide" />
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <Box
        component="header"
        sx={{
          position: "relative",
          height: { xs: "500px", md: "716px" },
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Box
          component="img"
          src={HERO_IMG}
          alt="Turquoise coast of Fethiye"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(252,249,244,0.1) 0%, rgba(252,249,244,0.5) 80%, #fcf9f4 100%)",
            zIndex: 1,
          }}
        />
        {/* Text */}
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            px: 3,
            maxWidth: "750px",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Anybody", sans-serif',
              fontWeight: 300,
              fontSize: "24px",
              lineHeight: "24px",
              color: "#0b7a8f",
              mb: 2,
            }}
          >
            {t("bayguide.hero.overline")}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: "36px", md: "64px" },
              lineHeight: { xs: "44px", md: "72px" },
              letterSpacing: "-0.02em",
              color: "#1c1c19",
              mb: 3,
            }}
          >
            {t("bayguide.hero.title")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: "32px",
              color: "#3e484c",
              maxWidth: "640px",
              mx: "auto",
            }}
          >
            {t("bayguide.hero.subtitle")}
          </Typography>
        </Box>
      </Box>

      <Box
        component="main"
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 2, md: "80px" },
          py: 6,
        }}
      >
        {/* ═══════ INTRO BENTO GRID ═══════ */}
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={12} md={8}>
            <ScrollReveal>
              <GlassCard
                sx={{
                  borderRadius: "16px",
                  p: { xs: 4, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
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
                    mb: 3,
                  }}
                >
                  {t("bayguide.intro.title")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    lineHeight: "32px",
                    color: "#3e484c",
                  }}
                >
                  {t("bayguide.intro.desc")}
                </Typography>
              </GlassCard>
            </ScrollReveal>
          </Grid>
        </Grid>

        {/* ═══════ BAY LOCATIONS ═══════ */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 10, md: 16 },
          }}
        >
          {/* Bays Grid */}
          <Stack spacing={{ xs: 8, md: 12 }}>
            {bays.map((bay, index) => (
              <Stack key={index}>
                <Stack
                  spacing={{ xs: 4, md: 8 }}
                  alignItems="center"
                  direction={{
                    xs: "row",
                    md: bay.reverse ? "row-reverse" : "row",
                  }}
                >
                  {/* Image side */}
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <ScrollReveal delay={index * 100}>
                      <Box
                        sx={{
                          position: "relative",
                          borderRadius: "24px",
                          overflow: "hidden",
                          height: { xs: 300, md: 450 },
                          width: "100%",
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                          "&:hover img": {
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={bay.image}
                          alt={t(`bayguide.bays.${bay.key}.title`)}
                          loading="lazy"
                          decoding="async"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition:
                              "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
                          }}
                        />
                      </Box>
                    </ScrollReveal>
                  </Box>
                  {/* Text side */}
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <ScrollReveal delay={index * 100 + 200}>
                      <Box
                        sx={{
                          pl: bay.reverse ? 0 : { md: 4 },
                          pr: bay.reverse ? { md: 4 } : 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Anybody", sans-serif',
                            fontWeight: 300,
                            fontSize: "14px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#0b7a8f",
                            mb: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              width: "30px",
                              height: "1px",
                              backgroundColor: "#0b7a8f",
                            }}
                          />
                          {t(`bayguide.bays.${bay.key}.label`)}
                        </Typography>
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 700,
                            fontSize: { xs: "32px", md: "48px" },
                            color: "#0B4A5C",
                            mb: 3,
                          }}
                        >
                          {t(`bayguide.bays.${bay.key}.title`)}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "32px",
                            color: "#3e484c",
                            mb: 4,
                          }}
                        >
                          {t(`bayguide.bays.${bay.key}.description`)}
                        </Typography>

                        {/* Extras rendering */}
                        {bay.extras === "tips" && (
                          <Box sx={{ display: "flex", gap: 4 }}>
                            {bay.tips.map((tip, i) => (
                              <Box key={i} sx={{ flex: 1 }}>
                                <Box sx={{ color: "#0B4A5C", mb: 1 }}>
                                  {tip.icon}
                                </Box>
                                <Typography
                                  sx={{
                                    fontFamily: '"Anybody", sans-serif',
                                    fontWeight: 700,
                                    fontSize: "12px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    color: "#6b5d3f",
                                    mb: 0.5,
                                  }}
                                >
                                  {t(
                                    `bayguide.bays.${bay.key}.${tip.keyLabel}`,
                                  )}
                                </Typography>
                                <Typography
                                  sx={{ fontSize: "14px", color: "#3e484c" }}
                                >
                                  {t(`bayguide.bays.${bay.key}.${tip.keyText}`)}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        )}

                        {bay.extras === "quote" && (
                          <Box
                            sx={{
                              borderLeft: "2px solid #0B4A5C",
                              pl: 3,
                              py: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: '"Playfair Display", serif',
                                fontStyle: "italic",
                                fontSize: "20px",
                                color: "#1c1c19",
                              }}
                            >
                              {t(`bayguide.bays.${bay.key}.quote`)}
                            </Typography>
                          </Box>
                        )}

                        {bay.extras === "checklist" && (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 1.5,
                            }}
                          >
                            {bay.checklist.map((itemKey, i) => (
                              <Box
                                key={i}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1.5,
                                }}
                              >
                                <CheckCircleIcon
                                  sx={{ color: "#6b5d3f", fontSize: 20 }}
                                />
                                <Typography sx={{ color: "#3e484c" }}>
                                  {t(`bayguide.bays.${bay.key}.${itemKey}`)}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </ScrollReveal>
                  </Box>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* ═══════ TRAVEL TIPS ═══════ */}
        <Box
          sx={{
            mt: 20,
            mb: 10,
            backgroundColor: "#f6f3ee",
            borderRadius: "32px",
            p: { xs: 4, md: 6 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <ScrollReveal>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: { xs: "32px", md: "48px" },
                  lineHeight: { xs: "40px", md: "56px" },
                  color: "#1c1c19",
                }}
              >
                Preparation for Paradise
              </Typography>
              <Box
                sx={{
                  width: 96,
                  height: 4,
                  backgroundColor: "#7dd3ea",
                  mx: "auto",
                  mt: 2,
                  borderRadius: 2,
                }}
              />
            </Box>

            <Stack spacing={4}>
              {travelTips.map((tip, i) => (
                <Stack>
                  <ScrollReveal delay={i * 100}>
                    <Box
                      sx={{
                        width: "100%",
                        background: "#ffffff",
                        borderRadius: "16px",
                        p: 4,
                        height: "100%",
                        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
                        border: "1px solid #f6f3ee",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "12px",
                          backgroundColor: "#f4e0bb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                        }}
                      >
                        {tip.icon}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          fontSize: "24px",
                          color: "#1c1c19",
                          mb: 2,
                        }}
                      >
                        {t(`bayguide.tips.${tip.key}.title`)}
                      </Typography>
                      <Typography sx={{ color: "#3e484c", lineHeight: "28px" }}>
                        {t(`bayguide.tips.${tip.key}.text`)}
                      </Typography>
                    </Box>
                  </ScrollReveal>
                </Stack>
              ))}
            </Stack>
          </ScrollReveal>
        </Box>

        {/* ═══════ CTA ═══════ */}
        <ScrollReveal>
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: "32px", md: "48px" },
                lineHeight: { xs: "40px", md: "56px" },
                color: "#1c1c19",
                mb: 4,
              }}
            >
              Ready to chart your own course?
            </Typography>
            <Button
              variant="contained"
              href="#booking"
              sx={{
                backgroundColor: "#0B4A5C",
                color: "#fff",
                px: 6,
                py: 2.5,
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                boxShadow: "0 20px 40px rgba(0, 96, 113, 0.25)",
                "&:hover": {
                  backgroundColor: "#083A4A",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Customize Your Itinerary
            </Button>
          </Box>
        </ScrollReveal>
      </Box>

      <Footer />
    </>
  );
}
