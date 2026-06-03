import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const routeKeys = [
  { key: "oludeniz", image: "/oludeniz.webp" },
  { key: "butterfly", image: "/kelebekler.webp" },
  {
    key: "stnicholas",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw8DrYrEHpPbvw1d8VLehDDGRfG0w71bAINMmbh74Xw22Mew218-VEhAjhjt4-BfEO4WMMskdwoNviaglS4IiN5cc6f9HujJm0OWuwdC_w8JReiTQ8sNueeU00vuphekSFnX6SOYhikz-gGHAvYZjHl8LLukyx3YzGu55s79CgM0q-0OZnPNOxYPBx9JBFspTDsDs5S-qaK5JVyIQfgmkEyzqakvRKUHt9wh2pU0DEpBQdxE4x5tpZ-ZVZU9HEodnBe2sPrQRoWDI",
  },
  { key: "gemiler", image: "/darbogaz.webp" },
  { key: "saklikent", image: "/saklikent.webp" },
  {
    key: "gocek",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWDwDYnqPmxn_UiIhuV2_JXCbb70ufmvojVr8nOJx3mI9bAxaL7OpEcLhI0rwDdro_pgHno_eIzz_-WoKi1u4svLwcFEMWS2M_9CmTkHMjPM6dLshWLWdgFObi94dfOKneZ5ifGXAH7jsvwaCgT2sSOvhzXMHz4mi3MfDqWLmVB6mtC77eTfXX6jn_cDOpsHKEBLW7Jw2VpqtwsW62ElL9L_e6614xjnkbryVA2KoXZSCYx1YGRz67ZcfFkoalzJMIFz68Je0sAJg",
  },
];

function FadeInBox({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
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
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}

function RouteCard({ route, index }) {
  const { t } = useTranslation();
  return (
    <FadeInBox delay={index * 100}>
      <Box
        sx={{
          background: "rgba(250, 247, 242, 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow:
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 4px 30px rgba(0, 0, 0, 0.05)",
          borderRadius: "16px",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
          },
          "&:hover .route-image": {
            transform: "scale(1.1)",
          },
        }}
      >
        {/* Image */}
        <Box sx={{ height: 256, overflow: "hidden", position: "relative" }}>
          <Box
            component="img"
            className="route-image"
            src={route.image}
            alt={t(`routes.${route.key}.title`)}
            loading="lazy"
            decoding="async"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.7s ease",
            }}
          />
          {/* Gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            }}
          />
          {/* Title on image */}
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              color: "#fff",
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "40px",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {t(`routes.${route.key}.title`)}
          </Typography>
        </Box>

        {/* Description */}
        <Box sx={{ p: 3 }}>
          <Typography
            variant="body1"
            sx={{
              color: "#3e484c",
              fontSize: "16px",
              lineHeight: "24px",
              minHeight: "48px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {t(`routes.${route.key}.desc`)}
          </Typography>
        </Box>
      </Box>
    </FadeInBox>
  );
}

export default function RoutesSection() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="routes"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: "80px" },
        backgroundColor: "#fcf9f4",
      }}
    >
      <Container maxWidth="xl" disableGutters sx={{ maxWidth: "1440px" }}>
        {/* Section Header */}
        <FadeInBox>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: "32px", md: "48px" },
                lineHeight: { xs: "40px", md: "56px" },
                color: "#1c1c19",
                mb: 2,
              }}
            >
              {t("routes.title")}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#3e484c",
                fontSize: { xs: "16px", md: "20px" },
                lineHeight: "32px",
                maxWidth: "640px",
                mx: "auto",
              }}
            >
              {t("routes.subtitle")}
            </Typography>
          </Box>
        </FadeInBox>

        {/* Route Cards Grid */}
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {routeKeys.map((route, index) => (
            <Stack
              key={route.key}
              sx={{
                flexBasis: { xs: "100%", md: "calc(50% - 12px)", lg: "calc(33.33% - 16px)" },
                flexGrow: 1,
              }}
            >
              <RouteCard route={route} index={index} />
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
